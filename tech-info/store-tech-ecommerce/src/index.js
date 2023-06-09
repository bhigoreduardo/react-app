import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { ValidationError } from "express-validation";
import colors from "colors";
dotenv.config();

import connectDB from "./config/db.js";
import routes from "./routes/index.js";

connectDB();
const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use("/", routes);
app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  if (err instanceof Error) {
    return res.status(400).json({ error: err?.message });
  }

  return res.status(500).json(err?.message);
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`.bgCyan.white);
});
