"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { BeforeAfterSlider } from "./before-after-slider";
import { IosSegmented } from "./ios-group";
import { SectionHead } from "./section-head";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const project = beforeAfterProjects[active];
  const total = beforeAfterProjects.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section id="work" className="section-pad bg-muted">
      <div className="container-main">
        <Reveal>
          <SectionHead
            overline="Portfolio"
            title="Before & After"
            description="Drag the slider to compare real projects from our crew."
          />
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-8 lg:hidden">
            <IosSegmented
              label="Projects"
              value={project.id}
              onChange={(id) => {
                const idx = beforeAfterProjects.findIndex((p) => p.id === id);
                if (idx >= 0) setActive(idx);
              }}
              options={beforeAfterProjects.map((p) => ({ id: p.id, label: p.category }))}
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          <div className="hidden lg:flex lg:flex-col lg:gap-2" role="tablist" aria-label="Projects">
            {beforeAfterProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`site-card site-card-pad text-left transition-colors ${
                  i === active ? "ring-2 ring-ios-tint" : "hover:bg-[var(--ios-fill)]"
                }`}
              >
                <p className="ios-headline">{p.title}</p>
                <p className="ios-footnote mt-0.5">
                  {p.category} · {p.location}
                </p>
              </button>
            ))}
          </div>

          <div className="min-w-0" role="tabpanel">
            <Reveal delay={2}>
              <div className="ios-hero-card">
                <BeforeAfterSlider
                  key={project.id}
                  beforeSrc={project.before}
                  afterSrc={project.after}
                  beforeAlt={`Before — ${project.title}`}
                  afterAlt={`After — ${project.title}`}
                />
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="site-card site-card-pad mt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="ios-title-3">{project.title}</h3>
                    <p className="ios-footnote mt-1 text-ios-brand">
                      {project.category} · {project.location}
                    </p>
                  </div>
                  <span className="ios-caption tabular-nums">
                    {active + 1}/{total}
                  </span>
                </div>
                <p className="ios-subhead mt-3">{project.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link href="#contact" className="ios-btn ios-btn-brand ios-btn-sm">
                    Get a quote like this
                  </Link>
                  <button type="button" onClick={prev} className="ios-btn ios-btn-plain ios-btn-sm">
                    Prev
                  </button>
                  <button type="button" onClick={next} className="ios-btn ios-btn-plain ios-btn-sm">
                    Next
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-8 hidden gap-2 lg:grid lg:grid-cols-5">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View ${p.title}`}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-[var(--ios-radius-sm)] border-2 ${
                i === active ? "border-ios-tint" : "border-transparent opacity-75 hover:opacity-100"
              }`}
            >
              <div className="grid grid-cols-2">
                <Image src={p.before} alt="" width={120} height={90} className="aspect-[4/3] object-cover" />
                <Image src={p.after} alt="" width={120} height={90} className="aspect-[4/3] object-cover" />
              </div>
            </button>
          ))}
        </div>

        <div className="site-card site-card-pad mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="ios-headline">More on Instagram</p>
            <p className="ios-footnote mt-1">{site.instagramHandle}</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="ios-btn ios-btn-gray">
            Follow
          </a>
        </div>
      </div>
    </section>
  );
}
