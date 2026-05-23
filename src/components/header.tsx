import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconInstagram } from "./icons";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Service Areas" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt={`${site.name} logo`}
            width={48}
            height={52}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden font-serif text-lg font-semibold tracking-tight text-white sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <IconInstagram className="h-4 w-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <Link
            href="#contact"
            className="inline-flex rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:bg-brand-500"
          >
            Free estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
