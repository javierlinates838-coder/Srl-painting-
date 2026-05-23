import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-zinc-500">
      <div className="container-main">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <BrandLogo className="h-14 w-auto object-contain" />
            <p className="mt-4 text-[13px] text-zinc-400">{site.licenseClass} · Lic. {site.license}</p>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed">{site.tagline}</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand mt-6 !text-[13px]"
            >
              Message on Instagram
            </a>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {["work:Our Work", "services:Services", "about:About", "contact:Contact"].map((l) => {
                const [id, label] = l.split(":");
                return (
                  <li key={id}>
                    <Link href={`#${id}`} className="transition hover:text-white">{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.instagramHandle}
                </a>
              </li>
              <li className="text-zinc-600">Bakersfield · LA · Kern County</li>
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
