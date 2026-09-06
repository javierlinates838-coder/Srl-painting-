import { BackToTop } from "@/components/back-to-top";
import { BrandReveal } from "@/components/brand-reveal";
import { ColorExplorer } from "@/components/color-explorer";
import { DetailsSection } from "@/components/details-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { NavProvider } from "@/components/nav-provider";
import { PaintingSelector } from "@/components/painting-selector";
import { ProcessSection } from "@/components/process-section";
import { ProjectEstimator } from "@/components/project-estimator";
import { QuoteProvider } from "@/components/quote-context";
import { QuoteSection } from "@/components/quote-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ScrollProgress } from "@/components/scroll-progress";
import { ServiceAreasSection } from "@/components/service-areas-section";
import { ServicesSection } from "@/components/services-section";
import { StickyCta } from "@/components/sticky-cta";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <QuoteProvider>
      <NavProvider>
        <BrandReveal />
        <ScrollProgress />
        <Header />
        <main id="main-content" className="pb-[calc(4.75rem+env(safe-area-inset-bottom))] sm:pb-0">
          <Hero />
          <TrustSection />
          <PaintingSelector />
          <ServicesSection />
          <DetailsSection />
          <ColorExplorer />
          <ProcessSection />
          <ServiceAreasSection />
          <ReviewsSection />
          <ProjectEstimator />
          <QuoteSection />
          <FaqSection />
        </main>
        <Footer />
        <StickyCta />
        <BackToTop />
      </NavProvider>
    </QuoteProvider>
  );
}
