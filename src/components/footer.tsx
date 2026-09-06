import Link from "next/link";
import { footerNavLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-[calc(4.5rem+env(safe-area-inset-bottom))] pt-20 sm:pb-20">
      <div className="container-main">
        <div className="border-b border-white/10 pb-16">
          <p className="font-display text-5xl text-ivory sm:text-7xl">SRL</p>
          <p className="font-display text-3xl text-white/60 sm:text-4xl">Painting</p>

          <h2 className="footer-cta mt-12 text-ivory">
            Let&apos;s talk<br />
            about your<br />
            <span className="italic text-white/70">project.</span>
          </h2>

          <Link href="#contact" className="btn btn-primary mt-10">
            Get an Estimate
            <svg className="btn-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="meta text-white/40">Contact</p>
            <p className="mt-4 text-sm text-white/55">
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">{site.phone}</a>
            </p>
            <p className="mt-1 text-sm text-white/45">{site.tagline}</p>
            <p className="mt-1 text-xs text-white/35">{site.licenseClass} · CSLB #{site.license}</p>
          </div>

          <div>
            <p className="meta text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              {footerNavLinks.map((l) => (
                <li key={l.id}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="meta text-white/40">Connect</p>
            <ul className="mt-4 space-y-2 text-sm">
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

        <p className="pt-12 text-xs text-white/30">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
