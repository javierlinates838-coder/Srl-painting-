"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useInView } from "@/hooks/use-in-view";

export function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="hero-type" aria-label="Introduction">
      <div className="hero-type-bg" aria-hidden />
      <div className="hero-block hero-block-1" aria-hidden />
      <div className="hero-block hero-block-2" aria-hidden />

      <div className="container-main relative z-10 w-full pt-[calc(var(--header-h)+2rem)]">
        <div className={`hero-reveal ${inView ? "is-visible" : ""}`}>
          <p className="meta text-ink-light">SRL · Painting</p>
        </div>

        <h1 className={`display-hero mt-4 text-ink hero-reveal hero-reveal-d1 ${inView ? "is-visible" : ""}`}>
          {site.heroHeadline}
          <br />
          <span className="text-brand">{site.heroHeadlineAccent}</span>
        </h1>

        <p className={`mt-8 max-w-md body-text hero-reveal hero-reveal-d2 ${inView ? "is-visible" : ""}`}>
          {site.heroDescription}
        </p>

        <div className={`mt-10 flex flex-col gap-3 sm:flex-row sm:items-center hero-reveal hero-reveal-d3 ${inView ? "is-visible" : ""}`}>
          <Link href="#contact" className="btn btn-primary w-full sm:w-auto">
            Get an Estimate
            <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link href="#services" className="btn btn-line w-full sm:w-auto">
            Explore Services
          </Link>
        </div>

        <div className={`mt-16 hero-meta-grid hero-reveal hero-reveal-d4 ${inView ? "is-visible" : ""}`}>
          <p className="meta">C-33 Painting</p>
          <p className="meta">Kern County</p>
          <p className="meta">Los Angeles</p>
          <p className="meta">Free Estimates</p>
        </div>
      </div>
    </section>
  );
}
