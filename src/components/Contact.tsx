import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contact
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-up">
            <p className="text-muted-foreground leading-relaxed">
              Open to full-time roles, internships, and research collaborations
              in ML/AI and data science.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:daerenkim@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                daerenkim@gmail.com
              </a>

              <a
                href="tel:+6590722122"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                +65 9072 2122
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                Singapore
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com/in/daeren-kim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/DaerenKim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a href="mailto:daerenkim@gmail.com" className="block">
                  <Button className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1dntqFqPre-c5AnWhsQXDb62l6vqkly60/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
