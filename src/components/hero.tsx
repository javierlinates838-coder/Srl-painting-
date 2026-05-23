import Link from "next/link";
import { beforeAfterProjects, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="mesh-dark relative flex min-h-[min(92vh,900px)] flex-col justify-center overflow-hidden pt-[4.5rem] text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]"
        aria-hidden
      />

      <div className="container-main section-pad relative !pb-16 !pt-12 md:!pb-20 md:!pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <div className="reveal pill text-zinc-300">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-light shadow-[0_0_8px_#f43f5e]"
                aria-hidden
              />
              C-33 Licensed · Bonded · Lic. {site.license}
            </div>

            <h1 className="reveal reveal-d1 display-xl mt-7">
              <span className="text-white">Painting done </span>
              <span className="text-gradient">right.</span>
            </h1>

            <p className="reveal reveal-d2 mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-zinc-400">
              {site.description}
            </p>

            <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="btn btn-brand">
                Request Free Estimate
              </Link>
              <Link href="#work" className="btn btn-outline">
                See Before &amp; After
              </Link>
            </div>

            <div className="reveal reveal-d3 mt-10 grid grid-cols-3 gap-3">
              {[
                { n: String(beforeAfterProjects.length), l: "Projects" },
                { n: String(serviceAreas.length), l: "Cities" },
                { n: "Free", l: "Estimates" },
              ].map((s) => (
                <div key={s.l} className="stat-card text-center">
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">{s.n}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal reveal-d4 mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span
                  key={a.city}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-400 transition hover:border-brand-light/40 hover:text-white"
                >
                  {a.city}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2 min-w-0">
            <div className="float relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/40 via-transparent to-brand-light/20 blur-2xl"
                aria-hidden
              />
              <BeforeAfterSlider
                beforeSrc={project.before}
                afterSrc={project.after}
                beforeAlt={`Before — ${project.title}`}
                afterAlt={`After — ${project.title}`}
                autoSlide
                className="relative shadow-2xl shadow-black/50 ring-1 ring-white/15"
              />
            </div>
            <p className="mt-4 flex flex-col gap-1 text-[12px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <span>
                {project.title} · {project.location}
              </span>
              <span className="text-brand-light/80">← drag to compare →</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
