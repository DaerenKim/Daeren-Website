import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, SectionHead } from "@/components/motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "What stood out most was Daeren's initiative and problem-solving ability. He regularly took ownership of tasks and proposed practical solutions with minimal supervision. He consistently exceeded expectations.",
    name: "Kartik Mahadevan",
    title: "Associate Director, AI & ML",
    company: "AIA Singapore",
  },
  {
    quote:
      "Daeren demonstrated strong technical capability and the ability to deliver meaningful contributions in a fast-paced environment. He showed strong problem-solving abilities, often proposing practical and effective solutions.",
    name: "Alexandra Widjaja",
    title: "Assistant Manager, Regional Operations",
    company: "Shopee Singapore",
  },
  {
    quote:
      "He is one of the excellent students I have encountered in many years of teaching. Daeren distinguished himself by frequently going above and beyond his formal responsibilities.",
    name: "Pham Thi Kim Cuc",
    title: "Senior Lecturer, Statistics & Data Science",
    company: "National University of Singapore",
  },
];

const DURATION = 8000;

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % testimonials.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  const go = (d: number) =>
    setActive((a) => (a + d + testimonials.length) % testimonials.length);
  const item = testimonials[active];

  return (
    <section id="testimonials" className="section bg-card border-y">
      <div className="shell">
        <SectionHead index="05" title="Kind Words" />

        <Reveal>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-20"
          >
            <figure key={active} className="quote-in">
              <span aria-hidden className="block font-display text-8xl leading-none text-primary h-14">
                “
              </span>
              <blockquote className="text-2xl md:text-4xl font-medium tracking-tight leading-[1.25]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-background font-semibold text-sm">
                  {initials(item.name)}
                </span>
                <span>
                  <span className="block font-semibold">{item.name}</span>
                  <span className="block text-sm text-muted-foreground">
                    {item.title} · {item.company}
                  </span>
                </span>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-end gap-6">
              <div className="space-y-1">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group block w-full text-left py-3 transition-colors",
                      i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-medium">{t.company}</span>
                      <span className="font-mono text-xs">0{i + 1}</span>
                    </span>
                    <span className="mt-3 block h-px w-full bg-border overflow-hidden">
                      {i === active && (
                        <span
                          key={`${active}-${paused}`}
                          className={cn("block h-full bg-foreground", !paused && "progress-bar")}
                          style={{ ["--dur" as string]: `${DURATION}ms` }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => go(-1)} className="icon-btn" aria-label="Previous testimonial">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button onClick={() => go(1)} className="icon-btn" aria-label="Next testimonial">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
