import Link from "next/link";
import { beforeAfterProjects, heroStats, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="bg-dark relative overflow-hidden pt-[4.5rem] text-white">
      <div className="container-main relative py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="pill text-zinc-300">
              C-33 Licensed · Bonded · Lic. {site.license}
            </p>

            <h1 className="display-xl mt-6 text-balance">
              <span className="text-white">Quality painting, </span>
              <span className="text-gradient">done right.</span>
            </h1>

            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-zinc-400">
              {site.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Request Free Estimate
              </Link>
              <Link href="#work" className="btn btn-outline w-full sm:w-auto">
                View Our Work
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {heroStats.map((s) => (
                <div key={s.l} className="stat-card text-center">
                  <p className="font-display text-xl font-bold text-white">{s.n}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span
                  key={a.city}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-400"
                >
                  {a.city}
                </span>
              ))}
            </div>
          </div>

          <div>
            <BeforeAfterSlider
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              priority
              className="shadow-2xl shadow-black/40 ring-1 ring-white/15"
            />
            <p className="mt-3 text-[13px] text-zinc-500">
              {project.title} · {project.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
