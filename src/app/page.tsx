import { ContactSection } from "@/components/contact-section";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { StickyCta } from "@/components/sticky-cta";
import { TrustBar } from "@/components/trust-bar";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function Home() {
  return (
    <>
      <Header />
      <TrustBar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <BeforeAfterGallery />
        <WhyChooseSection />
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
