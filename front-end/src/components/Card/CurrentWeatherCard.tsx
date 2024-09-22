import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";
import BaseCardWrapper from "./BaseCardWrapper";
import { wmoCodeAndSVG } from "../../assets/wmoCodeAndSVG";
import { formatDate, formatTimeFromUnix } from "../../utils/formatDate";
type Props = {
  data: WeatherCurrentModel;
  city: string;
  country: string;
};

export default function CurrentWeatherCard({ data, city, country }: Props) {
  const { is_day, weather_code, temperature_2m } = data;
  const icon = wmoCodeAndSVG[`${is_day}`][weather_code.code as 2];
  return (
    <BaseCardWrapper className="w-[340px] h-[380px]" pattern="patternA">
      <img width={200} height={200} src={icon} />
      <div className="text-[54px] font-light">{temperature_2m}</div>
      <div className="">{weather_code.name}</div>

      <div>
        {city}, {country}
      </div>
      <div>
        {formatDate(data.time.unix)}
        <span className="font-semibold">
          {" "}
          {formatTimeFromUnix(data.time.unix)}
        </span>
      </div>
    </BaseCardWrapper>
  );
}
