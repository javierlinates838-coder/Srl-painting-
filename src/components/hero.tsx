import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white">
      {/* Full-bleed project photo */}
      <div className="absolute inset-0">
        <Image
          src={project.after}
          alt={`${project.title} — ${project.location}`}
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-[center_40%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,10,12,0.88)_0%,rgba(12,10,12,0.62)_42%,rgba(12,10,12,0.28)_68%,rgba(12,10,12,0.45)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,10,12,0.75)_0%,transparent_42%)]"
          aria-hidden
        />
      </div>

      <div className="container-main relative flex min-h-[100svh] flex-col justify-end pb-16 pt-[7.5rem] sm:pb-20 lg:justify-center lg:pb-24 lg:pt-28">
        <div className="max-w-3xl">
          <p className="hero-rise label-on-dark label">
            C-33 Licensed · Bonded · #{site.license}
          </p>

          <h1 className="hero-rise hero-rise-d1 display-hero mt-5 text-white">
            {site.name}
          </h1>

          <p className="hero-rise hero-rise-d2 mt-6 max-w-xl text-balance text-[1.35rem] font-medium leading-snug tracking-tight text-white sm:text-[1.65rem]">
            <span className="brush-underline">{site.heroHeadline}</span>
          </p>

          <p className="hero-rise hero-rise-d3 mt-5 max-w-md text-[1.02rem] leading-relaxed text-white/75">
            {site.heroDescription}
          </p>

          <div className="hero-rise hero-rise-d4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
              Request Free Estimate
            </Link>
            <Link href="#work" className="btn btn-outline w-full sm:w-auto">
              View Our Work
            </Link>
          </div>
        </div>

        <a
          href="#services"
          className="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 lg:flex"
          aria-label="Scroll to services"
        >
          <span>Explore</span>
          <span className="h-8 w-px bg-white/40" aria-hidden />
        </a>
      </div>
    </section>
  );
}
