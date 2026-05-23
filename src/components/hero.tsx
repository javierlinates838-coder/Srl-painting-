import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="relative overflow-hidden bg-charcoal pt-[4.5rem] text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(127,29,58,.4),transparent_55%)]" />

      <div className="container-main section-pad relative !pt-14 md:!pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-300">
                C-33 Licensed · Bonded · Lic. {site.license}
              </span>
            </div>

            <h1 className="reveal reveal-d1 display-xl mt-6 text-white">
              Painting done right.
              <span className="mt-2 block text-zinc-400">Prep, precision, and finishes that last.</span>
            </h1>

            <p className="reveal reveal-d2 body-lg mt-6 max-w-lg !text-zinc-400">
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

            <div className="reveal reveal-d3 mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                { n: "4", l: "Core services" },
                { n: "4", l: "Cities served" },
                { n: "Free", l: "Estimates" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl font-bold text-white">{s.n}</p>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2">
            <BeforeAfterSlider
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              autoSlide
              className="shadow-2xl shadow-black/40 ring-1 ring-white/10"
            />
            <p className="mt-3 text-[12px] text-zinc-500">
              {project.title} · {project.location} · drag slider to compare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
