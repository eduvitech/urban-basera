import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Amit",
    role: "Homebuyer",
    content:
      "Urban Basera made my first home-buying journey stress-free. From shortlisting to final paperwork, their team was supportive at every step. I felt confident and cared for throughout the process.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Mr. Jayram",
    role: "Property Seller",
    content:
      "I was worried about selling my property in time, but Urban Basera handled everything—marketing, negotiations, and documentation. They got me the right value without any hassle. Truly a professional experience.",
    rating: 5,
    avatar: "JR",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-subtle">
      <div className="max-w-5xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our happy clients who trusted us with their most important journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
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
