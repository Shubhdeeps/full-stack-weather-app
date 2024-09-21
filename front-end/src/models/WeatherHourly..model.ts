import { ApparentTemperature, Time, Visibility } from "./common.types";

export interface WeatherHourlyModel {
  apparent_temperature: ApparentTemperature;
  is_day: boolean;
  precipitation: string;
  precipitation_probability: string;
  relative_humidity_2m: string;
  time: Time;
  uv_index: number;
  visibility: Visibility;
  weather_code: string;
}
