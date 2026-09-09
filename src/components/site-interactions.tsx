"use client";
import Link from "next/link";
import { SrlIcon } from "./srl-icon";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="primary-nav"
        aria-label="Main navigation"
        className={open ? "main-nav is-open" : "main-nav"}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        {[
          ["#work", "Our work"],
          ["#services", "Services"],
          ["#process", "Our process"],
          ["#reviews", "Reviews"],
        ].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="button primary"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Free estimate ↗
        </a>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-instagram"
          aria-label="SRL Painting on Instagram (opens in a new tab)"
        >
          <SrlIcon name="instagram" />
        </a>
      </nav>
    </>
  );
}
export { ProjectShowcase } from "./project-reveal";
export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const pending = useRef(false);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (status === "sent") resultHeading.current?.focus();
  }, [status]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    const fields = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );
    setMessage(
      `Hi SRL Painting! I'd like a free estimate.\nName: ${fields.name}\nPhone: ${fields.phone}\nCity: ${fields.city}\nService: ${fields.service}\nPreferred contact: ${fields.contactMethod}\n${fields.details}`,
    );
    setStatus("sending");
    setCopied(false);
    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      setStatus(response.ok && result.ok === true ? "sent" : "error");
    } catch {
      setStatus("error");
    } finally {
      pending.current = false;
    }
  }
  return (
    <div className="estimate-card">
      <p className="eyebrow">FREE ESTIMATE · NO OBLIGATION</p>
      <h3>Tell us about your project.</h3>
      <p className="form-intro">
        A few details help us get the conversation started. Fields marked * are
        required.
      </p>
      <p className="sr-only" role="status" aria-live="polite">
        {status === "sending"
          ? "Sending your estimate request. Please wait."
          : ""}
      </p>
      {status === "sent" ? (
        <div className="form-result" role="status">
          <span className="seal">✓</span>
          <h3 ref={resultHeading} tabIndex={-1}>
            Your request has been sent.
          </h3>
          <p>
            Thank you for reaching out. SRL Painting will follow up using your
            preferred contact method.
          </p>
          <button
            className="button secondary"
            onClick={() => setStatus("idle")}
          >
            Send another request
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <fieldset disabled={status === "sending"}>
            <div className="form-grid">
              <label>
                Your name *
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Full name"
                />
              </label>
              <label>
                Phone number *
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  minLength={7}
                  maxLength={30}
                  placeholder="(661) 555-0123"
                />
              </label>
              <label>
                Email <span>(optional)</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                City *
                <input
                  name="city"
                  autoComplete="address-level2"
                  required
                  maxLength={100}
                  placeholder="Bakersfield"
                />
              </label>
              <label>
                What are we painting? *
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {[
                    "Exterior",
                    "Interior",
                    "Cabinets",
                    "Commercial",
                    "Other",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label>
                Best way to reach you *
                <select
                  name="contactMethod"
                  required
                  defaultValue="Text message"
                >
                  <option>Text message</option>
                  <option>Phone call</option>
                </select>
              </label>
            </div>
            <label className="details-label">
              A little about your project *
              <textarea
                name="details"
                required
                maxLength={5000}
                rows={4}
                placeholder="Rooms, surfaces, cabinet count, or your ideal timeline…"
              />
            </label>
            <button type="submit" className="button primary submit-button">
              {status === "sending"
                ? "Sending your request…"
                : "Request my free estimate"}
              <span aria-hidden="true">↗</span>
            </button>
            <p className="privacy-note">
              Submitting asks SRL Painting to contact you about this project
              using your selected method; it does not book work or authorize
              marketing messages. Please do not include sensitive information.{" "}
              <Link href="/terms#inquiries">How this inquiry is handled</Link>.
            </p>
          </fieldset>
          {status === "error" && (
            <div className="form-error" role="alert">
              <strong>We couldn’t confirm delivery.</strong>
              <p>
                Your details are still here. You can retry, or send the request
                directly below.
              </p>
              <textarea
                aria-label="Your request to copy"
                readOnly
                value={message}
                rows={5}
                onFocus={(e) => e.currentTarget.select()}
              />
              <div className="button-row">
                <a
                  className="button secondary"
                  href={`sms:${site.phoneTel}?body=${encodeURIComponent(message)}`}
                >
                  Open text message ↗
                </a>
                <button
                  type="button"
                  className="text-link"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(message);
                      setCopied(true);
                    } catch {
                      setCopied(false);
                    }
                  }}
                >
                  {copied ? "Copied ✓" : "Copy request"}
                </button>
                <a
                  className="text-link"
                  href={site.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram DM ↗
                </a>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
