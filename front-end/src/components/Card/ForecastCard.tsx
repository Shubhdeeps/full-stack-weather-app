import { wmoCodeAndSVG } from "../../assets/wmoCodeAndSVG";
import { WeatherDailyModel } from "../../models/WeatherDaily.model";
import { formatDate } from "../../utils/formatDate";
import BaseCardWrapper from "./BaseCardWrapper";
type Props = {
  weatherForecast: WeatherDailyModel;
};
export default function ForecastCard({ weatherForecast }: Props) {
  const svgWeatherIcon =
    wmoCodeAndSVG["true"][weatherForecast.weather_code as 2];
  return (
    <BaseCardWrapper className="h-full w-[300px]" pattern="patternCyan">
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <img src={svgWeatherIcon} width={90} height={90} />
          <div className="flex flex-col items-end">
            <div className="text-pattern-a font-medium">
              {weatherForecast.weather_name}
            </div>
            <div>{formatDate(weatherForecast.time.unix)}</div>
          </div>
        </div>
        <div className="text-xl ps-2">
          <div>
            {weatherForecast.temperature_2m_max.in_c}° /{" "}
            {weatherForecast.temperature_2m_min.in_c}°
          </div>
          <div className="text-gray-400">
            Feels like {weatherForecast.apparent_temperature_max.in_c}°
          </div>
        </div>
      </div>
    </BaseCardWrapper>
  );
}
