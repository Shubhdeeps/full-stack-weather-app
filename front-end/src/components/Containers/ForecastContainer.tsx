import { WeatherDailyModel } from "../../models/WeatherDaily.model";
import BaseCardWrapper from "../Card/BaseCardWrapper";
import ForecastCard from "../Card/ForecastCard";

type Props = {
  forecastItems: WeatherDailyModel[];
};
export default function ForecastContainer({ forecastItems }: Props) {
  return (
    <BaseCardWrapper
      className="w-full h-full"
      pattern="patternC"
      patternClass="bg-pattern-b/50"
    >
      <div className="h-full overflow-x-auto scroll-bar">
        <div className="flex flex-row gap-3 h-full">
          {forecastItems.map((item) => {
            return <ForecastCard weatherForecast={item} />;
          })}
        </div>
      </div>
    </BaseCardWrapper>
  );
}
