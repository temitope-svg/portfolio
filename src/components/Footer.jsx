import { ArrowUp } from "lucide-react";
import { FOOTER_NAV, SITE, gmailComposeUrl } from "../data/contact";

const Footer = ({ onNav, onBackToTop }) => (
  <footer className="relative mt-16 bg-gradient-to-b from-neutral-900 to-neutral-950 px-4 py-10 sm:px-6 md:px-12 lg:px-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div className="max-w-md space-y-3">
        <p className="text-2xl font-bold text-accent-highlight">{SITE.brand}</p>
        <p className="text-sm leading-relaxed text-neutral-300">{SITE.tagline}</p>
        <p className="text-sm text-neutral-400">
          Email Me:{" "}
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground transition-colors hover:text-accent-highlight"
          >
            {SITE.email}
          </a>
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 md:items-end">
        <p className="text-sm text-neutral-400">
          © {SITE.copyrightYear} {SITE.brand.toLowerCase()}
        </p>
        <nav className="flex flex-wrap gap-6">
          {FOOTER_NAV.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => onNav?.[id]?.()}
              className="text-sm text-foreground transition-colors hover:text-accent-highlight"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>

    {onBackToTop && (
      <button
        type="button"
        onClick={onBackToTop}
        className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-foreground ring-1 ring-border transition-colors hover:bg-neutral-700 md:right-8 lg:right-12"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    )}
  </footer>
);

export default Footer;
