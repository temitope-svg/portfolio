import { forwardRef } from "react";
import { SERVICES } from "../data/services";
import ServiceCard from "./ServiceCard";

const Services = forwardRef((props, ref) => (
  <section id="services" ref={ref} className="page-section bg-background py-16 md:py-24">
    <div className="section-inner space-y-10">
      <h2 className="section-title">Services</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
));

export default Services;
