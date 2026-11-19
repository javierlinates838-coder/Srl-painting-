import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SrlIcon } from "@/components/srl-icon";
import { BrushEdge } from "@/components/brush-edge";
import { StorefrontArt } from "@/components/room-illustrations";
import { promises, serviceDetails, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Painting Services | SRL Painting Bakersfield",
  description: "Exterior and interior painting, cabinet refurbishing and new cabinets, and commercial painting across Bakersfield and Kern County.",
  alternates: { canonical: "/services" },
};

const rows = [
  ...services.map((s) => ({ id: s.id, num: s.num, icon: s.icon, title: s.title, text: s.text, tags: s.tags, image: s.image as string | undefined, alt: s.alt as string })),
  {
    id: "commercial", num: "04", icon: "check" as const, title: "Commercial painting",
    text: "Offices, storefronts, and business spaces. We plan the scope and schedule around your hours so your doors stay open.",
    tags: ["Offices", "Storefronts", "Flexible hours", "Repaints"], image: undefined, alt: "",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero kicker="Services" title="Every surface." accent="One standard.">
        <p>
          From a single accent wall to a full exterior repaint, every job gets
          the same prep, the same care, and the same clean finish.
        </p>
      </PageHero>

      <section className="section service-rows">
        <div className="shell">
          {rows.map((row, index) => (
            <article key={row.id} id={row.id} className={index % 2 ? "service-row is-flipped" : "service-row"} data-reveal>
              <div className={row.image ? "service-row-media" : "service-row-media is-art"}>
                {row.image ? (
                  <Image src={row.image} alt={row.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                ) : (
                  <StorefrontArt />
                )}
                <span className="service-row-num" aria-hidden="true">{row.num}</span>
              </div>
              <div className="service-row-copy">
                <span className="panel-icon"><SrlIcon name={row.icon} /></span>
                <h2>{row.title}</h2>
                <p>{row.text}</p>
                <ul className="check-list">
                  {serviceDetails[row.id].map((item) => <li key={item}>{item}</li>)}
                </ul>
                <ul className="tags">
                  {row.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <Link className="button primary" href="/contact">
                  Get a quote <SrlIcon name="arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section">
        <BrushEdge tone="paper" />
        <div className="shell">
          <div className="section-head" data-reveal>
            <div>
              <p className="kicker">On every job</p>
              <h2>
                The finish is what you see.
                <br />
                <span className="red">The care is underneath.</span>
              </h2>
            </div>
            <p>
              A great paint job is mostly the part nobody photographs:
              protecting your home, fixing the surface, and taking the time to
              cut every line clean.
            </p>
          </div>
          <div className="promise-grid is-wide" data-reveal>
            {promises.map((item, index) => (
              <div className="promise" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <a className="text-link" href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer">
            Verify license #{site.license} with CSLB <SrlIcon name="arrow" />
          </a>
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
