import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-dark py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:justify-between lg:px-8">
        <div className="flex items-center gap-2.5">
          <BrandLogo className="h-8 w-auto" />
          <span className="font-heading text-[14px] font-semibold text-white">{site.name}</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-zinc-500">
          <Link href="#work" className="hover:text-white">Work</Link>
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#faq" className="hover:text-white">FAQ</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
        </nav>

        <p className="text-[12px] text-zinc-600">
          © {new Date().getFullYear()} · Lic. {site.license}
        </p>
      </div>
    </footer>
  );
}
