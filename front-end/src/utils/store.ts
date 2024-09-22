import { atom } from "jotai";
import { WeatherDailyModel } from "../models/WeatherDaily.model";
import { WeatherHourlyModel } from "../models/WeatherHourly..model";
import { WeatherCurrentModel } from "../models/WeatherCurrent.model";
import { GeoCodeModel } from "../models/GeoCoding.model";

export const dailyWeatherAtom = atom<WeatherDailyModel[]>([]);
export const hourlyWeatherAtom = atom<WeatherHourlyModel[]>([]);
export const currentWeatherAtom = atom<WeatherCurrentModel>();
export const currentGeolocationAtom = atom<GeoCodeModel>();
