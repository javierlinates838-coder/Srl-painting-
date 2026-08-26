import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-main pb-6">
      <div className="ios-hero-card p-5 text-center">
        <p className="ios-title-3">Ready to start?</p>
        <p className="ios-footnote mt-1">Send photos to {site.instagramHandle}</p>
        <Link href="#contact" className="ios-btn ios-btn-brand mt-4 w-full">
          Get Estimate
        </Link>
      </div>
    </section>
  );
}
