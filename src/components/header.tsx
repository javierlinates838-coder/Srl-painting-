import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { MobileNav } from "./mobile-nav";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="#" className="flex items-center gap-3">
          <BrandLogo className="h-11 w-auto drop-shadow-sm" />
          <span className="hidden font-display text-xl font-semibold tracking-tight text-white sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-white/70 transition hover:text-white sm:block"
          >
            {site.instagramHandle}
          </a>
          <Link href="#contact" className="btn-primary hidden !py-2.5 !px-5 !text-sm sm:inline-flex">
            Free estimate
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
