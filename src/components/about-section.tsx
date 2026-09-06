import Image from "next/image";
import Link from "next/link";
import { pillars, serviceAreas, site } from "@/lib/site";
import { Reveal } from "./reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-stone">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal>
            <div className="lg:col-span-5">
              <p className="meta-brand">SRL / About</p>
              <h2 className="editorial-lg mt-6 text-ink">
                A local crew.
                <br />
                <span className="italic">A higher standard.</span>
              </h2>
              <p className="body-text mt-6">
                SRL Painting is a California C-33 contractor based in Kern County. We show up on time, prep properly, and leave homes clean — from Bakersfield to Los Angeles.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                Lic. {site.license} · {site.licenseClass}
              </p>
              <Link href="#contact" className="btn btn-primary mt-8">
                Request an estimate
              </Link>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="lg:col-span-7">
              {/* Asset slot: replace with authentic crew/owner photograph when available */}
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/projects/cabinets-after.jpg"
                  alt="SRL Painting cabinet refinishing project — placeholder until crew photography is available"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-ink-light">
                Project photography on site. Team portrait slot reserved for future authentic crew image.
              </p>

              <ul className="mt-10 space-y-6 border-t border-[var(--line)] pt-10">
                {pillars.map((p) => (
                  <li key={p.title}>
                    <h3 className="font-display text-lg text-ink">{p.title}</h3>
                    <p className="body-sm mt-2">{p.text}</p>
                  </li>
                ))}
              </ul>

              <p className="meta mt-10">Service areas</p>
              <p className="mt-3 text-sm text-ink-muted">
                {serviceAreas.map((a) => a.city).join(" · ")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
