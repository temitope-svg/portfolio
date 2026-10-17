import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Monitor, Smartphone } from "lucide-react";

const TABS = [
  { id: "web", label: "Web", Icon: Monitor },
  { id: "mobile", label: "Mobile", Icon: Smartphone },
];

function BrowserFrame({ children, label }) {
  return (
    <div className="w-full max-w-4xl origin-center scale-[0.96] transition duration-500 ease-out group-hover/stage:scale-100 sm:scale-[0.98]">
      <div className="overflow-hidden rounded-xl border border-neutral-700/80 bg-neutral-900 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-spice-400/20">
        <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/95 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
          <div className="ml-2 flex min-w-0 flex-1 items-center rounded-md bg-neutral-800/90 px-3 py-1">
            <p className="truncate text-[11px] text-neutral-400">{label}</p>
          </div>
        </div>
        <div className="aspect-[16/10] overflow-hidden bg-neutral-950">{children}</div>
      </div>
    </div>
  );
}

function PhoneMockup({ children }) {
  return (
    <div className="relative origin-center scale-[0.94] transition duration-500 ease-out group-hover/stage:scale-100 sm:scale-[0.97]">
      <div
        className="pointer-events-none absolute inset-x-6 bottom-2 h-8 rounded-full bg-spice-400/25 blur-2xl sm:inset-x-10"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-[min(100%,18rem)] drop-shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:w-[20rem]">
        <div className="aspect-[9/19] overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default function ProjectGallery({ gallery, title }) {
  const web = gallery?.web?.filter((item) => item?.src) ?? [];
  const mobile = gallery?.mobile?.filter((item) => item?.src) ?? [];

  const availableTabs = TABS.filter((tab) => (tab.id === "web" ? web : mobile).length > 0);
  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id ?? "web");
  const slides = activeTab === "mobile" ? mobile : web;
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (!availableTabs.some((tab) => tab.id === activeTab) && availableTabs[0]) {
      setActiveTab(availableTabs[0].id);
    }
  }, [availableTabs, activeTab]);

  useEffect(() => {
    setIndex(0);
    setAnimKey((value) => value + 1);
  }, [activeTab, title]);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((value) => (value - 1 + slides.length) % slides.length);
        setAnimKey((value) => value + 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((value) => (value + 1) % slides.length);
        setAnimKey((value) => value + 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const safeIndex = Math.min(index, slides.length - 1);
  const current = slides[safeIndex];
  const isMobile = activeTab === "mobile";

  const goPrev = () => {
    setIndex((value) => (value - 1 + slides.length) % slides.length);
    setAnimKey((value) => value + 1);
  };

  const goNext = () => {
    setIndex((value) => (value + 1) % slides.length);
    setAnimKey((value) => value + 1);
  };

  const selectSlide = (slideIndex) => {
    setIndex(slideIndex);
    setAnimKey((value) => value + 1);
  };

  const Frame = isMobile ? PhoneMockup : BrowserFrame;
  const image = (
    <img
      key={`${current.src}-${animKey}`}
      src={current.src}
      alt={current.alt ?? `${title} ${activeTab} screenshot`}
      className={`gallery-slide-in h-full w-full ${
        isMobile ? "object-contain object-center" : "object-cover object-top"
      }`}
    />
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-highlight">
            Product visuals
          </p>
          <h2 className="text-xl font-bold text-foreground md:text-2xl">Screenshots</h2>
        </div>

        {availableTabs.length > 1 ? (
          <div
            className="inline-flex rounded-full border border-border bg-surface/80 p-1 shadow-sm ring-1 ring-spice-400/15 backdrop-blur"
            role="tablist"
            aria-label="Screenshot platform"
          >
            {availableTabs.map(({ id, label, Icon }) => {
              const selected = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    selected
                      ? "bg-accent-highlight text-neutral-950 shadow-[0_8px_20px_rgba(254,140,52,0.28)]"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  {label}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="group/stage relative overflow-hidden rounded-3xl border border-border bg-neutral-950 ring-1 ring-spice-400/20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(254,140,52,0.16),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(254,111,1,0.08),transparent_50%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spice-400/50 to-transparent"
          aria-hidden="true"
        />

        <div
          className={`relative flex min-h-[22rem] items-center justify-center px-4 py-8 sm:min-h-[26rem] sm:px-8 sm:py-10 md:min-h-[30rem] ${
            isMobile ? "md:py-12" : ""
          }`}
        >
          <Frame label={current.label ?? title}>{image}</Frame>

          {slides.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute top-1/2 left-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:border-spice-400/40 hover:bg-neutral-900 sm:left-5"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute top-1/2 right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:border-spice-400/40 hover:bg-neutral-900 sm:right-5"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </>
          ) : null}
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-neutral-950/80 px-4 py-3.5 backdrop-blur sm:px-6">
          <div>
            <p className="text-sm font-semibold text-white">
              {current.label ?? `${isMobile ? "Mobile" : "Web"} view`}
            </p>
            <p className="text-xs text-neutral-400">
              {isMobile ? "Mobile app" : "Web app"} · {safeIndex + 1} of {slides.length}
            </p>
          </div>

          {slides.length > 1 ? (
            <div className="flex items-center gap-2" role="tablist" aria-label="Screenshot slides">
              {slides.map((slide, slideIndex) => {
                const active = slideIndex === safeIndex;
                return (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`Show screenshot ${slideIndex + 1}`}
                    aria-current={active}
                    onClick={() => selectSlide(slideIndex)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active
                        ? "w-7 bg-accent-highlight"
                        : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
                    }`}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {slides.map((slide, slideIndex) => {
            const active = slideIndex === safeIndex;
            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => selectSlide(slideIndex)}
                className={`group/thumb relative shrink-0 overflow-hidden rounded-xl border bg-surface transition duration-300 ${
                  isMobile ? "h-28 w-16 sm:h-32 sm:w-[4.5rem]" : "h-20 w-32 sm:h-24 sm:w-40"
                } ${
                  active
                    ? "scale-105 border-accent-highlight shadow-[0_10px_30px_rgba(254,140,52,0.22)] ring-2 ring-spice-400/35"
                    : "border-border opacity-70 hover:scale-[1.03] hover:opacity-100"
                }`}
                aria-label={`Select ${slide.label ?? `screenshot ${slideIndex + 1}`}`}
              >
                <img
                  src={slide.src}
                  alt=""
                  className={`h-full w-full transition duration-500 group-hover/thumb:scale-105 ${
                    isMobile ? "object-contain object-center bg-neutral-950" : "object-cover object-top"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/85 to-transparent px-2 pt-6 pb-1.5 text-left text-[10px] font-semibold text-white ${
                    active ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
