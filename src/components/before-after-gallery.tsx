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
            label="Our Work"
            title={
              <>
                Before &amp; after. <span className="text-gradient-dark">Real results.</span>
              </>
            }
            description="Select a project and drag the slider to compare. Every job starts with prep and ends with a walkthrough you're happy with."
          />
        </Reveal>

        {/* Project tabs — mobile */}
        <div className="scrollbar-hide -mx-1 mt-8 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-semibold ${
                i === active
                  ? "border-brand bg-brand text-white"
                  : "border-black/10 bg-white text-zinc-600"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Project list — desktop */}
          <div className="hidden flex-col gap-2 lg:flex">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                className={`card flex w-full items-start gap-3 p-4 text-left ${
                  i === active ? "border-brand/40 ring-1 ring-brand/20" : ""
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                    i === active ? "bg-brand text-white" : "bg-paper-2 text-zinc-500"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[14px] font-bold text-black">{p.title}</p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    {p.category} · {p.location}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active project */}
          <div className="min-w-0">
            <BeforeAfterSlider
              key={project.id}
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              className="shadow-lg ring-1 ring-black/5"
            />

            <div className="card mt-5 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-black">{project.title}</h3>
                  <p className="mt-1 text-[13px] font-medium text-brand">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-paper-2 px-3 py-1 text-[11px] font-bold tabular-nums text-zinc-500">
                  {active + 1} / {total}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href="#contact" className="btn btn-brand !text-[13px]">
                  Get a quote like this
                </Link>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-zinc-600 hover:border-brand hover:text-brand"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-zinc-600 hover:border-brand hover:text-brand"
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
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-lg border-2 ${
                i === active ? "border-brand" : "border-transparent opacity-70 hover:opacity-100"
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

        <div className="bg-brand-band mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl px-6 py-8 sm:flex-row sm:px-8">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl font-bold text-white">More on Instagram</p>
            <p className="mt-1 text-[14px] text-white/80">
              Latest projects from {site.instagramHandle}
            </p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-light shrink-0">
            Follow @srl_painting
          </a>
        </div>
      </div>
    </section>
  );
}
