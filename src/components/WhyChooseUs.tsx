import { Palette, Home, Award } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Personalized Plans",
    description: "Every design is tailored to your unique taste and lifestyle, ensuring your space truly reflects who you are."
  },
  {
    icon: Home,
    title: "Modern & Functional",
    description: "We balance beauty with utility, creating spaces that are both stunning and perfectly suited for daily living."
  },
  {
    icon: Award,
    title: "Expert Designers",
    description: "Our team of trusted professionals brings years of experience and creative vision to every project."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="interiors" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">Why Interior Design with Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your space with our comprehensive design approach that prioritizes your vision and comfort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center hover-glow">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="heading-text mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;