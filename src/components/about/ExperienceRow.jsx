const ExperienceRow = ({ entry }) => (
  <div className="grid items-start gap-4 border-b border-border py-8 last:border-b-0 md:grid-cols-2 md:gap-10 md:py-10">
    <p className="text-balance text-xl font-bold leading-snug text-foreground md:text-2xl">
      {entry.role}
    </p>
    <div className="space-y-2">
      <p className="text-lg font-bold text-foreground md:text-xl">{entry.title}</p>
      <p className="text-sm text-muted">{entry.period}</p>
      <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{entry.description}</p>
    </div>
  </div>
);

export default ExperienceRow;
