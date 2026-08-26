import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

const footerLinkClass =
  "inline-flex w-full max-w-xs items-center justify-center rounded-[var(--radius)] px-5 py-3.5 text-[13px] font-semibold leading-tight no-underline transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export function Footer() {
  return (
    <footer className="footer-glow relative border-t border-white/10 bg-black py-14 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] text-stone-500 sm:py-16 sm:pb-16">
      <div className="container-main">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Ready when you are</p>
            <p className="font-display mt-3 max-w-2xl text-4xl leading-tight text-white sm:text-5xl">
              A better finish starts with a better conversation.
            </p>
          </div>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <a
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className={`${footerLinkClass} bg-gradient-to-br from-brand to-brand-light text-white shadow-none hover:opacity-90`}
            >
              Start on Instagram <span aria-hidden>↗</span>
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

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label={`${site.name} home`}>
              <BrandLogo className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-[12px] leading-6 text-stone-500">{site.tagline}</p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-stone-600">
              {site.licenseClass} · #{site.license}
            </p>
          </div>
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

          <div>
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

        <div className="flex flex-col gap-2 border-t border-white/10 pt-8 text-center text-[11px] text-stone-600 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Licensed &amp; bonded · California C-33 contractor</p>
        </div>
      </div>
    </footer>
  );
}
