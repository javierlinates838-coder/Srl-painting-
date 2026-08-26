"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useNav } from "./nav-provider";

export function StickyCta() {
  const { mobileOpen } = useNav();

  if (mobileOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-chalk/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm sm:hidden">
      <div className="flex gap-2">
        <a
          href={site.instagramDm}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-line flex shrink-0 !px-3.5 !py-3"
          aria-label={`Message ${site.instagramHandle} on Instagram`}
        >
          IG
        </a>
        <Link href="#work" className="btn btn-line flex-1 !py-3 !text-[0.75rem]">
          Work
        </Link>
        <Link href="#contact" className="btn btn-fill flex-1 !py-3 !text-[0.75rem]">
          Inquire
        </Link>
      </div>
    </div>
  );
}
