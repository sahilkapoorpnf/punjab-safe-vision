import { Brain, BarChart3, TrendingUp, Bell, Map } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlidePhase2() {
  return (
    <SlideLayout dark className="slide-gradient-navy">
      <div className="space-y-10">
        <div>
          <span className="badge-pill bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 mb-4">
            Phase 2 — Intelligence & Scale
          </span>
          <h2 className="slide-title text-4xl md:text-5xl mt-4">
            Multi-District Expansion
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Brain className="w-5 h-5 text-trust-blue" /> Advanced AI Engine
            </h3>
            {[
              "Pattern detection — time, location, repeat activity",
              "Behavior analysis across districts",
              "Smart alerts pushed directly to police",
              "Predictive zone identification",
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-2 opacity-80">
                <span className="w-1.5 h-1.5 rounded-full bg-trust-blue mt-2 shrink-0" />
                <p className="text-sm">{f}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-trust-blue" /> Multi-District Dashboard
            </h3>
            {[
              "District comparison & performance tracking",
              "Officer efficiency analytics",
              "Trend analysis & monthly reporting",
              "Real-time data intelligence layer",
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-2 opacity-80">
                <span className="w-1.5 h-1.5 rounded-full bg-trust-blue mt-2 shrink-0" />
                <p className="text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { icon: Map, label: "Districts Active", value: "8" },
              { icon: TrendingUp, label: "Crime Down", value: "34%" },
              { icon: Bell, label: "Smart Alerts", value: "2.1K" },
              { icon: Brain, label: "AI Accuracy", value: "92%" },
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <s.icon className="w-6 h-6 mx-auto opacity-60" />
                <p className="text-3xl font-black">{s.value}</p>
                <p className="text-xs opacity-50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-lg font-medium opacity-70 italic">
          "From reactive policing to data-driven enforcement with citizen participation"
        </p>
      </div>
    </SlideLayout>
  );
}
