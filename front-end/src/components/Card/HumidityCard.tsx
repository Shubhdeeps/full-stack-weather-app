import { WeatherHourlyModel } from "../../models/WeatherHourly..model";
import Chart from "../Charts/Chart";
import UnitTypography from "../Typography/UnitTypography";
import BaseCardWrapper from "./BaseCardWrapper";

type Props = {
  weatherHourly: WeatherHourlyModel[];
  currentHumidity: number;
};
export default function HumidityCard({
  weatherHourly,
  currentHumidity,
}: Props) {
  return (
    <BaseCardWrapper className=" h-full" pattern="patternC">
      <div className="flex flex-col h-full">
        <div className="text-lg font-medium text-gray-300">Humidity</div>
        <UnitTypography unit="" value={currentHumidity} />

        <div className="mt-auto">
          <Chart
            chartArray={weatherHourly.map((item) => {
              return {
                hour: item.time.event_in_hours,
                percentage: item.relative_humidity_2m,
              };
            })}
          />
        </div>
      </div>
    </BaseCardWrapper>
  );
}
