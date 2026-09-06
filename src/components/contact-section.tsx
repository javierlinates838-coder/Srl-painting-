"use client";

import { useState } from "react";
import { contactMethods, serviceFormOptions, site } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

type SubmitState = "idle" | "submitting" | "sent" | "fallback";

export function ContactSection() {
  const [state, setState] = useState<SubmitState>("idle");
  const [copied, setCopied] = useState(false);
  const [draftMessage, setDraftMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      city: String(fd.get("city") ?? ""),
      service: String(fd.get("service") ?? ""),
      contactMethod: String(fd.get("contactMethod") ?? ""),
      details: String(fd.get("details") ?? ""),
    };

    const message = [
      `New estimate request for SRL Painting`,
      ``,
      `Name: ${payload.name}`,
      `Email: ${payload.email || "Not provided"}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `City: ${payload.city}`,
      `Service: ${payload.service}`,
      `Preferred contact: ${payload.contactMethod}`,
      ``,
      `Project details:`,
      payload.details,
    ].join("\n");

    setDraftMessage(message);
    setSubmittedName(payload.name);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setState("sent");
        return;
      }
    } catch {
      // fall through to client-side fallback
    }

    let didCopy = false;
    try {
      await navigator.clipboard.writeText(message);
      didCopy = true;
    } catch {
      didCopy = false;
    }
    setCopied(didCopy);
    setState("fallback");
  }

  function resetForm() {
    setState("idle");
    setCopied(false);
    setDraftMessage("");
    setSubmittedName("");
  }

  return (
    <section id="contact" className="section-pad-lg bg-section">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <SectionHead
              label="Estimate"
              title="Request your free estimate"
              description="Tell us about your project. We typically respond within one business day with next steps."
            />

            <div className="mt-8 space-y-4">
              <a
                href={site.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 p-5 transition-colors hover:border-brand/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-lg text-ink">Instagram — {site.instagramHandle}</p>
                  <p className="text-sm text-ink-muted">Secondary option · attach photos in your DM</p>
                </div>
              </a>

              <div className="card p-5 text-sm text-ink-muted">
                <p className="font-semibold text-ink">What to include</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>City and type of project (interior, exterior, cabinets, commercial)</li>
                  <li>Photos of the areas to paint</li>
                  <li>Your timeline, if you have one</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="surface-elevated p-6 sm:p-8">
              {state === "sent" ? (
                <div className="py-6 text-center sm:py-8">
                  <p className="font-display text-2xl text-ink">Request received</p>
                  <p className="mt-3 text-ink-muted">
                    Thanks, {submittedName} — we&apos;ll follow up within one business day.
                  </p>
                  <button type="button" onClick={resetForm} className="btn btn-outline mt-6">
                    Send another request
                  </button>
                </div>
              ) : state === "fallback" ? (
                <div className="py-4">
                  <p className="font-display text-2xl text-ink">Almost done</p>
                  <p className="mt-3 text-ink-muted">
                    {copied
                      ? "Your request was copied. Paste it into an Instagram DM so we can review photos and details."
                      : "Copy your request below, then send it via Instagram DM with any project photos."}
                  </p>
                  {!copied && (
                    <label className="mt-5 block">
                      <span className="field-label">Your request</span>
                      <textarea
                        readOnly
                        value={draftMessage}
                        rows={10}
                        className="input resize-y text-sm"
                        onFocus={(e) => e.target.select()}
                      />
                    </label>
                  )}
                  <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-brand mt-5 w-full">
                    Open Instagram DM
                  </a>
                  <button type="button" onClick={resetForm} className="btn btn-ghost mt-3 w-full">
                    Edit and resubmit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="field-label">Name *</span>
                      <input name="name" required autoComplete="name" className="input" placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="field-label">Phone *</span>
                      <input name="phone" type="tel" required autoComplete="tel" className="input" placeholder="(555) 555-5555" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="field-label">Email</span>
                    <input name="email" type="email" autoComplete="email" className="input" placeholder="Optional" />
                  </label>
                  <label className="block">
                    <span className="field-label">City / service area *</span>
                    <input name="city" required autoComplete="address-level2" className="input" placeholder="Bakersfield, LA, etc." />
                  </label>
                  <label className="block">
                    <span className="field-label">Project type *</span>
                    <select name="service" required defaultValue="" className="input">
                      <option value="" disabled>Select a service</option>
                      {serviceFormOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="field-label">Preferred contact method *</span>
                    <select name="contactMethod" required defaultValue="" className="input">
                      <option value="" disabled>How should we reach you?</option>
                      {contactMethods.map((m) => (
                        <option key={m.id} value={m.label}>{m.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="field-label">Project details *</span>
                    <textarea
                      name="details"
                      required
                      rows={4}
                      className="input resize-y"
                      placeholder="Rooms, exterior elevations, cabinet count, timeline, etc."
                    />
                  </label>
                  <button type="submit" disabled={state === "submitting"} className="btn btn-brand w-full disabled:opacity-60">
                    {state === "submitting" ? "Sending…" : "Request My Free Estimate"}
                  </button>
                  <p className="text-center text-xs text-ink-muted">
                    Lic. {site.license} · C-33 · Free estimates · No obligation
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
