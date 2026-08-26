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
    <section id="work" className="bg-light section-pad">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="The work"
            title={
              <>
                Before, after, and everything in between.
              </>
            }
            description="These are real jobs — not stock. Drag the slider. The difference is the prep you cannot see in a thumbnail."
          />
        </Reveal>

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
                  ? "border-brand bg-brand text-white"
                  : "border-black/10 bg-white text-zinc-600"
              }`}
            >
              {p.category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-12">
          <div className="hidden flex-col gap-2 lg:flex" role="tablist" aria-label="Projects">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="gallery-panel"
                onClick={() => setActive(i)}
                className={`flex w-full items-start gap-3 rounded-[calc(var(--radius)+4px)] border p-4 text-left transition ${
                  i === active
                    ? "border-brand/35 bg-white shadow-sm ring-1 ring-brand/15"
                    : "border-transparent bg-transparent hover:bg-white/70"
                }`}
              >
                <span
                  className={`font-display mt-0.5 w-6 shrink-0 text-[13px] italic ${
                    i === active ? "text-brand" : "text-zinc-400"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[15px] font-medium leading-snug text-black">{p.title}</p>
                  <p className="mt-1 text-[12px] text-zinc-500">
                    {p.category} · {p.location}
                  </p>
                </div>
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
              className="shadow-[0_20px_50px_rgba(20,17,15,.12)] ring-1 ring-black/5"
            />

            <div className="card mt-5 p-5 sm:p-7">
              <p className="spec-kicker">{project.scope}</p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-medium text-black">{project.title}</h3>
                  <p className="mt-1 text-[13px] font-medium text-brand">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="font-display shrink-0 text-[13px] italic text-zinc-400">
                  {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-pretty text-zinc-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="#contact" className="btn btn-brand !text-[13px]">
                  Get a quote like this
                </Link>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={prev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-600 hover:border-brand hover:text-brand"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={next}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-600 hover:border-brand hover:text-brand"
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

        <div className="mt-10 hidden gap-3 lg:grid lg:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View project: ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-xl border-2 ${
                i === active ? "border-brand" : "border-transparent opacity-75 hover:opacity-100"
              }`}
            >
              <div className="grid grid-cols-2">
                <Image src={p.before} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover brightness-90" />
                <Image src={p.after} alt="" width={160} height={120} sizes="80px" loading="lazy" className="aspect-[4/3] object-cover" />
              </div>
              <p className="absolute inset-x-0 bottom-0 truncate bg-black/70 px-2.5 py-1.5 text-left text-[11px] font-semibold text-white">
                {p.category}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-brand-band mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl px-6 py-8 sm:flex-row sm:px-9">
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl font-medium text-white">More of the work lives on Instagram</p>
            <p className="mt-1 text-[14px] text-white/80">
              Fresh jobs, process shots, and color from {site.instagramHandle}
            </p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-light shrink-0">
            Follow {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
