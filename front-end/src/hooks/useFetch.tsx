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
  const [geoCode, setGeoCode] = useAtom(currentGeolocationAtom);
  const [dailyWeather, setDailyWeather] = useAtom(dailyWeatherAtom);

  useEffect(() => {
    // (async () => {
    //   const data = await axios.get(`${baseURL}/`);
    //   console.log(data.data, data.status);
    // })();

    if (geoCode) {
      // Geo code change -> fetch fresh data
      const requestBodyBase = {
        lat: geoCode.latitude,
        lon: geoCode.longitude,
      };

      (async () => {
        const currentW = await axios.post(`${baseURL}/current_weather`, {
          ...requestBodyBase,
        });

        console.log(currentW.data);
      })();
    }
  }, [geoCode, geoCode?.id]);

  return [setGeoCode];
}
