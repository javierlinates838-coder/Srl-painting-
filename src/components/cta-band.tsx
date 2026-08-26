import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(125deg,var(--brand-deep)_0%,var(--brand)_55%,var(--brand-bright)_100%)] section-pad">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2), transparent 45%)",
        }}
        aria-hidden
      />
      <div className="container-main relative text-center">
        <p className="label label-on-dark">Ready to start?</p>
        <h2 className="display-lg mx-auto mt-3 max-w-2xl text-balance text-white">
          Your next project starts with one free estimate.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-white/80">
          Message us on Instagram with photos and your city. We&apos;ll reply within one business day.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
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
