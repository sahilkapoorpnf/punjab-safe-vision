import { TrendingDown, Users, MapPin, Eye } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlideImpact() {
  return (
    <SlideLayout dark className="slide-gradient-blue">
      <div className="space-y-10">
        <div>
          <span className="badge-pill bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 mb-4">
            Section 9
          </span>
          <h2 className="slide-title text-4xl md:text-5xl mt-4">
            Impact & Benefits
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <h3 className="font-bold text-lg mb-4 opacity-60">Before NashaMukt</h3>
            <div className="space-y-3">
              {[
                "No anonymous reporting channel",
                "Delayed response to drug activity",
                "Scattered, siloed data",
                "Reactive policing only",
                "Citizens afraid to report",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm opacity-60">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
            <h3 className="font-bold text-lg mb-4">After NashaMukt</h3>
            <div className="space-y-3">
              {[
                "One-tap anonymous reporting",
                "Real-time intelligence & alerts",
                "Unified data across districts",
                "Predictive, data-driven policing",
                "Active citizen participation",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { icon: TrendingDown, value: "40%", label: "Faster Response" },
            { icon: Users, value: "5x", label: "More Reports" },
            { icon: MapPin, value: "60%", label: "Fewer Hotspots" },
            { icon: Eye, value: "100%", label: "Transparency" },
          ].map((s, i) => (
            <div key={i} className="space-y-2">
              <s.icon className="w-6 h-6 mx-auto opacity-70" />
              <p className="text-3xl md:text-4xl font-black">{s.value}</p>
              <p className="text-xs opacity-50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
