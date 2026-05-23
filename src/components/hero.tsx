import Image from "next/image";
import Link from "next/link";
import { site, trustPoints } from "@/lib/site";
import { IconCheck, IconInstagram } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(123, 30, 50, 0.55), transparent), radial-gradient(circle at 10% 90%, rgba(255,255,255,0.06), transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/40 bg-brand-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
            Licensed &amp; bonded · C-33 Painting
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Quality paint work for homes &amp; businesses
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-300">{site.tagline}</p>
          <ul className="flex flex-col gap-2">
            {trustPoints.slice(0, 3).map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-stone-300">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-brand-500"
            >
              Request a free estimate
            </Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              <IconInstagram className="h-4 w-4" />
              Message on Instagram
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-brand-600/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-900/50 p-8 shadow-2xl">
              <Image
                src="/logo.svg"
                alt={`${site.name} — residential and commercial painting`}
                width={280}
                height={308}
                className="mx-auto h-auto w-full max-w-[220px]"
                priority
              />
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-center text-sm">
                <div>
                  <dt className="text-stone-500">License</dt>
                  <dd className="font-semibold text-white">#{site.license}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Follow</dt>
                  <dd className="font-semibold text-white">{site.instagramHandle}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
