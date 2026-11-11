import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";

const tickerTop = [
  "AIA Singapore",
  "Shopee",
  "UST",
  "Microsoft Buildathon Champion",
  "NUS Datathon",
  "AgentForge",
  "WorldQuant Gold",
];

const tickerSkills = [
  "Python",
  "PyTorch",
  "LangGraph",
  "RAG",
  "PySpark",
  "SQL",
  "Docker",
  "Kubernetes",
  "MLOps",
  "CI/CD",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />

        <div className="border-y font-display text-3xl md:text-5xl">
          <Marquee items={tickerTop} speed={45} />
        </div>

        <About />
        <Experience />

        <div className="border-y bg-foreground text-background font-display text-2xl md:text-4xl">
          <Marquee items={tickerSkills} reverse speed={38} />
        </div>

        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t">
        <div className="shell flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Daeren Kim. All rights reserved.</p>
          <a href="#top" className="font-mono text-xs uppercase tracking-[0.2em] hover:text-foreground transition-colors">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
