import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function FeaturedTransformations() {
  return (
    <section className="section-pad bg-section-warm" aria-label="Featured transformations">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="Featured work"
            title="Real projects, real results"
            description="A few recent transformations from homes and businesses across Kern County and Southern California."
          />
        </Reveal>

        <div className="mt-14 space-y-20 lg:space-y-28">
          {featuredProjects.map((project, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={project.id} delay={1}>
                <div className={`editorial-split ${reverse ? "reverse" : ""}`}>
                  <div className="editorial-media aspect-[4/3] lg:aspect-[5/4]">
                    <Image
                      src={project.after}
                      alt={`After — ${project.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="label">{project.category}</p>
                    <h3 className="display-lg mt-4 text-balance">{project.title}</h3>
                    <p className="mt-2 text-sm font-medium text-brand">{project.location}</p>
                    <p className="body-lg mt-5">{project.description}</p>
                    <p className="mt-3 text-sm text-ink-muted">{project.scope}</p>
                    <Link href="#work" className="btn btn-outline mt-8">
                      View before &amp; after
                      <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
