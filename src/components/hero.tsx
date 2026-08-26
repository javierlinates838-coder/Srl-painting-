import Link from "next/link";
import { beforeAfterProjects, heroStats, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="hero-shell relative overflow-hidden pt-20 text-white">
      <div className="hero-orbit hero-orbit-one" aria-hidden />
      <div className="hero-orbit hero-orbit-two" aria-hidden />
      <div className="container-main relative py-12 sm:py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="relative z-10">
            <p className="eyebrow-light flex items-center gap-3">
              <span className="h-px w-9 bg-gold" />
              Kern County <span aria-hidden>↔</span> Los Angeles
            </p>

            <h1 className="hero-title mt-6 text-balance">
              Paint that makes the whole place <em>feel new.</em>
            </h1>

            <p className="mt-6 max-w-xl text-[1rem] leading-7 text-stone-300 sm:text-[1.075rem]">
              {site.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Get a free estimate
                <span aria-hidden>↗</span>
              </Link>
              <Link href="#work" className="btn btn-outline w-full sm:w-auto">
                See real transformations
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-[11px] font-bold uppercase tracking-[0.12em] text-stone-400">
              <span className="flex items-center gap-2">
                <span className="status-dot" />
                C-33 licensed
              </span>
              <span>Bonded</span>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                CSLB #{site.license}
              </a>
            </div>
          </div>

          <div className="relative lg:-mr-8">
            <div className="hero-project-frame">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
                  Featured transformation
                </span>
                <span className="text-[11px] text-stone-500">Drag to reveal</span>
              </div>
            <BeforeAfterSlider
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
                preload
                className="shadow-2xl shadow-black/50 ring-1 ring-white/15"
            />
              <div className="mt-4 flex items-end justify-between gap-4 px-1">
                <div>
                  <p className="font-display text-xl text-white">{project.title}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-stone-500">
                    {project.location}
                  </p>
                </div>
                <span className="text-right text-[11px] leading-5 text-stone-400">Full prep<br />&amp; prime</span>
              </div>
            </div>
            <div className="hero-proof-card">
              <span className="text-2xl text-gold" aria-hidden>✦</span>
              <p className="font-display text-lg leading-tight text-ink">Prep is the difference you can see.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid border-y border-white/10 sm:grid-cols-3 lg:mt-20">
          {heroStats.map((stat, index) => (
            <div
              key={stat.l}
              className={`flex items-baseline gap-3 py-5 sm:justify-center ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}
            >
              <span className="font-display text-3xl text-white">{stat.n}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">{stat.l}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-stone-600">
          {serviceAreas.map((area) => area.city).join("  ·  ")}
        </p>
      </div>
    </section>
  );
}
