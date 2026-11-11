import { Award, Medal, Trophy } from "lucide-react";
import { Reveal, SectionHead, useSpotlight } from "@/components/motion";

const skillCategories = [
  { title: "Languages", skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "R"] },
  {
    title: "ML / AI",
    skills: ["PyTorch", "Scikit-learn", "LangChain", "LangGraph", "RAG", "LLM Systems"],
  },
  { title: "Data", skills: ["Pandas", "PySpark", "PostgreSQL", "MySQL", "Tableau", "Power BI"] },
  { title: "Infrastructure", skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD"] },
];

const achievements = [
  { icon: Trophy, title: "Microsoft Buildathon 2026", detail: "Champion" },
  { icon: Medal, title: "NUS Hackathons", detail: "1st Runner Up × 2" },
  { icon: Award, title: "WorldQuant Brain", detail: "Gold · 15+ signals" },
];

const AchievementCard = ({ a, i }: { a: (typeof achievements)[number]; i: number }) => {
  const spot = useSpotlight(6);
  return (
    <Reveal delay={i * 100}>
      <div
        {...spot}
        className="spotlight tilt group h-full rounded-2xl border bg-card p-7 hover:border-foreground/25"
      >
        <a.icon className="h-7 w-7 mb-10 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
        <p className="font-display text-2xl md:text-3xl mb-2">{a.detail}</p>
        <p className="text-sm text-muted-foreground">{a.title}</p>
      </div>
    </Reveal>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHead index="04" title="Skills" />

        <div className="border-t">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index * 80}
              className="grid md:grid-cols-[80px_240px_1fr] items-start md:items-center gap-4 md:gap-8 border-b py-7 md:py-8 px-2 md:px-4"
            >
              <span className="hidden md:block font-mono text-xs text-muted-foreground">
                0{index + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="text-primary">✦</span> Achievements
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <AchievementCard key={a.title} a={a} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
