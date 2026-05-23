"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden">
      <div className="flex gap-2">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex-1 !py-3 !text-sm"
        >
          Instagram
        </a>
        <Link href="#contact" className="btn-primary flex-1 !py-3 !text-sm">
          Free estimate
        </Link>
      </div>
    </div>
  );
}
