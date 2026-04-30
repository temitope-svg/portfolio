import { useRef, useState, useEffect } from "react";
import Header from "./components/header"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";


export default function App() {
  const [active, setActive] = useState("home");
  const containerRef = useRef(null);

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { root: containerRef.current, threshold: 0.5 }
    );
    [homeRef, portfolioRef, aboutRef, servicesRef, contactRef].forEach((r) =>
      observer.observe(r.current)
    );
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
    <div className="relative">
      <Header active={active} onNav={onNav} />
      <div
        ref={containerRef}
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",      
          msOverflowStyle: "none",
        }}
        className="[&::-webkit-scrollbar]:hidden" 
      >
        <Home ref={homeRef} onContact={() => scrollTo(contactRef)} onViewWork={() => scrollTo(portfolioRef)} />
        <Portfolio ref={portfolioRef} />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  )
}