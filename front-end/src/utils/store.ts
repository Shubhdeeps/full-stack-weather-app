import { atom } from "jotai";
import { WeatherDailyModel } from "../models/WeatherDaily.model";
import { WeatherHourlyModel } from "../models/WeatherHourly..model";
import { WeatherCurrentModel } from "../models/WeatherCurrent.model";
import { GeoCodeModel } from "../models/GeoCoding.model";

export const dailyWeatherAtom = atom<WeatherDailyModel[]>([]);
export const hourlyWeatherAtom = atom<WeatherHourlyModel[]>([]);
export const currentWeatherAtom = atom<WeatherCurrentModel>();
export const currentGeolocationAtom = atom<GeoCodeModel>({
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
});
