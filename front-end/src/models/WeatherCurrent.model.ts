import { Temperature, Time } from "./common.types";

export interface WeatherCurrentModel {
  time: Time;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: Temperature;
  is_day: boolean;
  precipitation: string;
  rain: number;
  showers: number;
  snowfall: number;
  weather_code: {
    code: number;
    name: string;
  };
  cloud_cover: number;
  surface_pressure: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
}
