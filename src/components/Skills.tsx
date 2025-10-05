import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Brain, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "R", "SQL", "JavaScript", "Java", "HTML", "CSS"],
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Libraries & Frameworks",
      icon: Brain,
      skills: [
        "pandas", "numpy", "matplotlib", "seaborn", "plotly", "scikit-learn",
        "HuggingFace", "Ollama", "FastAPI", "Flask", "Beautifulsoup", "Strands-Agent"
      ],
      color: "bg-accent/20 text-accent"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "RStudio", "Tableau", "Power BI", "Figma", "Canva"],
      color: "bg-tech-cyan/20 text-tech-cyan"
    },
    {
      title: "Data Science & ML",
      icon: BarChart3,
      skills: [
        "EDA", "Machine Learning", "Statistical Analysis", "Data Visualization",
        "Regression Analysis", "NLP", "RAG Systems", "Supervised Learning", "Unsupervised Learning"
      ],
      color: "bg-tech-purple/20 text-tech-purple"
    }
  ];

  const certifications = [
    {
      name: "SQL Associate",
      issuer: "DataCamp",
      icon: Award,
      url: "https://www.datacamp.com/certificate/SQA0013719988178"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* ===== Title ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, software development, and analytics.
          </p>
        </div>

        {/* ===== Skill Categories ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="card-gradient tech-glow animate-slide-up hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-full ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ===== Certifications ===== */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Professional Certifications</h3>
          <div className="flex justify-center">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-sm hover:scale-[1.02] transition-transform duration-200"
              >
                <Card className="card-gradient tech-glow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-yellow-500/20">
                        <cert.icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-muted-foreground">by {cert.issuer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* ===== Coursework ===== */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Relevant Coursework
          </h3>
          <Card className="card-gradient tech-glow">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Introduction to Data Science",
                  "Quantitative Finance",
                  "Design Thinking",
                  "Programming Methodology",
                  "Calculus",
                  "Linear Algebra I",
                  "Probability",
                  "Mathematical Statistics",
                  "Data Structures & Algorithms",
                  "Data Visualisation"
                ].map((course, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="hover:bg-secondary transition-colors cursor-default"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
