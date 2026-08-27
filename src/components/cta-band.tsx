import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-main pb-8">
      <div className="site-card flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="ios-title-3">Ready to start?</p>
          <p className="ios-footnote mt-1">Send photos to {site.instagramHandle}</p>
        </div>
        <Link href="#contact" className="ios-btn ios-btn-brand shrink-0">
          Get Estimate
        </Link>
      </div>
    </section>
  );
}
