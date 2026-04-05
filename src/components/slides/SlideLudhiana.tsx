import { MapPin, Building2, Users, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import SlideLayout from "./SlideLayout";

const reasons = [
  { icon: Building2, text: "One of Punjab's largest and most densely populated cities" },
  { icon: Users, text: "Industrial hub with high workforce mobility" },
  { icon: Layers, text: "Mixed urban + semi-urban + rural zones — ideal test environment" },
  { icon: MapPin, text: "Reported concerns of drug-related activities in key areas" },
  { icon: CheckCircle2, text: "Strong administrative infrastructure for pilot execution" },
  { icon: TrendingUp, text: "High scalability — if it works here, it works anywhere in Punjab" },
];

export default function SlideLudhiana() {
  return (
    <SlideLayout>
      <div className="space-y-8">
        <div>
          <span className="badge-pill badge-blue mb-4">Section 2</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Why <span className="text-primary">Ludhiana</span> as Pilot City
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Map mockup */}
          <div className="relative rounded-2xl overflow-hidden bg-secondary border border-border aspect-square max-w-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="font-bold text-lg text-foreground">Ludhiana</p>
                <p className="text-xs text-muted-foreground">Phase 1 Pilot Zone</p>
              </div>
            </div>
            {/* Zone indicators */}
            <div className="absolute top-6 left-6 badge-pill badge-crimson text-[10px]">Zone A — Urban Core</div>
            <div className="absolute top-6 right-6 badge-pill badge-gold text-[10px]">Zone B — Semi-Urban</div>
            <div className="absolute bottom-6 left-6 badge-pill badge-success text-[10px]">Zone C — Rural Belt</div>
          </div>

          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-foreground font-medium">{r.text}</p>
              </div>
            ))}

            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm font-semibold text-primary italic">
                "Ludhiana provides the perfect real-world environment to validate and scale a statewide solution."
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
