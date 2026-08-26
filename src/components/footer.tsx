import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="bg-ink pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-16 text-umber-light sm:pb-16">
      <div className="container-main">
        <div className="grid gap-12 border-b border-[rgba(246,242,235,0.1)] pb-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Link href="/" aria-label={`${site.name} home`}>
              <BrandLogo className="h-11 w-auto object-contain sm:h-12" />
            </Link>
            <p className="mt-6 text-[0.875rem] leading-relaxed">
              {site.licenseClass}
              <br />
              Lic. {site.license}
            </p>
            <p className="mt-3 max-w-xs text-[0.8125rem] leading-relaxed">{site.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            <div>
              <p className="overline !text-umber-light">Site</p>
              <ul className="mt-4 space-y-2.5 text-[0.875rem]">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <Link href={l.href} className="link-underline !text-umber-light hover:!text-chalk">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="overline !text-umber-light">Services</p>
              <ul className="mt-4 space-y-2.5 text-[0.875rem]">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href="#services" className="link-underline !text-umber-light hover:!text-chalk">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="overline !text-umber-light">Contact</p>
              <ul className="mt-4 space-y-2.5 text-[0.875rem]">
                <li>
                  <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="link-underline !text-umber-light hover:!text-chalk">
                    {site.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer" className="link-underline !text-umber-light hover:!text-chalk">
                    CSLB #{site.license}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-8 text-[0.75rem] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Licensed &amp; bonded · California</p>
        </div>
      </div>
    </footer>
  );
}
