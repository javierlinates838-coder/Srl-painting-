import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] text-white/55 sm:py-16 sm:pb-16">
      <div className="container-main">
        <div className="border-b border-white/10 pb-10">
          <Link href="/" aria-label={`${site.name} home`}>
            <BrandLogo className="h-12 w-auto object-contain brightness-0 invert sm:h-14" />
          </Link>
          <p className="mt-5 text-[14px] leading-relaxed text-white/70">
            {site.licenseClass} · Lic. {site.license}
          </p>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed">{site.tagline}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand w-full sm:w-auto"
            >
              Message on Instagram
            </a>
            <a
              href={site.licenseVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full sm:w-auto"
            >
              Verify CSLB license
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] text-white/45 uppercase">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <Link href={l.href} className="link-fade text-white/60">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] text-white/45 uppercase">Services</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href="#services" className="link-fade text-white/60">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] font-bold tracking-[0.14em] text-white/45 uppercase">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="link-fade text-white/60">
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-fade text-white/60">
                  Follow on Instagram
                </a>
              </li>
              <li>
                <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer" className="link-fade text-white/60">
                  CSLB #{site.license}
                </a>
              </li>
              <li className="text-white/40">Kern County · Southern CA</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-center text-[12px] text-white/40 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Licensed &amp; bonded · California C-33 contractor</p>
        </div>
      </div>
    </footer>
  );
}
