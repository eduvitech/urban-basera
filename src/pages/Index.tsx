import HeroSection from "@/components/HeroSection";
import UrbanBaseraServices from "@/components/ub-services/services";
import ProcessSection from "@/components/ProcessSection";
import PropertyServices from "@/components/PropertyServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <>
      <HeroSection />
      <UrbanBaseraServices />
      <ProcessSection />
      {/* <PropertyServices /> */}
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default Index;
