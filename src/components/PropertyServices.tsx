import { Button } from "@/components/ui/button";
import { Home, DollarSign, ArrowRight } from "lucide-react";

const PropertyServices = () => {
  return (
    <section id="properties" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">Buy & Sell Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond design, we help you find the perfect property or showcase your current space to genuine buyers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-secondary rounded-full flex items-center justify-center">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-medium mb-4">Buy Property</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover curated property listings that match your lifestyle and design aspirations. We help you find spaces with true potential.
            </p>
            <Button variant="elegant" className="w-full">
              Explore Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-secondary rounded-full flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-medium mb-4">Sell Property</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Showcase your property to genuine buyers with our premium marketing approach and design expertise to maximize value.
            </p>
            <Button variant="elegant" className="w-full">
              List Your Property
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyServices;