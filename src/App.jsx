import { useRef, useState, useEffect } from "react";
import Header from "./components/header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const SECTION_IDS = ["home", "portfolio", "about", "services", "contact"];

function getHeaderOffsetPx() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--header-offset").trim();
  if (raw.endsWith("px")) return parseFloat(raw) || 80;
  const rem = parseFloat(raw) || 5;
  const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return rem * rootFont;
}

function getSectionScrollTop(id, refById) {
  if (id === "home") return 0;
  const el = refById[id]?.current;
  if (!el) return 0;
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - getHeaderOffsetPx());
}

export default function App() {
  const [active, setActive] = useState("home");
  const scrollLockRef = useRef(null);

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const refById = {
    home: homeRef,
    portfolio: portfolioRef,
    about: aboutRef,
    services: servicesRef,
    contact: contactRef,
  };

  const sectionNodes = SECTION_IDS.map((id) => ({ id, ref: refById[id] }));

  const computeActiveSection = () => {
    const offset = getHeaderOffsetPx();
    let current = "home";
    let hasStraddle = false;

    for (const { id, ref } of sectionNodes) {
      const el = ref.current;
      if (!el) continue;
      const { top, bottom } = el.getBoundingClientRect();
      if (top <= offset + 1 && bottom > offset) {
        current = id;
        hasStraddle = true;
      }
    }

    if (!hasStraddle) {
      for (const { id, ref } of sectionNodes) {
        const el = ref.current;
        if (el && el.getBoundingClientRect().top <= offset + 1) current = id;
      }
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = "contact";

    return current;
  };

  const applyScrollSpy = () => {
    const locked = scrollLockRef.current;
    const computed = computeActiveSection();

    if (locked) {
      if (computed !== locked) return;
      scrollLockRef.current = null;
    }

    setActive(computed);
  };

  useEffect(() => {
    const onScrollEnd = () => {
      scrollLockRef.current = null;
      setActive(computeActiveSection());
    };

    applyScrollSpy();
    window.addEventListener("scroll", applyScrollSpy, { passive: true });
    window.addEventListener("resize", applyScrollSpy);
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.removeEventListener("scroll", applyScrollSpy);
      window.removeEventListener("resize", applyScrollSpy);
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, []);

  const scrollToSection = (id) => {
    scrollLockRef.current = id;
    setActive(id);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: getSectionScrollTop(id, refById),
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  const onNav = Object.fromEntries(SECTION_IDS.map((id) => [id, () => scrollToSection(id)]));

  const handleBackToTop = () => scrollToSection("home");

  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <Header active={active} onNav={onNav} />
      <main>
        <Home
          ref={homeRef}
          onContact={() => scrollToSection("contact")}
          onViewWork={() => scrollToSection("portfolio")}
        />
        <Portfolio ref={portfolioRef} />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Contact ref={contactRef} onNav={onNav} onBackToTop={handleBackToTop} />
      </main>
    </div>
  );
}
