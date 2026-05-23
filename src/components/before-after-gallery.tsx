"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const project = beforeAfterProjects[active];

  const goTo = useCallback(
    (index: number) => {
      if (index === active || transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setActive(index);
        setTransitioning(false);
      }, 200);
    },
    [active, transitioning],
  );

  const next = useCallback(() => {
    goTo((active + 1) % beforeAfterProjects.length);
  }, [active, goTo]);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="work" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-maroon-hover">Before &amp; After</p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
              Drag to compare results
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-400">
              Three recent transformations. Swap in your real Instagram photos when ready.
            </p>
          </div>

          {/* Project tabs */}
          <div className="flex gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] p-1">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goTo(i)}
                className={`rounded-md px-4 py-2 text-[13px] font-semibold transition ${
                  i === active
                    ? "bg-maroon text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {p.category}
              </button>
            ))}
          </div>
        </div>

        {/* Slider + info */}
        <div
          className={`mt-10 grid gap-8 transition-opacity duration-200 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 ${
            transitioning ? "opacity-60" : "opacity-100"
          }`}
        >
          <BeforeAfterSlider
            key={project.id}
            beforeSrc={project.before}
            afterSrc={project.after}
            beforeAlt={`Before — ${project.title}`}
            afterAlt={`After — ${project.title}`}
            autoSlide
            className="ring-1 ring-white/[0.08]"
          />

          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-zinc-500">
              {project.location}
            </span>
            <h3 className="font-heading mt-1 text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">{project.description}</p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo((active - 1 + beforeAfterProjects.length) % beforeAfterProjects.length)}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <span className="text-[13px] text-zinc-500">
                {active + 1} / {beforeAfterProjects.length}
              </span>
            </div>

            <Link href="#contact" className="btn btn-primary mt-8 w-fit">
              Get a similar result
            </Link>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 flex flex-col items-center rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-10 text-center">
          <p className="font-heading text-xl font-bold text-white">More projects on Instagram</p>
          <p className="mt-2 max-w-sm text-[14px] text-zinc-400">
            Follow {site.instagramHandle} for the latest before-and-after photos and reviews.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white mt-5"
          >
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
