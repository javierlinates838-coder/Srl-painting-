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
    <section id="about" className="bg-light section-pad">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHead
              label="About"
              title={
                <>
                  Local crew. <span className="text-gradient-dark">Licensed work.</span>
                </>
              }
              description="SRL Painting is a California-licensed C-33 contractor serving Kern County and Los Angeles. When you hire us, you get a real crew that shows up on time, preps properly, and stands behind every brushstroke."
            />

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="card p-5 text-center">
                  <p className="font-display text-xl font-bold text-brand">{s.v}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Request Estimate
              </Link>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark w-full sm:w-auto"
              >
                Verify CSLB license
              </a>
            </div>
          </Reveal>

          <ul className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <li key={p.title} className="list-none">
                <Reveal delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                  <article className="card flex items-start gap-4 border-l-[3px] border-l-brand p-6 sm:p-7">
                    <span className="font-display text-sm font-extrabold text-brand" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-[17px] font-bold leading-snug text-black sm:text-lg">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{p.text}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
