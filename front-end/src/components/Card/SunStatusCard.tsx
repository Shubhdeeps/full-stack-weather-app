import { WeatherCurrentModel } from "../../models/WeatherCurrent.model";
import BaseCardWrapper from "./BaseCardWrapper";
import sun from "../../assets/svg/sun-hot.svg";

type Props = Pick<WeatherCurrentModel, "sunrise" | "sunset">;
export default function SunStatusCard({ sunrise, sunset }: Props) {
  return (
    <BaseCardWrapper
      className="h-full grid place-items-end"
      pattern="patternOrange"
    >
      <div className="border-t w-[300px] border-dotted rounded-full h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-20 ">
        <img src={sun} width={85} height={85} />
      </div>
      <div className="h-full w-full grid place-items-end">
        <div className="w-full flex flex-row items-center justify-between">
          <TimeState timeStr="5:30 AM" title="Sunrise" align="items-start" />
          <TimeState timeStr="7:00 PM" title="Sunset" align="items-end" />
        </div>
      </div>
    </BaseCardWrapper>
  );
}

function TimeState({
  title,
  timeStr,
  align,
}: {
  title: string;
  timeStr: string;
  align: "items-start" | "items-end";
}) {
  return (
    <div className={`flex flex-col ${align}`}>
      <span className="text-xs text-pattern-c font-semibold">{title}</span>
      <span className="font-semibold text-lg">{timeStr}</span>
    </div>
  );
}
