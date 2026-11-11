import { useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Reveal, SplitText } from "@/components/motion";

const EMAIL = "daerenkim@gmail.com";
const RESUME_URL =
  "https://drive.google.com/file/d/1dntqFqPre-c5AnWhsQXDb62l6vqkly60/view?usp=sharing";

/** Button that leans toward the cursor. */
const Magnetic = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group relative grid h-40 w-40 md:h-48 md:w-48 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-semibold transition-transform duration-300 ease-out"
    >
      <span className="flex flex-col items-center gap-1 transition-transform duration-500 group-hover:scale-110">
        <ArrowUpRight className="h-7 w-7 transition-transform duration-500 group-hover:rotate-45" />
        {children}
      </span>
    </a>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section overflow-hidden">
      <div className="shell">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="text-primary">(06)</span> — Contact
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 pb-16 border-b">
          <h2 className="font-display text-[clamp(3.5rem,11vw,10rem)]">
            <SplitText text="Let's build" />
            <br />
            <span className="text-dim">
              <SplitText text="something" delay={200} />
            </span>
            <span className="text-primary">.</span>
          </h2>
          <Reveal delay={300} className="self-start lg:self-end">
            <Magnetic href={`mailto:${EMAIL}`}>Say hello</Magnetic>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10 pt-12">
          <Reveal className="md:col-span-1">
            <p className="text-muted-foreground leading-relaxed">
              Open to full-time roles, internships, and research collaborations in ML/AI and data
              science.
            </p>
          </Reveal>

          <Reveal delay={100} className="space-y-4">
            <button
              onClick={copy}
              className="group flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
              aria-label="Copy email address"
            >
              {EMAIL}
              <span className="grid h-8 w-8 place-items-center rounded-full border transition-colors group-hover:border-primary">
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </span>
              <span
                className={`font-mono text-xs text-primary transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}
                aria-live="polite"
              >
                {copied ? "Copied!" : ""}
              </span>
            </button>
            <a
              href="tel:+6590722122"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" /> +65 9072 2122
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Singapore
            </p>
          </Reveal>

          <Reveal delay={200} className="flex flex-wrap items-start gap-3 md:justify-end">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="pill pill-ghost">
              <FileText className="h-4 w-4" /> Resume
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
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
