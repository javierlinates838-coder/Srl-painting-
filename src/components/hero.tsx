import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(139,26,53,0.3),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <BrandLogo className="animate-in mx-auto h-auto w-[140px] drop-shadow-2xl sm:w-[180px]" />

          <p className="animate-in delay-1 eyebrow mt-8">California C-33 · Lic. {site.license}</p>

          <h1 className="animate-in delay-2 font-heading mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-white">
            Professional painting that transforms your property
          </h1>

          <p className="animate-in delay-3 mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-400">
            {site.description}
          </p>

          <div className="animate-in delay-3 mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#contact" className="btn btn-primary">
              Get a free estimate
            </Link>
            <Link href="#work" className="btn btn-ghost-light">
              See before &amp; after
            </Link>
          </div>
        </div>

        {/* Quick stats row */}
        <div className="animate-in delay-3 mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-4">
          {[
            { v: "C-33", l: "Licensed" },
            { v: "4", l: "Services" },
            { v: "4", l: "Cities" },
            { v: "Free", l: "Estimates" },
          ].map((s) => (
            <div key={s.l} className="bg-dark-surface px-4 py-5 text-center">
              <p className="font-heading text-xl font-bold text-white">{s.v}</p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
