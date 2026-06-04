"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import { BeforeAfterSlider } from "./before-after-slider";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const project = beforeAfterProjects[active];
  const total = beforeAfterProjects.length;

  const go = useCallback(
    (i: number) => {
      const next = ((i % total) + total) % total;
      if (next === active) return;
      setFade(true);
      setProgress(0);
      setTimeout(() => {
        setActive(next);
        setFade(false);
      }, 220);
    },
    [active, total],
  );

  const next = useCallback(() => go(active + 1), [active, go]);
  const prev = useCallback(() => go(active - 1), [active, go]);

  useEffect(() => {
    if (paused) return;
    const start = Date.now();
    const duration = 12000;
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(100, (elapsed / duration) * 100));
      if (elapsed >= duration) {
        clearInterval(tick);
        next();
      }
    }, 50);
    return () => clearInterval(tick);
  }, [next, paused, active]);

  return (
    <section id="work" className="mesh-light section-pad">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Our Work"
            title={
              <>
                Before &amp; after. <span className="text-gradient-dark">Real results.</span>
              </>
            }
            description="Drag the slider on each project to see the transformation. Every job starts with prep and ends with a walkthrough you're happy with."
          />
        </Reveal>

        <div className="scrollbar-hide -mx-1 mt-8 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => go(i)}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-[11px] font-semibold transition sm:text-[12px] ${
                i === active
                  ? "border-brand bg-brand text-white shadow-md shadow-brand/25"
                  : "border-black/10 bg-white text-zinc-600 hover:border-brand/30"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <div className="hidden min-w-0 flex-col gap-2.5 lg:flex">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => go(i)}
                className={`card-lift flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                  i === active
                    ? "border-brand/40 bg-white shadow-lg shadow-brand/10 ring-1 ring-brand/20"
                    : "border-black/6 bg-white/80 hover:border-brand/20 hover:bg-white"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                    i === active ? "bg-brand text-white" : "bg-paper-2 text-zinc-500"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-display text-[15px] font-bold text-black">{p.title}</p>
                    <span className="rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand">
                      {p.category}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-zinc-500">
                    {p.location} · {p.scope}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="min-w-0">
            <div
              className="relative"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
            >
              <div className="progress-track mb-4 lg:hidden">
                <div className="progress-fill transition-[width] duration-100 ease-linear" style={{ width: `${progress}%` }} />
              </div>

              <div
                className={`transition-all duration-300 ${fade ? "scale-[0.98] opacity-40" : "scale-100 opacity-100"}`}
              >
                <BeforeAfterSlider
                  key={project.id}
                  beforeSrc={project.before}
                  afterSrc={project.after}
                  beforeAlt={`Before — ${project.title}`}
                  afterAlt={`After — ${project.title}`}
                  autoSlide
                  onInteraction={() => setPaused(true)}
                  className="shadow-2xl shadow-black/15 ring-1 ring-black/5"
                />
                <div className="surface-premium mt-5 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-display text-lg font-bold text-black sm:text-xl">{project.title}</p>
                      <p className="mt-1 text-[12px] font-medium text-brand">
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
                      Get a quote like this →
                    </Link>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        aria-label="Previous project"
                        onClick={prev}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-zinc-600 transition hover:border-brand hover:bg-brand-tint hover:text-brand"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Next project"
                        onClick={next}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-zinc-600 transition hover:border-brand hover:bg-brand-tint hover:text-brand"
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
          </div>
        </div>

        <div className="mt-12 hidden gap-3 lg:grid lg:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => go(i)}
              className={`group relative overflow-hidden rounded-xl border-2 transition duration-300 ${
                i === active ? "border-brand shadow-lg shadow-brand/20" : "border-transparent hover:border-brand/30"
              }`}
            >
              <div className="grid grid-cols-2 transition duration-500 group-hover:scale-105">
                <Image
                  src={p.before}
                  alt=""
                  width={320}
                  height={240}
                  sizes="160px"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover brightness-90 saturate-75"
                />
                <Image
                  src={p.after}
                  alt=""
                  width={320}
                  height={240}
                  sizes="160px"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3">
                <p className="truncate text-left text-[11px] font-bold text-white">{p.title}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="cta-shimmer relative mt-16 overflow-hidden rounded-2xl mesh-brand px-6 py-8 shadow-xl shadow-brand/30 sm:px-8 sm:py-10">
          <div className="grain pointer-events-none absolute inset-0" />
          <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-xl font-bold text-white sm:text-2xl">More on Instagram</p>
              <p className="mt-2 text-[14px] text-white/80">
                Latest projects, reviews, and behind-the-scenes from {site.instagramHandle}
              </p>
            </div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-light shrink-0">
              Follow @srl_painting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
