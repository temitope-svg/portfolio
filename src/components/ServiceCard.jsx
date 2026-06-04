import {
  Brackets,
  Code,
  Database,
  Lightbulb,
  PenTool,
  Search,
  Smartphone,
} from "lucide-react";

const ICON_MAP = {
  code: Code,
  database: Database,
  lightbulb: Lightbulb,
  smartphone: Smartphone,
  search: Search,
  "pen-tool": PenTool,
};

const ServiceCard = ({ service }) => {
  const Icon = ICON_MAP[service.icon] ?? Code;

  return (
    <article className="relative flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-[0_8px_32px_rgba(254,140,52,0.08)] ring-1 ring-spice-400/15 sm:p-6">
      <div
        className="pointer-events-none absolute -top-12 -left-12 h-32 w-32 rounded-full bg-spice-400/10 blur-2xl"
        aria-hidden="true"
      />
      <Icon className="relative h-7 w-7 text-accent-highlight" strokeWidth={1.5} />
      <div className="relative space-y-2">
        <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
