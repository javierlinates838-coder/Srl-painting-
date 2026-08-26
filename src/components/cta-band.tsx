import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 10% 20%, rgba(255,255,255,.25), transparent 55%), radial-gradient(ellipse 50% 60% at 90% 80%, rgba(0,0,0,.2), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="container-main relative text-center">
        <p className="label label-on-dark">Ready to start?</p>
        <h2 className="display-lg mx-auto mt-4 max-w-2xl text-balance text-white">
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
