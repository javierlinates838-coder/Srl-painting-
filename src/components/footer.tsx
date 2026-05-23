import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconInstagram } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-950 text-stone-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={40} height={44} className="h-10 w-auto" />
            <div>
              <p className="font-serif text-lg font-semibold text-white">{site.name}</p>
              <p className="text-sm">Lic. {site.license}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">{site.description}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p className="font-semibold text-white">Quick links</p>
          <Link href="#services" className="hover:text-white">
            Services
          </Link>
          <Link href="#areas" className="hover:text-white">
            Service areas
          </Link>
          <a
            href={site.licenseVerifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Verify license (CSLB)
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <IconInstagram className="h-4 w-4" />
            {site.instagramHandle}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs sm:px-8">
          © {year} {site.name}. All rights reserved. California contractor license #{site.license}.
        </p>
      </div>
    </footer>
  );
}
