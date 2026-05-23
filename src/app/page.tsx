import { ContactSection } from "@/components/contact-section";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header, TrustMarquee } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { StickyCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <Header />
      <TrustMarquee />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <BeforeAfterGallery />
        <ServicesSection />
        <ProcessSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
