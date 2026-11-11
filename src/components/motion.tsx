import {
  CSSProperties,
  ElementType,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

/** Adds `.in` to an element the first time it scrolls into view. */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Reveal({ as: Tag = "div", delay = 0, className, style, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "in", className)}
      style={{ ...style, ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Splits text into letters that slide up when the block enters view. */
export function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  let i = 0;
  return (
    <span
      ref={ref}
      aria-label={text}
      className={cn("split", inView && "in", className)}
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      {text.split(" ").map((word, w) => (
        <span key={w} aria-hidden className="inline-flex whitespace-nowrap">
          {word.split("").map((c) => (
            <span key={i} className="ch-wrap">
              <span className="ch" style={{ ["--i" as string]: i++ }}>
                {c}
              </span>
            </span>
          ))}
          {w < text.split(" ").length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

/** Counts a stat like "4.83", "60+" or "4×" up from zero when visible. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  if (!match) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className} aria-label={value}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Mouse handlers for the spotlight + subtle 3D tilt card effect. */
export function useSpotlight(maxTilt = 5) {
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.style.setProperty("--ry", `${((x / r.width) - 0.5) * maxTilt}deg`);
      el.style.setProperty("--rx", `${(0.5 - y / r.height) * maxTilt}deg`);
    },
    [maxTilt]
  );
  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  }, []);
  return { onMouseMove, onMouseLeave };
}

/** Light/dark theme stored in localStorage; initial class set in index.html. */
export function useTheme() {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );
  const toggle = useCallback(() => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);
  return { dark, toggle };
}

/** Section header: mono index tag, big animated title, optional lead. */
export function SectionHead({
  index,
  title,
  lead,
}: {
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
            <span className="text-primary">({index})</span> — {title}
          </p>
        </Reveal>
        <h2 className="font-display text-5xl sm:text-6xl md:text-8xl">
          <SplitText text={title} />
          <span className="text-primary">.</span>
        </h2>
      </div>
      {lead && (
        <Reveal delay={150} className="md:max-w-xs">
          <p className="text-muted-foreground leading-relaxed">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
