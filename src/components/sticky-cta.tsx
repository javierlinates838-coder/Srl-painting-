"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand/15 bg-white/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,.12)] backdrop-blur-2xl sm:hidden">
      <div className="flex gap-2">
        <a
          href={site.instagramDm}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark flex shrink-0 items-center !px-4 !py-3.5"
          aria-label="Message on Instagram"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </a>
        <Link href="#work" className="btn btn-outline-dark flex-1 !py-3.5 !text-[13px]">
          Our Work
        </Link>
        <Link href="#contact" className="btn btn-brand flex-1 !py-3.5 !text-[13px]">
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
