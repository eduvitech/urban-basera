import { Home, ShoppingBag, Ruler } from "lucide-react";
import { redirectWhatsApp } from "@/shared/helper";

// Default placeholder images (replace later)
import about1 from "@/assets/modern-living-room.jpg";
import about2 from "@/assets/elegant-kitchen.jpg";
import about3 from "@/assets/cozy-bedroom.jpg";

const AboutPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Intro */}
      <section className="section-padding text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          About Urban Basera
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          At Urban Basera, we bring the warmth and essence of where you belong
          into the heart of the city. For us, a home is never just four walls—
          it's the foundation of a lifestyle, a family's story, and a vision for
          the future. It's comfort, belonging, and cherished memories.
        </p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          With our one-stop solutions for buying, selling, and designing homes,
          we help you recreate that sense of familiarity and joy, no matter how
          far you are from your roots. Our mission is simple: to craft spaces
          that reconnect you with the charm of “home,” while fitting seamlessly
          into modern city life.
        </p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-medium">
          Because with Urban Basera, your home isn't just where you live—it's
          where your story continues.
        </p>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To help families and individuals find homes that feel like a
              natural extension of who they are—spaces that are modern,
              functional, yet deeply personal.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the trusted partner in creating, buying, and selling homes
              that bring people closer to their roots while embracing the
              possibilities of urban living.
            </p>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're buying your dream home, selling your current one, or
            designing interiors that inspire—Urban Basera is your one-stop
            destination.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
            <Home className="w-10 h-10 mb-4 text-accent" />
            <h3 className="text-xl font-serif mb-2">Buy</h3>
            <p className="text-muted-foreground">
              Seamless guidance to help you find a home that feels truly yours.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
            <ShoppingBag className="w-10 h-10 mb-4 text-accent" />
            <h3 className="text-xl font-serif mb-2">Sell</h3>
            <p className="text-muted-foreground">
              Transparent and efficient selling support for maximum value.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
            <Ruler className="w-10 h-10 mb-4 text-accent" />
            <h3 className="text-xl font-serif mb-2">Design</h3>
            <p className="text-muted-foreground">
              Interior and architectural solutions that reflect your story.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-primary text-accent-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Let's Build Your Story Together
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Reach out to explore how Urban Basera can help you buy, sell, or
          design the home that's right for you.
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

export default AboutPage;
