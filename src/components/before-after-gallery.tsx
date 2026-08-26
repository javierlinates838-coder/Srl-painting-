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
            title="Before & after. Real results."
            description="Drag the slider on any project. Prep first, finish that holds — every time."
          />
        </Reveal>

        <div className="scrollbar-hide -mx-1 mt-10 flex gap-2 overflow-x-auto px-1 pb-1" role="tablist" aria-label="Projects">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="gallery-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 border px-4 py-2.5 text-[13px] font-semibold transition ${
                i === active
                  ? "border-brand bg-brand text-white"
                  : "border-black/10 bg-white text-ink-soft hover:border-brand/40"
              }`}
            >
              {p.category}
              <span className="ml-2 hidden font-normal text-current/70 sm:inline">{p.location.split(",")[0]}</span>
            </button>
          ))}
        </div>

        <div className="mt-8" id="gallery-panel" role="tabpanel">
          <BeforeAfterSlider
            key={project.id}
            beforeSrc={project.before}
            afterSrc={project.after}
            beforeAlt={`Before — ${project.title}`}
            afterAlt={`After — ${project.title}`}
            className="shadow-[0_20px_60px_rgba(0,0,0,.12)]"
          />

          <div className="mt-8 grid gap-6 border-t border-black/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">{project.title}</h3>
              <p className="mt-2 text-[14px] font-semibold tracking-wide text-brand uppercase">
                {project.category} · {project.location}
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{project.description}</p>
              <p className="mt-2 text-[13px] text-ink-soft">{project.scope}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn btn-brand !text-[13px]">
                Get a quote like this
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center border border-black/12 bg-white text-ink hover:border-brand hover:text-brand"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center border border-black/12 bg-white text-ink hover:border-brand hover:text-brand"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <span className="text-[13px] font-semibold tabular-nums text-muted">
                {active + 1} / {total}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 hidden gap-3 sm:grid sm:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View project: ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden border-2 transition ${
                i === active ? "border-brand" : "border-transparent opacity-75 hover:opacity-100"
              }`}
            >
              <Image
                src={p.after}
                alt=""
                width={280}
                height={180}
                sizes="160px"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2.5 pt-8 pb-2 text-left text-[11px] font-semibold text-white">
                {p.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-black/10 pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-bold text-ink">More on Instagram</p>
            <p className="mt-1 text-[15px] text-muted">Latest projects from {site.instagramHandle}</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-brand">
            Follow {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
