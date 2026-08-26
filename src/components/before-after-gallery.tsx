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
    <section id="work" className="section-pad bg-canvas">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Our Work"
            title="Before & after — real jobs, real finishes."
            description="Select a project and drag the slider. Every job starts with prep and ends with a walkthrough you're happy with."
          />
        </Reveal>

        <div className="scrollbar-hide -mx-1 mt-10 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden" role="tablist" aria-label="Projects">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="gallery-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 border px-3.5 py-2 text-[12px] font-semibold transition-colors ${
                i === active
                  ? "border-brand bg-brand text-white"
                  : "border-[var(--line)] bg-white text-muted hover:border-brand/40"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <div className="hidden flex-col lg:flex" role="tablist" aria-label="Projects">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="gallery-panel"
                onClick={() => setActive(i)}
                className={`border-b border-[var(--line)] py-4 text-left transition-colors first:border-t ${
                  i === active ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                <span className="font-display block text-[15px] font-bold">{p.title}</span>
                <span className="mt-1 block text-[12px] text-muted">
                  {p.category} · {p.location}
                </span>
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
            />

            <div className="mt-6 flex flex-col gap-6 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
                  <span className="text-[12px] font-semibold tabular-nums text-muted">
                    {active + 1}/{total}
                  </span>
                </div>
                <p className="mt-1 text-[13px] font-medium text-brand">
                  {project.category} · {project.location}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Link href="#contact" className="btn btn-brand !text-[13px]">
                  Get a quote like this
                </Link>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center border border-[var(--line)] bg-white text-muted hover:border-brand hover:text-brand"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center border border-[var(--line)] bg-white text-muted hover:border-brand hover:text-brand"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 hidden gap-3 lg:grid lg:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View project: ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden border-2 transition-opacity ${
                i === active ? "border-brand" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <div className="grid grid-cols-2">
                <Image
                  src={p.before}
                  alt=""
                  width={160}
                  height={120}
                  sizes="80px"
                  loading="lazy"
                  className="aspect-[4/3] object-cover brightness-90"
                />
                <Image
                  src={p.after}
                  alt=""
                  width={160}
                  height={120}
                  sizes="80px"
                  loading="lazy"
                  className="aspect-[4/3] object-cover"
                />
              </div>
              <p className="absolute inset-x-0 bottom-0 truncate bg-ink/80 px-2 py-1.5 text-left text-[10px] font-bold text-white">
                {p.title}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-y border-[var(--line)] py-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-bold text-ink">More on Instagram</p>
            <p className="mt-1 text-[15px] text-muted">Latest projects from {site.instagramHandle}</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-brand shrink-0">
            Follow {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
