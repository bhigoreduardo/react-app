const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ws = require("ws");
const fs = require("fs");

const User = require("./src/models/user.model");
const Message = require("./src/models/message.model");

dotenv.config();
const app = express();
const jwtSecret = process.env.JWT_SECRET;
const bcryptSalt = bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT));

app.use(express.json());
app.use(cookieParser());
app.use(
  "/src/assets/uploads",
  express.static(__dirname + "/src/assets/uploads")
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );

  next();
});
app.disable("x-powered-by");
// app.use(cors({
//   credentials: true,
//   origin: process.env.CLIENT_URL,
// }))

async function getUserDataFromRequest(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.token;

    if (token) {
      jwt.verify(token, jwtSecret, {}, (err, userData) => {
        if (err) reject("Token malformated");

        resolve(userData);
      });
    } else {
      reject("No token provide");
    }
  });
}

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const createdUser = await User.create({
      username,
      password: hashedPassword,
    });
    jwt.sign(
      { userId: createdUser._id, username },
      jwtSecret,
      {},
      (err, token) => {
        if (err) return res.status(500).json(err);

        return res
          .cookie("token", token, { sameSite: "none", secure: true })
          .status(201)
          .json({ id: createdUser._id });
      }
    );
  } catch (err) {
    return res.status(500).json("Error");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundedUser = await User.findOne({ username });
    if (!foundedUser) return res.status(422).json("User not found");

    const isCheckPassword = bcrypt.compareSync(password, foundedUser.password);
    if (!isCheckPassword) return res.status(401).json("Credentials wrong");

    jwt.sign(
      { userId: foundedUser._id, username },
      jwtSecret,
      {},
      (err, token) => {
        if (err) return res.status(500).json(err);

        return res
          .cookie("token", token, { sameSite: "none", secure: true })
          .status(200)
          .json({ id: foundedUser._id });
      }
    );
  } catch (err) {
    return res.status(500).json("Error");
  }
});

app.get("/profile", (req, res) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json("No token provide");
  }

  jwt.verify(token, jwtSecret, {}, (err, userData) => {
    if (err) res.status(401).json("Token malformated");

    return res.json(userData);
  });
});

app.post("/loggout", (req, res) => {
  return res
    .cookie("token", "", { sameSite: "none", secure: true })
    .status(200)
    .json("Disconnected");
});

app.get("/people", async (req, res) => {
  const users = await User.find({}, { _id: 1, username: 1 });
  return res.status(200).json(users);
});

app.get("/messages/:userId", async (req, res) => {
  const { userId } = req.params;
  const userData = await getUserDataFromRequest(req);
  const ourUserId = userData.userId;

  const messages = await Message.find({
    sender: { $in: [userId, ourUserId] },
    recipient: { $in: [userId, ourUserId] },
  }).sort({ createdAt: 1 });

  res.status(200).json(messages);
});

mongoose.connect(process.env.MONGO_URL);
const server = app.listen(process.env.SERVER_PORT);

const wss = new ws.WebSocketServer({ server });
wss.on("connection", (connection, req) => {
  // Send message example
  // connection.send('hello ws')

  // Get user data from cookie
  const cookies = req.headers.cookie;
  if (cookies) {
    const tokenCookieString = cookies
      .split(";")
      .find((str) => str.startsWith("token="));
    if (tokenCookieString) {
      const token = tokenCookieString.split("=")[1];
      if (token) {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
          if (err) connection.send("Token malformated");

          const { userId, username } = userData;
          connection.userId = userId;
          connection.username = username;
        });
      }
    }
  }

  // Send all user logged in
  function notifyAboutOnlinePeople() {
    // console.log([...wss.clients].map(item => item.username))
    [...wss.clients].forEach((item) => {
      item.send(
        JSON.stringify({
          online: [...wss.clients].map((i) => ({
            userId: i.userId,
            username: i.username,
          })),
        })
      );
    });
  }

  // Listen user disconnected
  connection.isAlive = true;
  connection.timer = setInterval(() => {
    connection.ping();
    connection.deathTimer = setTimeout(() => {
      connection.isAlive = false;
      connection.terminate();
      clearInterval(connection.timer);
      notifyAboutOnlinePeople();
      // console.log('dead')
    }, 1000);
  }, 5000);
  connection.on("pong", () => {
    // console.log('pong')
    clearTimeout(connection.deathTimer);
  });

  // Send message between users
  connection.on("message", async (message) => {
    const messageData = JSON.parse(message.toString());
    const { recipient, text, file } = messageData;

    let filename = null;

    if (file) {
      // console.log(file)
      console.log("size: " + file.data.length);
      const parts = file.name.split(".");
      const ext = parts[parts.length - 1];
      filename = Date.now() + "." + ext;
      const path = __dirname + "/src/assets/uploads/" + filename;
      const bufferData = new Buffer(file.data.split(",")[1], "base64");

      fs.writeFile(path, bufferData, () => {
        console.log("saved file in: " + path);
      });
    }

    if (recipient && (text || file)) {
      const messageDoc = await Message.create({
        sender: connection.userId,
        recipient,
        text,
        file: filename,
      });

      [...wss.clients]
        .filter((item) => item.userId === recipient)
        .forEach((item) =>
          item.send(
            JSON.stringify({
              text,
              sender: connection.userId,
              recipient,
              file: filename,
              _id: messageDoc._id,
            })
          )
        );
    }
  });

  notifyAboutOnlinePeople();
});
