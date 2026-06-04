const PLACEHOLDER_GRADIENTS = [
  "from-neutral-800 via-neutral-700 to-spice-900/40",
  "from-spice-950 via-neutral-800 to-neutral-900",
  "from-neutral-900 via-spice-900/30 to-neutral-800",
];

const PortfolioCard = ({ project, index = 0 }) => {
  const gradient = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm ring-1 ring-spice-400/10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} px-4`}
          >
            <span className="text-center text-sm font-semibold uppercase tracking-wider text-neutral-300">
              {project.imageLabel ?? project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-foreground sm:text-xl">{project.title}</h3>
          <p className="text-sm text-muted">{project.description}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/90">
            {project.stack}
          </p>
        </div>

        <div className="mt-auto flex gap-2 pt-1">
          <a
            href={project.downloadUrl}
            className="flex flex-1 items-center justify-center rounded-lg bg-accent-highlight py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
          >
            Download
          </a>
          <a
            href={project.liveUrl}
            className="flex flex-1 items-center justify-center rounded-lg bg-accent-highlight py-2.5 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
          >
            Live Preview
          </a>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
