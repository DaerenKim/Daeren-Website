import { GraduationCap, MapPin, Trophy } from "lucide-react";
import { CountUp, Reveal, SectionHead } from "@/components/motion";

const highlights = [
  { value: "4.83", label: "CGPA / 5.0" },
  { value: "3", label: "Internships" },
  { value: "5×", label: "Hackathon Wins" },
  { value: "200+", label: "Students Taught" },
];

const facts = [
  {
    icon: GraduationCap,
    title: "National University of Singapore",
    lines: [
      "Data Science & Analytics",
      "Computer Science (2nd Major)",
      "Quantitative Finance (Minor)",
    ],
  },
  { icon: Trophy, title: "CGPA 4.83/5.0", lines: ["Year 3 · Expected May 2028"] },
  { icon: MapPin, title: "Singapore", lines: ["Open to opportunities"] },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHead index="01" title="About" />

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l mb-20">
          {highlights.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 90}
              className="group border-r border-b p-6 md:p-8 transition-colors duration-500 hover:bg-card"
            >
              <CountUp
                value={item.value}
                className="font-display block text-5xl md:text-7xl tabular-nums transition-colors duration-300 group-hover:text-primary"
              />
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
                I'm a Year 3 student at NUS studying Data Science &amp; Analytics with a second
                major in Computer Science and a minor in Quantitative Finance.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At <span className="text-foreground font-medium">AIA Singapore</span>, I built
                production MLOps pipelines and an OCR system that reduced document processing time
                by 98%, saving 5,000+ hours monthly. At{" "}
                <span className="text-foreground font-medium">Shopee</span>, I developed automated
                analytics pipelines that eliminated 100+ hours of manual work weekly.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Won Microsoft Buildathon 2026 and took 1st place at the SDS x DSESC Datathon
                2026, plus 1st Runner Up at NUS Datathon and AgentForge. I also teach machine learning to 200+ students and co-host technical
                workshops on ML, deep learning, and data engineering.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-3">
            {facts.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 100}
                className="group flex items-start gap-5 rounded-2xl border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  {f.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
