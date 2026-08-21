import { GraduationCap, MapPin, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    { value: "4.83", label: "CGPA / 5.0" },
    { value: "3", label: "Internships" },
    { value: "4×", label: "Hackathon Wins" },
    { value: "60+", label: "Students Taught" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 border border-border rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6 animate-slide-up">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Year 3 student at NUS studying Data Science & Analytics with
              a second major in Computer Science and a minor in Quantitative Finance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At <span className="text-foreground font-medium">AIA Singapore</span>, I built production MLOps
              pipelines and an OCR system that reduced document processing time by 98%, saving 5,000+ hours monthly.
              At <span className="text-foreground font-medium">Shopee</span>, I developed automated analytics
              pipelines that eliminated 100+ hours of manual work weekly.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Won Microsoft Buildathon 2026 and placed 1st Runner Up at NUS Datathon
              and AgentForge. I also teach machine learning to 60+ students
              and co-host technical workshops on ML, deep learning, and data engineering.
            </p>
          </div>

          <div className="lg:col-span-2 animate-slide-up">
            <div className="p-6 border border-border rounded-lg space-y-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">
                    National University of Singapore
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Data Science & Analytics
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Computer Science (2nd Major)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Quantitative Finance (Minor)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Trophy className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">CGPA 4.83/5.0</p>
                  <p className="text-sm text-muted-foreground">
                    Year 3 · Expected May 2028
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Singapore</p>
                  <p className="text-sm text-muted-foreground">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
