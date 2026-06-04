import { forwardRef } from "react";
import { PROJECTS } from "../data/projects";
import PortfolioCard from "./PortfolioCard";

const Portfolio = forwardRef((props, ref) => (
  <section id="portfolio" ref={ref} className="page-section bg-background py-16 md:py-24">
    <div className="section-inner space-y-10">
      <h2 className="section-title">Recent Works</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {PROJECTS.map((project, index) => (
          <PortfolioCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
));

export default Portfolio;
