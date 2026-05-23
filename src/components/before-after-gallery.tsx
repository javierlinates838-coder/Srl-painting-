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
    <section id="work" className="section-pad bg-paper">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="accent-rule" />
            <p className="label mt-4">Portfolio</p>
            <h2 className="display-lg mt-3 text-black">
              Real transformations.<br />Drag to compare.
            </h2>
            <p className="body-lg mt-4 max-w-md">
              Every project starts with surface prep and ends with a walkthrough you&apos;re happy with.
              These are sample showcases — swap in your Instagram photos anytime.
            </p>

            <div className="mt-8 flex flex-col gap-2">
              {beforeAfterProjects.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => go(i)}
                  className={`flex items-start gap-4 rounded-xl border p-4 text-left transition ${
                    i === active
                      ? "border-brand/30 bg-brand-tint shadow-sm"
                      : "border-black/8 bg-white hover:border-black/15"
                  }`}
                >
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${i === active ? "bg-brand text-white" : "bg-paper-2 text-zinc-500"}`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-bold text-black">{p.title}</p>
                    <p className="mt-0.5 text-[12px] text-zinc-500">{p.location} · {p.scope}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={`transition-opacity duration-200 ${fade ? "opacity-50" : "opacity-100"}`}>
            <BeforeAfterSlider
              key={project.id}
              beforeSrc={project.before}
              afterSrc={project.after}
              beforeAlt={`Before — ${project.title}`}
              afterAlt={`After — ${project.title}`}
              autoSlide
              className="shadow-xl shadow-black/10"
            />
            <div className="mt-5 surface p-5">
              <p className="font-display text-lg font-bold text-black">{project.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{project.description}</p>
              <Link href="#contact" className="btn btn-brand mt-4 !text-[13px]">
                Get a quote like this
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl bg-charcoal px-6 py-8 text-center sm:flex-row sm:text-left lg:px-10">
          <div>
            <p className="font-display text-xl font-bold text-white">More projects on Instagram</p>
            <p className="mt-1 text-[14px] text-zinc-400">Follow {site.instagramHandle} for the latest work and reviews.</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-light shrink-0">
            View Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
