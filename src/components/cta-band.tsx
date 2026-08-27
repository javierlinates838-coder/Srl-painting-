import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-brand-band py-14 sm:py-16" aria-label="Call to action">
      <div className="container-main flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-2xl font-bold text-white sm:text-3xl">Ready to start?</p>
          <p className="ios-footnote mt-2 !text-white/80">Send photos to {site.instagramHandle} — free estimates, no obligation.</p>
        </div>
        <Link
          href="#contact"
          className="ios-btn shrink-0 border border-white/30 bg-white text-brand hover:brightness-105"
        >
          Get Estimate
        </Link>
      </div>
    </section>
  );
}
