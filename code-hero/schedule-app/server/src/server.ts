import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

import { UsersRoutes } from "./routes/users.routes";
import { SchedulesRoutes } from "./routes/schedules.routes";

const app: Application = express();

const usersRoutes = new UsersRoutes().getRoutes();
const schedulesRoutes = new SchedulesRoutes().getRoutes();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/schedules", schedulesRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal server error" });
});

app.listen(3001, () => {
  console.log("Server running");
});
