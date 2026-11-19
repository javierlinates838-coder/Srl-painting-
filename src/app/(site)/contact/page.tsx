import type { Metadata } from "next";
import { BrushBackdrop } from "@/components/brush-backdrop";
import { BrushEdge } from "@/components/brush-edge";
import { BrushStroke } from "@/components/brush-stroke";
import { SrlIcon } from "@/components/srl-icon";
import { EstimateForm } from "@/components/site-interactions";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Estimate | SRL Painting Bakersfield",
  description: "Request a free, no-obligation painting estimate from SRL Painting. Call or text (661) 595-7530, or send your project details online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section id="contact" className="section contact-section is-page">
        <BrushBackdrop variant="contact" />
        <div className="shell contact-grid">
          <div className="contact-copy" data-reveal>
            <p className="kicker">Free estimate</p>
            <h1>
              Ready for a
              <br />
              <span className="accent-word">
                fresh coat?
                <BrushStroke className="accent-stroke" />
              </span>
            </h1>
            <p>
              Tell us about your project and we’ll get back to you about
              scope, timing, and a free, no-obligation estimate.
            </p>
            <a className="contact-phone" href={`tel:${site.phoneTel}`}>
              <SrlIcon name="phone" />
              <span>
                <small>Call or text</small>
                {site.phone}
              </span>
            </a>
            <div className="contact-alternatives">
              <a href={`sms:${site.phoneTel}`}>
                <SrlIcon name="message" /> Send a text
              </a>
              <a
                href={site.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SrlIcon name="instagram" /> Instagram DM
              </a>
            </div>
          </div>
          <EstimateForm />
        </div>
      </section>
      <section className="section faq-section" id="faq">
        <BrushEdge tone="black" variant={1} />
        <div className="shell faq-grid">
          <div data-reveal>
            <p className="kicker">FAQ</p>
            <h2>
              Good
              <br />
              <span className="red">questions.</span>
            </h2>
            <p>
              Don’t see yours? Text us at{" "}
              <a href={`sms:${site.phoneTel}`}>{site.phone}</a>.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
