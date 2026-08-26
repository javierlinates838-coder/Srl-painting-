import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { IosGroup, IosRow } from "./ios-group";

export function Footer() {
  return (
    <footer className="container-main pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] pt-2">
      <p className="ios-section-header">More</p>
      <IosGroup>
        {navLinks.map((l) => (
          <IosRow key={l.id} href={l.href} chevron>
            <span className="ios-body">{l.label}</span>
          </IosRow>
        ))}
        <IosRow href={site.instagramDm} chevron>
          <span className="ios-body">{site.instagramHandle}</span>
        </IosRow>
        <IosRow href={site.licenseVerifyUrl} chevron>
          <span className="ios-body">Verify license</span>
        </IosRow>
      </IosGroup>

      <p className="ios-caption mt-6 text-center">
        © {new Date().getFullYear()} {site.name} · C-33 · Lic. {site.license}
      </p>
    </footer>
  );
}
