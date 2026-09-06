import { AboutSection } from "@/components/about-section";
import { BackToTop } from "@/components/back-to-top";
import { ColorExplorer } from "@/components/color-explorer";
import { CraftSection } from "@/components/craft-section";
import { EditorialPortfolio } from "@/components/editorial-portfolio";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { NavProvider } from "@/components/nav-provider";
import { ProcessSection } from "@/components/process-section";
import { QuoteSection } from "@/components/quote-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { StickyCta } from "@/components/sticky-cta";
import { TransformationMoment } from "@/components/transformation-moment";

export default function Home() {
  return (
    <NavProvider>
      <Header />
      <main id="main-content" className="pb-[calc(4rem+env(safe-area-inset-bottom))] sm:pb-0">
        <Hero />
        <TransformationMoment />
        <EditorialPortfolio />
        <ServicesSection />
        <CraftSection />
        <ColorExplorer />
        <ProcessSection />
        <ReviewsSection />
        <AboutSection />
        <FaqSection />
        <QuoteSection />
      </main>
      <Footer />
      <StickyCta />
      <BackToTop />
    </NavProvider>
  );
}
