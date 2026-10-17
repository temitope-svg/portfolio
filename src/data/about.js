/** 3 until Jan 1 2027, then 4 and +1 each calendar year after. */
const EXPERIENCE_YEARS_ANCHOR = new Date(2027, 0, 1);
const EXPERIENCE_YEARS_BEFORE_ANCHOR = 3;
const EXPERIENCE_YEARS_AT_ANCHOR = 4;

export function getExperienceYears(now = new Date()) {
  if (now < EXPERIENCE_YEARS_ANCHOR) return EXPERIENCE_YEARS_BEFORE_ANCHOR;
  return EXPERIENCE_YEARS_AT_ANCHOR + (now.getFullYear() - EXPERIENCE_YEARS_ANCHOR.getFullYear());
}

const experienceYearsLabel = (years) =>
  `${years} ${years === 1 ? "year" : "years"}`;

export const getAboutBio = () => {
  const years = getExperienceYears();
  return [
    { text: "I'm a " },
    { text: "Frontend and Mobile Developer", highlight: true },
    { text: " with " },
    { text: experienceYearsLabel(years), highlight: true },
    {
      text: " of experience building responsive, user-focused web and mobile applications. I specialize in ",
    },
    { text: "React", highlight: true },
    { text: ", " },
    { text: "React Native", highlight: true },
    { text: ", and " },
    { text: "TypeScript", highlight: true },
    {
      text: ", with hands-on experience across tools like REST APIs, Firebase, Expo, Git, and Figma.",
    },
  ];
};

export const ABOUT_BIO = getAboutBio();

export const ABOUT_PARAGRAPHS = [
  "I've contributed to products that solve real problems — including Aztralli, a multi-sided commerce marketplace spanning web and mobile, a full-featured restaurant brand and ordering experience designed to improve conversions through clear CTAs and streamlined flows, and billing and inventory tools built for freelancers and operators who need clarity over complexity.",
  "Beyond writing clean, scalable code, I enjoy working across the full product lifecycle — translating design requirements into reusable components, integrating backend services, and optimizing performance across devices and platforms. I approach every project with a balance of technical problem-solving and product thinking — because good software isn't just functional, it's enjoyable to use.",
  "Whether working independently or as part of a team, I build with care, communicate clearly, and remain committed to creating products that deliver meaningful value to users.",
];

export const EXPERIENCE = [
  {
    id: "freelance",
    role: "Freelance",
    title: "Frontend & Mobile Developer",
    period: "Ongoing",
    description:
      "Designing and shipping responsive web applications and cross-platform mobile experiences using React and React Native. Delivered production-ready projects for clients across e-commerce, marketplace, and ops tooling — from UI architecture to app store-ready builds.",
  },
  {
    id: "personal-projects",
    role: "Open Source Mobile and Web Developer",
    title: "Personal Projects and UI Engineer",
    period: "Ongoing",
    description:
      "Built and maintained a suite of personal projects exploring real-world product challenges — including deep linking integrations, performant list rendering, and scalable component systems across both web and mobile platforms.",
  },
  {
    id: "product-collaborations",
    role: "UI Engineer and Frontend Developer",
    title: "Product Collaborations",
    period: "Recent",
    description:
      "Collaborated on cross-functional product teams to translate design systems into reusable, accessible UI components. Owned frontend performance, API integration, and mobile build pipelines from development through to release.",
  },
];

export const SKILLS = [
  { name: "JavaScript", icon: "braces" },
  { name: "React", icon: "atom" },
  { name: "React Native", icon: "smartphone" },
  { name: "Node.js / Express", icon: "server" },
  { name: "MongoDB", icon: "database" },
  { name: "PostgreSQL", icon: "database" },
  { name: "Firebase", icon: "flame" },
  { name: "Expo", icon: "package" },
  { name: "Figma", icon: "pen-tool" },
  { name: "TypeScript", icon: "type" },
  { name: "AWS / Cloud", icon: "cloud" },
  { name: "Git / GitHub", icon: "git-branch" },
];

export const CV_URL =
  "https://docs.google.com/document/d/1FCc5QK9BF5S27VcwD0xu1HxOneC4hF4Q6OXdw_zpPjM/edit?usp=sharing";
