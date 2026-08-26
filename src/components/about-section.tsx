import Image from "next/image";
import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function AboutSection() {
  return (
    <section id="about" className="section-pad overflow-hidden bg-ink text-white">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHead
              light
              label="About"
              title="Local crew. Licensed work."
              description="SRL Painting is a California-licensed contractor serving Kern County and Los Angeles. When you hire us, you get a real crew that shows up, preps properly, and stands behind the finish."
            />

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8">
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">License</dt>
                <dd className="font-display mt-1 text-lg font-bold">#{site.license}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">Class</dt>
                <dd className="font-display mt-1 text-lg font-bold">C-33</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">Status</dt>
                <dd className="font-display mt-1 text-lg font-bold">Bonded</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">Estimates</dt>
                <dd className="font-display mt-1 text-lg font-bold">Always free</dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Request Estimate
              </Link>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full sm:w-auto"
              >
                Verify CSLB license
              </a>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
                <Image
                  src="/projects/cabinets-after.jpg"
                  alt="Kitchen cabinet refinishing by SRL Painting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <ul className="mt-8 space-y-6">
                {pillars.map((p, i) => (
                  <li key={p.title} className="border-l-2 border-brand pl-4">
                    <h3 className="font-display text-[17px] font-bold text-white">
                      <span className="mr-2 text-brand-bright">{String(i + 1).padStart(2, "0")}</span>
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-white/65">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
