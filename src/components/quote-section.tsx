"use client";

import { useState } from "react";
import { contactMethods, quoteServiceOptions, site } from "@/lib/site";
import { useQuote } from "./quote-context";
import { Reveal } from "./reveal";

const STEPS = 5;

export function QuoteSection() {
  const { draft, setField, resetDraft } = useQuote();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const [messageDraft, setMessageDraft] = useState("");

  function buildMessage() {
    const lines = [
      "Estimate request — SRL Painting",
      "",
      `Service: ${draft.service}`,
      `City: ${draft.city}`,
      draft.zip ? `ZIP: ${draft.zip}` : null,
      "",
      "Details:",
      draft.details,
      draft.estimatorSummary ? `\nProject summary:\n${draft.estimatorSummary}` : null,
      "",
      `Name: ${draft.name}`,
      `Phone: ${draft.phone}`,
      `Email: ${draft.email || "Not provided"}`,
      `Preferred contact: ${draft.contactMethod}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  async function submit() {
    setSubmitting(true);
    const message = buildMessage();
    setMessageDraft(message);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: draft.name,
          phone: draft.phone,
          email: draft.email,
          city: draft.city,
          service: draft.service,
          contactMethod: draft.contactMethod,
          details: [draft.details, draft.estimatorSummary].filter(Boolean).join("\n\n"),
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

  function handleReset() {
    setStep(1);
    setDone(false);
    setFallback(false);
    setCopied(false);
    setMessageDraft("");
    resetDraft();
  }

  const canNext =
    (step === 1 && draft.service) ||
    (step === 2 && draft.city.trim()) ||
    (step === 3 && draft.details.trim()) ||
    (step === 4 && draft.name.trim() && draft.phone.trim() && draft.contactMethod);

  return (
    <section id="contact" className="section-pad bg-ivory border-t border-[var(--line)]">
      <div className="container-main">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal>
            <p className="meta-brand">Estimate</p>
            <h2 className="display-lg mt-4 text-ink">Request an estimate.</h2>
            <p className="body-text mt-5 max-w-sm">Five quick steps. We respond within one business day.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn btn-line w-full sm:w-auto">
                Call {site.phone}
              </a>
              <a href={`sms:${site.phoneTel}`} className="btn btn-line w-full sm:w-auto">
                Text us
              </a>
            </div>
            <p className="mt-6 text-sm text-ink-muted">
              Or on Instagram:{" "}
              <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="text-brand underline-offset-2 hover:underline">
                {site.instagramHandle}
              </a>
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="border-t border-[var(--line)] pt-8 lg:border-t-0 lg:pt-0">
              {done ? (
                <div>
                  <p className="font-display text-2xl text-ink">{fallback ? "One more step" : "Request received"}</p>
                  <p className="body-text mt-4">
                    {fallback
                      ? copied
                        ? "Your request was copied. Send it via Instagram DM with any project photos."
                        : "Copy your request below and send it via Instagram DM."
                      : `Thanks, ${draft.name}. We'll follow up within one business day.`}
                  </p>
                  {fallback && !copied && (
                    <textarea readOnly value={messageDraft} rows={10} className="input mt-5 resize-y text-sm" onFocus={(e) => e.target.select()} />
                  )}
                  {fallback && (
                    <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full">
                      Open Instagram DM
                    </a>
                  )}
                  <button type="button" onClick={handleReset} className="btn btn-line mt-4 w-full">
                    Start over
                  </button>
                </div>
              ) : (
                <>
                  <p className="quote-progress">
                    {step.toString().padStart(2, "0")} — {STEPS.toString().padStart(2, "0")}
                  </p>
                  <div className="quote-step-dots" aria-hidden>
                    {Array.from({ length: STEPS }, (_, i) => (
                      <span
                        key={i}
                        className={`quote-step-dot ${i + 1 < step ? "is-done" : ""} ${i + 1 === step ? "is-current" : ""}`}
                      />
                    ))}
                  </div>

                  {step === 1 && (
                    <div className="mt-8">
                      <p className="field-label">What are we painting?</p>
                      {quoteServiceOptions.map((o) => (
                        <button
                          key={o.id}
                          type="button"
                          className={`quote-option ${draft.service === o.label ? "is-selected" : ""}`}
                          onClick={() => setField("service", o.label)}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="mt-8 space-y-6">
                      <label className="block">
                        <span className="field-label">City</span>
                        <input
                          className="input"
                          value={draft.city}
                          onChange={(e) => setField("city", e.target.value)}
                          placeholder="Bakersfield"
                          autoComplete="address-level2"
                        />
                      </label>
                      <label className="block">
                        <span className="field-label">ZIP</span>
                        <input
                          className="input"
                          value={draft.zip}
                          onChange={(e) => setField("zip", e.target.value)}
                          placeholder="93301"
                          autoComplete="postal-code"
                        />
                      </label>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="mt-8">
                      <label className="block">
                        <span className="field-label">Tell us a little about it</span>
                        <textarea
                          className="input min-h-[120px] resize-y"
                          value={draft.details}
                          onChange={(e) => setField("details", e.target.value)}
                          placeholder="Rooms, exterior elevations, cabinets, timeline…"
                          rows={5}
                        />
                      </label>
                      {draft.estimatorSummary && (
                        <p className="mt-4 text-xs text-ink-light">
                          Project summary from builder will be included.
                        </p>
                      )}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="mt-8 space-y-6">
                      <label className="block">
                        <span className="field-label">Name</span>
                        <input className="input" value={draft.name} onChange={(e) => setField("name", e.target.value)} autoComplete="name" />
                      </label>
                      <label className="block">
                        <span className="field-label">Phone</span>
                        <input className="input" type="tel" value={draft.phone} onChange={(e) => setField("phone", e.target.value)} autoComplete="tel" />
                      </label>
                      <label className="block">
                        <span className="field-label">Email</span>
                        <input className="input" type="email" value={draft.email} onChange={(e) => setField("email", e.target.value)} autoComplete="email" placeholder="Optional" />
                      </label>
                      <label className="block">
                        <span className="field-label">Preferred contact</span>
                        <select className="input" value={draft.contactMethod} onChange={(e) => setField("contactMethod", e.target.value)}>
                          <option value="">Select</option>
                          {contactMethods.map((m) => (
                            <option key={m.id} value={m.label}>{m.label}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="mt-8 space-y-4">
                      <p className="field-label">Review your request</p>
                      <dl className="space-y-3 text-sm">
                        <div><dt className="text-ink-light">Service</dt><dd className="text-ink">{draft.service}</dd></div>
                        <div><dt className="text-ink-light">Location</dt><dd className="text-ink">{draft.city}{draft.zip ? `, ${draft.zip}` : ""}</dd></div>
                        <div><dt className="text-ink-light">Details</dt><dd className="text-ink whitespace-pre-wrap">{draft.details}</dd></div>
                        {draft.estimatorSummary && (
                          <div><dt className="text-ink-light">Project summary</dt><dd className="text-ink whitespace-pre-wrap">{draft.estimatorSummary}</dd></div>
                        )}
                        <div><dt className="text-ink-light">Contact</dt><dd className="text-ink">{draft.name} · {draft.phone} · {draft.contactMethod}</dd></div>
                      </dl>
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
                        disabled={submitting}
                        onClick={submit}
                        className="btn btn-primary flex-1 disabled:opacity-40"
                      >
                        {submitting ? "Sending…" : "Submit Request"}
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
