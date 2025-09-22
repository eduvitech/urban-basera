import { Link } from "react-router-dom";
import { Home, BadgeDollarSign, Ruler } from "lucide-react";

import BuyImage from "@/assets/services/buy/buy.webp";
import SellImage from "@/assets/services/sell/sell.webp";
import cozyBedroom from "@/assets/cozy-bedroom.webp";

type Service = {
  id: "buy" | "sell" | "design";
  title: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    id: "buy",
    title: "Buy with Urban Basera",
    tagline: "Find a space where your story begins.",
    description:
      "We make buying seamless and stress-free—from shortlisting to closing—so you feel confident at every step.",
    href: "/buy",
    image: BuyImage,
    Icon: Home,
  },
  {
    id: "sell",
    title: "Sell with Urban Basera",
    tagline: "Move forward with confidence.",
    description:
      "Get the best value with a transparent process that respects your home’s story, backed by deep market expertise.",
    href: "/sell",
    image: SellImage,
    Icon: BadgeDollarSign,
  },
  {
    id: "design",
    title: "Design with Urban Basera",
    tagline: "Crafted for who you are.",
    description:
      "From interiors to full architecture, we blend creativity and function to shape spaces that feel personal and alive.",
    href: "/design",
    image: cozyBedroom,
    Icon: Ruler,
  },
];

const UrbanBaseraServices = () => {
  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <header className="text-center mb-14">
          <h2 className="display-text mb-3">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Urban Basera, we help you <span className="font-semibold">buy</span>,{" "}
            <span className="font-semibold">sell</span>, and{" "}
            <span className="font-semibold">design</span> with clarity, care, and craft.
            Explore how we can shape the spaces you’ll call home.
          </p>
        </header>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, title, tagline, description, href, image, Icon }) => (
            <Link
              key={id}
              to={href}
              aria-label={title}
              className="group block focus:outline-none"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // ✅ scroll reset
              data-ub-click={id}
            >
              <article
                className="overflow-hidden rounded-lg bg-card border border-border shadow-soft hover-lift
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                           focus-visible:ring-offset-background transition"
              >
                {/* Image wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-accent-foreground shadow-[0_0_0_4px_hsl(var(--accent)/0.12)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-serif font-medium">{title}</h3>
                  </div>

                  <p className="text-sm font-medium text-foreground mb-2">{tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrbanBaseraServices;
