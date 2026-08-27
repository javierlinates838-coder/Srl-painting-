import Link from "next/link";
import { beforeAfterProjects, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="relative overflow-hidden bg-dark pt-[3.25rem] lg:pt-[4rem]">
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh" aria-hidden />
      <div className="container-main relative grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <span className="pill-badge">{site.tagline}</span>
          <h1 className="display-title mt-5 text-balance">
            {site.heroHeadline}{" "}
            <span className="text-brand-light">{site.heroHeadlineAccent}</span>
          </h1>
          <p className="ios-callout mt-5 max-w-lg">{site.heroDescription}</p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <Link href="#contact" className="ios-btn ios-btn-brand">
              Get Estimate
            </Link>
            <Link href="#work" className="ios-btn ios-btn-outline">
              View Our Work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
              <span key={a.city} className="ios-stat-pill">
                {a.city}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="ios-hero-card">
            <BeforeAfterSlider
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              priority
            />
            <div className="border-t border-[var(--ios-separator)] px-4 py-3">
              <p className="ios-headline">{project.title}</p>
              <p className="ios-footnote mt-0.5 text-brand-light">{project.scope}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
