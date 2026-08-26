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
    <section id="work" className="section-pad bg-ink text-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            light
            label="Selected work"
            title={
              <>
                The proof is in <span className="text-gold">the reveal.</span>
              </>
            }
            description="No stock photos. No filters. Choose a project, then drag the slider to see the finish transform the space."
          />
        </Reveal>

        {/* Project tabs — mobile */}
        <div className="scrollbar-hide -mx-1 mt-8 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden" role="tablist" aria-label="Projects">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="gallery-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-semibold ${
                i === active
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 bg-white/5 text-stone-400"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Project list — desktop */}
          <div className="hidden flex-col gap-2 lg:flex" role="tablist" aria-label="Projects">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="gallery-panel"
                onClick={() => setActive(i)}
                className={`project-tab flex w-full items-start gap-3 p-4 text-left ${
                  i === active ? "is-active" : ""
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                    i === active ? "bg-gold text-ink" : "bg-white/5 text-stone-500"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[17px] leading-tight text-white">{p.title}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-stone-500">
                    {p.category} · {p.location}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active project */}
          <div className="min-w-0" id="gallery-panel" role="tabpanel">
            <BeforeAfterSlider
              key={project.id}
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              className="shadow-2xl shadow-black/50 ring-1 ring-white/10"
            />

            <div className="mt-5 border border-white/10 bg-white/[0.04] p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl text-white">{project.title}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold tabular-nums text-stone-500">
                  {active + 1} / {total}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-[14px] leading-7 text-stone-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href="#contact" className="btn btn-brand !text-[13px]">
                  Get a quote like this
                </Link>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-stone-400 hover:border-gold hover:text-gold"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-stone-400 hover:border-gold hover:text-gold"
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

        {/* Thumbnail strip — desktop only, manual pick */}
        <div className="mt-10 hidden gap-2 lg:grid lg:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View project: ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-lg border-2 ${
                i === active ? "border-gold" : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <div className="grid grid-cols-2">
                <Image src={p.before} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover brightness-90" />
                <Image src={p.after} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover" />
              </div>
              <p className="absolute inset-x-0 bottom-0 truncate bg-black/75 px-2 py-1.5 text-left text-[10px] font-bold text-white">
                {p.title}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border border-gold/30 bg-gold/10 px-6 py-8 sm:flex-row sm:px-8">
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl text-white">Fresh work, straight from the job site.</p>
            <p className="mt-1 text-[13px] text-stone-400">
              Latest projects from {site.instagramHandle}
            </p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-gold shrink-0">
            Follow {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
