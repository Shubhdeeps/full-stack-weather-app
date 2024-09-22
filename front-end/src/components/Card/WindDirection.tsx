import BaseCardWrapper from "./BaseCardWrapper";
import UnitTypography from "../Typography/UnitTypography";
import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";

type Props = Pick<WeatherCurrentModel, "wind_direction_10m">;
export default function WindDirection({ wind_direction_10m }: Props) {
  return (
    <BaseCardWrapper className="h-full" pattern="patternBlue">
      <div className="h-full flex flex-col justify-between">
        <div className="text-gray-400 font-medium">Wind direction</div>
        <UnitTypography unit="NW" value={wind_direction_10m} />
      </div>
    </BaseCardWrapper>
  );
}
