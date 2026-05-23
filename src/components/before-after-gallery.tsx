"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { BeforeAfterSlider } from "./before-after-slider";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const [paused, setPaused] = useState(false);
  const project = beforeAfterProjects[active];
  const total = beforeAfterProjects.length;

  const go = useCallback(
    (i: number) => {
      const next = ((i % total) + total) % total;
      if (next === active) return;
      setFade(true);
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
    const t = setInterval(next, 9000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section id="work" className="mesh-light section-pad">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          <div className="hidden lg:block">
            <Reveal>
              <div className="accent-rule" />
              <p className="label mt-4">Our Work</p>
              <h2 className="display-lg mt-3 text-black">
                Before &amp; after.
                <br />
                <span className="text-gradient-dark">Real results.</span>
              </h2>
              <p className="body-lg mt-4 max-w-md">
                Drag the slider on each project to see the transformation. Every job starts with prep
                and ends with a walkthrough you&apos;re happy with.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-2.5">
              {beforeAfterProjects.map((p, i) => (
                <Reveal key={p.id} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    className={`card-lift flex w-full items-start gap-4 rounded-2xl border p-4 text-left ${
                      i === active
                        ? "border-brand/40 bg-white shadow-lg shadow-brand/10 ring-1 ring-brand/20"
                        : "border-black/6 bg-white/80 hover:border-brand/20"
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
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal className="lg:hidden">
              <div className="accent-rule" />
              <p className="label mt-4">Our Work</p>
              <h2 className="display-lg mt-3 text-black">
                Before &amp; after.
                <br />
                <span className="text-gradient-dark">Real results.</span>
              </h2>
            </Reveal>

            <div className="scrollbar-hide -mx-1 mt-6 flex gap-2 overflow-x-auto px-1 pb-2 lg:hidden">
              {beforeAfterProjects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => go(i)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition ${
                    i === active
                      ? "border-brand bg-brand text-white shadow-md shadow-brand/20"
                      : "border-black/10 bg-white text-zinc-600"
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            <Reveal delay={2}>
              <div
                className="relative mt-6 lg:mt-0"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
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
                    className="shadow-2xl shadow-black/15 ring-1 ring-black/5"
                  />
                  <div className="surface mt-5 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-bold text-black">{project.title}</p>
                        <p className="mt-1 text-[12px] font-medium text-brand">{project.category} · {project.location}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-paper-2 px-3 py-1 text-[11px] font-bold text-zinc-500">
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
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-zinc-600 transition hover:border-brand hover:text-brand"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          aria-label="Next project"
                          onClick={next}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-zinc-600 transition hover:border-brand hover:text-brand"
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
            </Reveal>
          </div>
        </div>

        <Reveal delay={1}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => go(i)}
                className={`group relative overflow-hidden rounded-xl border-2 transition ${
                  i === active ? "border-brand shadow-lg shadow-brand/15" : "border-transparent hover:border-brand/30"
                }`}
              >
                <div className="grid grid-cols-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.before} alt="" className="aspect-[4/3] w-full object-cover brightness-90 saturate-75" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.after} alt="" className="aspect-[4/3] w-full object-cover" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-left text-[11px] font-bold text-white">{p.title}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="relative mt-16 overflow-hidden rounded-2xl mesh-brand px-8 py-10 shadow-xl shadow-brand/25">
            <div className="grain pointer-events-none absolute inset-0" />
            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <p className="font-display text-2xl font-bold text-white">More on Instagram</p>
                <p className="mt-2 text-[14px] text-white/75">
                  Latest projects, reviews, and behind-the-scenes from {site.instagramHandle}
                </p>
              </div>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-light shrink-0">
                Follow @srl_painting
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
