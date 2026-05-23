import { AboutSection } from "@/components/about-section";
import { BackToTop } from "@/components/back-to-top";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ScrollProgress } from "@/components/scroll-progress";
import { ServicesSection } from "@/components/services-section";
import { StickyCta } from "@/components/sticky-cta";
import { TrustStrip } from "@/components/trust-strip";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pb-[4.5rem] sm:pb-0">
        <Hero />
        <TrustStrip />
        <BeforeAfterGallery />
        <ServicesSection />
        <WhyChoose />
        <AboutSection />
        <ProcessSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
        <CtaBand />
      </main>
      <Footer />
      <StickyCta />
      <BackToTop />
    </>
  );
}
