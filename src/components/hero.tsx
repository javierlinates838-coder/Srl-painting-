import Link from "next/link";
import { beforeAfterProjects, heroStats, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="mesh-dark relative flex flex-col overflow-hidden pt-[4.5rem] text-white lg:min-h-[min(92vh,920px)] lg:justify-center">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-brand/25 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-light/10 blur-[100px]"
        aria-hidden
      />

      <div className="container-main relative !pb-10 !pt-8 sm:section-pad sm:!pb-20 sm:!pt-12 md:!pb-24 md:!pt-16">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <div className="reveal pill border-white/15 bg-white/8 text-zinc-200 backdrop-blur-md">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-light shadow-[0_0_10px_#f43f5e]"
                aria-hidden
              />
              C-33 Licensed · Bonded · Lic. {site.license}
            </div>

            <h1 className="reveal reveal-d1 display-xl mt-5 text-balance sm:mt-7">
              <span className="text-white">Painting done </span>
              <span className="text-gradient">right.</span>
            </h1>

            <p className="reveal reveal-d2 mt-4 max-w-lg text-[1rem] leading-relaxed text-zinc-400 sm:mt-5 sm:text-[1.0625rem]">
              {site.heroDescription}
            </p>

            <div className="reveal reveal-d3 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Request Free Estimate
              </Link>
              <Link href="#work" className="btn btn-outline w-full sm:w-auto">
                See Before &amp; After
              </Link>
            </div>

            {/* Stack on narrow phones — no cramped 3-column squeeze */}
            <div className="reveal reveal-d3 mt-6 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3 min-[420px]:gap-3 sm:mt-10">
              {heroStats.map((s) => (
                <div
                  key={s.l}
                  className="stat-card flex items-center justify-between gap-3 px-4 py-3 min-[420px]:block min-[420px]:px-5 min-[420px]:py-4 min-[420px]:text-center"
                >
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">{s.n}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 min-[420px]:mt-0.5">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <div className="scrollbar-hide reveal reveal-d4 -mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:mt-6 sm:flex-wrap sm:overflow-visible sm:px-0">
              {serviceAreas.map((a) => (
                <span
                  key={a.city}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-400 backdrop-blur-sm transition hover:border-brand-light/40 hover:bg-white/10 hover:text-white sm:shrink"
                >
                  {a.city}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2 min-w-0">
            <div className="float relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/45 via-transparent to-brand-light/25 blur-2xl"
                aria-hidden
              />
              <BeforeAfterSlider
                beforeSrc={project.before}
                afterSrc={project.after}
                beforeAlt={`Before — ${project.title}`}
                afterAlt={`After — ${project.title}`}
                autoSlide
                priority
                className="relative shadow-2xl shadow-black/50 ring-1 ring-white/20"
              />
            </div>
            <p className="mt-3 flex flex-col gap-1.5 text-[13px] sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:text-[12px]">
              <span className="text-zinc-400">
                {project.title} · {project.location}
              </span>
              <span className="font-semibold text-brand-light sm:font-medium sm:text-brand-light/90">
                ← drag to compare →
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Hidden on mobile — sticky bar handles navigation */}
      <a
        href="#work"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-300 sm:flex"
        aria-label="Scroll to our work"
      >
        <span>Explore</span>
        <svg className="scroll-cue h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
