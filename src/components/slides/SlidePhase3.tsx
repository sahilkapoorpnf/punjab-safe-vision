import { Globe, Brain, Video, Monitor } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlidePhase3() {
  return (
    <SlideLayout dark className="slide-gradient-crimson">
      <div className="space-y-10">
        <div>
          <span className="badge-pill bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 mb-4">
            Phase 3 — State-Wide
          </span>
          <h2 className="slide-title text-4xl md:text-5xl mt-4">
            Punjab Wide Smart
            <br />Drug Control Grid
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Globe, title: "Full Punjab Coverage", desc: "Every district, every zone — complete state-wide surveillance and intelligence network" },
            { icon: Brain, title: "Predictive AI System", desc: "Predict next hotspots, route-level intelligence, trend forecasting before crimes happen" },
            { icon: Video, title: "CCTV Integration", desc: "Integrate existing cameras with activity-based alerts — no facial recognition initially" },
            { icon: Monitor, title: "Central Command Center", desc: "CM-level visibility with live Punjab map, district performance tracking in real-time" },
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 space-y-3">
              <f.icon className="w-8 h-8 opacity-80" />
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-sm opacity-70">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Command center mockup */}
        <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-4">Punjab Command Center — Live View</p>
          <div className="grid grid-cols-5 gap-3">
            {["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"].map((city, i) => (
              <div key={i} className="text-center p-3 rounded-lg bg-primary-foreground/5">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${i < 2 ? "bg-success" : "bg-gold"}`} />
                <p className="text-xs font-semibold">{city}</p>
                <p className="text-[10px] opacity-50">{i < 2 ? "Active" : "Deploying"}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-lg font-medium opacity-70 italic">
          "Transform Punjab into a data-driven, drug-free state"
        </p>
      </div>
    </SlideLayout>
  );
}
