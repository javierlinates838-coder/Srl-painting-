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
    <section id="contact" className="mesh-dark relative section-pad text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-main relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="accent-rule bg-brand-light" />
            <p className="label label-light mt-4">Contact</p>
            <h2 className="display-lg mt-3 text-white">
              Get your free<br />
              <span className="text-gradient">estimate.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
              Fill out the form — we&apos;ll open Instagram with your details ready to paste.
              Add photos of the areas you want painted for the fastest quote.
            </p>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-dark card-lift mt-8 flex items-center gap-4 p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-white shadow-lg shadow-brand/30">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white">{site.instagramHandle}</p>
                <p className="text-[12px] text-zinc-500">DM us — we reply within 1 business day</p>
              </div>
            </a>

            <div className="mt-10 hidden opacity-90 lg:block">
              <BrandLogo className="h-auto w-[130px]" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand/50 via-brand-light/30 to-transparent blur-sm" aria-hidden />
            <div className="surface-dark relative p-6 sm:p-8">
              {sent ? (
                <div className="py-10 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/20 text-brand-light">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="font-display mt-4 text-2xl font-bold text-white">You&apos;re all set</p>
                  <p className="mt-3 text-[14px] text-zinc-400">
                    Instagram is open — paste your message into a DM to {site.instagramHandle}.
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
                      <input name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/30" placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">City *</span>
                      <input name="city" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/30" placeholder="Bakersfield, LA, etc." />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Phone</span>
                    <input name="phone" type="tel" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/30" placeholder="(661) 555-0100" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Service *</span>
                    <select name="service" required defaultValue="" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/30">
                      <option value="" disabled className="text-black">Select a service</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o} className="text-black">{o}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[12px] font-semibold text-zinc-400">Project details *</span>
                    <textarea name="details" required rows={4} className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/30" placeholder="What needs painting? Timeline? Share photos on IG too." />
                  </label>
                  <button type="submit" className="btn btn-brand w-full !py-4">
                    Continue to Instagram DM →
                  </button>
                  <p className="text-center text-[11px] text-zinc-600">
                    Free estimate · No obligation · Lic. {site.license}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
