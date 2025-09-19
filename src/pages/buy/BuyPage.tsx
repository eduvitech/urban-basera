import { ListChecks, MapPin, Handshake, BadgeCheck, LifeBuoy } from "lucide-react";
import { redirectWhatsApp } from "@/shared/helper";

import card1 from "@/assets/services/sell/sell1.jpg";
import card2 from "@/assets/services/sell/sell2.jpg";

type Step = {
  step: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const buySteps: Step[] = [
  {
    step: "01",
    title: "Discovery Call & Shortlisting",
    description:
      "We understand your needs, budget, and preferred locations—then curate a shortlist that fits your lifestyle.",
    Icon: ListChecks,
  },
  {
    step: "02",
    title: "Site Visit",
    description:
      "We schedule viewings, compare options side-by-side, and share clear pros/cons and neighborhood insights.",
    Icon: MapPin,
  },
  {
    step: "03",
    title: "Negotiation",
    description:
      "We negotiate on your behalf to secure fair pricing and favorable terms—transparent and stress-free.",
    Icon: Handshake,
  },
  {
    step: "04",
    title: "Booking",
    description:
      "From token to paperwork, we coordinate documentation and timelines so your booking feels effortless.",
    Icon: BadgeCheck,
  },
  {
    step: "05",
    title: "After-Sales Support",
    description:
      "Registration guidance, handover coordination, and reliable support even after you move in.",
    Icon: LifeBuoy,
  },
];

const BuyPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Intro */}
      <section className="section-padding text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Buy with Urban Basera</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Finding the right home is more than a transaction—it’s discovering a place where your story begins.
          We make buying seamless and stress-free, guiding you with expertise, trust, and care.
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
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-12">A Clear 5-Step Journey</h2>

          <div
            id="buy-steps"
            className="
              lg:grid lg:grid-cols-5 lg:gap-6
              -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none]
            "
          >
            <style>{`#buy-steps .scroll-hide::-webkit-scrollbar{display:none;}`}</style>

            {buySteps.map(({ step, title, description, Icon }) => (
              <article
                key={step}
                className="
                  scroll-hide snap-start
                  min-w-[260px] sm:min-w-[300px] lg:min-w-0
                  h-full rounded-xl border border-border bg-card shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition
                  flex flex-col
                "
              >
                {/* Top: icon + title (fixed heights so all cards match) */}
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

                    <h3
                      className="
                        text-lg sm:text-xl font-serif font-semibold leading-tight
                        line-clamp-2 min-h-[3.2rem]  /* keep titles equal height (~2 lines) */
                      "
                    >
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Body: description fills the rest, clamped to prevent stretching */}
                <div className="px-6 pb-6 flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {description}
                  </p>
                </div>

                {/* Footer accent stays aligned */}
                <div className="h-[3px] w-full bg-gradient-primary" />
              </article>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => redirectWhatsApp()}
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-2">End-to-End Guidance</h3>
            <p className="text-muted-foreground">
              From discovery to handover, we handle the details—so you can focus on choosing the right home.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition">
            <h3 className="text-xl font-serif mb-2">Transparent & Trusted</h3>
            <p className="text-muted-foreground">
              Clear communication, vetted listings, and honest timelines at every step.
            </p>
          </div>
        </div>
      </section> */}

      {/* Imagery */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={card1}
              alt="Site visit with expert guidance"
              className="block w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={card2}
              alt="Closing day—keys and paperwork"
              className="block w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-primary text-accent-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Find Your Dream Home?</h2>
        <p className="mb-6 text-lg opacity-90">One quick WhatsApp chat is all it takes to get started.</p>
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

export default BuyPage;
