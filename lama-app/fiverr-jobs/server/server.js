import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
dotenv.config();

import routes from "./src/routes/index.js";

const app = express();
const CLIENT = process.env.CLIENT_PORT || 3000;
const SERVER = process.env.SERVER_PORT || 3001;
const MONGO = process.env.MONGO_URI;
const connect = async () => {
  try {
    await mongoose.connect(MONGO);
    console.log("Connected to Mongo");
  } catch (error) {
    console.log(error);
  }
};

app.disable("x-powered-by");
app.use(cors({ origin: `http://localhost:${CLIENT}`, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hellow" });
});
app.use("/", routes);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).json(errorMessage);
});

app.listen(process.env.SERVER_PORT || 3001, () => {
  connect();
  console.log(`Server Running on http://localhost:${SERVER}`);
});
