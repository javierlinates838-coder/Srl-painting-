import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function ContactSection() {
  return (
    <section id="contact" className="bg-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-maroon-hover">Get started</p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
              Ready for your free estimate?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
              Message us on Instagram with photos and a description of your project.
              We&apos;ll get back to you with scope and pricing — no obligation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Message on Instagram
              </a>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light"
              >
                Verify license
              </a>
            </div>

            <p className="mt-6 text-[12px] text-zinc-600">
              C-33 · License #{site.license} · Licensed &amp; bonded
            </p>
          </div>

          <div className="card-dark flex flex-col items-center p-10 text-center lg:p-12">
            <BrandLogo className="h-auto w-[160px]" />
            <p className="font-heading mt-6 text-xl font-bold text-white">{site.name}</p>
            <p className="mt-1 text-[14px] text-zinc-500">{site.instagramHandle}</p>
            <Link href="#work" className="mt-6 text-[13px] font-semibold text-zinc-400 hover:text-white">
              View before &amp; after →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
