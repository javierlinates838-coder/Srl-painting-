"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconInstagram } from "./icons";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Hi SRL Painting, I'd like a free estimate.`,
      ``,
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      email ? `Email: ${email}` : null,
      `Service: ${service}`,
      ``,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const dmUrl = `${site.instagram}?utm_source=website`;
    window.open(dmUrl, "_blank", "noopener,noreferrer");

    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(body);
    }

    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Get in touch
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Free estimates
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              The fastest way to reach us is Instagram direct message. Fill out the form and
              we&apos;ll open Instagram for you—your details are copied so you can paste them in
              your message.
            </p>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-6 py-4 transition hover:border-brand-200 hover:bg-brand-50"
            >
              <IconInstagram className="h-8 w-8 text-brand-700" />
              <div>
                <p className="font-semibold text-stone-900">{site.instagramHandle}</p>
                <p className="text-sm text-stone-600">DM us on Instagram</p>
              </div>
            </a>

            <p className="mt-6 text-sm text-stone-500">
              Contractor license #{site.license}. Verify anytime on the{" "}
              <a
                href={site.licenseVerifyUrl}
                className="font-medium text-brand-700 underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSLB website
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col gap-4 py-8 text-center">
                <p className="font-serif text-2xl font-semibold text-stone-900">You&apos;re all set</p>
                <p className="text-stone-600">
                  Instagram should be open in a new tab. Paste your message details into a DM to{" "}
                  {site.instagramHandle}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mx-auto text-sm font-semibold text-brand-700 hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                    Name *
                    <input
                      name="name"
                      required
                      className="rounded-lg border border-stone-300 bg-white px-3 py-2.5 outline-none ring-brand-600 focus:ring-2"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                    Phone
                    <input
                      name="phone"
                      type="tel"
                      className="rounded-lg border border-stone-300 bg-white px-3 py-2.5 outline-none ring-brand-600 focus:ring-2"
                      placeholder="(555) 555-5555"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                  Email
                  <input
                    name="email"
                    type="email"
                    className="rounded-lg border border-stone-300 bg-white px-3 py-2.5 outline-none ring-brand-600 focus:ring-2"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                  Service *
                  <select
                    name="service"
                    required
                    className="rounded-lg border border-stone-300 bg-white px-3 py-2.5 outline-none ring-brand-600 focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Residential painting</option>
                    <option>Commercial painting</option>
                    <option>Cabinet refurbishing</option>
                    <option>New cabinets</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                  Project details *
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="resize-y rounded-lg border border-stone-300 bg-white px-3 py-2.5 outline-none ring-brand-600 focus:ring-2"
                    placeholder="Location, timeline, and what you'd like painted..."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
                >
                  Continue to Instagram DM
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
