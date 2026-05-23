"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const project = beforeAfterProjects[active];

  const go = useCallback(
    (i: number) => {
      if (i === active) return;
      setFade(true);
      setTimeout(() => {
        setActive(i);
        setFade(false);
      }, 220);
    },
    [active],
  );

  const next = useCallback(() => go((active + 1) % beforeAfterProjects.length), [active, go]);

  useEffect(() => {
    const t = setInterval(next, 9000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="work" className="mesh-light section-pad">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          <div>
            <div className="accent-rule" />
            <p className="label mt-4">Our Work</p>
            <h2 className="display-lg mt-3 text-black">
              Before &amp; after.<br />
              <span className="text-gradient-dark">Real results.</span>
            </h2>
            <p className="body-lg mt-4 max-w-md">
              Drag the slider on each project to see the transformation. Every job starts with prep
              and ends with a walkthrough you&apos;re happy with.
            </p>

            <div className="mt-8 flex flex-col gap-2.5">
              {beforeAfterProjects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => go(i)}
                  className={`card-lift flex items-start gap-4 rounded-2xl border p-4 text-left ${
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
                    <p className="mt-1 text-[12px] text-zinc-500">{p.location} · {p.scope}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-300 ${fade ? "scale-[0.98] opacity-40" : "scale-100 opacity-100"}`}>
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
              <p className="font-display text-xl font-bold text-black">{project.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{project.description}</p>
              <Link href="#contact" className="btn btn-brand mt-5 !text-[13px]">
                Get a quote like this →
              </Link>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
}
