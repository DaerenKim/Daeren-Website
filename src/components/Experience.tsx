import { useState } from "react";
import { Reveal, SectionHead, useSpotlight } from "@/components/motion";
import { cn } from "@/lib/utils";

const workExperience = [
  {
    title: "AI Engineer Intern",
    company: "AIA Singapore",
    period: "May 2026 – Jul 2026",
    highlights: [
      "Built CI/CD pipelines for ML systems, reducing deployment time by 40%",
      "Deployed production MLOps pipeline (experiment tracking, model registry, monitoring) with 95%+ OCR accuracy",
      "Developed OCR document processing with signature verification—reduced processing from 30 min → 30 sec, saving 5,000+ hrs/month",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Shopee Singapore",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Built automated transcript sampling pipeline, eliminating 100+ hours of manual work weekly",
      "Developed SQL pipelines and dashboards—increased CSAT by 1.2% and deflection by 1.4%",
      "Conducted funnel analysis to identify drop-off points, improving form completion rates by 3–4%",
    ],
  },
  {
    title: "ML Engineer Intern",
    company: "UST Malaysia",
    period: "May 2025 – Aug 2025",
    highlights: [
      "Built LLM-powered IT troubleshooting system with RAG, reducing escalations by 12%",
      "Designed semantic search over 10K+ documents using dense embeddings and ANN indexing",
      "Containerised services with Docker and deployed APIs with monitoring, reducing error rate by 20%+",
    ],
  },
];

const leadership = [
  {
    title: "Student Tutor – DSA1101",
    org: "National University of Singapore",
    period: "Jan 2025 – Present",
    description: "Tutored 200+ students in ML · 4.7/5.0 rating · 30+ award nominations",
  },
  {
    title: "Workshop Executive",
    org: "NUS Statistics & Data Science Society",
    period: "Aug 2025 – Apr 2026",
    description:
      "Co-hosted workshops: Machine Learning, Deep Learning, Data Engineering, Product Analytics",
  },
  {
    title: "ISR Project Executive",
    org: "NUS Students' Union",
    period: "May 2025 – Apr 2026",
    description: "Co-organized Global Cultural Fair 2026 with 6-member team, reaching 1,000+ attendees",
  },
  {
    title: "ISR Welfare Executive",
    org: "NUS Students' Union",
    period: "Sep 2024 – May 2025",
    description:
      "Designed welfare initiatives for international students; coordinated exam welfare pack giveaway",
  },
];

const LeadershipCard = ({ item, index }: { item: (typeof leadership)[number]; index: number }) => {
  const spot = useSpotlight(4);
  return (
    <Reveal delay={index * 90}>
      <div
        {...spot}
        className="spotlight tilt h-full rounded-2xl border bg-card p-6 hover:border-foreground/25"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-6">
          {item.period}
        </p>
        <h4 className="text-lg font-semibold tracking-tight">{item.title}</h4>
        <p className="text-sm text-primary mb-4">{item.org}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </Reveal>
  );
};

const Experience = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHead
          index="02"
          title="Experience"
          lead="Three internships across insurance, e-commerce and tech consulting — shipping ML into production."
        />

        <div className="border-t mb-28">
          {workExperience.map((exp, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={exp.company} delay={index * 80} className="border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="acc-row w-full text-left grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1.2fr_1fr_auto] items-center gap-4 md:gap-8 px-2 md:px-4 py-7 md:py-9"
                >
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  <span className="acc-title transition-transform duration-500">
                    <span className="block font-display text-3xl md:text-5xl">{exp.company}</span>
                    <span className="mt-2 block text-sm text-muted-foreground md:hidden">
                      {exp.title} · {exp.period}
                    </span>
                  </span>
                  <span className="hidden md:block">
                    <span className="block font-medium">{exp.title}</span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {exp.period}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300",
                      isOpen && "bg-foreground text-background border-foreground"
                    )}
                  >
                    <span className={cn("plus", isOpen && "open")} />
                  </span>
                </button>

                <div className={cn("acc-panel", isOpen && "open")}>
                  <div>
                    <ul className="grid md:grid-cols-3 gap-4 px-2 md:pl-[calc(80px+3rem)] md:pr-4 pb-10">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className={cn(
                            "rounded-2xl bg-card border p-5 text-sm leading-relaxed text-muted-foreground transition-all duration-700",
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          )}
                          style={{ transitionDelay: isOpen ? `${150 + i * 90}ms` : "0ms" }}
                        >
                          <span className="block font-mono text-xs text-primary mb-3">
                            /{String(i + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mb-10 flex items-end justify-between gap-6">
          <h3 className="font-display text-4xl md:text-6xl">
            Leadership <span className="text-dim">&amp; Teaching</span>
          </h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadership.map((item, index) => (
            <LeadershipCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
