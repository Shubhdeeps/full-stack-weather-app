import PercentageTypography from "../Typography/PercentageTypography";
import BaseCardWrapper from "./BaseCardWrapper";

export default function PrecipitationChanceCard() {
  return (
    <BaseCardWrapper className="h-full" pattern="patternC">
      <div className="h-full flex flex-col justify-between">
        <div>Precipitation</div>
        <PercentageTypography percentage={0} />
      </div>
    </BaseCardWrapper>
  );
}
