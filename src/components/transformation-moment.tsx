"use client";

import { heroProject } from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function TransformationMoment() {
  return (
    <section className="transform-section section-pad-sm" aria-label="Before and after">
      <div className="container-bleed">
        <div className="mb-8 flex flex-col gap-3 px-[clamp(0.75rem,2vw,1.5rem)] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="meta-brand">Transformation</p>
            <h2 className="editorial-md mt-2 text-ink">Before ←→ After</h2>
          </div>
          <p className="body-sm max-w-sm">
            {heroProject.title} · {heroProject.location}
          </p>
        </div>

        <div className="transform-frame px-[clamp(0.75rem,2vw,1.5rem)]">
          <BeforeAfterSlider
            beforeSrc={heroProject.before}
            afterSrc={heroProject.after}
            beforeAlt={`Before — ${heroProject.title}`}
            afterAlt={`After — ${heroProject.title}`}
            aspect="16/10"
            large
          />
        </div>

        <p className="mt-5 px-[clamp(0.75rem,2vw,1.5rem)] text-sm text-ink-muted">
          {heroProject.scope}
        </p>
      </div>
    </section>
  );
}
