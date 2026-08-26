import Link from "next/link";
import { beforeAfterProjects, heroStats, paintChips, serviceAreas, site } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="bg-dark relative overflow-hidden pt-[4.75rem] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-main relative py-14 sm:py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="pill text-zinc-300">
              {site.heroEyebrow}
              <span className="text-gold">· Lic. {site.license}</span>
            </p>

            <h1 className="display-xl mt-7 text-balance">
              {site.heroHeadlineLead}
              <br />
              <span className="text-gradient">{site.heroHeadlineAccent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.125rem] leading-relaxed text-pretty text-zinc-400">
              {site.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Get a written estimate
              </Link>
              <Link href="#work" className="btn btn-outline w-full sm:w-auto">
                Drag the before &amp; afters
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden>
                {paintChips.map((c) => (
                  <span key={c.name} className="chip" style={{ background: c.hex }} title={c.name} />
                ))}
              </div>
              <p className="text-[12px] font-medium tracking-wide text-zinc-500">
                Colors chosen for California light
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {heroStats.map((s) => (
                <div key={s.l} className="stat-card text-center">
                  <p className="font-display text-2xl font-medium text-white">{s.n}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <BeforeAfterSlider
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              preload
              className="shadow-[0_30px_80px_rgba(0,0,0,.45)] ring-1 ring-white/15"
            />
            <div className="mt-4 flex items-start justify-between gap-4">
              <p className="text-[13px] leading-relaxed text-zinc-400">
                <span className="font-display text-[15px] italic text-white">{project.title}</span>
                <br />
                {project.location} · {project.scope}
              </p>
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                Drag to compare
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-1 gap-y-2 border-t border-white/10 pt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {serviceAreas.map((a, i) => (
            <li key={a.city} className="flex items-center">
              {i > 0 ? <span className="mx-3 text-gold/70" aria-hidden>·</span> : null}
              <span className="text-zinc-300">{a.city}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
