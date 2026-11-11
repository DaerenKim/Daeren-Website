import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1dntqFqPre-c5AnWhsQXDb62l6vqkly60/view?usp=sharing";

const roles = ["ML systems", "data pipelines", "AI agents", "OCR at scale", "insights from data"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    let delay = deleting ? 40 : 85;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return text;
}

const Letters = ({ word, offset, className }: { word: string; offset: number; className?: string }) => (
  <span className={`block whitespace-nowrap ${className ?? ""}`} aria-hidden>
    {word.split("").map((c, i) => (
      <span key={i} className="hero-ch" style={{ ["--i" as string]: i + offset }}>
        {c}
      </span>
    ))}
  </span>
);

const Hero = () => {
  const typed = useTypewriter(roles);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax fade as you scroll past the hero
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = contentRef.current;
        if (!el) return;
        const p = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
        el.style.transform = `translateY(${p * 120}px) scale(${1 - p * 0.06})`;
        el.style.opacity = String(1 - p * 0.9);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="hero-glow" aria-hidden />

      <div
        ref={contentRef}
        className="shell relative flex-1 flex flex-col justify-center pt-28 pb-24 will-change-transform"
      >
        <div
          className="hero-fade mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          style={{ ["--d" as string]: "100ms" }}
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </span>
          <span>AI &amp; Data Science</span>
          <span>Singapore</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-10 lg:gap-14">
          <h1
            className="font-display text-[clamp(4.5rem,17vw,15rem)] select-none"
            aria-label="Daeren Kim"
          >
            <Letters word="Daeren" offset={0} />
            <span className="flex items-end gap-[0.06em]">
              <Letters word="Kim" offset={6} className="text-dim" />
              <span className="hero-ch text-primary" style={{ ["--i" as string]: 9 }}>
                .
              </span>
            </span>
          </h1>

          {/* Photo card */}
          <div
            className="hero-fade relative mx-auto lg:mx-0 lg:mb-6 w-52 sm:w-60 lg:w-64"
            style={{ ["--d" as string]: "700ms" }}
          >
            <div className="hero-photo">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border bg-card shadow-[0_30px_60px_-30px_hsl(var(--foreground)/0.45)]">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Daeren Kim"
                  className="h-full w-full object-cover object-top grayscale-[35%] transition-all duration-700 hover:grayscale-0 hover:scale-105"
                />
              </div>
              <div className="bubble absolute -top-5 -left-8 sm:-left-12 rounded-2xl rounded-bl-sm bg-foreground text-background px-4 py-2.5 text-sm font-medium shadow-lg">
                Hi, I'm Daeren <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_2s_infinite]">👋</span>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full border bg-background px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider shadow-md">
                NUS · Y3
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div className="hero-fade max-w-xl" style={{ ["--d" as string]: "900ms" }}>
            <p className="text-xl md:text-2xl font-medium tracking-tight mb-3">
              I build <span className="text-primary">{typed}</span>
              <span className="caret" aria-hidden />
            </p>
            <p className="text-muted-foreground leading-relaxed">
              NUS Year 3 · Data Science &amp; Computer Science. Shipped production systems at{" "}
              <span className="text-foreground font-medium">AIA</span> and{" "}
              <span className="text-foreground font-medium">Shopee</span>. Turning data into
              insights.
            </p>
          </div>

          <div
            className="hero-fade flex flex-wrap items-center gap-3"
            style={{ ["--d" as string]: "1050ms" }}
          >
            <a href="mailto:daerenkim@gmail.com" className="pill pill-solid group">
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="pill pill-ghost">
              Resume
            </a>
            <a
              href="https://linkedin.com/in/daeren-kim"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/DaerenKim"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a href="mailto:daerenkim@gmail.com" className="icon-btn" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
        style={{ ["--d" as string]: "1400ms" }}
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
