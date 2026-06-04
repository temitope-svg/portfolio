import { Bird, Link2, Mail, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../data/contact";

const ICON_MAP = {
  twitter: Bird,
  linkedin: Link2,
  "message-circle": MessageCircle,
  mail: Mail,
};

const SocialLinks = () => (
  <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
    {SOCIAL_LINKS.map(({ id, label, href, icon }) => {
      const Icon = ICON_MAP[icon] ?? Mail;
      return (
        <a
          key={id}
          href={href}
          className="flex items-center gap-2 text-foreground transition-colors hover:text-accent-highlight"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <Icon className="h-5 w-5" strokeWidth={1.5} />
          <span className="text-sm font-medium">{label}</span>
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
