import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--ios-separator)] bg-black pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] pt-12 text-[rgba(235,235,245,0.6)] sm:pb-12">
      <div className="container-main">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="ios-footnote mt-2 !text-[rgba(235,235,245,0.5)]">
              {site.licenseClass} · Lic. {site.license}
            </p>
            <p className="ios-footnote mt-1">{site.tagline}</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="ios-btn ios-btn-brand ios-btn-sm">
                Message on Instagram
              </a>
              <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer" className="ios-btn ios-btn-gray ios-btn-sm !text-white">
                Verify license
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <p className="ios-caption uppercase tracking-wide text-white/50">Navigate</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <Link href={l.href} className="ios-footnote hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="ios-caption uppercase tracking-wide text-white/50">Services</p>
              <ul className="mt-3 space-y-2">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href="#services" className="ios-footnote hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="ios-caption uppercase tracking-wide text-white/50">Connect</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="ios-footnote hover:text-white">
                    {site.instagramHandle}
                  </a>
                </li>
                <li className="ios-footnote">Kern County · Southern CA</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="ios-caption mt-8 text-center sm:text-left">
          © {new Date().getFullYear()} {site.name}. Licensed &amp; bonded.
        </p>
      </div>
    </footer>
  );
}
