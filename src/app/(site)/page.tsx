import Image from "next/image";
import Link from "next/link";
import { ReviewsSection } from "@/components/reviews-section";
import { SrlIcon } from "@/components/srl-icon";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { BrandLogo } from "@/components/brand-logo";
import { BrushStroke } from "@/components/brush-stroke";
import { HeroRoller } from "@/components/hero-roller";
import { PaintTrail } from "@/components/paint-trail";
import { PaintDrips } from "@/components/paint-drips";
import { ServicePanels } from "@/components/service-panels";
import { BrushBackdrop } from "@/components/brush-backdrop";
import { BrushEdge } from "@/components/brush-edge";
import { BigMarquee } from "@/components/big-marquee";
import { VideoBand } from "@/components/video-band";
import { HouseDefs, HouseShapes } from "@/components/house-illustration";
import { site } from "@/lib/site";

const ticker = [
  "Interior painting",
  "Exterior painting",
  "Cabinet refurbishing",
  "New cabinets",
  "Commercial",
  "Stucco & trim",
  "Pergolas & patio covers",
  "Free estimates",
];

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          // First visit to the home page only: the logo curtain (see globals.css).
          __html: "if(!sessionStorage.getItem('srl-intro')){sessionStorage.setItem('srl-intro','1');document.documentElement.classList.add('show-intro');setTimeout(function(){document.documentElement.classList.remove('show-intro')},1600)}",
        }}
      />
      <LocalBusinessSchema siteUrl={site.siteUrl} />
        <section className="hero" aria-labelledby="hero-title">
          <BrushBackdrop variant="hero" />
          <PaintTrail />
          <div className="shell hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="kicker">
                Residential · Commercial · Cabinets
              </p>
              <h1 id="hero-title">
                <span className="h-line"><span>Paint done</span></span>
                <span className="h-line">
                  <span>
                    <span className="accent-word">
                      right
                      <BrushStroke className="accent-stroke" />
                    </span>{" "}
                    the first time.
                  </span>
                </span>
              </h1>
              <p className="hero-lede">
                Bakersfield’s licensed & bonded painting crew. Careful prep,
                clean lines, and a finish that makes your home feel brand new.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="/contact">
                  Get my free estimate <SrlIcon name="arrow" />
                </Link>
                <a className="button ghost" href={`tel:${site.phoneTel}`}>
                  <SrlIcon name="phone" /> {site.phone}
                </a>
              </div>
              <ul className="hero-proof" aria-label="Why homeowners choose SRL">
                <li>
                  <strong>5★</strong>
                  <span>Reviews on Google & Angi</span>
                </li>
                <li>
                  <strong>C-33</strong>
                  <span>Licensed & bonded</span>
                </li>
                <li>
                  <strong>$0</strong>
                  <span>Free, no-pressure estimates</span>
                </li>
              </ul>
            </div>
            <div className="hero-visual" data-reveal>
              <div className="hero-photo">
                <HeroRoller
                  src="/projects/exterior-after.jpg"
                  alt="Bakersfield home freshly painted by SRL: white stucco with a black garage door"
                />
              </div>
              <figure className="hero-review">
                <span className="stars" role="img" aria-label="5 out of 5 stars">
                  <span aria-hidden="true">★★★★★</span>
                </span>
                <blockquote>
                  “Steven did an AMAZING job!! My whole house was painted and it
                  looks and feels like a brand new home.”
                </blockquote>
                <figcaption>Michael M. · Google review</figcaption>
              </figure>
              <div className="hero-badge" aria-hidden="true">
                <BrandLogo className="hero-badge-logo" />
                <span>
                  Licensed
                  <br />& bonded
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-clip">
            <div className="ticker-track">
              {[0, 1].map((copy) => (
                <div className="ticker-group" key={copy}>
                  {ticker.map((item) => (
                    <span key={item}>
                      {item}
                      <i>✦</i>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <PaintDrips className="ticker-drips" />
        </div>

        <section id="services" className="section services-section">
          <div className="shell">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">What we do</p>
                <h2>
                  Every surface.
                  <br />
                  <span className="red">One standard.</span>
                </h2>
              </div>
              <p>
                From a single accent wall to a full exterior repaint, every job
                gets the same prep, the same care, and the same clean finish.
              </p>
            </div>
            <ServicePanels />
            <Link className="text-link section-more" href="/services">
              Everything we do, in detail <SrlIcon name="arrow" />
            </Link>
          </div>
        </section>

        <section className="section explore-section">
          <BrushEdge tone="cream" />
          <div className="shell">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">Take a look around</p>
                <h2>
                  See the work.
                  <br />
                  <span className="red">Picture yours.</span>
                </h2>
              </div>
              <p>
                Browse recent jobs, try colors on a house or a kitchen, and see
                exactly how a project with SRL runs from start to finish.
              </p>
            </div>
            <div className="explore-grid">
              <Link className="explore-card" href="/work" data-reveal>
                <span className="explore-media">
                  <Image src="/projects/gazebo-after.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                </span>
                <span className="explore-label"><small>01</small>Our work</span>
                <span className="explore-text">Real homes from around Kern County.</span>
              </Link>
              <Link className="explore-card is-studio" href="/color-studio" data-reveal>
                <span className="explore-media">
                  <svg viewBox="0 0 640 420" aria-hidden="true" focusable="false">
                    <HouseDefs id="explore" />
                    <HouseShapes id="explore" />
                  </svg>
                </span>
                <span className="explore-label"><small>02</small>Color studio</span>
                <span className="explore-text">Try paint colors before we paint.</span>
              </Link>
              <Link className="explore-card" href="/about" data-reveal>
                <span className="explore-media">
                  <Image src="/projects/interior-after.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                </span>
                <span className="explore-label"><small>03</small>How we work</span>
                <span className="explore-text">Prep, paint, and a final walkthrough.</span>
              </Link>
            </div>
          </div>
        </section>

        <ReviewsSection />

        <VideoBand>
          <BigMarquee words={["Your space.", "Our craft.", "Bakersfield.", "SRL Painting."]} />
          <div className="shell video-band-cta">
            <p>Recent work around Kern County</p>
            <Link className="button primary" href="/contact">
              Get my free estimate <SrlIcon name="arrow" />
            </Link>
          </div>
        </VideoBand>
    </>
  );
}
