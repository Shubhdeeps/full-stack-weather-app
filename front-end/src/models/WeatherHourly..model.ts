import { ApparentTemperature, Time, Visibility } from "./common.types";

export interface WeatherHourlyModel {
  apparent_temperature: ApparentTemperature;
  is_day: boolean;
  precipitation: string;
  precipitation_probability: number;
  relative_humidity_2m: number;
  time: Time;
  uv_index: number;
  visibility: Visibility;
  weather_code: number;
  weather_name: string;
}
