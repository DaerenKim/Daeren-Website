import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and passion for data science, AI, and creating meaningful impact through technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm currently pursuing a Major in Data Science & Analytics with a second major in Quantitative Finance 
              and a minor in AI at the National University of Singapore. My journey combines rigorous academic 
              foundation with hands-on experience in machine learning, statistical analysis, and software development.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              From developing RAG-based chatbots at UST Malaysia to conducting statistical analysis of heart disease 
              risk factors, I'm passionate about leveraging data and AI to solve real-world problems. I also enjoy 
              teaching and sharing knowledge as a student tutor for data science courses.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Data Science</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Statistical Analysis</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">R</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">Data Analytics</Badge>
              <Badge variant="secondary">Data Visualisation</Badge>
            </div>
          </div>
          
          <Card className="card-gradient tech-glow animate-slide-up">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-foreground font-medium">National University of Singapore</p>
                    <p className="text-muted-foreground">Major: Data Science & Analytics</p>
                    <p className="text-muted-foreground">2nd Major: Quantitative Finance</p>
                    <p className="text-muted-foreground">Minor: Artificial Intelligence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Current Status</h3>
                    <p className="text-foreground">Second Year Student</p>
                    <p className="text-muted-foreground">Aug 2024 - Present</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-tech-cyan/20">
                    <MapPin className="w-6 h-6 text-tech-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-foreground">Singapore</p>
                    <p className="text-muted-foreground">Open to remote and onsite opportunities</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;