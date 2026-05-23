import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(127,29,58,.45),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(127,29,58,.12),transparent_40%)]" />

      <div className="container-main section-pad relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="reveal flex flex-wrap items-center gap-3">
              <span className="label text-brand-light">California Licensed Contractor</span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="text-[12px] font-medium text-zinc-500">C-33 · Lic. {site.license}</span>
            </div>

            <h1 className="reveal reveal-d1 display-xl mt-5 text-white">
              Painting done right.
              <span className="mt-1 block text-zinc-400">Prep, precision, and finishes that last.</span>
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
                { n: "C-33", l: "State license" },
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
            <p className="mt-3 flex items-center justify-between text-[12px] text-zinc-500">
              <span>{project.title} · {project.location}</span>
              <span className="text-zinc-600">Drag slider to compare</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
