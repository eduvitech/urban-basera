import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 border-2 border-white transform rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center text-white">
          <h2 className="display-text mb-6">Your Dream Home Starts with Great Design</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ready to transform your space? Let's create something extraordinary together.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;