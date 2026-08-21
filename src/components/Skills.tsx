const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "R"],
    },
    {
      title: "ML / AI",
      skills: ["PyTorch", "Scikit-learn", "LangChain", "LangGraph", "RAG", "LLM Systems"],
    },
    {
      title: "Data",
      skills: ["Pandas", "PySpark", "PostgreSQL", "MySQL", "Tableau", "Power BI"],
    },
    {
      title: "Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm border border-border rounded-full text-foreground hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <p className="font-medium text-foreground">Microsoft Buildathon 2026</p>
              <p className="text-sm text-muted-foreground">Champion</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="font-medium text-foreground">NUS Hackathons</p>
              <p className="text-sm text-muted-foreground">1st Runner Up × 2</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="font-medium text-foreground">WorldQuant Brain</p>
              <p className="text-sm text-muted-foreground">Gold · 15+ signals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
