import Link from "next/link";
import { beforeAfterProjects, heroStats, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="bg-section-alt pt-[var(--header-h)]">
      <div className="container-main">
        <div className="grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-16 xl:py-20">
          <div className="max-w-xl lg:max-w-none">
            <p className="label">C-33 licensed · Bonded · Lic. {site.license}</p>

            <h1 className="display-xl mt-6 text-balance">
              {site.heroHeadline}{" "}
              <span className="text-accent">{site.heroHeadlineAccent}</span>
            </h1>

            <p className="body-lg mt-6 max-w-lg">{site.heroDescription}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Get My Free Estimate
                <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="#work" className="btn btn-outline w-full sm:w-auto">
                See Our Work
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted" aria-label="Credentials">
              {heroStats.map((s) => (
                <li key={s.l} className="flex items-center gap-2">
                  <span className="font-semibold text-ink">{s.n}</span>
                  <span>{s.l}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span
                  key={a.city}
                  className="rounded-full border border-[var(--line)] bg-paper px-3 py-1 text-xs font-medium text-ink-muted"
                >
                  {a.city}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-lg ring-1 ring-black/5">
              <BeforeAfterSlider
                beforeSrc={project.before}
                afterSrc={project.after}
                beforeAlt={`Before — ${project.title}`}
                afterAlt={`After — ${project.title}`}
                priority
                aspect="16/11"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg text-ink">{project.title}</p>
                <p className="mt-0.5 text-sm text-ink-muted">{project.scope}</p>
              </div>
              <p className="shrink-0 text-xs font-medium uppercase tracking-wide text-brand">
                Drag to compare
              </p>
            </div>
            <div className="absolute -bottom-3 -left-3 hidden rounded-lg border border-[var(--line)] bg-white px-4 py-3 shadow-md lg:block">
              <p className="text-xs font-medium text-ink-muted">Featured project</p>
              <p className="font-display text-sm text-ink">{project.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
