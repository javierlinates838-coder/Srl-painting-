import Link from "next/link";
import { site, trustPoints } from "@/lib/site";
import { IconCheck } from "./icons";

export function AboutSection() {
  return (
    <section id="about" className="bg-brand-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              Why SRL Painting
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Licensed professionals you can verify
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-300">
              {site.name} is a California painting contractor—licensed, bonded, and proud of
              clean job sites and finishes that last. See our latest projects and reviews on
              Instagram, then reach out for a free estimate on your residential, commercial, or
              cabinet project.
            </p>
            <a
              href={site.licenseVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-brand-300 underline-offset-4 hover:text-white hover:underline"
            >
              Look up license #{site.license} on CSLB →
            </a>
          </div>

          <ul className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8">
            {trustPoints.map((point) => (
              <li key={point} className="flex gap-3 text-stone-200">
                <IconCheck className="mt-0.5 h-6 w-6 shrink-0 text-brand-400" />
                <span>{point}</span>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href={site.instagram}
                className="inline-flex rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-500"
              >
                View work on Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
