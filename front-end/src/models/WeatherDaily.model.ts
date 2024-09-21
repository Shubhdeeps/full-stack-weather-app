import {
  ApparentTemperature,
  PrecipitationHours,
  Time,
  WindSpeed,
} from "./common.types";

export interface WeatherDailyModel {
  apparent_temperature_max: ApparentTemperature;
  apparent_temperature_min: ApparentTemperature;
  daylight_duration: string;
  precipitation_hours: PrecipitationHours;
  precipitation_probability_max: string;
  precipitation_sum: string;
  rain_sum: string;
  showers_sum: string;
  snowfall_sum: string;
  sunrise: Time;
  sunset: Time;
  sunshine_duration: string;
  temperature_2m_max: ApparentTemperature;
  temperature_2m_min: ApparentTemperature;
  time: Time;
  uv_index_clear_sky_max: number;
  uv_index_max: number;
  weather_code: string;
  wind_gusts_10m_max: WindSpeed;
  wind_speed_10m_max: WindSpeed;
}
