"use client";

import Link from "next/link";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/90 p-3 backdrop-blur-xl sm:hidden">
      <Link href="#contact" className="btn btn-primary w-full">
        Get a free estimate
      </Link>
    </div>
  );
}
