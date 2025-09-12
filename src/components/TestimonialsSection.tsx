import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    content: "Urban Basera transformed my flat into a luxury space. The attention to detail and understanding of my style was exceptional. Loved every aspect of the process!",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Rajesh Kumar", 
    role: "Property Investor",
    content: "Not only did they help me find the perfect property, but their interior design made it a stunning investment. The ROI exceeded all expectations.",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Anita Patel",
    role: "Business Owner", 
    content: "The team's expertise in both design and property services made our office relocation seamless. Professional, creative, and results-driven.",
    rating: 5,
    avatar: "AP"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from satisfied clients who trusted us with their most important spaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-golden-sand fill-current" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;