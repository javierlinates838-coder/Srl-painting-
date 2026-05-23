"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

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

    navigator.clipboard?.writeText(message);
    window.open(site.instagram, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad bg-charcoal text-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="accent-rule bg-brand-light" />
            <p className="label mt-4 text-brand-light">Contact</p>
            <h2 className="display-lg mt-3 text-white">Get your free estimate</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
              Fill out the form and we&apos;ll open Instagram with your details ready to paste.
              Include photos of the areas you want painted for the fastest, most accurate quote.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-dark flex items-center gap-4 p-4 transition hover:border-white/20"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <p className="font-display font-bold text-white">{site.instagramHandle}</p>
                  <p className="text-[12px] text-zinc-500">Fastest way to reach us</p>
                </div>
              </a>

              <a
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[13px] font-medium text-zinc-500 hover:text-white"
              >
                Verify license #{site.license} on CSLB →
              </a>
            </div>

            <div className="mt-10 hidden lg:flex lg:justify-center">
              <BrandLogo className="h-auto w-[140px] opacity-90" />
            </div>
          </div>

          <div className="surface-dark p-6 sm:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <p className="font-display text-2xl font-bold text-white">You&apos;re all set</p>
                <p className="mt-3 text-[14px] text-zinc-400">
                  Instagram is open — paste your message into a DM to {site.instagramHandle}.
                  Your details are copied to your clipboard.
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn btn-outline mt-6">
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Name *</span>
                    <input name="name" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none ring-brand focus:ring-2" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">City *</span>
                    <input name="city" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none ring-brand focus:ring-2" placeholder="Bakersfield, LA, etc." />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Phone</span>
                  <input name="phone" type="tel" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none ring-brand focus:ring-2" placeholder="(661) 555-0100" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Service *</span>
                  <select name="service" required defaultValue="" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none ring-brand focus:ring-2">
                    <option value="" disabled className="text-black">Select a service</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} className="text-black">{o}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Project details *</span>
                  <textarea name="details" required rows={4} className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none ring-brand focus:ring-2" placeholder="What needs painting? Timeline? Any photos to share on IG?" />
                </label>
                <button type="submit" className="btn btn-brand w-full">
                  Continue to Instagram DM
                </button>
                <p className="text-center text-[11px] text-zinc-600">
                  Free estimate · No obligation · Lic. {site.license}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
