"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { BeforeAfterSlider } from "./before-after-slider";
import { IosGroup, IosRow, IosSegmented } from "./ios-group";
import { SectionHead } from "./section-head";

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const project = beforeAfterProjects[active];

  return (
    <section id="work" className="section-pad">
      <div className="container-main space-y-4">
        <Reveal>
          <SectionHead
            overline="Portfolio"
            title="Before & After"
            description="Drag the slider to compare."
          />
        </Reveal>

        <Reveal delay={1}>
          <IosSegmented
            label="Projects"
            value={project.id}
            onChange={(id) => {
              const idx = beforeAfterProjects.findIndex((p) => p.id === id);
              if (idx >= 0) setActive(idx);
            }}
            options={beforeAfterProjects.map((p) => ({ id: p.id, label: p.category }))}
          />
        </Reveal>

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
          <IosGroup>
            <IosRow>
              <span className="ios-row-content">
                <span className="ios-headline block">{project.title}</span>
                <span className="ios-footnote mt-0.5 block">{project.location}</span>
              </span>
            </IosRow>
            <IosRow>
              <span className="ios-subhead">{project.description}</span>
            </IosRow>
            <IosRow>
              <span className="ios-caption">{project.scope}</span>
            </IosRow>
            <IosRow href="#contact" chevron>
              <span className="ios-body text-ios-tint">Get a quote like this</span>
            </IosRow>
          </IosGroup>
        </Reveal>

        <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pt-2">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`View ${p.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-[10px] border-2 ${
                i === active ? "border-ios-tint" : "border-transparent opacity-70"
              }`}
            >
              <Image src={p.after} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>

        <IosGroup>
          <IosRow href={site.instagram} chevron external>
            <span className="ios-row-content">
              <span className="ios-headline block">Instagram</span>
              <span className="ios-footnote mt-0.5 block">More projects at {site.instagramHandle}</span>
            </span>
          </IosRow>
        </IosGroup>
      </div>
    </section>
  );
}
