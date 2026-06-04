import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-brand-band py-14 sm:py-16">
      <div className="container-main text-center">
        <p className="label label-light">Ready to start?</p>
        <h2 className="display-lg mx-auto mt-3 max-w-xl text-balance text-white">
          Your next project starts with one free estimate.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-white/80">
          Message us on Instagram with photos and your city. We&apos;ll reply within one business day.
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
