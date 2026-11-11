import { ArrowUpRight, Github, Trophy } from "lucide-react";
import { Reveal, SectionHead, useSpotlight } from "@/components/motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Startup Hunter",
    award: "1st Runner Up – NUS AgentForge Hackathon",
    period: "Mar 2026",
    description:
      "AI system that aggregates real-time market data to identify startup opportunities, generates structured proposals, and automatically validates MVPs with persistent memory for refined decision-making.",
    tech: ["AI Agents", "LLM Orchestration", "Python"],
    featured: true,
  },
  {
    title: "Company Clustering Intelligence",
    award: "1st Runner Up – NUS Datathon",
    period: "Feb 2026",
    description:
      "AI-driven company segmentation engine using K-Means, HDBSCAN, and GMM. Built interactive geospatial dashboard with hybrid RAG assistant for natural language exploration of market structures.",
    tech: ["Unsupervised ML", "RAG", "Geospatial Analytics"],
    featured: true,
  },
  {
    title: "NUS Planner",
    award: "Hackathon Recognition (~300 teams)",
    period: "Jan 2026",
    description:
      "AI-powered academic planning platform with automated data pipelines, topological-sort scheduler for 4-year plans, and RAG adviser using pgvector + text-to-SQL for personalized recommendations.",
    tech: ["Python", "RAG", "pgvector", "BeautifulSoup"],
    featured: false,
  },
  {
    title: "HDB Resale Price Forecasting",
    award: null,
    period: "Nov 2025",
    description:
      "ML pipeline on 200K+ housing transactions achieving R² ≈ 0.96 and MAE ≈ $25K with CatBoost. Interactive Streamlit dashboard for real-time price predictions.",
    tech: ["CatBoost", "Scikit-learn", "Streamlit"],
    featured: false,
  },
];

type Project = (typeof projects)[number];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const spot = useSpotlight(5);
  return (
    <Reveal
      delay={(index % 2) * 120}
      className={cn(index === 0 && "md:col-span-7", index === 1 && "md:col-span-5",
        index === 2 && "md:col-span-5", index === 3 && "md:col-span-7")}
    >
      <article
        {...spot}
        className="spotlight tilt group relative h-full overflow-hidden rounded-[1.75rem] border bg-card p-7 md:p-10 flex flex-col hover:border-foreground/25 hover:shadow-[0_30px_60px_-35px_hsl(var(--foreground)/0.4)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-6 font-display text-[9rem] md:text-[12rem] text-foreground/[0.04] transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105"
        >
          0{index + 1}
        </span>

        <div className="relative mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {project.period}
          </span>
        </div>

        <div className="relative mt-auto">
          {project.award && (
            <p
              className={cn(
                "mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
                project.featured
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              <Trophy className="h-3.5 w-3.5" />
              {project.award}
            </p>
          )}
          <h3 className="font-display text-3xl md:text-[2.75rem] !leading-[1.02] mb-4">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHead
          index="03"
          title="Projects"
          lead="Hackathon builds and side projects — agents, clustering, planning and forecasting."
        />

        <div className="grid md:grid-cols-12 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href="https://github.com/DaerenKim"
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-ghost group"
          >
            <Github className="h-4 w-4" />
            View more on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
