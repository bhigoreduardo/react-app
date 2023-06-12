import { Request, Response, NextFunction } from "express";
import { verify, sign } from "jsonwebtoken";

import { UsersService } from "../services/UsersService";

class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  async save(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;

    try {
      const user = await this.usersService.save({ name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req;
    const { name, password, newPassword } = req.body;
    // const image = req.file;
    // const images = req.files;

    try {
      const user = await this.usersService.update({
        user_id,
        name,
        password,
        newPassword,
        avatarUrl: req.file,
      });
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async auth(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const user = await this.usersService.auth(email, password);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    const { refreshToken } = req.body;

    try {
      if (!refreshToken) throw new Error("No refresh token provided");
      if (!process.env.ACCESS_KEY_TOKEN) throw new Error("No secret provided");

      const { sub } = verify(refreshToken, process.env.ACCESS_KEY_TOKEN);
      const token = sign({ sub }, process.env.ACCESS_KEY_TOKEN, {
        expiresIn: 60 * 15,
      });
      const newRefreshToken = sign({ sub }, process.env.ACCESS_KEY_TOKEN, {
        expiresIn: "7d",
      });

      return res.status(200).json({ token, refreshToken: newRefreshToken });
    } catch (error) {
      next(error);
    }
  }
}

export { UsersController };
