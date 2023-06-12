import { Request, Response, NextFunction } from "express";
import { parseISO } from "date-fns";

import { SchedulesService } from "../services/SchedulesService";

class SchedulesController {
  private schedulesService: SchedulesService;

  constructor() {
    this.schedulesService = new SchedulesService();
  }

  async save(req: Request, res: Response, next: NextFunction) {
    const { name, phone, date } = req.body;
    const { user_id } = req;

    try {
      const schedule = await this.schedulesService.save({
        userId: user_id,
        name,
        phone,
        date,
      });
      return res.status(201).json(schedule);
    } catch (error) {
      next(error);
    }
  }

  async findAllByDate(req: Request, res: Response, next: NextFunction) {
    const { date } = req.query;
    const parsedDate = date ? parseISO(date.toString()) : new Date();
    try {
      const schedules = await this.schedulesService.findAllByDate(parsedDate);
      return res.status(200).json(schedules);
    } catch (error) {
      next(error);
    }
  }

  async updateById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { date } = req.body;
    try {
      const schedule = await this.schedulesService.updateById(id, date);
      return res.status(201).json(schedule);
    } catch (error) {
      next(error);
    }
  }

  removeByDate(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export { SchedulesController };
