import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/motion";
import { cn } from "@/lib/utils";

const RESUME_URL =
  "https://drive.google.com/file/d/1dntqFqPre-c5AnWhsQXDb62l6vqkly60/view?usp=sharing";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);
  const { dark, toggle } = useTheme();

  // Scroll progress + condensed state
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
        setScrolled(window.scrollY > 40);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <div
          ref={progressRef}
          className="h-full bg-primary origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b"
            : "py-5 border-b border-transparent"
        )}
      >
        <div className="shell flex items-center justify-between gap-4">
          <a
            href="#top"
            className="group flex items-center gap-3 font-display text-xl"
            aria-label="Back to top"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background text-sm tracking-tight transition-transform duration-500 group-hover:rotate-[360deg]">
              DK
            </span>
            <span className="hidden sm:block text-sm font-sans font-medium tracking-normal text-muted-foreground">
              Daeren Kim
            </span>
          </a>

          <nav
            className={cn(
              "hidden md:flex items-center gap-1 rounded-full border p-1.5 transition-all duration-500",
              scrolled ? "bg-background" : "bg-background/40 backdrop-blur-md"
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active === item.href
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="icon-btn bg-background/60 backdrop-blur-md"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
            >
              <span className="relative h-5 w-5">
                <Sun
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-500",
                    dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                  )}
                />
                <Moon
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-500",
                    dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                  )}
                />
              </span>
            </button>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-solid hidden sm:inline-flex group"
            >
              Resume
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="icon-btn md:hidden bg-background/60 backdrop-blur-md"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[70] bg-background flex flex-col md:hidden">
          <div className="shell flex items-center justify-between py-5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background font-display text-sm">
              DK
            </span>
            <button onClick={() => setIsOpen(false)} className="icon-btn" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="shell flex flex-1 flex-col justify-center gap-2">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="menu-link font-display text-6xl py-1 flex items-baseline gap-4"
                style={{ ["--i" as string]: i }}
              >
                <span className="font-mono text-xs tracking-normal text-primary">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="shell pb-10">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-solid w-full justify-center"
            >
              View Resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
