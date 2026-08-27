"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { useNav } from "./nav-provider";

const tabs: {
  href: string;
  label: string;
  external?: boolean;
  icon: (active: boolean) => React.ReactNode;
}[] = [
  {
    href: "#work",
    label: "Our Work",
    icon: (active: boolean) => (
      <svg className="ios-tab-icon" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.5}>
        {active ? (
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        ) : (
          <rect x="4" y="4" width="16" height="16" rx="2" />
        )}
      </svg>
    ),
  },
  {
    href: "#services",
    label: "Services",
    icon: (active: boolean) => (
      <svg className="ios-tab-icon" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (active: boolean) => (
      <svg className="ios-tab-icon" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M21 15a4 4 0 01-4 4H7l-4 3V7a4 4 0 014-4h10a4 4 0 014 4v8z" />
      </svg>
    ),
  },
  {
    href: site.instagramDm,
    label: "Instagram",
    external: true,
    icon: () => (
      <svg className="ios-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
] ;

export function StickyCta() {
  const { mobileOpen } = useNav();
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  if (mobileOpen) return null;

  return (
    <nav className="ios-tab-bar" aria-label="Tab bar">
      <div className="ios-tab-bar-inner">
        {tabs.map((tab) => {
          const active = !tab.external && hash === tab.href;
          const className = `ios-tab ${active ? "is-active" : ""}`;

          if (tab.external) {
            return (
              <a key={tab.label} href={tab.href} target="_blank" rel="noopener noreferrer" className={className}>
                {tab.icon(false)}
                {tab.label}
              </a>
            );
          }

          return (
            <Link key={tab.href} href={tab.href} className={className}>
              {tab.icon(active)}
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
