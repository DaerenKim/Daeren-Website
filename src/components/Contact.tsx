import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, internship opportunities, or just want to chat about data science and AI? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="card-gradient tech-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:daerenkim@u.nus.edu" className="text-muted-foreground hover:text-primary transition-colors">
                      daerenkim@u.nus.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a href="tel:+6590722122" className="text-muted-foreground hover:text-primary transition-colors">
                      +65 9072 2122
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-tech-cyan/20">
                    <MapPin className="w-6 h-6 text-tech-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Singapore</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/daeren-kim" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors tech-glow">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/daerenkim" target="_blank" rel="noopener noreferrer"
                     className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors tech-glow">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="card-gradient tech-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Quick Actions</h3>
              
              <div className="space-y-4">
                {/* Email button */}
                <a href="mailto:daerenkim@u.nus.edu">
                  <Button className="w-full justify-start tech-glow" size="lg">
                    <Mail className="w-5 h-5 mr-3" />
                    Send me an email
                  </Button>
                </a>

                {/* Resume download */}
                <a href="https://drive.google.com/file/d/1PpSK19m1T8G0glAL01XJWeHCkkVo8YAV/view" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Download className="w-5 h-5 mr-3" />
                    Download my resume
                  </Button>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/daeren-kim" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Linkedin className="w-5 h-5 mr-3" />
                    Connect on LinkedIn
                  </Button>
                </a>

                {/* GitHub */}
                <a href="https://github.com/daerenkim" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Github className="w-5 h-5 mr-3" />
                    View my GitHub
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
                <h4 className="font-semibold mb-2 text-foreground">Currently Available For:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Internship opportunities</li>
                  <li>• Research collaborations</li>
                  <li>• Data science projects</li>
                  <li>• Tutoring & mentoring</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
