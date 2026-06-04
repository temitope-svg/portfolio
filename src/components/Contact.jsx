import { forwardRef } from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";

const Contact = forwardRef(({ onNav, onBackToTop }, ref) => (
  <section id="contact" ref={ref} className="page-section bg-background pt-16 md:pt-24">
    <div className="section-inner space-y-10 pb-0">
      <h2 className="section-title">Contact Me</h2>

      <div className="space-y-10">
        <ContactForm />
        <SocialLinks />
      </div>
    </div>

    <Footer onNav={onNav} onBackToTop={onBackToTop} />
  </section>
));

export default Contact;
