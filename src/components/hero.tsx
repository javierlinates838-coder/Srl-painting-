import Link from "next/link";
import { beforeAfterProjects, site, serviceAreas } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="bg-chalk border-b border-[var(--line)] pt-[4.5rem]">
      <div className="container-main grid items-end gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28">
        <div className="max-w-xl">
          <p className="overline">{site.tagline}</p>

          <h1 className="headline-xl mt-8 text-balance">
            {site.heroHeadline}
            <br />
            <span className="font-serif-italic text-oxide">{site.heroHeadlineAccent}</span>
          </h1>

          <p className="prose-body mt-8 max-w-md">{site.heroDescription}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" className="btn btn-fill w-full sm:w-auto">
              Request estimate
            </Link>
            <Link href="#work" className="btn btn-line w-full sm:w-auto">
              View work
            </Link>
          </div>

          <hr className="hairline mt-12" />

          <p className="mt-6 text-[0.8125rem] leading-relaxed text-umber">
            Serving{" "}
            {serviceAreas.map((a, i) => (
              <span key={a.city}>
                {i > 0 && (i === serviceAreas.length - 1 ? ", and " : ", ")}
                {a.city}
              </span>
            ))}
            .
          </p>
        </div>

        <div>
          <BeforeAfterSlider
            beforeSrc={project.before}
            afterSrc={project.after}
            beforeAlt={`Before — ${project.title}`}
            afterAlt={`After — ${project.title}`}
            priority
            className="frame"
          />
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-[0.8125rem] text-umber">
            <span className="font-display text-[1rem] text-ink">{project.title}</span>
            <span>{project.scope}</span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
