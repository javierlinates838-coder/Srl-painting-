import Link from "next/link";
import { site } from "@/lib/site";
import { FinishStack } from "./finish-stack";

export function Hero() {
  return (
    <section className="hero-stage" aria-label="Introduction">
      <div className="hero-stage-handoff" aria-hidden />

      <div className="container-main hero-stage-inner">
        <div className="hero-copy">
          <h1 className="hero-headline">
            {site.heroHeadline}
            <br />
            starts <em>before</em>
            <br />
            the paint.
          </h1>

          <p className="hero-support">{site.heroDescription}</p>

          <div className="hero-actions">
            <Link href="#contact" className="btn btn-primary">
              Get Estimate
              <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="#services" className="hero-link-secondary">
              Explore Services
            </Link>
          </div>
        </div>

        <FinishStack />
      </div>
    </section>
  );
}
