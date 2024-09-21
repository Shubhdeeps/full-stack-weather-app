import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";
import BaseCardWrapper from "./BaseCardWrapper";
import svg1 from "../../assets/svg/clear-day.svg";
type Props = WeatherCurrentModel;

const mockCurrent: Props = {
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
};
export default function CurrentWeatherCard() {
  return (
    <BaseCardWrapper className="w-[340px] h-[480px]" pattern="patternA">
      <img width={200} height={200} src={svg1} />
    </BaseCardWrapper>
  );
}
