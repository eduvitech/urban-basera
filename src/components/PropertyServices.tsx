import { Home, DollarSign, MapPin, Calculator, Shield, Users } from "lucide-react";

const PropertyServices = () => {
  return (
    <section id="properties" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">Buy & Sell Properties</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond interior design, we offer comprehensive property services to help you find your dream home or sell your current property at the best value. Our expertise in design gives us a unique advantage in the real estate market.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Buy Property Section */}
          <div className="bg-card border border-border rounded-lg p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mr-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-medium">Buy Property</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Discover carefully curated properties that offer excellent design potential and investment value. We understand what makes a space truly special.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Prime Locations</h4>
                  <p className="text-muted-foreground text-sm">Handpicked properties in desirable neighborhoods with growth potential and excellent connectivity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Calculator className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Investment Analysis</h4>
                  <p className="text-muted-foreground text-sm">Comprehensive market analysis, ROI projections, and design potential assessment for informed decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Legal Support</h4>
                  <p className="text-muted-foreground text-sm">Complete documentation assistance, legal verification, and hassle-free transaction management.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sell Property Section */}
          <div className="bg-card border border-border rounded-lg p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mr-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-medium">Sell Property</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Maximize your property's value with our unique combination of design expertise and marketing prowess. We make your space irresistible to buyers.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Home className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Property Staging</h4>
                  <p className="text-muted-foreground text-sm">Professional staging and minor design improvements to showcase your property's full potential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Targeted Marketing</h4>
                  <p className="text-muted-foreground text-sm">Strategic marketing campaigns reaching qualified buyers through multiple channels and networks.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Calculator className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Price Optimization</h4>
                  <p className="text-muted-foreground text-sm">Data-driven pricing strategy and market analysis to ensure maximum returns in minimum time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Services */}
        <div className="bg-gradient-subtle rounded-lg p-8">
          <h3 className="text-2xl font-serif font-medium text-center mb-8">Why Choose Our Property Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium mb-2">Design Advantage</h4>
              <p className="text-muted-foreground text-sm">Our interior design expertise helps identify properties with the best transformation potential.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium mb-2">Trusted Network</h4>
              <p className="text-muted-foreground text-sm">Extensive network of verified buyers, sellers, and industry professionals for smooth transactions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium mb-2">End-to-End Service</h4>
              <p className="text-muted-foreground text-sm">Complete support from property search to final handover, including design consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyServices;