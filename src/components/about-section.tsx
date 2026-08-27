import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHead
              overline="About"
              title={site.name}
              description="Licensed C-33 contractor based in Kern County. We show up, prep right, and leave clean."
            />

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {[
                { l: "License", v: `#${site.license}` },
                { l: "Class", v: "C-33" },
                { l: "Estimates", v: "Free" },
                { l: "Bonded", v: "Yes" },
              ].map((s) => (
                <div key={s.l} className="site-card site-card-pad text-center">
                  <dt className="ios-caption">{s.l}</dt>
                  <dd className="ios-headline mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link href="#contact" className="ios-btn ios-btn-brand">
                Get Estimate
              </Link>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ios-btn ios-btn-gray"
              >
                Verify license
              </a>
            </div>
          </Reveal>

          <ul className="space-y-4">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                  <article className="site-card site-card-pad">
                    <p className="ios-caption font-semibold text-ios-brand">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="ios-headline mt-2">{p.title}</h3>
                    <p className="ios-footnote mt-2 leading-relaxed">{p.text}</p>
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
