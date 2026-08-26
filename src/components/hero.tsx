import Image from "next/image";
import Link from "next/link";
import { beforeAfterProjects, site } from "@/lib/site";

export function Hero() {
  const project = beforeAfterProjects[0];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src={project.after}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/45 to-black/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25"
          aria-hidden
        />
      </div>

      <div className="container-main relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 lg:justify-center lg:pb-28 lg:pt-36">
        <div className="hero-copy max-w-4xl">
          <h1 className="display-hero text-balance text-white">{site.name}</h1>

          <p className="mt-6 max-w-2xl font-display text-[1.65rem] leading-tight font-semibold tracking-[-0.03em] text-white sm:text-[2rem]">
            {site.heroHeadline}
          </p>

          <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-white/75 sm:text-[1.125rem]">
            {site.heroDescription}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
              Request Free Estimate
            </Link>
            <Link href="#work" className="btn btn-outline w-full sm:w-auto">
              See the work
            </Link>
          </div>
        </div>

        <div className="scroll-hint absolute bottom-8 left-[clamp(1.25rem,4vw,2.25rem)] hidden items-center gap-3 text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase lg:flex">
          <span className="h-px w-8 bg-white/35" aria-hidden />
          Scroll
        </div>
      </div>
    </section>
  );
}
