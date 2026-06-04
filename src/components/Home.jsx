import { forwardRef } from "react";

const STATS = [
  { value: "30+", label: "Projects" },
  { value: "3+", label: "Years" },
  { value: "100%", label: "Clients sat" },
];

const StatsBar = ({ className = "", variant = "mobile" }) => {
  if (variant === "desktop") {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-neutral-900 px-6 py-5 shadow-[0_12px_40px_rgba(254,140,52,0.12)] ring-1 ring-spice-400/25 ${className}`}
      >
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spice-400 to-transparent"
          aria-hidden="true"
        />
        <div className="flex items-center justify-between gap-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex-1 text-center">
              <p className="text-lg font-semibold text-spice-400 lg:text-xl">{value}</p>
              <p className="mt-0.5 text-xs text-neutral-400 lg:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center space-x-12 rounded-tl-4xl rounded-tr-4xl bg-surface-elevated py-4 text-white dark:text-foreground ${className}`}
    >
      {STATS.map(({ value, label }) => (
        <div key={label} className="text-center">
          <p>{value}</p>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
};

const Home = forwardRef((props, ref) => (
  <section
    id="home"
    ref={ref}
    className="page-section relative flex min-h-dvh flex-col bg-background pt-[var(--header-offset)]"
  >
    {/* Mobile layout */}
    <div className="flex flex-1 flex-col justify-center gap-6 px-4 pb-10 pt-6 md:hidden">
      <div className="order-first">
        <div className="mt-4 flex items-center justify-center">
          <img src="human.png" alt="Omolola Sodiq Temitope" />
        </div>
        <div className="mt-4 flex items-center justify-center space-x-4">
          <p className="text-md text-accent">3+ Years exp</p>
          <p className="text-md text-accent">30+ Projects</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Omolola Sodiq
          <span className="text-accent"> Temitope</span>
        </h1>
        <h2 className="mb-2 text-lg text-accent">Frontend & Mobile Developer</h2>
        <p className="mb-1 px-6 text-[20px] text-muted">
          Fast, responsive web and mobile interfaces built for{" "}
          <span className="font-medium text-foreground">Performance </span>
          and great UX.
        </p>
        <div className="mt-6 flex w-full justify-center space-x-4">
          <button
            className="rounded-3xl bg-accent px-6 py-2 text-white transition duration-500 hover:opacity-90"
            onClick={props.onContact}
          >
            Hire Me
          </button>
          <button
            className="rounded-3xl border border-accent px-6 py-2 text-accent transition duration-500 hover:bg-accent hover:text-white"
            onClick={props.onViewWork}
          >
            View My Work
          </button>
        </div>
      </div>
      <StatsBar className="shrink-0" />
    </div>

    {/* Desktop layout */}
    <div className="hidden flex-1 items-center px-12 pb-12 md:flex lg:px-20 xl:px-32">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-10 lg:gap-16">
        <div className="flex-1">
          <h1 className="text-4xl font-bold uppercase leading-tight tracking-wide text-foreground lg:text-5xl xl:text-[3.25rem]">
            Omolola Sodiq
            <br />
            Temitope
          </h1>
          <p className="mt-8 text-xl text-foreground lg:text-2xl">
            A Professional{" "}
            <span className="font-medium text-accent-highlight">Freelance</span>
          </p>
          <h2 className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-foreground lg:text-base">
            <span className="relative inline-block pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-foreground">
              Frontend
            </span>
            {" "}& Mobile Developer
          </h2>
          <div className="mt-10">
            <button
              type="button"
              onClick={props.onContact}
              className="group rounded-full bg-gradient-to-r from-accent to-spice-600 p-px transition-opacity hover:opacity-90"
            >
              <span className="block rounded-full bg-background px-10 py-2.5 text-sm font-medium uppercase tracking-wider text-foreground">
                Hire Me
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-[280px] flex-col items-center sm:max-w-[300px] lg:max-w-[320px]">
            <div className="relative w-full">
              <div
                className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-spice-400/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl bg-background shadow-[0_8px_32px_rgba(254,140,52,0.18)] ring-1 ring-spice-200/70 dark:ring-spice-800/50">
                <img
                  src="human.png"
                  alt="Omolola Sodiq Temitope"
                  className="mx-auto block max-h-[50vh] w-full object-contain lg:max-h-[54vh]"
                />
              </div>
            </div>
            <StatsBar variant="desktop" className="-mt-1 w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default Home;
