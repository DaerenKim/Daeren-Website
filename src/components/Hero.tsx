import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background relative px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 animate-fade-in">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Daeren Kim"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <p className="text-primary text-sm tracking-widest uppercase mb-4 font-medium">
              AI & Data Science
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-foreground">
              Daeren Kim
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-3">
              NUS Year 3 · Data Science & Computer Science
            </p>

            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Shipped production systems at <span className="text-foreground">AIA</span> and <span className="text-foreground">Shopee</span>.
              Turning data into insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-8">
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

            <div className="flex items-center justify-center md:justify-start gap-4">
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
