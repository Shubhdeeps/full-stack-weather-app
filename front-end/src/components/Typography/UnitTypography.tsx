export default function UnitTypography({
  value,
  unit,
}: {
  value: number;
  unit: string;
}) {
  return (
    <div>
      <span className="text-[48px] leading-none font-medium">{value}</span>
      <span className="text-xs ms-1 text-gray-500 font-medium">{unit}</span>
    </div>
  );
}
