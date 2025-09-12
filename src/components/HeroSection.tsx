import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury interior design by Urban Basera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding pt-20">
        <div className="max-w-3xl">
          <h1 className="hero-text text-white mb-6">
            Design Your Dream Space with Urban Basera
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            From concept to creation — interiors that speak your style. 
            Experience luxury living with our expert design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
            <Button variant="minimal" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-primary">
              Explore Buy & Sell
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;