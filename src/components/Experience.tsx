import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Project Intern (ML/AI)",
      company: "UST Malaysia",
      period: "May 2025 - Jul 2025",
      type: "Internship",
      icon: Building2,
      description: [
        "Engineered a RAG-based chatbot prototype with FastAPI/Flask backend, integrating Ollama & HuggingFace LLMs",
        "Designed dual-functionality modules with tutor and mental health chatbot with NLP-based depression detection",
        "Implemented full voice interface with speech-to-text input and text-to-speech output for inclusivity",
        "Built scalable RAG architecture skeleton for FAQs, troubleshooting, and advanced knowledge-driven assistants"
      ],
      skills: ["Python", "FastAPI", "Flask", "LLMs", "RAG", "NLP", "HuggingFace", "Ollama"]
    },
    {
      title: "Student Tutor for Data Science Course DSA1101",
      company: "National University of Singapore",
      period: "Jan 2025 - Present",
      type: "Teaching",
      icon: GraduationCap,
      description: [
        "Conduct weekly tutorials on R programming, statistics, regression methods, and machine learning",
        "Teach both supervised & unsupervised learning concepts to over 60 students",
        "Break down complicated concepts for beginners in an accessible way",
        "Provide hands-on guidance and support for practical data science applications"
      ],
      skills: ["R Programming", "Statistics", "Machine Learning", "Teaching", "Regression Analysis"]
    },
    {
      title: "Workshop Executive",
      company: "NUS Statistics & Data Science Society",
      period: "Aug 2025 - Present",
      type: "CCA",
      icon: Users,
      description: [
        "Organize and host workshops on Data Science topics, including machine learning",
        "Design and deliver engaging learning sessions for technical skill enhancement",
        "Simplify complex concepts and foster practical understanding among attendees",
        "Lead initiatives to build the data science community within the university"
      ],
      skills: ["Workshop Design", "Public Speaking", "Community Building", "Data Science Education"]
    },
    {
      title: "Project Executive",
      company: "NUS Student Union",
      period: "May 2025 - Present",
      type: "CCA",
      icon: Users,
      description: [
        "Plan and coordinate large-scale cultural events with performances and interactive booths",
        "Manage cross-functional responsibilities and ensure smooth program flow",
        "Liaise with over 10 cultural CCAs and coordinate performers, sponsors, and logistics",
        "Oversee audience engagement activities and prize giveaway coordination"
      ],
      skills: ["Event Management", "Cross-functional Coordination", "Stakeholder Management", "Leadership"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through internships, teaching, and leadership roles that shaped my expertise in ML/AI and data science.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient tech-glow animate-slide-up hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-primary/20">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">{exp.type}</Badge>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;