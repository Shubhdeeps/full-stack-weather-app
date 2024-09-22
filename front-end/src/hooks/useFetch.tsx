import { useAtom } from "jotai";
import {
  currentGeolocationAtom,
  currentWeatherAtom,
  dailyWeatherAtom,
  hourlyWeatherAtom,
} from "../utils/store";
import { useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080";
export function useFetch() {
  const [currentWeather, setCurrentWeather] = useAtom(currentWeatherAtom);
  const [hourlyWeather, setHourlyWeather] = useAtom(hourlyWeatherAtom);
  const [geoCode] = useAtom(currentGeolocationAtom);
  const [dailyWeather, setDailyWeather] = useAtom(dailyWeatherAtom);

  useEffect(() => {
    if (geoCode) {
      // Geo code change -> fetch fresh data
      const requestBodyBase = {
        lat: geoCode.latitude,
        lon: geoCode.longitude,
      };

      const today = Math.floor(Date.now() / 1000);
      const promise1 = axios.post(`${baseURL}/current_weather`, {
        ...requestBodyBase,
      });

      const promise2 = axios.post(`${baseURL}/daily`, {
        ...requestBodyBase,
        no_of_days: 7,
      });
      const promise3 = axios.post(`${baseURL}/hourly`, {
        ...requestBodyBase,
        start_date: today,
        end_date: today + 10,
      });
      (async () => {
        const [resp1, resp2, resp3] = await Promise.all([
          promise1,
          promise2,
          promise3,
        ]);
        setCurrentWeather(resp1.data);
        setDailyWeather(resp2.data);
        setHourlyWeather(resp3.data);
      })();
    }
  }, [
    geoCode,
    geoCode?.id,
    setCurrentWeather,
    setDailyWeather,
    setHourlyWeather,
  ]);

  return {
    geoCode,
    currentWeather,
    hourlyWeather,
    dailyWeather,
  } as const;
}
