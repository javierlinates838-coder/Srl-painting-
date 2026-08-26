import Link from "next/link";
import { pillars, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-stone">
      <div className="container-main">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionHead
              overline="About"
              title="A local crew. A state license."
              description="SRL Painting holds C-33 license #1108313 — bonded, insured, based in Kern County. We show up, prep the surface right, and leave when the job is done."
            />

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-8">
              <div>
                <dt className="overline text-[0.625rem]">License</dt>
                <dd className="font-display mt-2 text-[1.25rem]">#{site.license}</dd>
              </div>
              <div>
                <dt className="overline text-[0.625rem]">Class</dt>
                <dd className="font-display mt-2 text-[1.25rem]">C-33</dd>
              </div>
              <div>
                <dt className="overline text-[0.625rem]">Estimates</dt>
                <dd className="font-display mt-2 text-[1.25rem]">Free</dd>
              </div>
              <div>
                <dt className="overline text-[0.625rem]">Bonded</dt>
                <dd className="font-display mt-2 text-[1.25rem]">Yes</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-fill w-full sm:w-auto">
                Inquire
              </Link>
              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line w-full sm:w-auto"
              >
                Verify license
              </a>
            </div>
          </Reveal>

          <div className="space-y-10">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <article className="border-t border-[var(--line)] pt-8 first:border-t-0 first:pt-0">
                  <h3 className="headline-md">{p.title}</h3>
                  <p className="prose-body-sm mt-4">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
