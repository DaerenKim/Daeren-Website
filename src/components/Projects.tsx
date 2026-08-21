import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Trophy } from "lucide-react";

const Projects = () => {
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

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Projects
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg animate-slide-up ${
                project.featured
                  ? "border-primary/50 bg-primary/5"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Trophy className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  {project.award && (
                    <p className="text-sm text-primary font-medium">
                      {project.award}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs border border-border rounded text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DaerenKim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
