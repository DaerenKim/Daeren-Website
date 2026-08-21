const Experience = () => {
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
      period: "Jan 2025 – Dec 2025",
      description: "Teaching ML to 60+ students · 4.7/5.0 rating · 30+ award nominations",
    },
    {
      title: "Workshop Executive",
      org: "NUS Statistics & Data Science Society",
      period: "Aug 2025 – Apr 2026",
      description: "Co-hosted workshops: Machine Learning, Deep Learning, Data Engineering, Product Analytics",
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
      description: "Designed welfare initiatives for international students; coordinated exam welfare pack giveaway",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        {/* Work Experience */}
        <div className="space-y-12 mb-20">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Leadership & Teaching */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Leadership & Teaching
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="p-5 border border-border rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="font-medium text-foreground">{item.title}</h4>
              <p className="text-sm text-primary mb-2">{item.org}</p>
              <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
