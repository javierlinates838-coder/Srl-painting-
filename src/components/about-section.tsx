import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const stats = [
  { v: `#${site.license}`, l: "CSLB License" },
  { v: "C-33", l: "Classification" },
  { v: "Bonded", l: "Fully insured" },
  { v: "Free", l: "Estimates" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-ink text-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHead
              light
              label="About"
              title="Local crew. Licensed work."
              description="SRL Painting is a California-licensed contractor serving Kern County and Los Angeles. When you hire us, you get a real crew that shows up, preps properly, and stands behind the work."
            />

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">{s.l}</dt>
                  <dd className="font-display mt-1.5 text-lg font-bold text-white sm:text-xl">{s.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

          <ul className="flex flex-col">
            {pillars.map((p, i) => (
              <Reveal key={p.title} as="li" delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <article className="border-t border-white/10 py-7 first:border-t-0 first:pt-0">
                  <div className="flex gap-5">
                    <span className="font-display shrink-0 text-sm font-bold tracking-[0.1em] text-[var(--brand-bright)]" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{p.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/60">{p.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
