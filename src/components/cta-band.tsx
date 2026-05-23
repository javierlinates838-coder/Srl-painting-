import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden mesh-brand py-16 sm:py-24">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-light/20 blur-3xl"
        aria-hidden
      />
      <div className="container-main relative text-center">
        <p className="label label-light">Ready to start?</p>
        <h2 className="display-lg mx-auto mt-3 max-w-2xl text-balance text-white">
          Your next project starts with one free estimate.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/80">
          Message us on Instagram with photos and your city. We&apos;ll reply within one business day with a clear scope
          and price — no pressure, no surprises.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="#contact" className="btn btn-light">
            Request Free Estimate
          </Link>
          <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
