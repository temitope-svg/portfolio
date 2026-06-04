import { useRef, useState, useEffect } from "react";
import Header from "./components/header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  const [active, setActive] = useState("home");

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const elements = [homeRef, portfolioRef, aboutRef, servicesRef, contactRef]
      .map((r) => r.current)
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -40% 0px", threshold: [0, 0.15, 0.35, 0.55, 0.75] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onNav = {
    home: () => scrollTo(homeRef),
    portfolio: () => scrollTo(portfolioRef),
    about: () => scrollTo(aboutRef),
    services: () => scrollTo(servicesRef),
    contact: () => scrollTo(contactRef),
  };

  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <Header active={active} onNav={onNav} />
      <main>
        <Home
          ref={homeRef}
          onContact={() => scrollTo(contactRef)}
          onViewWork={() => scrollTo(portfolioRef)}
        />
        <Portfolio ref={portfolioRef} />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Contact
          ref={contactRef}
          onNav={onNav}
          onBackToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </main>
    </div>
  );
}
