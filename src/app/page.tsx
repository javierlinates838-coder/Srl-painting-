import Image from "next/image";
import Link from "next/link";
import { ReviewsSection } from "@/components/reviews-section";
import { PageMotion } from "@/components/page-motion";
import { ServiceAreaMap } from "@/components/service-area-map";
import { SrlIcon } from "@/components/srl-icon";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { BrandLogo } from "@/components/brand-logo";
import { BrushStroke } from "@/components/brush-stroke";
import { ProjectGallery } from "@/components/project-gallery";
import { MobileContact } from "@/components/mobile-contact";
import { SiteNavigation, EstimateForm } from "@/components/site-interactions";
import { faqs, process, promises, services, site } from "@/lib/site";

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
      <LocalBusinessSchema siteUrl={site.siteUrl} />
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
          <a href="#top" className="brand-link" aria-label="SRL Painting home">
            <BrandLogo priority className="brand-image" />
            <span className="brand-wordmark">
              SRL Painting<small>Your space. Our craft.</small>
            </span>
          </a>
          <SiteNavigation />
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-streaks" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="shell hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="kicker">
                Residential · Commercial · Cabinets
              </p>
              <h1 id="hero-title">
                Paint done
                <br />
                <span className="accent-word">
                  right
                  <BrushStroke className="accent-stroke" />
                </span>{" "}
                the first time.
              </h1>
              <p className="hero-lede">
                Bakersfield’s licensed & bonded painting crew. Careful prep,
                clean lines, and a finish that makes your home feel brand new.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contact">
                  Get my free estimate <SrlIcon name="arrow" />
                </a>
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
                <Image
                  src="/projects/exterior-after.jpg"
                  alt="Bakersfield home freshly painted by SRL: white stucco with a black garage door"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
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
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.id} data-reveal>
                  <div className="service-photo">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 800px) 100vw, 33vw"
                    />
                    <span className="service-num">{service.num}</span>
                  </div>
                  <div className="service-body">
                    <h3>
                      <SrlIcon name={service.icon} />
                      {service.title}
                    </h3>
                    <p>{service.text}</p>
                    <ul className="tags">
                      {service.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="card-link">
                      Get a quote <SrlIcon name="arrow" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="commercial-band" data-reveal>
              <div>
                <p className="kicker light">For businesses</p>
                <h3>Commercial painting that works around your hours.</h3>
              </div>
              <p>
                Offices, storefronts, and business spaces. We plan scope and
                scheduling so your doors stay open.
              </p>
              <a href="#contact" className="button light">
                Talk commercial <SrlIcon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="section why-section" id="about">
          <div className="shell why-grid">
            <div className="why-photo" data-reveal>
              <Image
                src="/projects/interior-after.jpg"
                alt="Room fully masked in plastic while an SRL painter sprays the ceiling"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <span className="photo-tag">On the job · Bakersfield</span>
            </div>
            <div className="why-copy" data-reveal>
              <p className="kicker">Why SRL</p>
              <h2>
                The finish is what you see.
                <br />
                <span className="red">The care is underneath.</span>
              </h2>
              <p className="why-lede">
                A great paint job is mostly the part nobody photographs:
                protecting your home, fixing the surface, and taking the time to
                cut every line clean. That’s where we don’t cut corners.
              </p>
              <div className="promise-grid">
                {promises.map((item, index) => (
                  <div className="promise" key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <a
                className="text-link"
                href={site.licenseVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify license #{site.license} with CSLB{" "}
                <SrlIcon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="shell">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">Our work</p>
                <h2>
                  Real homes.
                  <br />
                  <span className="red">Real results.</span>
                </h2>
              </div>
              <div>
                <p>
                  A few recent projects from around Kern County. Tap any photo
                  for a closer look, and follow along for new work every week.
                </p>
                <a
                  className="text-link"
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SrlIcon name="instagram" /> Follow {site.instagramHandle}
                </a>
              </div>
            </div>
            <ProjectGallery />
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="shell">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker">How it works</p>
                <h2>
                  Simple from
                  <br />
                  <span className="red">start to finish.</span>
                </h2>
              </div>
              <p>
                No guesswork, no surprises. Here’s what happens from the first
                call to the final walkthrough.
              </p>
            </div>
            <ol className="process-grid" data-reveal>
              {process.map((step) => (
                <li key={step.num}>
                  <span className="step-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ReviewsSection />

        <section className="section area-section" id="areas">
          <div className="shell area-grid">
            <div data-reveal>
              <p className="kicker">Service area</p>
              <h2>
                Rooted in
                <br />
                <span className="red">Bakersfield.</span>
              </h2>
              <p>
                Based right here in Bakersfield and serving Shafter, Tehachapi,
                Lake Isabella, and projects down in Los Angeles. Not sure if
                you’re in range? Just ask.
              </p>
              <a className="button primary" href={`tel:${site.phoneTel}`}>
                <SrlIcon name="phone" /> Call {site.phone}
              </a>
            </div>
            <ServiceAreaMap />
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div data-reveal>
              <p className="kicker">FAQ</p>
              <h2>
                Good
                <br />
                <span className="red">questions.</span>
              </h2>
              <p>
                Don’t see yours? Text us at{" "}
                <a href={`sms:${site.phoneTel}`}>{site.phone}</a>.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>
                    {faq.q}
                    <span aria-hidden="true" />
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="hero-streaks contact-streaks" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="shell contact-grid">
            <div className="contact-copy" data-reveal>
              <p className="kicker">Free estimate</p>
              <h2>
                Ready for a
                <br />
                <span className="accent-word">
                  fresh coat?
                  <BrushStroke className="accent-stroke" />
                </span>
              </h2>
              <p>
                Tell us about your project and we’ll get back to you about
                scope, timing, and a free, no-obligation estimate.
              </p>
              <a className="contact-phone" href={`tel:${site.phoneTel}`}>
                <SrlIcon name="phone" />
                <span>
                  <small>Call or text</small>
                  {site.phone}
                </span>
              </a>
              <div className="contact-alternatives">
                <a href={`sms:${site.phoneTel}`}>
                  <SrlIcon name="message" /> Send a text
                </a>
                <a
                  href={site.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SrlIcon name="instagram" /> Instagram DM
                </a>
              </div>
            </div>
            <EstimateForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a
              href="#top"
              className="brand-link"
              aria-label="SRL Painting back to top"
            >
              <BrandLogo className="brand-image" />
              <span className="brand-wordmark">
                SRL Painting<small>Your space. Our craft.</small>
              </span>
            </a>
            <p>
              Residential & commercial painting, cabinet refurbishing, and new
              cabinets. Bakersfield & surrounding areas.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Our work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
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
