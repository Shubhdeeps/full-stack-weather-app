import { WeatherDailyModel } from "../models/WeatherDaily.model";

export class DailyWeatherState {
  private data = new Map<string, WeatherDailyModel>();
  private last_fetched_unix: number = 0;

  constructor() {
    const timeToday = Math.round(Date.now() / 1000);
  }
  fetchNextDay() {}
}
