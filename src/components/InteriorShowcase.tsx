import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import modernLivingRoom from "@/assets/modern-living-room.jpg";
import elegantKitchen from "@/assets/elegant-kitchen.jpg";
import cozyBedroom from "@/assets/cozy-bedroom.jpg";
import luxuryOffice from "@/assets/luxury-office.jpg";

const interiorProjects = [
  {
    id: 1,
    title: "Modern Living Room",
    image: modernLivingRoom,
    description: "A contemporary living space with clean lines and sophisticated comfort."
  },
  {
    id: 2,
    title: "Elegant Kitchen",
    image: elegantKitchen,
    description: "A stunning kitchen combining functionality with timeless elegance."
  },
  {
    id: 3,
    title: "Cozy Bedroom",
    image: cozyBedroom,
    description: "A serene bedroom retreat designed for ultimate relaxation and style."
  },


];

const InteriorShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<typeof interiorProjects[0] | null>(null);

  return (
    <section id="interiors" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="display-text mb-4">Interior Design Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of stunning interior transformations that blend beauty with functionality.
          </p>
        </div>
        
        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {interiorProjects.map((project) => (
            <div 
              key={project.id} 
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(project)}
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-border shadow-soft hover-lift">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="bg-background rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-medium mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InteriorShowcase;