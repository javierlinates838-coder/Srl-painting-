"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

// Main navigation links; the page you are on is marked for screen readers and styled.
export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname().replace(/\.html$/, "").replace(/\/$/, "") || "/";
  return (
    <>
      {navLinks.map((link) => {
        const current = pathname.endsWith(link.href);
        return (
          <Link key={link.href} href={link.href} onClick={onNavigate} aria-current={current ? "page" : undefined}>
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
