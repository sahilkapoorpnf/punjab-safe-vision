import { Rocket, Clock, Target, Smartphone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SlideLayout from "./SlideLayout";
import heroLudhiana from "@/assets/hero-ludhiana.jpg";

export default function SlidePhase1Title() {
  return (
    <SlideLayout dark className="slide-gradient-blue relative overflow-hidden">
      <img src={heroLudhiana} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      <div className="absolute inset-0 grid-pattern-dark" />

      <div className="glow-orb w-72 h-72 bg-trust-blue top-10 right-10" />
      <div className="glow-orb w-48 h-48 bg-primary bottom-40 left-20 animate-pulse-glow" />

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 relative z-10">
        <span className="badge-pill bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20">
          Phase 1 — Foundation
        </span>

        <h2 className="slide-title text-5xl md:text-7xl">
          Pilot Deployment
          <br />in Ludhiana
        </h2>

        <div className="slide-accent-bar w-32" />

        <div className="grid grid-cols-3 gap-10 pt-6">
          {[
            { icon: Rocket, val: "30–40", label: "Days to Deploy" },
            { icon: Target, val: "3", label: "Zones Covered" },
            { icon: Clock, val: "24/7", label: "Live Monitoring" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
              <s.icon className="w-8 h-8 opacity-80" />
              <p className="font-bold text-2xl">{s.val}</p>
              <p className="text-sm opacity-60">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-medium opacity-70 max-w-xl pt-4">
          "Identify real drug hotspots in Ludhiana within 30 days"
        </p>
      </div>
    </SlideLayout>
  );
}
