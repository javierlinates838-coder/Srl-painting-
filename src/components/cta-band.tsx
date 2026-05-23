import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden mesh-brand py-16 sm:py-20">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-main relative text-center">
        <p className="label label-light">Ready to start?</p>
        <h2 className="display-lg mt-3 text-white">
          Your next project starts with<br className="hidden sm:block" /> one free estimate.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/75">
          Message us on Instagram with photos and your city. We&apos;ll reply within one business day
          with a clear scope and price — no pressure, no surprises.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="#contact" className="btn btn-light">
            Request Free Estimate
          </Link>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
