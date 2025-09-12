import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteriorShowcase from "@/components/InteriorShowcase";
import ProcessSection from "@/components/ProcessSection";
import PropertyServices from "@/components/PropertyServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <InteriorShowcase />
        <ProcessSection />
        <PropertyServices />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
