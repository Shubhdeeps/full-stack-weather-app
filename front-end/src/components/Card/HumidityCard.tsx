import { MockDataHourly } from "../../assets/mock";
import Chart from "../Charts/Chart";
import PercentageTypography from "../Typography/PercentageTypography";
import BaseCardWrapper from "./BaseCardWrapper";

export default function HumidityCard() {
  return (
    <BaseCardWrapper className="w-[300px] h-full" pattern="patternC">
      <div className="flex flex-col h-full">
        <div className="text-lg font-medium">Humidity</div>
        <PercentageTypography percentage={37} />

        <div className="mt-auto">
          <Chart
            chartArray={MockDataHourly.map((item) => {
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
