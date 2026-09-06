"use client";

import { useState } from "react";
import { contactMethods, quoteServiceOptions, site } from "@/lib/site";
import { Reveal } from "./reveal";

type FormData = {
  service: string;
  city: string;
  details: string;
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
};

const STEPS = 4;

export function QuoteSection() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const [draft, setDraft] = useState("");
  const [data, setData] = useState<FormData>({
    service: "",
    city: "",
    details: "",
    name: "",
    phone: "",
    email: "",
    contactMethod: "",
  });

  function update(field: keyof FormData, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function buildMessage() {
    return [
      `Estimate request — SRL Painting`,
      ``,
      `Service: ${data.service}`,
      `City: ${data.city}`,
      ``,
      `Details:`,
      data.details,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Preferred contact: ${data.contactMethod}`,
    ].join("\n");
  }

  async function submit() {
    setSubmitting(true);
    const message = buildMessage();
    setDraft(message);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          city: data.city,
          service: data.service,
          contactMethod: data.contactMethod,
          details: data.details,
        }),
      });
      if (res.ok) {
        setDone(true);
        setSubmitting(false);
        return;
      }
    } catch {
      // fallback below
    }

    let didCopy = false;
    try {
      await navigator.clipboard.writeText(message);
      didCopy = true;
    } catch {
      didCopy = false;
    }
    setCopied(didCopy);
    setFallback(true);
    setDone(true);
    setSubmitting(false);
  }

  function reset() {
    setStep(1);
    setDone(false);
    setFallback(false);
    setCopied(false);
    setDraft("");
    setData({ service: "", city: "", details: "", name: "", phone: "", email: "", contactMethod: "" });
  }

  const canNext =
    (step === 1 && data.service) ||
    (step === 2 && data.city.trim()) ||
    (step === 3 && data.details.trim()) ||
    (step === 4 && data.name.trim() && data.phone.trim() && data.contactMethod);

  return (
    <section id="contact" className="section-pad bg-ivory border-t border-[var(--line)]">
      <div className="container-main">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal>
            <p className="meta-brand">Estimate</p>
            <h2 className="editorial-lg mt-4 text-ink">Request an estimate.</h2>
            <p className="body-text mt-5 max-w-sm">
              Four quick steps. We respond within one business day.
            </p>
            <p className="mt-8 text-sm text-ink-muted">
              Prefer Instagram?{" "}
              <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="text-brand underline-offset-2 hover:underline">
                {site.instagramHandle}
              </a>
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="border-t border-[var(--line)] pt-8 lg:pt-0 lg:border-t-0">
              {done ? (
                <div>
                  <p className="font-display text-2xl text-ink">
                    {fallback ? "One more step" : "Request received"}
                  </p>
                  <p className="body-text mt-4">
                    {fallback
                      ? copied
                        ? "Your request was copied. Send it via Instagram DM with any project photos."
                        : "Copy your request below and send it via Instagram DM."
                      : `Thanks, ${data.name}. We'll follow up within one business day.`}
                  </p>
                  {fallback && !copied && (
                    <textarea readOnly value={draft} rows={10} className="input mt-5 resize-y text-sm" onFocus={(e) => e.target.select()} />
                  )}
                  {fallback && (
                    <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full">
                      Open Instagram DM
                    </a>
                  )}
                  <button type="button" onClick={reset} className="btn btn-line mt-4 w-full">
                    Start over
                  </button>
                </div>
              ) : (
                <>
                  <p className="quote-progress">{step} / {STEPS}</p>

                  {step === 1 && (
                    <div className="mt-8">
                      <p className="field-label">What are we painting?</p>
                      {quoteServiceOptions.map((o) => (
                        <button
                          key={o.id}
                          type="button"
                          className={`quote-option ${data.service === o.label ? "is-selected" : ""}`}
                          onClick={() => update("service", o.label)}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="mt-8">
                      <label className="block">
                        <span className="field-label">Where is the project?</span>
                        <input
                          className="input"
                          value={data.city}
                          onChange={(e) => update("city", e.target.value)}
                          placeholder="City or ZIP"
                          autoComplete="address-level2"
                        />
                      </label>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="mt-8">
                      <label className="block">
                        <span className="field-label">Tell us about it</span>
                        <textarea
                          className="input min-h-[120px] resize-y"
                          value={data.details}
                          onChange={(e) => update("details", e.target.value)}
                          placeholder="Rooms, exterior elevations, cabinets, timeline…"
                          rows={5}
                        />
                      </label>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="mt-8 space-y-6">
                      <label className="block">
                        <span className="field-label">Name</span>
                        <input className="input" value={data.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" />
                      </label>
                      <label className="block">
                        <span className="field-label">Phone</span>
                        <input className="input" type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" />
                      </label>
                      <label className="block">
                        <span className="field-label">Email</span>
                        <input className="input" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" placeholder="Optional" />
                      </label>
                      <label className="block">
                        <span className="field-label">Preferred contact</span>
                        <select className="input" value={data.contactMethod} onChange={(e) => update("contactMethod", e.target.value)}>
                          <option value="">Select</option>
                          {contactMethods.map((m) => (
                            <option key={m.id} value={m.label}>{m.label}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  )}

                  <div className="mt-10 flex gap-3">
                    {step > 1 && (
                      <button type="button" onClick={() => setStep((s) => s - 1)} className="btn btn-line flex-1">
                        Back
                      </button>
                    )}
                    {step < STEPS ? (
                      <button
                        type="button"
                        disabled={!canNext}
                        onClick={() => setStep((s) => s + 1)}
                        className="btn btn-primary flex-1 disabled:opacity-40"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={!canNext || submitting}
                        onClick={submit}
                        className="btn btn-primary flex-1 disabled:opacity-40"
                      >
                        {submitting ? "Sending…" : "Request My Free Estimate"}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
