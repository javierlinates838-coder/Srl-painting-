import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const pillarIcons = [
  <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>,
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l1.5 4.5L19 9l-4.5 1.5L13 15l-1.5-4.5L7 9l4.5-1.5L13 3z" />
  </svg>,
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" d="M9 12h6M9 16h6M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
  </svg>,
];

export function AboutSection() {
  return (
    <section id="about" className="bg-dark section-pad text-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHead
              light
              label="About"
              title={
                <>
                  Local crew. <span className="text-gradient">Licensed work.</span>
                </>
              }
              description="SRL Painting is a California-licensed contractor serving Kern County and Los Angeles. When you hire us, you get a real crew that shows up, preps properly, and stands behind the work."
            />

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { v: `#${site.license}`, l: "CSLB License" },
                { v: "C-33", l: "Classification" },
                { v: "Bonded", l: "Fully insured" },
                { v: "Free", l: "Estimates" },
              ].map((s) => (
                <div key={s.l} className="stat-card">
                  <p className="font-display text-lg font-bold text-white">{s.v}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="btn btn-brand">
                Request Estimate
              </Link>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Verify license
              </a>
            </div>
          </Reveal>

          <ul className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <li key={p.title} className="list-none">
                <Reveal delay={(i + 1) as 1 | 2 | 3}>
                  <div className="surface-dark p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <span className="icon-box-dark flex h-11 w-11 shrink-0">{pillarIcons[i]}</span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">{p.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
