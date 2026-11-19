import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { ReviewsSection } from "@/components/reviews-section";
import { SrlIcon } from "@/components/srl-icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work | SRL Painting Bakersfield",
  description: "Recent exterior, interior, cabinet, and outdoor painting projects by SRL Painting around Bakersfield and Kern County.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero kicker="Our work" title="Real homes." accent="Real results." tone="paper">
        <p>
          A few recent projects from around Kern County. Tap any photo for a
          closer look, and follow along for new work every week.
        </p>
        <a className="text-link" href={site.instagram} target="_blank" rel="noopener noreferrer">
          <SrlIcon name="instagram" /> Follow {site.instagramHandle}
        </a>
      </PageHero>

      <section className="section work-section">
        <div className="shell">
          <ProjectGallery />
        </div>
      </section>

      <ReviewsSection />
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
