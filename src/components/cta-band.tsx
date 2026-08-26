import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-brand-band noise-overlay relative section-pad">
      <div className="container-main relative text-center">
        <p className="label label-light label-center justify-center">Ready to transform your space?</p>
        <h2 className="display-lg mx-auto mt-5 max-w-2xl text-balance text-white">
          Your next project starts with one conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-white/85">
          Message us on Instagram with photos and your city. We&apos;ll reply within one business day with next steps.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="#contact" className="btn btn-light">
            Request Free Estimate
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
