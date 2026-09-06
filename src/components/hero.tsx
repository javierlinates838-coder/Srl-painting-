import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-cinematic" aria-label="Introduction">
      <Image
        src="/projects/exterior-after.jpg"
        alt="SRL Painting exterior finish — Kern County home"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-cinematic-overlay" aria-hidden />

      <div className="container-main relative z-10 w-full pb-12 pt-[calc(var(--header-h)+2rem)] sm:pb-16 md:pb-20">
        <div className="max-w-3xl">
          <p className="meta text-white/70">
            C-33 · Lic. {site.license} · {site.tagline}
          </p>

          <h1 className="editorial-xl mt-6 text-balance text-white">
            {site.heroHeadline}
            <br />
            <span className="italic">{site.heroHeadlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            {site.heroDescription}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" className="btn btn-primary w-full sm:w-auto">
              Request an Estimate
              <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="#work" className="btn btn-line-light w-full sm:w-auto">
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
