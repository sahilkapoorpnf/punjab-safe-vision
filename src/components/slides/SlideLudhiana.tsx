import { MapPin, Building2, Users, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroLudhiana from "@/assets/hero-ludhiana.jpg";

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
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="floating-shape w-24 h-24 bg-primary top-32 right-20" />

      <div className="space-y-8 relative z-10">
        <div>
          <span className="badge-pill badge-blue mb-4">Section 2</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Why <span className="text-primary">Ludhiana</span> as Pilot City
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Ludhiana aerial image */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroLudhiana} alt="Ludhiana aerial view with zone overlays" className="w-full h-72 object-cover" loading="lazy" width={1920} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Ludhiana, Punjab</p>
                  <p className="text-xs text-muted-foreground">Phase 1 Pilot Zone</p>
                </div>
              </div>
            </div>

            {/* Zone indicators */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-accent/5 border border-accent/20 text-center">
                <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-1" />
                <p className="text-[10px] font-bold text-foreground">Zone A</p>
                <p className="text-[8px] text-muted-foreground">Urban Core</p>
              </div>
              <div className="p-3 rounded-xl bg-gold/5 border border-gold/20 text-center">
                <div className="w-3 h-3 rounded-full bg-gold mx-auto mb-1" />
                <p className="text-[10px] font-bold text-foreground">Zone B</p>
                <p className="text-[8px] text-muted-foreground">Semi-Urban</p>
              </div>
              <div className="p-3 rounded-xl bg-success/5 border border-success/20 text-center">
                <div className="w-3 h-3 rounded-full bg-success mx-auto mb-1" />
                <p className="text-[10px] font-bold text-foreground">Zone C</p>
                <p className="text-[8px] text-muted-foreground">Rural Belt</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover:bg-primary/20 group-hover:scale-110">
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
