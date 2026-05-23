import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-maroon-dark py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(155,34,66,0.4),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-white">
            <p className="section-label !text-maroon-light before:!bg-maroon-light">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Ready for a free estimate?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              The fastest way to reach us is a direct message on Instagram. Tell us about
              your project—location, scope, and timeline—and we&apos;ll get back to you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-maroon !shadow-none hover:!bg-cream"
              >
                Message on Instagram
              </a>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !border-white/25 !bg-transparent !text-white hover:!border-white/50"
              >
                Verify license
              </a>
            </div>

            <p className="mt-8 text-sm text-white/50">
              California contractor license #{site.license} · Licensed &amp; bonded
            </p>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm lg:p-14">
            <BrandLogo className="h-auto w-full max-w-[220px]" />
            <p className="mt-8 text-center font-display text-2xl font-semibold text-white">
              {site.name}
            </p>
            <p className="mt-2 text-center text-white/60">{site.instagramHandle}</p>
            <Link
              href="#services"
              className="mt-8 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              Browse our services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
