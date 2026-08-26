"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import { BeforeAfterSlider } from "./before-after-slider";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const project = beforeAfterProjects[active];
  const total = beforeAfterProjects.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section id="work" className="section-pad bg-stone">
      <div className="container-main">
        <Reveal>
          <SectionHead
            overline="Selected work"
            title="Before and after."
            description="Drag the handle to compare. These are real jobs — same prep, same crew, same attention to the parts you won't see."
          />
        </Reveal>

        <div className="scrollbar-hide -mx-1 mt-10 flex gap-6 overflow-x-auto px-1 pb-2 lg:hidden" role="tablist" aria-label="Projects">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="gallery-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 border-b-2 pb-1 text-[0.8125rem] font-medium ${
                i === active ? "border-oxide text-oxide" : "border-transparent text-umber"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <div className="hidden lg:block" role="tablist" aria-label="Projects">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="gallery-panel"
                onClick={() => setActive(i)}
                className="project-index-btn font-display text-[1.0625rem]"
              >
                <span className="block text-[0.6875rem] font-normal not-italic text-umber-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.title}
              </button>
            ))}
          </div>

          <div className="min-w-0" id="gallery-panel" role="tabpanel">
            <BeforeAfterSlider
              key={project.id}
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              className="frame bg-parchment"
            />

            <div className="mt-8 grid gap-6 border-t border-[var(--line)] pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="overline">{project.category} · {project.location}</p>
                <h3 className="headline-md mt-3">{project.title}</h3>
                <p className="prose-body-sm mt-3 max-w-xl">{project.description}</p>
                <p className="mt-2 text-[0.8125rem] text-umber-light">{project.scope}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-display text-[0.875rem] tabular-nums text-umber-light">
                  {active + 1} / {total}
                </span>
                <div className="flex gap-4">
                  <button type="button" aria-label="Previous project" onClick={prev} className="link-underline text-[0.8125rem]">
                    Prev
                  </button>
                  <button type="button" aria-label="Next project" onClick={next} className="link-underline text-[0.8125rem]">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <Link href="#contact" className="btn btn-fill mt-8">
              Inquire about a project like this
            </Link>
          </div>
        </div>

        <div className="mt-16 hidden gap-px bg-[var(--line)] lg:grid lg:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View project: ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden bg-parchment ${i === active ? "ring-2 ring-inset ring-oxide" : "opacity-80 hover:opacity-100"}`}
            >
              <div className="grid grid-cols-2">
                <Image src={p.before} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover grayscale-[30%]" />
                <Image src={p.after} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[var(--line)] pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="headline-md">More on Instagram</p>
            <p className="prose-body-sm mt-2">Recent jobs at {site.instagramHandle}</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-line">
            Follow
          </a>
        </div>
      </div>
    </section>
  );
}
