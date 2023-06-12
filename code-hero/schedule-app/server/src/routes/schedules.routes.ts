import { Router } from "express";

import { SchedulesController } from "../controllers/SchedulesController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

class SchedulesRoutes {
  private router: Router;
  private schedulesController: SchedulesController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.schedulesController = new SchedulesController();
    this.authMiddleware = new AuthMiddleware();
  }

  getRoutes() {
    this.router.post(
      "/",
      this.authMiddleware.auth.bind(this.authMiddleware),
      this.schedulesController.save.bind(this.schedulesController)
    );
    this.router.get(
      "/",
      this.authMiddleware.auth.bind(this.authMiddleware),
      this.schedulesController.findAllByDate.bind(this.schedulesController)
    );
    this.router.put(
      "/:id",
      this.authMiddleware.auth.bind(this.authMiddleware),
      this.schedulesController.updateById.bind(this.schedulesController)
    );
    this.router.delete(
      "/",
      this.authMiddleware.auth.bind(this.authMiddleware),
      this.schedulesController.removeByDate.bind(this.schedulesController)
    );

    return this.router;
  }
}

export { SchedulesRoutes };
