import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background relative px-6">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <p className="text-primary text-sm tracking-widest uppercase mb-6 font-medium">
          AI & Data Science
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-foreground">
          Daeren Kim
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          NUS Year 3 · Data Science & Computer Science
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Shipped production systems at <span className="text-foreground">AIA</span> and <span className="text-foreground">Shopee</span>.
          Turning data into insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="mailto:daerenkim@gmail.com">
            <Button size="lg" className="min-w-[160px]">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </a>
          <a
            href="https://drive.google.com/file/d/1dntqFqPre-c5AnWhsQXDb62l6vqkly60/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="min-w-[160px]">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://linkedin.com/in/daeren-kim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/DaerenKim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:daerenkim@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
