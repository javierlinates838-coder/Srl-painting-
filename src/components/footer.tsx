import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-ink text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 lg:flex-row lg:justify-between lg:px-10">
        <div className="flex max-w-sm flex-col gap-4">
          <div className="flex items-center gap-3">
            <BrandLogo className="h-10 w-auto" />
            <span className="font-display text-xl font-semibold text-white">{site.name}</span>
          </div>
          <p className="text-sm leading-relaxed">{site.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold text-white">Navigate</p>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#work" className="hover:text-white">Work</Link></li>
              <li><Link href="#process" className="hover:text-white">Process</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">Connect</p>
            <ul className="space-y-2">
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  CSLB license lookup
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-3 font-semibold text-white">License</p>
            <p className="leading-relaxed">
              C-33 Painting &amp; Decorating
              <br />
              #{site.license}
              <br />
              Licensed &amp; bonded
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs lg:px-10">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
