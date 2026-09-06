import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-brand-band section-pad" aria-label="Call to action">
      <div className="container-main flex flex-col items-center gap-6 text-center text-white lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl">Ready for a fresh start?</h2>
          <p className="mt-3 text-white/85">
            Request a free estimate for interior, exterior, cabinet, or commercial painting — or message us on Instagram with photos.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href="#contact" className="btn border border-white/30 bg-white text-brand hover:bg-white/95">
            Request My Free Estimate
          </Link>
          <a
            href={site.instagramDm}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            Message on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
