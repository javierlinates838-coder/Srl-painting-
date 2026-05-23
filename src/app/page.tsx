import { AboutSection } from "@/components/about-section";
import { AreasSection } from "@/components/areas-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <GallerySection />
        <AreasSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
