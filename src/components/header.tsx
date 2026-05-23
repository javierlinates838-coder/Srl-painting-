import Link from "next/link";
import { site, trustItems } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="#" className="flex items-center gap-2.5">
          <BrandLogo className="h-9 w-auto" />
          <span className="hidden font-heading text-[15px] font-semibold text-white sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-zinc-400 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link href="#contact" className="btn btn-primary hidden !py-2 !px-4 !text-[13px] sm:inline-flex">
            Free estimate
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export function TrustMarquee() {
  const items = [...trustItems, ...trustItems];

  return (
    <div className="overflow-hidden border-b border-border bg-surface py-2.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 text-[12px] font-medium text-ink-muted">
            <span className="h-1 w-1 rounded-full bg-maroon" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
