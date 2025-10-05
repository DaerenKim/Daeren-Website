import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-tech-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Data Science & Analytics Student
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Daeren Kim
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            Passionate about Machine Learning, AI, and Data-Driven Solutions
          </h2>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Second-year student at NUS with passionate in data science, machine learning, AI and statistical analysis. 
            Building intelligent systems that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Contact button */}
            <a href="mailto:daerenkim@u.nus.edu">
              <Button size="lg" className="tech-glow">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </a>

            {/* Resume download button */}
            <a
              href="https://drive.google.com/file/d/1PpSK19m1T8G0glAL01XJWeHCkkVo8YAV/view?usp=sharing"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a href="https://linkedin.com/in/daeren-kim" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors tech-glow">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/daerenkim" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors tech-glow">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:daerenkim@u.nus.edu"
               className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors tech-glow">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;