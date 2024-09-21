import React from "react";
import BaseCardWrapper from "./BaseCardWrapper";
import HumidityCard from "./HumidityCard";
import PrecipitationChanceCard from "./PrecipitationChanceCard";

export default function HighlightsCard() {
  return (
    <BaseCardWrapper
      className="w-full h-[380px]"
      pattern="patternC"
      patternClass="bg-pattern-d/50"
    >
      <div className="w-fit h-full flex flex-col gap-2">
        <div className="flex-[2]">
          <HumidityCard />
        </div>
        <div className="flex-1">
          <PrecipitationChanceCard />
        </div>
      </div>
    </BaseCardWrapper>
  );
}
