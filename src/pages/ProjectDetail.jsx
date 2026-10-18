import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/Footer";
import BulletList from "../components/BulletList";
import ProjectGallery from "../components/ProjectGallery";
import { PROJECTS, getProjectById, getRelatedProjects } from "../data/projects";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE_PATH,
  DEFAULT_TITLE,
  SITE_NAME,
} from "../config/site";
import { usePageMeta } from "../hooks/usePageMeta";

const PLACEHOLDER_GRADIENTS = [
  "from-neutral-800 via-neutral-700 to-spice-900/40",
  "from-spice-950 via-neutral-800 to-neutral-900",
  "from-neutral-900 via-spice-900/30 to-neutral-800",
];

const linkBase =
  "inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const related = getRelatedProjects(id, 3);

  usePageMeta({
    title: project ? `${project.title} · ${SITE_NAME}` : DEFAULT_TITLE,
    description: project?.description ?? DEFAULT_DESCRIPTION,
    imagePath: project?.image ?? DEFAULT_IMAGE_PATH,
    path: project ? `/projects/${project.id}` : "/",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace state={{ scrollTo: "portfolio" }} />;
  }

  const isInternalLive = project.liveUrl?.startsWith("/");
  const projectIndex = Math.max(
    0,
    PROJECTS.findIndex((item) => item.id === project.id),
  );
  const gradient = PLACEHOLDER_GRADIENTS[projectIndex % PLACEHOLDER_GRADIENTS.length];

  const onNav = {
    home: () => navigate("/", { state: { scrollTo: "home" } }),
    portfolio: () => navigate("/", { state: { scrollTo: "portfolio" } }),
    about: () => navigate("/", { state: { scrollTo: "about" } }),
    services: () => navigate("/", { state: { scrollTo: "services" } }),
    contact: () => navigate("/", { state: { scrollTo: "contact" } }),
  };

  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <Header active="portfolio" onNav={onNav} />

      <main className="pt-[var(--header-offset)]">
        <article className="page-section py-12 md:py-16">
          <div className="section-inner space-y-10">
            <div className="space-y-6">
              <Link
                to="/"
                state={{ scrollTo: "portfolio" }}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-highlight"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                Back to Recent Works
              </Link>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-highlight">
                  {project.type} · {project.year}
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
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

              <div className="flex flex-wrap gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    className={`${linkBase} bg-accent-highlight text-neutral-950`}
                    {...(isInternalLive
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <ExternalLink className="h-4 w-4" strokeWidth={2} />
                    Live Preview
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} border border-border bg-surface text-foreground`}
                  >
                    <Code className="h-4 w-4" strokeWidth={2} />
                    View Code
                  </a>
                ) : null}
              </div>
            </div>

            {project.gallery ? (
              <ProjectGallery gallery={project.gallery} title={project.title} />
            ) : (
              <div className="overflow-hidden rounded-2xl border border-border bg-surface ring-1 ring-spice-400/15">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} px-6`}
                    >
                      <span className="text-center text-lg font-semibold uppercase tracking-wider text-neutral-300 md:text-2xl">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
              <div className="space-y-10">
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground md:text-2xl">Overview</h2>
                  {project.overview.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground md:text-2xl">Key Features</h2>
                  <BulletList items={project.features} />
                </section>

                {project.outcome ? (
                  <section className="space-y-4 rounded-xl border border-border bg-surface p-5 ring-1 ring-spice-400/10 sm:p-6">
                    <h2 className="text-xl font-bold text-foreground">Outcome</h2>
                    <p className="leading-relaxed text-muted">{project.outcome}</p>
                    <BulletList items={project.results} />
                  </section>
                ) : null}
              </div>

              <aside className="h-fit space-y-4 rounded-xl border border-border bg-surface p-5 ring-1 ring-spice-400/10 lg:sticky lg:top-[calc(var(--header-offset)+1rem)]">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Project Info
                </h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted">Role</dt>
                    <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Year</dt>
                    <dd className="mt-1 font-medium text-foreground">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Type</dt>
                    <dd className="mt-1 font-medium text-foreground">{project.type}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Stack</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-spice-400/25 bg-spice-500/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent-highlight"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>

            {related.length > 0 ? (
              <section className="space-y-5 border-t border-border pt-10">
                <h2 className="text-xl font-bold text-foreground md:text-2xl">More Projects</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={`/projects/${item.id}`}
                      className="rounded-xl border border-border bg-surface p-4 ring-1 ring-spice-400/10 transition hover:-translate-y-0.5 hover:ring-spice-400/30"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent-highlight">
                        {item.type}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>

        <Footer onNav={onNav} onBackToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </main>
    </div>
  );
}
