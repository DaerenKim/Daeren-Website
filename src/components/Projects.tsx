import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Agent System for Workplace Wellness",
      period: "Aug 2025 - Sep 2025",
      description: "Advanced backend system for workplace wellness management using multi-agent architecture and intelligent scheduling.",
      longDescription: "Comprehensive workplace wellness platform featuring intelligent agent orchestration, burnout detection algorithms, and seamless calendar integration for optimal employee wellbeing management.",
      icon: Users,
      features: [
        "Manager-Agent workflow with rule-based orchestration and MCP for reliable task delegation",
        "Burnout logic using EMA and Sigmoid functions for dynamic scoring and questionnaire scheduling",
        "Google Calendar integration via OAuth 2.0 for secure event reading/writing and intelligent break scheduling",
        "Flask backend APIs providing scalable, secure endpoints for frontend and agent communication"
      ],
      technologies: ["Python", "Flask", "OAuth 2.0", "Google Calendar API", "Multi-Agent Systems", "EMA", "Sigmoid Functions"],
      category: "Backend Development",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Statistical Analysis of Heart Disease Risk",
      period: "Oct 2024",
      description: "Comprehensive statistical analysis and machine learning model comparison for heart disease risk prediction using R.",
      longDescription: "In-depth data science project analyzing relationships between multiple health variables to predict heart disease risk, implementing and comparing various machine learning approaches.",
      icon: BarChart3,
      features: [
        "Data exploration and preprocessing, analyzing relationships between 10 health variables",
        "Implementation of 3 supervised ML models: Logistic Regression, KNN, and Decision Tree",
        "Model performance evaluation using 3 key metrics to select the most suitable approach",
        "Statistical significance testing and feature importance analysis"
      ],
      technologies: ["R", "Machine Learning", "Statistical Analysis", "Data Visualization", "Logistic Regression", "KNN", "Decision Trees"],
      category: "Data Science",
      githubUrl: "#",
      reportUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning machine learning, data analysis, and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient tech-glow animate-slide-up hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">{project.category}</Badge>
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.period}</span>
                </div>
                
                <p className="text-muted-foreground">{project.longDescription}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-border">
                  {index === 0 ? (
                    <>
                      <a
                        href="https://github.com/DaerenKim/simplifynext_agentic_ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                      </a>
                      <a
                        href="https://youtu.be/07PWWNEsrSM"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Video Demo
                        </Button>
                      </a>
                      <a
                        href="https://github.com/DaerenKim/simplifynext_agentic_ai/blob/main/Project_UNFRAZZLE_deck.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Slide Deck
                        </Button>
                      </a>
                    </>
                  ) : (
                    <>                      
                      <a
                        href="https://github.com/DaerenKim/Heart-Disease-Analysis-Statistical-Report"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                      </a>
                      <a
                        href="https://github.com/DaerenKim/Heart-Disease-Analysis-Statistical-Report/blob/main/Daeren%20Kim%20Heart%20Disease%20Statistical%20Report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Report
                        </Button>
                      </a>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/DaerenKim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="tech-glow">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;