"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { IosGroup, IosRow } from "./ios-group";
import { SectionHead } from "./section-head";

const serviceOptions = [
  "Exterior painting",
  "Interior painting",
  "Cabinet refinishing",
  "New cabinet finishing",
  "Commercial painting",
  "Not sure yet",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [draftMessage, setDraftMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const message = [
      `Hi SRL Painting — I'd like an estimate.`,
      ``,
      `Name: ${fd.get("name")}`,
      `City: ${fd.get("city")}`,
      `Phone: ${fd.get("phone") || "Not provided"}`,
      `Service: ${fd.get("service")}`,
      ``,
      `Details:`,
      `${fd.get("details")}`,
    ].join("\n");

    setDraftMessage(message);

    let didCopy = false;
    try {
      await navigator.clipboard.writeText(message);
      didCopy = true;
    } catch {
      didCopy = false;
    }
    setCopied(didCopy);

    const popup = window.open(site.instagramDm, "_blank", "noopener,noreferrer");
    setPopupBlocked(!popup);

    setSent(true);
    setSubmitting(false);
  }

  function resetForm() {
    setSent(false);
    setCopied(false);
    setPopupBlocked(false);
    setDraftMessage("");
  }

  return (
    <section id="contact" className="section-pad-lg">
      <div className="container-main space-y-4">
        <Reveal>
          <SectionHead
            overline="Contact"
            title="Get an estimate"
            description="We'll copy your message and open Instagram."
          />
        </Reveal>

        <Reveal delay={1}>
          <IosGroup>
            <IosRow href={site.instagramDm} chevron>
              <span className="ios-row-content">
                <span className="ios-headline block">Message on Instagram</span>
                <span className="ios-footnote mt-0.5 block">{site.instagramHandle}</span>
              </span>
            </IosRow>
          </IosGroup>
        </Reveal>

        <Reveal delay={2}>
          {sent ? (
            <IosGroup>
              <IosRow>
                <span className="ios-row-content text-center py-4">
                  <span className="ios-title-2 block text-ios-green">✓</span>
                  <span className="ios-headline mt-2 block">Ready to send</span>
                  <span className="ios-footnote mt-1 block">
                    {copied ? "Message copied. Paste in Instagram." : "Copy below, then paste in Instagram."}
                  </span>
                </span>
              </IosRow>
              {!copied && (
                <IosRow>
                  <textarea
                    readOnly
                    value={draftMessage}
                    rows={6}
                    className="ios-field resize-none text-[0.9375rem]"
                    onFocus={(e) => e.target.select()}
                  />
                </IosRow>
              )}
              {popupBlocked && (
                <IosRow href={site.instagramDm} chevron>
                  <span className="ios-body text-ios-tint">Open Instagram</span>
                </IosRow>
              )}
              <IosRow onClick={resetForm} chevron>
                <span className="ios-body text-ios-tint">Send another</span>
              </IosRow>
            </IosGroup>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="ios-section-header">Your details</p>
              <IosGroup>
                <label className="block">
                  <span className="ios-label-field">Name</span>
                  <input name="name" required autoComplete="name" className="ios-field" placeholder="Required" />
                </label>
                <label className="block">
                  <span className="ios-label-field">City</span>
                  <input name="city" required autoComplete="address-level2" className="ios-field" placeholder="Required" />
                </label>
                <label className="block">
                  <span className="ios-label-field">Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" className="ios-field" placeholder="Optional" />
                </label>
                <label className="block">
                  <span className="ios-label-field">Service</span>
                  <select name="service" required defaultValue="" className="ios-field">
                    <option value="" disabled>
                      Select
                    </option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="ios-label-field">Project details</span>
                  <textarea name="details" required rows={3} className="ios-field resize-none" placeholder="What needs painting?" />
                </label>
              </IosGroup>
              <button type="submit" disabled={submitting} className="ios-btn ios-btn-brand mt-4 w-full disabled:opacity-50">
                {submitting ? "Preparing…" : "Continue to Instagram"}
              </button>
              <p className="ios-caption mt-3 text-center">Lic. {site.license} · Free · No obligation</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
