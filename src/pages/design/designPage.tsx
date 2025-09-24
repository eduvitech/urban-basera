import img1 from "@/assets/services/design/design.webp";
import img2 from "@/assets/services/design/design1.webp";
import img3 from "@/assets/services/design/design2.webp";
import img5 from "@/assets/services/design/design4.webp";
import img6 from "@/assets/services/design/design5.webp";
import img7 from "@/assets/services/design/design6.webp";
import img8 from "@/assets/services/design/design7.webp";
import img9 from "@/assets/services/design/design8.webp";

import heroVideo from "@/assets/videos/design/design.mp4";
import { redirectWhatsApp } from "@/shared/helper";

const DesignPage = () => {
  const gallery = [img1, img2, img3, img5, img6, img7, img8,img9];

  return (
    <main className="bg-background text-foreground">
      {/* Intro Section */}
      <section className="section-padding text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Design with Urban Basera
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Your home should reflect who you are. At Urban Basera, our design
          philosophy blends creativity, functionality, and emotion to craft
          spaces that feel personal and alive. Whether it’s interiors or
          architectural solutions, we transform houses into homes where comfort,
          beauty, and memories thrive.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-14">
            Our Design Gallery
          </h2>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl shadow-lg break-inside-avoid"
              >
                <img
                  src={img}
                  alt={`Design ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Video */}
      <section className="section-padding text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">
          Experience Our Journey
        </h2>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition">
          <video controls poster={img2} className="w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Let’s Design Your Dream Space
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Book a free consultation and take the first step towards interiors
          that truly reflect you.
        </p>
        <button
          onClick={() => redirectWhatsApp()}
          className="inline-flex px-8 py-4 bg-white text-accent rounded-lg font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default DesignPage;
