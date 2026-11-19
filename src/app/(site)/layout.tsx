import Link from "next/link";
import { PageMotion } from "@/components/page-motion";
import { SrlIcon } from "@/components/srl-icon";
import { BrandLogo } from "@/components/brand-logo";
import { MobileContact } from "@/components/mobile-contact";
import { ScrollPaint } from "@/components/scroll-paint";
import { PaintDrips } from "@/components/paint-drips";
import { SiteNavigation } from "@/components/site-interactions";
import { site } from "@/lib/site";

// Header, footer and phone call bar shared by every marketing page.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageMotion />
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>
            <span className="dot" aria-hidden="true" /> Licensed & bonded · CSLB
            #{site.license}
          </span>
          <span className="topbar-area">Bakersfield & surrounding areas</span>
          <a href={`tel:${site.phoneTel}`}>
            <SrlIcon name="phone" /> {site.phone}
          </a>
        </div>
      </div>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <Link href="/" className="brand-link" aria-label="SRL Painting home">
            <BrandLogo priority className="brand-image" />
            <span className="brand-wordmark">
              SRL Painting<small>Your space. Our craft.</small>
            </span>
          </Link>
          <SiteNavigation />
        </div>
        <ScrollPaint />
      </header>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <PaintDrips className="footer-drips" />
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand-link" aria-label="SRL Painting home">
              <BrandLogo className="brand-image" />
              <span className="brand-wordmark">
                SRL Painting<small>Your space. Our craft.</small>
              </span>
            </Link>
            <p>
              Residential & commercial painting, cabinet refurbishing, and new
              cabinets. Bakersfield & surrounding areas.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/work">Our work</Link></li>
              <li><Link href="/color-studio">Color studio</Link></li>
              <li><Link href="/about">About & process</Link></li>
              <li><Link href="/contact">Free estimate & FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={`tel:${site.phoneTel}`}>{site.phone}</a></li>
              <li><a href={`sms:${site.phoneTel}`}>Send a text</a></li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.googleReviews} target="_blank" rel="noopener noreferrer">
                  Google reviews
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Licensed & bonded</h3>
            <ul>
              <li>{site.licenseClass}</li>
              <li>
                <a href={site.licenseVerifyUrl} target="_blank" rel="noopener noreferrer">
                  CSLB #{site.license} ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} SRL Painting. All rights reserved.</span>
          <nav aria-label="Website information">
            <Link href="/terms">Website & estimate information</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>
      </footer>

      <MobileContact />
    </>
  );
}
