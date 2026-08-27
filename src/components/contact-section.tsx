"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
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
    <section id="contact" className="section-pad-lg bg-muted">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHead
              overline="Contact"
              title="Get an estimate"
              description="Fill out the form — we'll copy your message and open Instagram."
            />

            <a
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="site-card site-card-pad mt-6 flex items-center gap-4 transition-colors hover:bg-[var(--ios-fill)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[var(--ios-radius-sm)] bg-ios-brand text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
              <div>
                <p className="ios-headline">{site.instagramHandle}</p>
                <p className="ios-footnote">Reply within 1 business day</p>
              </div>
            </a>

            <div className="mt-8 hidden lg:block">
              <BrandLogo className="h-auto w-[110px] opacity-90" />
            </div>
          </Reveal>

          <Reveal delay={2}>
            {sent ? (
              <IosGroup>
                <IosRow>
                  <span className="ios-row-content py-4 text-center">
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
      </div>
    </section>
  );
}
