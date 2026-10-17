import { Link } from "react-router-dom";
import { ArrowRight, Code, ExternalLink } from "lucide-react";

const PLACEHOLDER_GRADIENTS = [
  "from-neutral-800 via-neutral-700 to-spice-900/40",
  "from-spice-950 via-neutral-800 to-neutral-900",
  "from-neutral-900 via-spice-900/30 to-neutral-800",
];

const linkBase =
  "inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold transition-opacity hover:opacity-90";

const PortfolioCard = ({ project, index = 0 }) => {
  const gradient = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];
  const isInternalLive = project.liveUrl?.startsWith("/");
  const detailPath = `/projects/${project.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-[0_8px_32px_rgba(254,140,52,0.08)] ring-1 ring-spice-400/15 transition duration-300 hover:-translate-y-0.5 hover:ring-spice-400/35">
      <Link to={detailPath} className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} px-4`}
          >
            <span className="text-center text-sm font-semibold uppercase tracking-wider text-neutral-300">
              {project.title}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-foreground sm:text-xl">
            <Link to={detailPath} className="transition-colors hover:text-accent-highlight">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-spice-400/25 bg-spice-500/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent-highlight"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-1">
          <Link
            to={detailPath}
            className={`${linkBase} border border-border bg-background text-foreground`}
          >
            View Details
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <div className="flex gap-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                className={`${linkBase} bg-accent-highlight text-neutral-950`}
                {...(isInternalLive
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <ExternalLink className="h-4 w-4" strokeWidth={2} />
                Live
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBase} ${
                  project.liveUrl
                    ? "border border-border bg-background text-foreground"
                    : "bg-accent-highlight text-neutral-950"
                }`}
              >
                <Code className="h-4 w-4" strokeWidth={2} />
                Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
