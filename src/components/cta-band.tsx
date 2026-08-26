import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-brand-band section-pad">
      <div className="container-main text-center">
        <p className="label label-light">Ready when you are</p>
        <h2 className="display-lg mx-auto mt-4 max-w-2xl text-balance text-white">
          The next coat starts with a free written estimate.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-white/80">
          Send photos and your city on Instagram. We will tell you what the job actually is — and what it costs — before anyone shows up.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="#contact" className="btn btn-light">
            Get a written estimate
          </Link>
          <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
