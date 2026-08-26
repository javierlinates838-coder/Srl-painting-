import Link from "next/link";
import { beforeAfterProjects, heroStats, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="bg-dark noise-overlay relative min-h-[92vh] overflow-hidden pt-[4.5rem] text-white">
      <div className="hero-mesh" aria-hidden />
      <div className="container-main relative flex min-h-[calc(92vh-4.5rem)] flex-col justify-center py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="pill text-zinc-300">
              <span className="pill-dot" aria-hidden />
              C-33 Licensed · Bonded · Lic. {site.license}
            </p>

            <h1 className="display-xl mt-7 text-balance">
              <span className="text-white">{site.heroHeadline} </span>
              <span className="text-gradient">{site.heroHeadlineAccent}</span>
            </h1>

            <p className="mt-6 max-w-lg text-[1.125rem] leading-relaxed text-zinc-400">
              {site.heroDescription}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Get Your Free Estimate
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="#work" className="btn btn-outline w-full sm:w-auto">
                See Before &amp; After
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {heroStats.map((s) => (
                <div key={s.l} className="stat-card text-center">
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">{s.n}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span
                  key={a.city}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-zinc-400 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-zinc-300"
                >
                  {a.city}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="animate-float">
              <BeforeAfterSlider
                beforeSrc={project.before}
                afterSrc={project.after}
                beforeAlt={`Before — ${project.title}`}
                afterAlt={`After — ${project.title}`}
                priority
                className="shadow-2xl shadow-black/50 ring-1 ring-white/15"
              />
            </div>
            <div className="glass absolute -bottom-4 -left-4 hidden rounded-xl px-4 py-3 sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Featured project</p>
              <p className="font-display mt-0.5 text-sm font-bold text-white">{project.title}</p>
            </div>
            <p className="mt-4 text-center text-[13px] text-zinc-500 sm:text-left">
              {project.title} · {project.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
