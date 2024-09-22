import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";
import BaseCardWrapper from "./BaseCardWrapper";
import { wmoCodeAndSVG } from "../../assets/wmoCodeAndSVG";
import { formatDate, formatTimeFromUnix } from "../../utils/formatDate";
type Props = WeatherCurrentModel;

export default function CurrentWeatherCard({ data }: { data: Props }) {
  const { is_day, weather_code, temperature_2m, weather_name, location } = data;
  const icon = wmoCodeAndSVG[`${is_day}`][weather_code as 2];
  return (
    <BaseCardWrapper className="w-[340px] h-[380px]" pattern="patternA">
      <img width={200} height={200} src={icon} />
      <div className="text-[54px] font-light">{temperature_2m}</div>
      <div className="">{weather_name}</div>

      <hr />
      <div>{location}</div>
      <div>
        {formatDate(data.time)}
        <span className="font-semibold"> {formatTimeFromUnix(data.time)}</span>
      </div>
    </BaseCardWrapper>
  );
}
