import { PenTool, Package, Hammer, KeyRound, CircleUserRound } from "lucide-react";

type Phase = {
  step: string;
  label: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const phases: Phase[] = [
  {
    step: "01",
    label: "Getting to Know You",
    title: "Understanding Your Property Goals",
    description:
      "We start by listening—whether you’re buying, selling, or designing. Your preferences, budget, and timelines guide the journey.",
    Icon: CircleUserRound,
  },
  {
    step: "02",
    label: "Design Phase",
    title: "Tailored Strategy & Concepts",
    description:
      "For buyers, we curate property options. For sellers, we craft a marketing plan. For design, we present mood boards and concepts.",
    Icon: PenTool,
  },
  {
    step: "03",
    label: "Production Phase",
    title: "Planning & Verification",
    description:
      "We manage inspections, legal checks, or finalize detailed layouts and sourcing—ensuring clarity before moving ahead.",
    Icon: Package,
  },
  {
    step: "04",
    label: "Execution Phase",
    title: "Negotiation & On-Site Work",
    description:
      "We handle deal negotiations for buyers and sellers, or oversee on-site execution for design projects with full quality control.",
    Icon: Hammer,
  },
  {
    step: "05",
    label: "Handover",
    title: "Seamless Completion",
    description:
      "From final paperwork and registrations to styled interiors—your journey ends with a confident handover of the property or design.",
    Icon: KeyRound,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Heading */}
        <header className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
            Our Process
          </p>
          <h2 className="display-text mb-4">A Seamless 5-Step Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear milestones from the first hello to handover—so you always know what’s next.
          </p>
        </header>

        {/* Row */}
        <div
          className="
            lg:grid lg:grid-cols-5 lg:gap-6
            -mx-4 px-4
            flex gap-4 overflow-x-auto snap-x snap-mandatory
            [scrollbar-width:none] [-ms-overflow-style:none]
          "
        >
          <style>{`
            #process .scroll-hide::-webkit-scrollbar { display: none; }
          `}</style>

          {phases.map(({ step, label, title, description, Icon }) => (
            <article
              key={step}
              className="
                scroll-hide snap-start
                min-w-[260px] sm:min-w-[300px] lg:min-w-0
                h-full rounded-xl border border-border bg-card
                shadow-soft hover:shadow-lg transition-shadow hover:translate-y-[-2px]
                flex flex-col
              "
            >
              {/* Ribbon */}
              <div className="flex items-center justify-between px-5 py-2.5 bg-secondary border-b border-border">
                <span className="text-[11px] tracking-wider uppercase text-foreground/70">
                  {label}
                </span>
                <span className="text-[11px] font-semibold text-foreground/60">
                  Step {step}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="
                      relative inline-flex size-12 shrink-0 items-center justify-center
                      rounded-full text-accent-foreground
                    "
                    style={{
                      boxShadow: "0 0 0 6px hsl(var(--accent) / 0.15)",
                      background: "var(--gradient-primary)" as any,
                    }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-serif font-semibold leading-tight">{title}</h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {description}
                </p>
              </div>

              {/* Footer Accent */}
              <div className="h-[3px] w-full bg-gradient-primary" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
