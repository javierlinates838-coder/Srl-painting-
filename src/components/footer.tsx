import Link from "next/link";
import { services, site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-zinc-500">
      <div className="container-main">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLogo className="h-14 w-auto object-contain" />
            <p className="mt-4 text-[13px] text-zinc-400">{site.licenseClass} · Lic. {site.license}</p>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed">{site.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand !text-[13px]"
              >
                Message on Instagram
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !text-[13px]"
              >
                Follow us
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {["work:Our Work", "services:Services", "about:About", "contact:Contact"].map((l) => {
                const [id, label] = l.split(":");
                return (
                  <li key={id}>
                    <Link href={`#${id}`} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Services</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href="#services" className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.instagramDm} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  DM for free estimate
                </a>
              </li>
              <li className="text-zinc-600">Kern County · Southern CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[12px] sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed &amp; bonded · California C-33 contractor</p>
        </div>
      </div>
    </footer>
  );
}
