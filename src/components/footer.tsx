import Link from "next/link";
import { navLinks, serviceAreas, services, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-[calc(4.5rem+env(safe-area-inset-bottom))] pt-16 sm:pb-16">
      <div className="container-main">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Link href="/" aria-label={`${site.name} home`}>
              <BrandLogo className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 font-display text-xl text-ivory">{site.name}</p>
            <p className="mt-2 text-sm text-white/55">
              {site.licenseClass} · CSLB #{site.license}
            </p>
            <p className="mt-1 text-sm text-white/45">{site.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <p className="meta text-white/40">Navigate</p>
              <ul className="mt-4 space-y-2 text-sm text-white/55">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="meta text-white/40">Services</p>
              <ul className="mt-4 space-y-2 text-sm text-white/55">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href="#services" className="hover:text-white transition-colors">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="meta text-white/40">Areas</p>
              <p className="mt-4 text-sm text-white/55">
                {serviceAreas.map((a) => a.city).join(" · ")}
              </p>
              <p className="meta mt-6 text-white/40">Connect</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white">
                    {site.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={site.licenseVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/45 hover:text-white/70 text-xs"
                  >
                    CSLB #{site.license}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-white/35 sm:text-left">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
