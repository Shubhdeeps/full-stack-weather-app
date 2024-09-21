type Props = {
  chartArray: {
    hour: number;
    percentage: number;
  }[];
};
export default function Chart({ chartArray }: Props) {
  return (
    <div className="flex flex-row items-end justify-center gap-2 w-full">
      {chartArray.map((item, index) => {
        return (
          <ChartBar key={index} percentage={item.percentage} hour={item.hour} />
        );
      })}
    </div>
  );
}

const percentageAndHeight = (percentage: number) => {
  return {
    [`${percentage <= 100}`]: "h-[72px]",
    [`${percentage <= 90}`]: "h-16",
    [`${percentage <= 80}`]: "h-14",
    [`${percentage <= 70}`]: "h-12",
    [`${percentage <= 60}`]: "h-11",
    [`${percentage <= 50}`]: "h-10",
    [`${percentage <= 40}`]: "h-8",
    [`${percentage <= 30}`]: "h-6",
    [`${percentage <= 20}`]: "h-4",
    [`${percentage <= 10}`]: "h-2",
    [`${percentage === 0}`]: "h-[2px]",
  }[`true`];
};

const hourAndBgColor = (hour: number) => {
  return {
    [`${hour === -2 || hour === 2}`]: "bg-pattern-d/40",
    [`${hour === -1 || hour === 1}`]: "bg-pattern-d/20",
    [`${hour === 0}`]: "bg-pattern-d",
  }["true"];
};

function ChartBar({ percentage, hour }: { percentage: number; hour: number }) {
  const height = percentageAndHeight(percentage);
  const bgColor = hourAndBgColor(hour) || "bg-gray-700";
  console.log(bgColor, height);

  return (
    <div className="flex-1 relative">
      <div className={`rounded-lg ${height} ${bgColor}`} />
    </div>
  );
}
