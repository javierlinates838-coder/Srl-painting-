import Link from "next/link";
import { navLinks, serviceAreas, services, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-ink pb-[calc(5rem+env(safe-area-inset-bottom))] pt-16 text-white/70 sm:pb-16">
      <div className="container-main">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          <div>
            <Link href="/" aria-label={`${site.name} home`}>
              <BrandLogo className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 font-display text-lg text-white">{site.name}</p>
            <p className="mt-2 text-sm">{site.licenseClass} · Lic. {site.license}</p>
            <p className="mt-1 max-w-sm text-sm">{site.tagline}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn btn-brand btn-sm">
                Get Free Estimate
              </Link>
              <a
                href={site.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Navigate</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <Link href={l.href} className="link-muted hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Services</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href="#services" className="link-muted hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Service areas</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {serviceAreas.map((a) => (
                  <li key={a.city}>{a.city}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-white/50">Connect</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-muted hover:text-white">
                    {site.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer" className="link-muted hover:text-white">
                    Verify CSLB #{site.license}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-white/45 sm:text-left">
          © {new Date().getFullYear()} {site.name}. Licensed &amp; bonded California C-33 contractor.
        </p>
      </div>
    </footer>
  );
}
