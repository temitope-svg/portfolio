import { forwardRef } from "react";
import { ABOUT_BIO, ABOUT_PARAGRAPHS, CV_URL, EXPERIENCE, SKILLS } from "../data/about";
import ExperienceRow from "./about/ExperienceRow";
import SectionHeading from "./about/SectionHeading";
import SkillsGrid from "./about/SkillsGrid";

const About = forwardRef((props, ref) => (
  <section id="about" ref={ref} className="page-section bg-surface/40 py-16 md:py-24">
    <div className="section-inner space-y-10">
      <h2 className="section-title">My Info</h2>

      <div className="space-y-14 md:space-y-16">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="relative mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
              <div className="overflow-hidden rounded-xl bg-neutral-800 ring-1 ring-border">
                <img
                  src="human.png"
                  alt="Omolola Sodiq Temitope"
                  className="aspect-square w-full object-cover object-top"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent md:h-16"
                aria-hidden="true"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <SectionHeading>About Me</SectionHeading>
                <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                  {ABOUT_BIO.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="font-medium text-accent-highlight">
                        {part.text}
                      </span>
                    ) : (
                      <span key={i}>{part.text}</span>
                    )
                  )}
                </p>
                {ABOUT_PARAGRAPHS.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-foreground/90 md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-accent-highlight px-8 py-3 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
              >
                View Resume
              </a>
            </div>
          </div>

          <div>
            <SectionHeading className="mb-6">Experience</SectionHeading>
            <div>
              {EXPERIENCE.map((entry) => (
                <ExperienceRow key={entry.id} entry={entry} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading className="mb-8">Skills</SectionHeading>
            <SkillsGrid skills={SKILLS} />
          </div>
      </div>
    </div>
  </section>
));

export default About;
