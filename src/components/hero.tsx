import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1589939705382-71804b6921c9?auto=format&fit=crop&w=2400&q=80"
        alt=""
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(124,24,49,0.35),transparent)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-10 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="animate-fade-up">
            <p className="section-label !text-maroon-light before:!bg-maroon-light mb-6 text-white/90">
              California C-33 · Lic. {site.license}
            </p>
            <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Transform your space with expert painting
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary">
                Get a free estimate
              </Link>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !border-white/20 !bg-white/10 !text-white backdrop-blur-sm hover:!border-white/40 hover:!bg-white/15"
              >
                View our work
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {[
                { label: "Licensed", value: "CSLB #1108313" },
                { label: "Services", value: "4 specialties" },
                { label: "Areas", value: "4 cities" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-up delay-200 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-maroon/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-10 shadow-2xl backdrop-blur-sm lg:p-12">
                <BrandLogo className="mx-auto h-auto w-full max-w-[280px] drop-shadow-2xl" />
                <p className="mt-8 text-center text-sm font-medium text-white/60">
                  Licensed &amp; bonded · Serving Central &amp; Southern CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
