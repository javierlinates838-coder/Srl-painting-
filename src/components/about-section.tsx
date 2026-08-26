import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const stats = [
  { v: `#${site.license}`, l: "CSLB license" },
  { v: "C-33", l: "Painting & decorating" },
  { v: "Bonded", l: "Licensed contractor" },
  { v: "Free", l: "Written estimates" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-dark section-pad text-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHead
              light
              label="The crew"
              title={
                <>
                  Local hands. <span className="text-gradient">Licensed work.</span>
                </>
              }
              description="SRL Painting is a California C-33 contractor serving Kern County and Los Angeles. When you hire us, you get a real crew that shows up, preps properly, and stands at the door for the walkthrough."
            />

            <div className="mt-9 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.l} className="stat-card">
                  <p className="font-display text-xl font-medium text-white">{s.v}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                Request an estimate
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

          <ul className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <li key={p.title} className="list-none">
                <article className="pillar-card">
                  <span className="pillar-num" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[1.2rem] font-medium leading-snug text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">{p.text}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
