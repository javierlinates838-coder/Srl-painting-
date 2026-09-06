import Image from "next/image";
import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-section-alt">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-lg">
              <Image
                src="/projects/exterior-after.jpg"
                alt="SRL Painting exterior project — finished home in Kern County"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Real SRL project photography — no stock images.
            </p>
          </Reveal>

          <div>
            <Reveal delay={1}>
              <SectionHead
                label="About"
                title="Local crew. Licensed work."
                description="SRL Painting is a California-licensed C-33 contractor based in Kern County. When you hire us, you get a crew that shows up on time, preps properly, and leaves your home clean."
              />

              <dl className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { l: "License", v: `#${site.license}` },
                  { l: "Class", v: "C-33" },
                  { l: "Estimates", v: "Free" },
                  { l: "Status", v: "Bonded" },
                ].map((s) => (
                  <div key={s.l} className="card p-4 text-center">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-muted">{s.l}</dt>
                    <dd className="mt-1 font-display text-lg text-brand">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-8 space-y-5">
                {pillars.map((p) => (
                  <li key={p.title}>
                    <h3 className="font-display text-lg text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="#contact" className="btn btn-brand w-full sm:w-auto">
                  Request My Free Estimate
                </Link>
                <a
                  href={site.licenseVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full sm:w-auto"
                >
                  Verify license
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
