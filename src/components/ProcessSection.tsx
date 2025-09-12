import { Calendar, Lightbulb, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book Consultation",
    description: "Schedule a free consultation to discuss your vision and requirements with our design experts."
  },
  {
    icon: Lightbulb,
    step: "02", 
    title: "Get 3D Concepts",
    description: "Receive detailed 3D visualizations and design concepts tailored to your space and preferences."
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Approve & Customize",
    description: "Review designs, provide feedback, and finalize every detail to ensure perfect alignment with your vision."
  },
  {
    icon: Truck,
    step: "04",
    title: "Execution & Delivery",
    description: "Our expert team brings your design to life with precise execution and timely delivery."
  }
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures a smooth journey from initial consultation to final delivery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center hover-glow">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-golden-sand text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;