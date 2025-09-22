import { ListChecks, Camera, Handshake, FileSignature, LifeBuoy } from "lucide-react";
import { redirectWhatsApp } from "@/shared/helper";

import card1 from "@/assets/services/sell/sell1.webp";
import card2 from "@/assets/services/sell/sell2.webp";

type Step = {
  step: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const sellSteps: Step[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn about your property, your goals, and the timeline to create a personalized selling strategy.",
    Icon: ListChecks,
  },
  {
    step: "02",
    title: "Marketing & Staging",
    description:
      "Professional photography, staging advice, and tailored listings to showcase your property at its best.",
    Icon: Camera,
  },
  {
    step: "03",
    title: "Buyer Engagement",
    description:
      "We handle inquiries, schedule viewings, and engage qualified buyers to build momentum around your property.",
    Icon: Handshake,
  },
  {
    step: "04",
    title: "Negotiation & Documentation",
    description:
      "Our team negotiates offers and manages paperwork with full transparency, ensuring a smooth process.",
    Icon: FileSignature,
  },
  {
    step: "05",
    title: "After-Sales Support",
    description:
      "From registration to handover, we provide assistance and guidance every step of the way.",
    Icon: LifeBuoy,
  },
];

const SellPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Intro */}
      <section className="section-padding text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Sell with Urban Basera</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Selling your property should be simple, transparent, and rewarding. At Urban Basera, we combine local
          expertise with modern marketing to help you sell faster and at the right value—while making the journey
          stress-free.
        </p>
        <button
          onClick={() => redirectWhatsApp()}
          className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </button>
      </section>

      {/* Steps */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-12">A Clear 5-Step Selling Journey</h2>

          <div
            className="
              lg:grid lg:grid-cols-5 lg:gap-6
              -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none]
            "
          >
            <style>{`#sell-steps .scroll-hide::-webkit-scrollbar{display:none;}`}</style>

            {sellSteps.map(({ step, title, description, Icon }) => (
              <article
                key={step}
                className="
                  scroll-hide snap-start
                  min-w-[260px] sm:min-w-[300px] lg:min-w-0
                  h-full rounded-xl border border-border bg-card shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition
                  flex flex-col
                "
              >
                {/* Top row: icon + title with fixed heights so cards match */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-full text-accent-foreground shrink-0"
                      style={{
                        width: 44,
                        height: 44,
                        background: "var(--gradient-primary)" as any,
                        boxShadow: "0 0 0 6px hsl(var(--accent) / 0.15)",
                      }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    {/* Title gets a consistent height (2 lines max) */}
                    <h3
                      className="
                        text-lg sm:text-xl font-serif font-semibold leading-tight
                        line-clamp-2 min-h-[3.2rem]  /* ~2 lines with leading-tight */
                      "
                    >
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Description fills remaining space but is clamped to avoid stretching */}
                <div className="px-6 pb-6 flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {description}
                  </p>
                </div>

                {/* Baseline accent always aligned because article is flex-col h-full */}
                <div className="h-[3px] w-full bg-gradient-primary" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-2">Maximum Exposure</h3>
            <p className="text-muted-foreground">
              Your property is showcased with high-quality visuals and targeted marketing for faster results.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-2">Hassle-Free Selling</h3>
            <p className="text-muted-foreground">
              From valuation to paperwork, we handle the details so you enjoy peace of mind.
            </p>
          </div>
        </div>
      </section> */}

      {/* Imagery */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={card1} alt="Professional property staging" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={card2} alt="Happy seller after deal closure" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-primary text-accent-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Sell Your Property?</h2>
        <p className="mb-6 text-lg opacity-90">Let’s maximize your property’s value and close the deal with ease.</p>
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

export default SellPage;
