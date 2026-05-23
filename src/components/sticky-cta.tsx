"use client";

import Link from "next/link";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand/20 bg-white/95 p-3 shadow-[0_-8px_32px_rgba(0,0,0,.12)] backdrop-blur-xl sm:hidden">
      <div className="flex gap-2">
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
