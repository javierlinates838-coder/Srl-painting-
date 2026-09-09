import Image from "next/image";
import Link from "next/link";
import { ReviewsSection } from "@/components/reviews-section";
import { PageMotion } from "@/components/page-motion";
import { SrlIcon } from "@/components/srl-icon";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { BrandLogo } from "@/components/brand-logo";
import {
  ProjectShowcase,
  SiteNavigation,
  EstimateForm,
} from "@/components/site-interactions";
import { faqs, site, process, serviceAreas } from "@/lib/site";

const services = [
  {
    title: "Exterior painting",
    number: "01",
    text: "A fresh first impression. Stucco, siding, trim, and doors, with the preparation your home deserves.",
    detail: "STUCCO · TRIM · DOORS",
    image: "/projects/exterior-after.jpg",
    alt: "White stucco exterior with contrasting dark trim",
  },
  {
    title: "Interior painting",
    number: "02",
    text: "Make your everyday spaces feel new. Walls, ceilings, and woodwork, carefully prepped and finished.",
    detail: "WALLS · CEILINGS · WOODWORK",
    image: "/projects/interior-after.jpg",
    alt: "SRL painter working on a protected high-ceiling interior",
  },
  {
    title: "Cabinet finishing",
    number: "03",
    text: "A new look for the heart of your home. Refurbishing existing cabinets and finishing new ones.",
    detail: "KITCHENS · BATHS · BUILT-INS",
    image: "/projects/cabinets-after.jpg",
    alt: "White kitchen cabinets from the SRL portfolio",
  },
];

export default function Home() {
  return (
    <>
      <LocalBusinessSchema siteUrl={site.siteUrl} />
      <PageMotion />
      <div className="announcement">
        <span>Bakersfield & surrounding areas</span>
        <a href={`tel:${site.phoneTel}`}>Let’s talk about your project ↗</a>
      </div>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <a href="#top" className="brand-link" aria-label="SRL Painting home">
            <BrandLogo priority className="brand-image" />
            <span className="brand-wordmark">
              SRL Painting<small>YOUR SPACE. OUR CRAFT.</small>
            </span>
          </a>
          <SiteNavigation />
        </div>
      </header>
      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-line" /> YOUR LOCAL PAINTING SPECIALISTS
            </p>
            <h1 id="hero-title">
              A fresh coat.
              <br />A whole new
              <br />
              <span>feeling.</span>
            </h1>
            <p className="hero-description">
              Interior, exterior, and cabinet painting in Bakersfield.
              Careful preparation. Clean lines. A space that feels like you.
            </p>
            <div className="button-row">
              <a className="button primary" href="#contact">
                Get a free estimate <SrlIcon name="arrow" />
              </a>
              <a className="text-link" href="#work">
                Explore our work ↓
              </a>
            </div>
            <div className="hero-credentials">
              <span className="seal" aria-hidden="true">
                <SrlIcon name="check" />
              </span>
              <p>
                <strong>Licensed. Local. Detail-focused.</strong>
                <small>C-33 Painting & Decorating · #{site.license}</small>
              </p>
            </div>
          </div>
          <ProjectShowcase />
        </section>
        <div className="trust-strip">
          <div className="shell trust-inner">
            <span>GOOD WORK STARTS WITH TRUST</span>
            <strong>Licensed C-33</strong>
            <strong>Bakersfield-based</strong>
            <strong>Free estimates</strong>
            <a
              href={site.licenseVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify license #{site.license} ↗
            </a>
          </div>
        </div>

        <section id="services" className="section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / WHAT WE DO</p>
              <h2>
                New possibilities.
                <br />
                Every surface.
              </h2>
            </div>
            <p>
              One room, a refreshed kitchen, or a whole new first impression.
              Tell us what you have in mind—we’ll help you plan the finish.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-photo">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <span className="photo-index">{service.number}</span>
                </div>
                <div className="service-body">
                  <h3 className="service-title">
                    <SrlIcon
                      name={
                        service.number === "01"
                          ? "home"
                          : service.number === "02"
                            ? "roller"
                            : "cabinet"
                      }
                    />
                    {service.title}
                  </h3>
                  <p>{service.text}</p>
                  <small>{service.detail}</small>
                  <a href="#contact" className="service-link">
                    Discuss your project <SrlIcon name="arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="commercial-row">
            <div>
              <span className="eyebrow">FOR YOUR BUSINESS</span>
              <h3>A space that works as hard as you do.</h3>
            </div>
            <p>
              Commercial painting for offices, shops, and other business spaces.
              Let’s talk scope and scheduling.
            </p>
            <a href="#contact" className="text-link">
              Commercial inquiries ↗
            </a>
          </div>
        </section>

        <section className="craft-section" id="about">
          <div className="shell craft-grid">
            <div className="craft-image">
              <Image
                src="/projects/interior-after.jpg"
                alt="Floors and fixtures masked while an SRL painter coats the ceiling"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
              />
              <span className="image-note">
                ON THE JOB / THE DETAILS MATTER
              </span>
            </div>
            <div className="craft-copy">
              <p className="eyebrow">MORE THAN A COAT OF PAINT</p>
              <h2>
                The finish is what you see.
                <br />
                <span>The care is underneath.</span>
              </h2>
              <p>
                A beautiful result starts long before the first coat. We take
                the time to protect your space, prepare the surfaces, and pay
                attention to the little things.
              </p>
              <ul className="check-list">
                <li>Protect floors, furniture, and fixtures</li>
                <li>Address prep and repairs in your scope</li>
                <li>Paint with attention to coverage and edges</li>
                <li>Walk through the finished work with you</li>
              </ul>
              <a href="#process" className="text-link light">
                Get to know our process ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / A CLOSER LOOK</p>
              <h2>
                Real spaces.
                <br />
                Real attention to detail.
              </h2>
            </div>
            <div>
              <p>
                A few views from the SRL project portfolio. Find more recent
                work and project updates on Instagram.
              </p>
              <a
                className="text-link"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SrlIcon name="instagram" /> Follow {site.instagramHandle}{" "}
                <SrlIcon name="arrow" />
              </a>
            </div>
          </div>
          <div className="portfolio-grid">
            <a
              className="portfolio-item wide"
              href="/projects/exterior-after.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/projects/exterior-after.jpg"
                  alt="SRL exterior painting project, white house with dark garage door"
                  fill
                  sizes="(max-width: 700px) 100vw, 65vw"
                />
              </div>
              <span>
                <strong>A fresh first impression</strong>
                <small>EXTERIOR PAINTING ↗</small>
              </span>
            </a>
            <a
              className="portfolio-item"
              href="/projects/cabinets-after.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/projects/cabinets-after.jpg"
                  alt="Refinished white kitchen cabinets"
                  fill
                  sizes="(max-width: 700px) 100vw, 35vw"
                />
              </div>
              <span>
                <strong>A kitchen, reimagined</strong>
                <small>CABINET FINISHING ↗</small>
              </span>
            </a>
          </div>
        </section>

        <section id="process" className="process-section section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / SIMPLE FROM THE START</p>
                <h2>
                  Your project.
                  <br />A clear plan.
                </h2>
              </div>
              <p>
                Know the scope, understand the next step, and stay involved.
                Here’s what to expect from the first conversation to the final walkthrough.
              </p>
            </div>
            <div className="process-grid">
              {process.map((item) => (
                <article key={item.num}>
                  <span>{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ReviewsSection />

        <section className="section shell area-section" id="areas">
          <div>
            <p className="eyebrow">ROOTED IN BAKERSFIELD</p>
            <h2>
              Local people.
              <br />
              Spaces we care about.
            </h2>
            <p>
              Based in Bakersfield, serving nearby communities and projects
              across Southern California. Not sure if you’re in our area? Just
              ask.
            </p>
            <a className="text-link" href={`tel:${site.phoneTel}`}>
              Call {site.phone} ↗
            </a>
          </div>
          <div className="area-list">
            {serviceAreas.map((area, i) => (
              <div key={area.city}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{area.city}</h3>
                <small>
                  {i === 0 ? "HOME BASE" : "ASK ABOUT AVAILABILITY"}
                </small>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">LET’S BRING IT TO LIFE</p>
              <h2>
                Your next chapter
                <br />
                starts with
                <br />
                <span>a fresh coat.</span>
              </h2>
              <p>
                Tell us what you have in mind. We’ll connect with you about the
                scope, timing, and a free estimate.
              </p>
              <a className="contact-phone" href={`tel:${site.phoneTel}`}>
                <SrlIcon name="phone" /> {site.phone}
              </a>
              <div className="contact-alternatives">
                <a href={`sms:${site.phoneTel}`}>Send a text</a>
                <a
                  href={site.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SrlIcon name="instagram" /> Instagram DM
                </a>
              </div>
              <small>California C-33 contractor · #{site.license}</small>
            </div>
            <EstimateForm />
          </div>
        </section>

        <section className="section shell faq-section" id="faq">
          <div>
            <p className="eyebrow">BEFORE WE GET STARTED</p>
            <h2>
              A few good
              <br />
              questions.
            </h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <nav className="shell legal-links" aria-label="Website information">
          <Link href="/terms">Website & estimate information</Link>
          <Link href="/accessibility">Accessibility assistance</Link>
        </nav>
        <div className="shell footer-main">
          <a
            href="#top"
            className="brand-link"
            aria-label="SRL Painting back to top"
          >
            <BrandLogo className="brand-image" />
            <span className="brand-wordmark">
              SRL Painting<small>YOUR SPACE. OUR CRAFT.</small>
            </span>
          </a>
          <p>
            Residential. Commercial. Cabinets.
            <br />
            Bakersfield & surrounding areas.
          </p>
          <a className="text-link" href="#top">
            Back to top ↑
          </a>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} SRL Painting</span>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            <SrlIcon name="instagram" /> Instagram
          </a>
          <span>California contractor license #{site.license}</span>
        </div>
      </footer>
      <div className="mobile-contact">
        <a href={`tel:${site.phoneTel}`}>
          <SrlIcon name="phone" /> Call SRL
        </a>
        <a href="#contact">
          Free estimate <SrlIcon name="arrow" />
        </a>
      </div>
    </>
  );
}
