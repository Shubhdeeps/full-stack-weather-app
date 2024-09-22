import UnitTypography from "../Typography/UnitTypography";
import BaseCardWrapper from "./BaseCardWrapper";

export default function PrecipitationChanceCard() {
  return (
    <BaseCardWrapper className="h-full" pattern="patternCyan">
      <div className="h-full flex flex-col justify-between">
        <div className="text-gray-400 font-medium">Precipitation</div>
        <UnitTypography unit="%" value={0} />
      </div>
    </BaseCardWrapper>
  );
}
