import {
  Atom,
  Braces,
  Cloud,
  Code2,
  Database,
  Flame,
  GitBranch,
  Layers,
  Package,
  PenTool,
  Server,
  Smartphone,
  Type,
} from "lucide-react";

const ICON_MAP = {
  braces: Braces,
  atom: Atom,
  smartphone: Smartphone,
  server: Server,
  database: Database,
  flame: Flame,
  package: Package,
  "pen-tool": PenTool,
  layers: Layers,
  type: Type,
  cloud: Cloud,
  "git-branch": GitBranch,
};

const SkillsGrid = ({ skills }) => (
  <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 md:gap-8">
    {skills.map(({ name, icon }) => {
      const Icon = ICON_MAP[icon] ?? Code2;
      return (
        <div key={name} className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface ring-1 ring-border">
            <Icon className="h-6 w-6 text-accent-highlight" strokeWidth={1.5} />
          </div>
          <span className="text-xs text-foreground sm:text-sm">{name}</span>
        </div>
      );
    })}
  </div>
);

export default SkillsGrid;
