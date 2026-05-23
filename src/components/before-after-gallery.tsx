"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  beforeAfterProjects,
  galleryCategories,
  site,
  type ProjectCategory,
} from "@/lib/site";
import { BeforeAfterSlider } from "./before-after-slider";

export function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const featured = beforeAfterProjects.filter((p) => p.featured);
  const filtered =
    activeCategory === "all"
      ? beforeAfterProjects
      : beforeAfterProjects.filter((p) => p.category === activeCategory);

  const currentFeatured = featured[carouselIndex];

  const goToSlide = useCallback(
    (index: number, direction: "left" | "right") => {
      if (isAnimating || index === carouselIndex) return;
      setSlideDirection(direction);
      setIsAnimating(true);
      setTimeout(() => {
        setCarouselIndex(index);
        setIsAnimating(false);
      }, 300);
    },
    [carouselIndex, isAnimating],
  );

  const nextSlide = useCallback(() => {
    goToSlide((carouselIndex + 1) % featured.length, "right");
  }, [carouselIndex, featured.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((carouselIndex - 1 + featured.length) % featured.length, "left");
  }, [carouselIndex, featured.length, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="work" className="bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label !text-maroon-light before:!bg-maroon-light justify-center">
            Before &amp; After
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            See the transformation
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Drag the slider to compare before and after on every project. Quality prep and skilled
            application—results you can see immediately.
          </p>
        </div>

        {/* Featured carousel */}
        <div className="mt-16">
          <div
            className={`grid items-center gap-8 transition-all duration-300 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 ${
              isAnimating
                ? slideDirection === "right"
                  ? "translate-x-2 opacity-80"
                  : "-translate-x-2 opacity-80"
                : "translate-x-0 opacity-100"
            }`}
          >
            <BeforeAfterSlider
              key={currentFeatured.id}
              beforeSrc={currentFeatured.before}
              afterSrc={currentFeatured.after}
              beforeAlt={`Before — ${currentFeatured.title}`}
              afterAlt={`After — ${currentFeatured.title}`}
              autoSlide
              className="shadow-2xl ring-1 ring-white/10"
            />

            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit rounded-full bg-maroon/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-maroon-light">
                {currentFeatured.category}
              </span>
              <h3 className="mt-4 font-display text-3xl font-semibold">{currentFeatured.title}</h3>
              <p className="mt-1 text-sm text-white/50">{currentFeatured.location}</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                {currentFeatured.description}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous project"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next project"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {featured.map((project, i) => (
                    <button
                      key={project.id}
                      type="button"
                      aria-label={`Go to ${project.title}`}
                      onClick={() => goToSlide(i, i > carouselIndex ? "right" : "left")}
                      className={`h-2 rounded-full transition-all ${
                        i === carouselIndex ? "w-8 bg-maroon-light" : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Link href="#contact" className="btn-primary mt-8 w-fit">
                Get a free estimate
              </Link>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-20">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-white/45">
            Filter by project type
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === cat.id
                    ? "bg-maroon text-white shadow-lg shadow-maroon/30"
                    : "border border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.id} className="group">
              <BeforeAfterSlider
                beforeSrc={project.before}
                afterSrc={project.after}
                beforeAlt={`Before — ${project.title}`}
                afterAlt={`After — ${project.title}`}
                className="shadow-lg ring-1 ring-white/10 transition group-hover:ring-white/20"
              />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-display text-xl font-semibold">{project.title}</h4>
                  <p className="mt-1 text-sm text-white/50">{project.location}</p>
                </div>
                <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                  {project.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-br from-maroon-dark to-ink p-10 text-center lg:p-14">
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            Your before &amp; after starts here
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Join homeowners and businesses across California who trust SRL Painting. Message us on
            Instagram for a free estimate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="btn-primary !bg-white !text-maroon !shadow-none hover:!bg-cream">
              Get your free quote
            </Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !border-white/25 !bg-transparent !text-white hover:!border-white/50"
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
