import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";
import BaseCardWrapper from "./BaseCardWrapper";
import { wmoCodeAndSVG } from "../../assets/wmoCodeAndSVG";
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
  weather_name: "Partly cloudy",
  location: "Tallinn, Estonia",
  date_string: "22 June, 2024 5:01AM",
};
export default function CurrentWeatherCard() {
  const {
    is_day,
    weather_code,
    temperature_2m,
    weather_name,
    location,
    date_string,
  } = mockCurrent;
  const icon = wmoCodeAndSVG[`${is_day}`][weather_code as 2];
  return (
    <BaseCardWrapper className="w-[340px] h-[380px]" pattern="patternA">
      <img width={200} height={200} src={icon} />
      <div className="text-[54px] font-light">{temperature_2m}</div>
      <div className="">{weather_name}</div>

      <hr />
      <div>{location}</div>
      <div>{date_string}</div>
    </BaseCardWrapper>
  );
}
