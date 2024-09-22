import React from "react";
import BaseCardWrapper from "../Card/BaseCardWrapper";
import HumidityCard from "../Card/HumidityCard";
import PrecipitationChanceCard from "../Card/PrecipitationChanceCard";
import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";
import { WeatherHourlyModel } from "../../models/WeatherHourly..model";
import SunStatusCard from "../Card/SunStatusCard";
import UnIndexCard from "../Card/UnIndexCard";
import WindSpeedCard from "../Card/WindSpeedCard";
import WindDirection from "../Card/WindDirection";
import { Time } from "../../models/common.types";

type Props = {
  currentWeather?: WeatherCurrentModel;
  hourlyWeather: WeatherHourlyModel[];
  sunrise: Time;
  sunset: Time;
};
export default function HighlightsContainer({
  currentWeather,
  hourlyWeather,
  sunrise,
  sunset,
}: Props) {
  if (!currentWeather) {
    return (
      <BaseCardWrapper
        className="w-full h-[380px]"
        pattern="patternC"
        patternClass="bg-pattern-d/50"
      >
        <div>Loading...</div>
      </BaseCardWrapper>
    );
  }

  return (
    <BaseCardWrapper
      className="w-full h-[380px]"
      pattern="patternC"
      patternClass="bg-pattern-d/50"
    >
      <div className="flex flex-row gap-3 h-full">
        <Column
          children1={
            <HumidityCard
              currentHumidity={currentWeather.relative_humidity_2m}
              weatherHourly={hourlyWeather}
            />
          }
          children2={
            <PrecipitationChanceCard
              precipitation={currentWeather.precipitation}
            />
          }
        />
        <Column
          children1={<SunStatusCard sunrise={sunrise} sunset={sunset} />}
          children2={<UnIndexCard />}
        />

        <Column
          children1={
            <WindSpeedCard wind_speed_10m={currentWeather.wind_speed_10m} />
          }
          children2={
            <WindDirection
              wind_direction_10m={currentWeather.wind_direction_10m}
            />
          }
        />
      </div>
    </BaseCardWrapper>
  );
}

function Column({
  children1,
  children2,
}: {
  children1: React.ReactNode;
  children2: React.ReactNode;
}) {
  return (
    <div className="w-fit h-full flex flex-col gap-2 flex-1">
      <div className="flex-[2]">{children1}</div>
      <div className="flex-1">{children2} </div>
    </div>
  );
}
