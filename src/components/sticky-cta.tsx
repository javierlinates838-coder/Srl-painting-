"use client";

import Link from "next/link";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/90 p-3 backdrop-blur-xl sm:hidden">
      <div className="flex gap-2">
        <Link href="#work" className="btn btn-outline-dark flex-1 !py-3 !text-[13px]">
          Our Work
        </Link>
        <Link href="#contact" className="btn btn-brand flex-1 !py-3 !text-[13px]">
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
