import React from "react";
import { Star, Quote, CalendarDays, MapPin } from "lucide-react";
import { redirectWhatsApp } from "@/shared/helper"; // or your whatsapp util
import { Button } from "@/components/ui/button";

// ---------- Types ----------
type Service = "Buy" | "Sell" | "Interior Design";
type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;        // 1..5
  avatar: string;        // initials
  service: Service;
  city?: string;
  date?: string;         // ISO or "MMM YYYY"
};

// ---------- Data (extend with real entries) ----------
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    content:
      "Urban Basera transformed my flat into a luxury space. The attention to detail and understanding of my style was exceptional. Loved every aspect of the process!",
    rating: 5,
    avatar: "PS",
    service: "Interior Design",
    city: "Mumbai",
    date: "2025-06-10",
  },
  {
    name: "Rajesh Kumar",
    role: "Property Investor",
    content:
      "Not only did they help me find the perfect property, but their interior design made it a stunning investment. The ROI exceeded all expectations.",
    rating: 5,
    avatar: "RK",
    service: "Buy",
    city: "Pune",
    date: "2025-05-02",
  },
  {
    name: "Anita Patel",
    role: "Business Owner",
    content:
      "The team's expertise in both design and property services made our office relocation seamless. Professional, creative, and results-driven.",
    rating: 5,
    avatar: "AP",
    service: "Sell",
    city: "Ahmedabad",
    date: "2025-04-20",
  },
  // Add more to fill the grid nicely…
];

// ---------- UI bits ----------
const Stars = ({ value }: { value: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < value ? "text-yellow-400 fill-current" : "text-muted-foreground"}`}
      />
    ))}
  </div>
);

const StatTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
    {children}
  </span>
);

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <article className="bg-card border border-border rounded-2xl p-6 hover-lift transition-transform">
    <div className="flex items-center justify-between">
      <Stars value={t.rating} />
      <Quote className="h-5 w-5 text-muted-foreground" />
    </div>

    <p className="text-foreground mt-4 mb-6 leading-relaxed italic">“{t.content}”</p>

    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center font-semibold mr-4">
        {t.avatar}
      </div>
      <div className="min-w-0">
        <div className="font-medium text-foreground truncate">{t.name}</div>
        <div className="text-sm text-muted-foreground truncate">{t.role}</div>
      </div>
    </div>

    <div className="mt-4 flex flex-wrap items-center gap-2">
      <StatTag>{t.service}</StatTag>
      {t.city && (
        <StatTag>
          <MapPin className="h-3.5 w-3.5 mr-1" />
          {t.city}
        </StatTag>
      )}
      {t.date && (
        <StatTag>
          <CalendarDays className="h-3.5 w-3.5 mr-1" />
          {new Date(t.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
        </StatTag>
      )}
    </div>
  </article>
);

// ---------- Page ----------
const TestimonialsPage: React.FC = () => {
  const total = TESTIMONIALS.length;
  const avg =
    total > 0 ? (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / total).toFixed(1) : "0.0";

  return (
    <main className="min-h-screen pt-28"> {/* offset for fixed header */}
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto container-padding py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="display-text mb-4">What Our Clients Say</h1>
            <p className="text-lg text-muted-foreground">
              Trusted by homeowners, investors, and businesses for{" "}
              <span className="font-semibold text-foreground">Buying</span>,{" "}
              <span className="font-semibold text-foreground">Selling</span>, and{" "}
              <span className="font-semibold text-foreground">Designing</span> premium spaces.
            </p>
          </div>

          {/* Rating strip (simple, not “functional”) */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-2">
            <Stars value={5} />
            <span className="text-sm text-muted-foreground">
              Rated <span className="font-semibold text-foreground">{avg}/5</span> by our clients
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-14 md:py-18">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Big Pull-Quote (visual break) */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
            <Quote className="mx-auto h-6 w-6 text-muted-foreground" />
            <p className="mt-4 text-xl md:text-2xl leading-relaxed text-foreground">
              “From deal to décor, Urban Basera made everything effortless. I never thought buying
              and designing could feel this seamless.”
            </p>
            <div className="mt-4 text-sm text-muted-foreground">— Verified Client</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground">
                Book a quick consultation for Buying, Selling, or Interior Design.
              </p>
            </div>
            <Button
              variant="elegant"
              size="sm"
              onClick={() => {
                redirectWhatsApp();
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
