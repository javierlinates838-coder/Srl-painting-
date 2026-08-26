"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useNav } from "./nav-provider";

export function StickyCta() {
  const { mobileOpen } = useNav();

  if (mobileOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/8 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgba(0,0,0,.12)] backdrop-blur-lg sm:hidden">
      <div className="flex gap-2">
        <a
          href={site.instagramDm}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost flex shrink-0 items-center !px-3.5 !py-3"
          aria-label={`Message ${site.instagramHandle} on Instagram`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </a>
        <Link href="#work" className="btn btn-ghost flex-1 !py-3 !text-[13px]">
          Our Work
        </Link>
        <Link href="#contact" className="btn btn-brand flex-1 !py-3 !text-[13px]">
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
