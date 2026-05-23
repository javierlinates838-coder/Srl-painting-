import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14 text-zinc-500">
      <div className="container-main">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <BrandLogo className="h-12 w-auto object-contain" />
            <p className="mt-3 text-[12px] text-zinc-400">{site.licenseClass} · #{site.license}</p>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed">{site.description}</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Navigate</p>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li><Link href="#work" className="hover:text-white">Our Work</Link></li>
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Connect</p>
            <ul className="mt-4 space-y-2 text-[13px]">
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  CSLB License Lookup
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[12px] sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed &amp; bonded · California contractor</p>
        </div>
      </div>
    </footer>
  );
}
