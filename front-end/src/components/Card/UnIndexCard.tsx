import UnitTypography from "../Typography/UnitTypography";
import BaseCardWrapper from "./BaseCardWrapper";

export default function UnIndexCard() {
  return (
    <BaseCardWrapper className="h-full" pattern="patternOrange">
      <div className="h-full flex flex-col justify-between">
        <div className="text-gray-400 font-medium">UV index</div>
        <UnitTypography unit="" value={0} />
      </div>
    </BaseCardWrapper>
  );
}
