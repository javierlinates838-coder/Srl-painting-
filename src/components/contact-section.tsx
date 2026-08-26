"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
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
    <section id="contact" className="bg-ink section-pad text-chalk">
      <div className="container-main">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionHead
              light
              overline="Inquire"
              title="Tell us about the job."
              description="Fill this out. We copy your message and open Instagram — paste it in a DM and attach photos if you have them."
            />

            <a
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Instagram DM to ${site.instagramHandle}`}
              className="mt-10 inline-flex items-baseline gap-3 border-b border-[rgba(246,242,235,0.2)] pb-1 link-underline !text-chalk !no-underline hover:!text-chalk"
            >
              <span className="font-display text-[1.375rem]">{site.instagramHandle}</span>
              <span className="text-[0.8125rem] text-umber-light">→</span>
            </a>
            <p className="mt-2 text-[0.8125rem] text-umber-light">Usually within one business day.</p>
          </Reveal>

          <Reveal delay={2}>
            <div className="border border-[rgba(246,242,235,0.12)] p-8 sm:p-10">
              {sent ? (
                <div className="py-4">
                  <p className="headline-md !text-chalk">Done.</p>
                  <p className="prose-body-sm mt-4 !text-umber-light">
                    {copied
                      ? "Message copied. Paste it into Instagram."
                      : "Copy your message below, then paste into Instagram."}
                  </p>

                  {!copied && (
                    <label className="mt-6 block">
                      <span className="overline !text-umber-light">Your message</span>
                      <textarea
                        readOnly
                        value={draftMessage}
                        rows={8}
                        className="input-field mt-3 resize-y text-[0.875rem]"
                        onFocus={(e) => e.target.select()}
                      />
                    </label>
                  )}

                  {popupBlocked && (
                    <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-fill mt-6 w-full">
                      Open Instagram
                    </a>
                  )}

                  <button type="button" onClick={resetForm} className="btn btn-line-dark mt-4 w-full">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="overline !text-umber-light">Name</span>
                      <input name="name" required autoComplete="name" className="input-field mt-2" placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="overline !text-umber-light">City</span>
                      <input name="city" required autoComplete="address-level2" className="input-field mt-2" placeholder="Bakersfield, LA…" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="overline !text-umber-light">Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" className="input-field mt-2" placeholder="Optional" />
                  </label>
                  <label className="block">
                    <span className="overline !text-umber-light">Service</span>
                    <select name="service" required defaultValue="" className="input-field mt-2">
                      <option value="" disabled>
                        Select
                      </option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o} className="text-ink">
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="overline !text-umber-light">Details</span>
                    <textarea
                      name="details"
                      required
                      rows={4}
                      className="input-field mt-2 resize-y"
                      placeholder="What needs painting? Any timeline?"
                    />
                  </label>
                  <button type="submit" disabled={submitting} className="btn btn-fill w-full disabled:opacity-50">
                    {submitting ? "One moment…" : "Continue to Instagram"}
                  </button>
                  <p className="text-center text-[0.75rem] text-umber-light">
                    Lic. {site.license} · No obligation
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
