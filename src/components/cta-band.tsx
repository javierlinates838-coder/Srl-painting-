import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-t border-[var(--line)] bg-parchment py-16 sm:py-20">
      <div className="container-main flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-lg">
          <p className="headline-md">Ready when you are.</p>
          <p className="prose-body-sm mt-3">
            Send photos and your city to {site.instagramHandle}. We&apos;ll take it from there.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#contact" className="btn btn-fill">
            Inquire
          </Link>
          <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-line">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
