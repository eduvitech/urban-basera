import kitchenImage from "@/assets/kitchen-showcase.jpg";
import bedroomImage from "@/assets/bedroom-showcase.jpg";
import diningImage from "@/assets/dining-showcase.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Modern Kitchen",
    image: kitchenImage,
    description: "A sleek kitchen transformation blending functionality with contemporary elegance."
  },
  {
    title: "Elegant Bedroom",
    image: bedroomImage,
    description: "A serene bedroom retreat designed for comfort and sophisticated style."
  },
  {
    title: "Sophisticated Dining",
    image: diningImage,
    description: "A dining space that brings families together in luxurious comfort."
  }
];

const DesignShowcase = () => {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">Our Design Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the transformation of ordinary spaces into extraordinary experiences through our portfolio of completed projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 hover-lift">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-serif font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;