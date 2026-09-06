"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { BeforeAfterSlider } from "./before-after-slider";
import { SectionHead } from "./section-head";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const project = beforeAfterProjects[active];
  const total = beforeAfterProjects.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section id="work" className="section-pad bg-section-alt">
      <div className="container-main">
        <Reveal>
          <SectionHead
            align="center"
            label="Portfolio"
            title="Before & after"
            description="Real SRL projects across Kern County and Southern California. Select a project and drag the slider to compare."
          />
        </Reveal>

        <div
          className="scrollbar-hide -mx-1 mt-10 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden"
          role="tablist"
          aria-label="Projects"
        >
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="gallery-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium ${
                i === active ? "border-brand bg-brand text-white" : "border-[var(--line)] bg-white text-ink-muted"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,17rem)_1fr] xl:gap-12">
          <div className="hidden flex-col gap-2 xl:flex" role="tablist" aria-label="Projects">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="gallery-panel"
                onClick={() => setActive(i)}
                className={`card w-full p-4 text-left transition-colors ${
                  i === active ? "border-brand ring-1 ring-brand/20" : "hover:border-brand/30"
                }`}
              >
                <p className="font-display text-base text-ink">{p.title}</p>
                <p className="mt-1 text-xs text-ink-muted">{p.category} · {p.location}</p>
              </button>
            ))}
          </div>

          <div className="min-w-0" id="gallery-panel" role="tabpanel" aria-label={project.title}>
            <BeforeAfterSlider
              key={project.id}
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              aspect="16/10"
            />

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl text-ink">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{project.category} · {project.location}</p>
                <p className="mt-3 text-ink-muted">{project.description}</p>
                <p className="mt-2 text-sm text-ink-muted">{project.scope}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="text-sm font-medium tabular-nums text-ink-muted">{active + 1} / {total}</span>
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-white text-ink-muted hover:border-brand hover:text-brand"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-white text-ink-muted hover:border-brand hover:text-brand"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <Link href="#contact" className="btn btn-brand mt-6">
              Request a quote like this
            </Link>
          </div>
        </div>

        <div className="mt-12 hidden gap-3 xl:grid xl:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-lg border-2 ${
                i === active ? "border-brand" : "border-transparent opacity-80 hover:opacity-100"
              }`}
            >
              <div className="grid grid-cols-2">
                <Image src={p.before} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover" />
                <Image src={p.after} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-[var(--line)] bg-paper p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-display text-xl text-ink">More projects on Instagram</p>
            <p className="mt-1 text-sm text-ink-muted">{site.instagramHandle} — recent work and behind-the-scenes</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline shrink-0">
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
