import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects } from "@/lib/site";
import { Reveal } from "./reveal";

export function EditorialPortfolio() {
  const total = beforeAfterProjects.length;

  return (
    <section id="work" className="section-pad bg-ivory">
      <div className="container-main">
        <div className="mb-16 max-w-xl">
          <p className="meta-brand">Selected work</p>
          <h2 className="editorial-lg mt-4 text-ink">California projects,<br />photographed on site.</h2>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {beforeAfterProjects.map((project, i) => {
            const reverse = project.layout === "offset-right";
            const narrow = project.layout === "offset-left";

            return (
              <Reveal key={project.id} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <article className="portfolio-item">
                  <div className={`grid gap-8 lg:grid-cols-12 lg:items-end`}>
                    <div className={`lg:col-span-3 ${reverse ? "lg:col-start-10 lg:text-right" : ""}`}>
                      <p className="project-index">{project.index}</p>
                      <p className="meta-brand mt-4">{project.category}</p>
                      <h3 className="editorial-md mt-2 uppercase tracking-wide text-ink">
                        {project.title}
                      </h3>
                      <div className={`portfolio-rule ${reverse ? "lg:ml-auto" : ""}`} />
                      <p className="body-sm">{project.location}</p>
                      <p className="mt-2 text-xs tabular-nums text-ink-light">
                        {project.index} / {String(total).padStart(2, "0")}
                      </p>
                    </div>

                    <div
                      className={`${
                        narrow
                          ? "lg:col-span-8 lg:col-start-3"
                          : reverse
                            ? "lg:col-span-9 lg:col-start-1 lg:row-start-1"
                            : "lg:col-span-9"
                      }`}
                    >
                      <Link href="#work" className="group block overflow-hidden" aria-label={`View ${project.title}`}>
                        <div className={`relative overflow-hidden ${narrow ? "aspect-[3/4] max-w-md" : "aspect-[16/10]"}`}>
                          <Image
                            src={project.after}
                            alt={`${project.title} — after`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 65vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          />
                        </div>
                      </Link>
                      <div className="portfolio-caption max-w-lg">
                        <p className="body-sm">{project.description}</p>
                        <p className="text-xs text-ink-light">{project.scope}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
