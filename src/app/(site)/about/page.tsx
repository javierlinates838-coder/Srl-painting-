import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProcessHouse } from "@/components/process-house";
import { ServiceAreaMap } from "@/components/service-area-map";
import { BrushEdge } from "@/components/brush-edge";
import { SrlIcon } from "@/components/srl-icon";
import { promises, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Process | SRL Painting Bakersfield",
  description: "Why Bakersfield homeowners choose SRL Painting, how a project runs from walkthrough to final walkthrough, and where we work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About SRL" title="Local crew." accent="Careful work." tone="black">
        <p>
          SRL Painting is a licensed & bonded painting contractor based in
          Bakersfield, doing residential, commercial, and cabinet work across
          Kern County.
        </p>
      </PageHero>
      <section className="section why-section" id="about">
        <div className="shell why-grid">
          <div className="why-photo" data-reveal>
            <Image
              src="/projects/interior-after.jpg"
              alt="Room fully masked in plastic while an SRL painter sprays the ceiling"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
            <span className="photo-tag">On the job · Bakersfield</span>
          </div>
          <div className="why-copy" data-reveal>
            <p className="kicker">Why SRL</p>
            <h2>
              The finish is what you see.
              <br />
              <span className="red">The care is underneath.</span>
            </h2>
            <p className="why-lede">
              A great paint job is mostly the part nobody photographs:
              protecting your home, fixing the surface, and taking the time to
              cut every line clean. That’s where we don’t cut corners.
            </p>
            <div className="promise-grid">
              {promises.map((item, index) => (
                <div className="promise" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <a
              className="text-link"
              href={site.licenseVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify license #{site.license} with CSLB{" "}
              <SrlIcon name="arrow" />
            </a>
          </div>
        </div>
      </section>
      <section id="process" className="section process-section">
        <BrushEdge tone="black" variant={2} />
        <div className="shell">
          <div className="section-head" data-reveal>
            <div>
              <p className="kicker">How it works</p>
              <h2>
                Simple from
                <br />
                <span className="red">start to finish.</span>
              </h2>
            </div>
            <p>
              No guesswork, no surprises. Here’s what happens from the first
              call to the final walkthrough.
            </p>
          </div>
          <ProcessHouse />
        </div>
      </section>
      <section className="section area-section" id="areas">
        <BrushEdge tone="black" />
        <div className="shell area-grid">
          <div data-reveal>
            <p className="kicker">Service area</p>
            <h2>
              Rooted in
              <br />
              <span className="red">Bakersfield.</span>
            </h2>
            <p>
              Based right here in Bakersfield and serving Shafter, Tehachapi,
              Lake Isabella, and projects down in Los Angeles. Not sure if
              you’re in range? Just ask.
            </p>
            <a className="button primary" href={`tel:${site.phoneTel}`}>
              <SrlIcon name="phone" /> Call {site.phone}
            </a>
          </div>
          <ServiceAreaMap />
        </div>
      </section>
      <section className="next-step">
        <div className="shell next-step-inner" data-reveal>
          <h2>
            Ready when <span className="red">you are.</span>
          </h2>
          <div className="next-step-actions">
            <Link className="button primary" href="/contact">
              Get my free estimate <SrlIcon name="arrow" />
            </Link>
            <a className="button ghost" href={`tel:${site.phoneTel}`}>
              <SrlIcon name="phone" /> {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
