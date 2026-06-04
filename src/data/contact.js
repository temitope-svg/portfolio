export const SITE = {
  brand: "Temi Forge",
  tagline:
    "Professional frontend & mobile solutions — responsive web, cross-platform apps, and polished UX.",
  email: "codeswithtemi@gmail.com",
  copyrightYear: 2026,
};

/** Opens Gmail compose in the browser (mailto uses the OS default app, not Gmail). */
export const gmailComposeUrl = (to = SITE.email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;

export const SOCIAL_LINKS = [
  { id: "twitter", label: "Twitter", href: "#", icon: "twitter" },
  { id: "linkedin", label: "LinkedIn", href: "#", icon: "linkedin" },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/2348101432952",
    icon: "message-circle",
  },
  { id: "email", label: "Email", href: gmailComposeUrl(), icon: "mail" },
];

export const FOOTER_NAV = [
  { label: "Home", id: "home" },
  { label: "Portfolio", id: "portfolio" },
  { label: "About", id: "about" },
];
