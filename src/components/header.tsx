"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="ios-nav-bar">
      <div className="container-main ios-nav-bar-inner">
        <Link href="/" className="relative flex flex-1 shrink-0 items-center gap-2" aria-label={site.name}>
          <BrandLogo className="h-7 w-auto object-contain" priority />
        </Link>

        <p className="ios-nav-title absolute left-1/2 -translate-x-1/2">{site.name}</p>

        <div className="flex flex-1 items-center justify-end gap-1">
          <Link href="#contact" className="ios-btn ios-btn-plain ios-btn-sm !min-h-0">
            Inquire
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
