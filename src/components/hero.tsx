import Link from "next/link";
import { beforeAfterProjects, site, stats } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

const heroProject = beforeAfterProjects.find((p) => p.featured) ?? beforeAfterProjects[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[4.5rem]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,24,49,0.4),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="animate-fade-up">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-maroon/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon-light">
                Lic. {site.license}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/70">
                Licensed &amp; bonded
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Before &amp; after transformations across California
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              {site.description} Drag the slider to see real project results.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary">
                Get a free estimate
              </Link>
              <Link
                href="#work"
                className="btn-secondary !border-white/20 !bg-white/10 !text-white hover:!border-white/40"
              >
                View all projects
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="font-display text-2xl font-semibold text-white">{item.value}</dt>
                  <dd className="mt-0.5 text-xs text-white/50">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-up delay-200">
            <BeforeAfterSlider
              beforeSrc={heroProject.before}
              afterSrc={heroProject.after}
              beforeAlt={`Before — ${heroProject.title}`}
              afterAlt={`After — ${heroProject.title}`}
              autoSlide
              className="shadow-2xl ring-1 ring-white/15"
            />
            <p className="mt-4 text-center text-sm text-white/50">
              {heroProject.title} · {heroProject.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
