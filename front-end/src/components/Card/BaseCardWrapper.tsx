import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BgPatterns } from "../../assets/bgPattern";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  pattern: keyof typeof BgPatterns;
};

export default function BaseCardWrapper({ ...props }: Props) {
  const pattern = BgPatterns[props.pattern];
  return (
    <div
      {...props}
      className={`relative rounded-xl p-3 bg-card-bg text-white ${props.className}`}
    >
      <div className="absolute rounded-xl h-full w-full top-0 left-0 overflow-hidden opacity-40">
        {pattern}
      </div>
      <div className="absolute rounded-xl h-full w-full top-0 left-0 overflow-hidden backdrop-blur-3xl p-3 bg-card-bg/30">
        {props.children}
      </div>
    </div>
  );
}
