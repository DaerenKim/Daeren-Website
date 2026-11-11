import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
};

/** Infinite horizontal ticker; content is duplicated so the loop is seamless. */
const Marquee = ({ items, reverse, speed = 40, className }: MarqueeProps) => {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 md:px-8">{item}</span>
          <span className="text-primary text-[0.6em]">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("band", className)}>
      <div
        className={cn("band-track", reverse && "reverse")}
        style={{ ["--speed" as string]: `${speed}s` }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};

export default Marquee;
