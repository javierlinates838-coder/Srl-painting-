"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const message = [
      `Hi SRL Painting — I'd like a free estimate.`,
      ``,
      `Name: ${fd.get("name")}`,
      `City: ${fd.get("city")}`,
      `Phone: ${fd.get("phone") || "Not provided"}`,
      `Service: ${fd.get("service")}`,
      ``,
      `Project details:`,
      `${fd.get("details")}`,
    ].join("\n");

    navigator.clipboard?.writeText(message).then(() => setCopied(true));
    window.open(site.instagramDm, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contact" className="bg-dark section-pad text-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHead
              light
              label="Contact"
              title={
                <>
                  Get your free <span className="text-gradient">estimate.</span>
                </>
              }
              description="Fill out the form below. We copy your details and open Instagram — paste them into a DM and attach photos for the fastest quote."
            />

            <a
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-dark mt-8 flex items-center gap-4 p-5 hover:border-brand/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-bold">{site.instagramHandle}</p>
                <p className="text-[12px] text-zinc-500">DM us — we reply within 1 business day</p>
              </div>
              <svg className="h-5 w-5 shrink-0 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <div className="mt-10 hidden lg:block">
              <BrandLogo className="h-auto w-[120px]" />
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="surface-dark p-6 sm:p-8">
              {sent ? (
                <div className="py-10 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-brand-light">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="font-display mt-4 text-2xl font-bold">You&apos;re all set</p>
                  <p className="mt-3 text-[14px] text-zinc-400">
                    {copied ? "Your message was copied." : "Your details are ready."} Paste into a DM to{" "}
                    {site.instagramHandle}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setCopied(false);
                    }}
                    className="btn btn-outline mt-6"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Name *</span>
                      <input name="name" required autoComplete="name" className="input-dark" placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">City *</span>
                      <input name="city" required className="input-dark" placeholder="Bakersfield, LA, etc." />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" className="input-dark" placeholder="Optional — for a callback" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Service *</span>
                    <select name="service" required defaultValue="" className="input-dark">
                      <option value="" disabled className="text-black">
                        Select a service
                      </option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o} className="text-black">
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Project details *</span>
                    <textarea
                      name="details"
                      required
                      rows={4}
                      className="input-dark resize-y"
                      placeholder="What needs painting? Timeline? Share photos on IG too."
                    />
                  </label>
                  <button type="submit" className="btn btn-brand w-full !py-3.5">
                    Continue to Instagram DM
                  </button>
                  <p className="text-center text-[11px] text-zinc-600">
                    Free estimate · No obligation · Lic. {site.license}
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
