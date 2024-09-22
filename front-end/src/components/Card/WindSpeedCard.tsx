import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";
import UnitTypography from "../Typography/UnitTypography";
import BaseCardWrapper from "./BaseCardWrapper";
import windSpeedSvg from "../../assets/svg/windsock.svg";
type Props = Pick<WeatherCurrentModel, "wind_speed_10m">;
export default function WindSpeedCard({ wind_speed_10m }: Props) {
  return (
    <BaseCardWrapper className="h-full" pattern="patternBlue">
      <div className="text-lg font-medium text-gray-300">Wind speed</div>
      <UnitTypography unit="km" value={wind_speed_10m} />
      <div className=" grid place-content-center">
        <img width={120} height={120} src={windSpeedSvg} />
      </div>
    </BaseCardWrapper>
  );
}
