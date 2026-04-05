import { Rocket, Clock, Target } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlidePhase1Title() {
  return (
    <SlideLayout dark className="slide-gradient-blue">
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8">
        <span className="badge-pill bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20">
          Phase 1 — Foundation
        </span>

        <h2 className="slide-title text-5xl md:text-7xl">
          Pilot Deployment
          <br />in Ludhiana
        </h2>

        <div className="slide-accent-bar w-32" />

        <div className="grid grid-cols-3 gap-10 pt-6">
          <div className="flex flex-col items-center gap-2">
            <Rocket className="w-8 h-8 opacity-80" />
            <p className="font-bold text-2xl">30–40</p>
            <p className="text-sm opacity-60">Days to Deploy</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Target className="w-8 h-8 opacity-80" />
            <p className="font-bold text-2xl">3</p>
            <p className="text-sm opacity-60">Zones Covered</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-8 h-8 opacity-80" />
            <p className="font-bold text-2xl">24/7</p>
            <p className="text-sm opacity-60">Live Monitoring</p>
          </div>
        </div>

        <p className="text-lg font-medium opacity-70 max-w-xl pt-4">
          "Identify real drug hotspots in Ludhiana within 30 days"
        </p>
      </div>
    </SlideLayout>
  );
}
