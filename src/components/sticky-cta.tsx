"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useNav } from "./nav-provider";

export function StickyCta() {
  const { mobileOpen } = useNav();

  if (mobileOpen) return null;

  return (
    <div className="mobile-cta-bar" role="navigation" aria-label="Quick actions">
      <a
        href={site.instagramDm}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost flex shrink-0 !px-3"
        aria-label={`Message ${site.instagramHandle}`}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      </a>
      <Link href="#work" className="btn btn-outline flex-1">
        Our Work
      </Link>
      <Link href="#contact" className="btn btn-brand flex-1">
        Free Estimate
      </Link>
    </div>
  );
}
