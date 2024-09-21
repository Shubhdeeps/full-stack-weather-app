export default function PercentageTypography({
  percentage,
}: {
  percentage: number;
}) {
  return (
    <div>
      <span className="text-[48px] leading-none font-medium">{percentage}</span>
      <span className="text-xs">%</span>
    </div>
  );
}
