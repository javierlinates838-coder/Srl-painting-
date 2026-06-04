import { AboutSection } from "@/components/about-section";
import { BackToTop } from "@/components/back-to-top";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { NavProvider } from "@/components/nav-provider";
import { ProcessSection } from "@/components/process-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { StickyCta } from "@/components/sticky-cta";
import { TrustStrip } from "@/components/trust-strip";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <NavProvider>
      <Header />
      <main id="main-content" className="pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-0">
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <BeforeAfterGallery />
        <WhyChoose />
        <ProcessSection />
        <ReviewsSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
        <CtaBand />
      </main>
      <Footer />
      <StickyCta />
      <BackToTop />
    </NavProvider>
  );
}
