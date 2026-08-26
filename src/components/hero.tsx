import Link from "next/link";
import { beforeAfterProjects, credentials, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";
import { IosGroup, IosRow } from "./ios-group";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="pt-[3.25rem]">
      <div className="container-main space-y-5 pb-6 pt-4">
        <div>
          <p className="ios-footnote">{site.tagline}</p>
          <h1 className="ios-large-title mt-1 text-balance">
            {site.heroHeadline}
            <br />
            <span className="text-ios-brand">{site.heroHeadlineAccent}</span>
          </h1>
          <p className="ios-callout mt-3">{site.heroDescription}</p>
        </div>

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

        <div className="flex flex-wrap gap-2">
          {credentials.slice(0, 3).map((c) => (
            <span key={c.label} className="ios-stat-pill">
              {c.value}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <Link href="#contact" className="ios-btn ios-btn-brand col-span-2">
            Get Estimate
          </Link>
          <Link href="#work" className="ios-btn ios-btn-gray">
            Our Work
          </Link>
          <Link href="#services" className="ios-btn ios-btn-gray">
            Services
          </Link>
        </div>

        <IosGroup>
          <IosRow>
            <span className="ios-row-content">
              <span className="ios-footnote block">Service areas</span>
              <span className="ios-subhead mt-0.5 block">
                {serviceAreas.map((a) => a.city).join(" · ")}
              </span>
            </span>
          </IosRow>
        </IosGroup>
      </div>
    </section>
  );
}
