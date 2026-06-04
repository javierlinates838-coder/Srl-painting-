import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

const footerLinkClass =
  "inline-flex w-full max-w-xs items-center justify-center rounded-[var(--radius)] px-5 py-3.5 text-[13px] font-semibold leading-tight no-underline transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export function Footer() {
  return (
    <footer className="footer-glow relative border-t border-white/10 bg-black py-14 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] text-zinc-500 sm:py-16 sm:pb-16">
      <div className="container-main">
        <div className="border-b border-white/10 pb-10">
          <Link href="/" aria-label={`${site.name} home`}>
            <BrandLogo className="h-12 w-auto object-contain sm:h-14" />
          </Link>
          <p className="mt-4 text-[13px] leading-relaxed text-zinc-400">
            {site.licenseClass} · Lic. {site.license}
          </p>
          <p className="mt-2 max-w-md text-[13px] leading-relaxed text-zinc-500">{site.tagline}</p>

          <div className="mt-6 flex w-full max-w-xs flex-col gap-3">
            <a
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className={`${footerLinkClass} bg-gradient-to-br from-brand to-brand-light text-white shadow-none hover:opacity-90`}
            >
              Message on Instagram
            </a>
            <a
              href={site.licenseVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${footerLinkClass} border border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10`}
            >
              Verify CSLB license
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <Link href={l.href} className="link-fade text-zinc-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Services</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href="#services" className="link-fade text-zinc-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="link-fade text-zinc-400">
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-fade text-zinc-400">
                  Follow on Instagram
                </a>
              </li>
              <li>
                <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer" className="link-fade text-zinc-400">
                  CSLB #{site.license}
                </a>
              </li>
              <li className="text-zinc-600">Kern County · Southern CA</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-center text-[12px] text-zinc-500 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Licensed &amp; bonded · California C-33 contractor</p>
        </div>
      </div>
    </footer>
  );
}
