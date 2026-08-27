import Link from "next/link";
import { beforeAfterProjects, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="bg-muted pt-[3.25rem] lg:pt-[4rem]">
      <div className="container-main grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <p className="ios-footnote">{site.tagline}</p>
          <h1 className="display-title mt-3 text-balance">
            {site.heroHeadline}{" "}
            <span className="text-ios-brand">{site.heroHeadlineAccent}</span>
          </h1>
          <p className="ios-callout mt-5 max-w-lg">{site.heroDescription}</p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <Link href="#contact" className="ios-btn ios-btn-brand">
              Get Estimate
            </Link>
            <Link href="#work" className="ios-btn ios-btn-gray">
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
            <div className="px-4 py-3">
              <p className="ios-headline">{project.title}</p>
              <p className="ios-footnote mt-0.5">{project.scope}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
