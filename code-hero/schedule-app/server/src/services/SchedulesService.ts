import { getHours, isBefore, startOfHour } from "date-fns";

import { ISave } from "../interfaces/SchedulesInterface";
import { SchedulesRepository } from "../repositories/SchedulesRepository";

class SchedulesService {
  private schedulesRepository: SchedulesRepository;

  constructor() {
    this.schedulesRepository = new SchedulesRepository();
  }

  async save({ userId, name, phone, date }: ISave) {
    const dateFormatted = new Date(date);
    const hourStart = startOfHour(dateFormatted);
    if (isBefore(hourStart, new Date())) {
      throw new Error("Invalid past date");
    }
    const hour = getHours(hourStart);
    console.log(hour);
    if (hour <= 9 || hour >= 19) {
      throw new Error("Invalid hour range");
    }
    const findScheduleAvailable = await this.schedulesRepository.findByDate(
      hourStart
    );
    if (findScheduleAvailable) throw new Error("Invalid schedule available");

    const schedule = await this.schedulesRepository.save({
      userId,
      name,
      phone,
      date: hourStart,
    });
    return schedule;
  }

  async findAllByDate(date: Date) {
    const schedules = await this.schedulesRepository.findAllByDate(date);
    return schedules;
  }

  async updateById(id: string, date: Date) {
    const dateFormatted = new Date(date);
    const hourStart = startOfHour(dateFormatted);
    if (isBefore(hourStart, new Date())) {
      throw new Error("Invalid past date");
    }
    const hour = getHours(hourStart);
    if (hour <= 9 || hour >= 19) {
      throw new Error("Invalid hour range");
    }
    const findScheduleAvailable = await this.schedulesRepository.findByDate(
      hourStart
    );
    if (findScheduleAvailable) throw new Error("Invalid schedule available");

    const schedule = await this.schedulesRepository.updateById(id, hourStart);
    return schedule;
  }
}

export { SchedulesService };
