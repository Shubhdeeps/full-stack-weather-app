import { GeoCodeModel } from "../models/GeoCoding.model";
import { WeatherCurrentModel } from "../models/WeatherCurrent.model";
import { WeatherDailyModel } from "../models/WeatherDaily.model";
import { WeatherHourlyModel } from "../models/WeatherHourly..model";

export const mockGeoCode: GeoCodeModel[] = [
  {
    id: 39272,
    name: "Tall",
    latitude: 36.3071,
    longitude: 54.96096,
    elevation: 1220.0,
    feature_code: "PPL",
    country_code: "IR",
    admin1_id: 116401,
    timezone: "Asia/Tehran",
    country_id: 130758,
    country: "Iran",
  },
  {
    id: 8679756,
    name: "Tall",
    latitude: 27.16904,
    longitude: 61.78518,
    elevation: 1255.0,
    feature_code: "PPL",
    country_code: "IR",
    admin1_id: 1159456,
    timezone: "Asia/Tehran",
    country_id: 130758,
    country: "Iran",
  },
  {
    id: 588409,
    name: "Revel",
    latitude: 59.43696,
    longitude: 24.75353,
    elevation: 12.0,
    feature_code: "PPLC",
    country_code: "EE",
    timezone: "Europe/Tallinn",
    country_id: 453733,
    country: "Estonia",
  },
  {
    id: 4174715,
    name: "Tallahassee",
    latitude: 30.43826,
    longitude: -84.28073,
    elevation: 62.0,
    feature_code: "PPLA",
    country_code: "US",

    timezone: "America/New_York",
    country_id: 6252001,
    country: "United States",
  },
  {
    id: 3165963,
    name: "Talla",
    latitude: 43.60185,
    longitude: 11.78714,
    elevation: 348.0,
    feature_code: "PPLA3",
    country_code: "IT",
    timezone: "Europe/Rome",
    country_id: 3175395,
    country: "Italy",
  },
  {
    id: 4651,
    name: "Ţallū",
    latitude: 35.84583,
    longitude: 36.40833,
    elevation: 512.0,
    feature_code: "PPL",
    country_code: "SY",
    admin1_id: 169387,
    timezone: "Asia/Damascus",
    country_id: 163843,
    country: "Syria",
  },
  {
    id: 163771,
    name: "Tallā",
    latitude: 35.66076,
    longitude: 36.07012,
    elevation: 514.0,
    feature_code: "PPL",
    country_code: "SY",
    admin1_id: 173578,
    timezone: "Asia/Damascus",
    country_id: 163843,
    country: "Syria",
  },
  {
    id: 171873,
    name: "Ballū",
    latitude: 35.85373,
    longitude: 36.40636,
    elevation: 528.0,
    feature_code: "PPL",
    country_code: "SY",
    admin1_id: 169387,
    timezone: "Asia/Damascus",
    country_id: 163843,
    country: "Syria",
  },
];
export const mockCurrent: WeatherCurrentModel = {
  time: 17250003222,
  interval: 900,
  temperature_2m: 23.5,
  relative_humidity_2m: 33,
  apparent_temperature: 21.0,
  is_day: false,
  precipitation: 0.0,
  rain: 0.0,
  showers: 0.0,
  snowfall: 0.0,
  weather_code: 2,
  cloud_cover: 100,
  surface_pressure: 1017.5,
  wind_speed_10m: 10.8,
  wind_direction_10m: 105,
  weather_name: "Partly cloudy",
  location: "Tallinn, Estonia",
  date_string: "22 June, 2024 5:01AM",
  sunrise: {
    format: "unix",
    unix: 1726894054,
    event_in_days: -0.0,
    event_in_hours: -8.0,
    event_in_seconds: -32176,
  },
  sunset: {
    format: "unix",
    unix: 1726938167,
    event_in_days: 1.0,
    event_in_hours: 4.0,
    event_in_seconds: 11937,
  },
};

export const MockDataDaily: WeatherDailyModel[] = [
  {
    apparent_temperature_max: { in_c: 20.5, in_f: 68.9 },
    apparent_temperature_min: { in_c: 5.6, in_f: 42.1 },
    daylight_duration: "12:15:3",
    weather_code: 2,

    precipitation_hours: {
      unit: "AM",
      has_precipitation: false,
      hour_of_day: 0.0,
    },
    precipitation_probability_max: "0%",
    precipitation_sum: "0.0mm",
    rain_sum: "0.0mm",
    showers_sum: "0.0mm",
    snowfall_sum: "0.0mm",
    sunrise: {
      format: "unix",
      unix: 1726894054,
      event_in_days: -0.0,
      event_in_hours: -8.0,
      event_in_seconds: -32176,
    },
    sunset: {
      format: "unix",
      unix: 1726938167,
      event_in_days: 1.0,
      event_in_hours: 4.0,
      event_in_seconds: 11937,
    },
    sunshine_duration: "10:24:2",
    temperature_2m_max: { in_c: 23.4, in_f: 74.1 },
    temperature_2m_min: { in_c: 7.3, in_f: 45.1 },
    time: {
      format: "unix",
      unix: 1726876800,
      event_in_days: -0.0,
      event_in_hours: -13.0,
      event_in_seconds: -49430,
    },
    uv_index_clear_sky_max: 4.1,
    uv_index_max: 3.9,
    weather_name: "Overcast",
    wind_gusts_10m_max: { km_per_h: 27.4, m_per_s: 7.61 },
    wind_speed_10m_max: { km_per_h: 15.8, m_per_s: 4.39 },
  },
  {
    weather_code: 2,

    apparent_temperature_max: { in_c: 22.5, in_f: 72.5 },
    apparent_temperature_min: { in_c: 7.5, in_f: 45.5 },
    daylight_duration: "12:10:58",
    precipitation_hours: {
      unit: "AM",
      has_precipitation: false,
      hour_of_day: 0.0,
    },
    precipitation_probability_max: "0%",
    precipitation_sum: "0.0mm",
    rain_sum: "0.0mm",
    showers_sum: "0.0mm",
    snowfall_sum: "0.0mm",
    sunrise: {
      format: "unix",
      unix: 1726980555,
      event_in_days: 1.0,
      event_in_hours: 16.0,
      event_in_seconds: 54325,
    },
    sunset: {
      format: "unix",
      unix: 1727024423,
      event_in_days: 2.0,
      event_in_hours: 28.0,
      event_in_seconds: 98193,
    },
    sunshine_duration: "10:30:49",
    temperature_2m_max: { in_c: 23.9, in_f: 75.0 },
    temperature_2m_min: { in_c: 8.6, in_f: 47.5 },
    time: {
      format: "unix",
      unix: 1726963200,
      event_in_days: 1.0,
      event_in_hours: 11.0,
      event_in_seconds: 36970,
    },
    uv_index_clear_sky_max: 4.1,
    uv_index_max: 4.1,
    weather_name: "Partly Cloudy",
    wind_gusts_10m_max: { km_per_h: 24.5, m_per_s: 6.81 },
    wind_speed_10m_max: { km_per_h: 13.0, m_per_s: 3.61 },
  },
];

export const MockDataHourly: WeatherHourlyModel[] = [
  {
    weather_code: 2,

    apparent_temperature: { in_c: 8.8, in_f: 47.8 },
    is_day: false,
    precipitation: "0.0mm",
    precipitation_probability: 0,
    relative_humidity_2m: 77,
    time: {
      format: "unix",
      unix: 1726876800,
      event_in_days: -0.0,
      event_in_hours: -13.0,
      event_in_seconds: -49484,
    },
    uv_index: 0.0,
    visibility: { distance_in_km: 42.54, distance_in_meter: 42540.0 },
    weather_name: "Clear Sky",
  },
  {
    weather_code: 2,

    apparent_temperature: { in_c: 8.2, in_f: 46.8 },
    is_day: false,
    precipitation: "0.0mm",
    precipitation_probability: 2,
    relative_humidity_2m: 79,
    time: {
      format: "unix",
      unix: 1726880400,
      event_in_days: -0.0,
      event_in_hours: -12.0,
      event_in_seconds: -45884,
    },
    uv_index: 0.0,
    visibility: { distance_in_km: 39.3, distance_in_meter: 3.93e4 },
    weather_name: "Clear Sky",
  },
  {
    weather_code: 2,

    apparent_temperature: { in_c: 7.7, in_f: 45.9 },
    is_day: false,
    precipitation: "0.0mm",
    precipitation_probability: 15,
    relative_humidity_2m: 81,
    time: {
      format: "unix",
      unix: 1726884000,
      event_in_days: -0.0,
      event_in_hours: -11.0,
      event_in_seconds: -42284,
    },
    uv_index: 0.0,
    visibility: { distance_in_km: 35.5, distance_in_meter: 3.55e4 },
    weather_name: "Clear Sky",
  },
];
