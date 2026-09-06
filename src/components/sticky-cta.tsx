"use client";

import Link from "next/link";
import { useNav } from "./nav-provider";

export function StickyCta() {
  const { mobileOpen } = useNav();
  if (mobileOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[var(--line)] bg-ivory/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <Link href="#work" className="btn btn-line flex-1 !min-h-[2.75rem] !text-xs">
        Our Work
      </Link>
      <Link href="#contact" className="btn btn-primary flex-1 !min-h-[2.75rem] !text-xs">
        Free Estimate
      </Link>
    </div>
  );
}
