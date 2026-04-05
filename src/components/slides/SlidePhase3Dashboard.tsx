import { Map, Shield, TrendingDown, AlertTriangle, Activity, Zap, Radio, Eye } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroPunjabMap from "@/assets/hero-punjab-map.jpg";

export default function SlidePhase3Dashboard() {
  return (
    <SlideLayout dark className="slide-gradient-crimson relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark" />
      <div className="glow-orb w-60 h-60 bg-accent top-0 left-0" />

      <div className="space-y-8 relative z-10">
        <div>
          <span className="badge-pill bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 mb-4">
            Phase 3 — Command Center
          </span>
          <h2 className="slide-title text-3xl md:text-4xl mt-4">
            Punjab Central Command Dashboard
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        {/* Full command center mockup */}
        <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 overflow-hidden backdrop-blur-sm">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-primary-foreground/10 bg-primary-foreground/5">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 opacity-60" />
              <span className="text-xs font-bold opacity-80">NashaMukt Punjab — Central Command v3.0</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[10px] opacity-60"><Radio className="w-3 h-3 text-success" /> LIVE</span>
              <span className="text-[10px] opacity-40">CM Dashboard Access</span>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* State stats */}
            <div className="grid grid-cols-5 gap-3">
              {[
                { icon: Map, label: "Districts Active", value: "23/23", sub: "Full Coverage" },
                { icon: TrendingDown, label: "Crime Reduction", value: "47%", sub: "vs Last Year" },
                { icon: AlertTriangle, label: "Active Alerts", value: "128", sub: "34 Critical" },
                { icon: Eye, label: "CCTV Feeds", value: "2,400+", sub: "State-wide" },
                { icon: Activity, label: "AI Predictions", value: "96.2%", sub: "Accuracy" },
              ].map((s, i) => (
                <div key={i} className="p-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-center space-y-1">
                  <s.icon className="w-4 h-4 mx-auto opacity-50" />
                  <p className="text-xl font-black">{s.value}</p>
                  <p className="text-[9px] opacity-50">{s.label}</p>
                  <p className="text-[8px] opacity-30">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-4">
              {/* Punjab Map with image */}
              <div className="col-span-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 overflow-hidden">
                <div className="relative h-28">
                  <img src={heroPunjabMap} alt="Punjab map" className="w-full h-full object-cover opacity-30" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                  <div className="absolute top-2 left-3 flex items-center justify-between w-[calc(100%-1.5rem)]">
                    <p className="text-xs font-bold opacity-80">🗺️ Punjab Live Map</p>
                    <span className="text-[9px] opacity-40">Real-time</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { name: "Amritsar", status: "green", cases: 12 },
                      { name: "Ludhiana", status: "green", cases: 8 },
                      { name: "Jalandhar", status: "green", cases: 15 },
                      { name: "Patiala", status: "yellow", cases: 22 },
                      { name: "Bathinda", status: "yellow", cases: 19 },
                      { name: "Mohali", status: "green", cases: 6 },
                      { name: "Pathankot", status: "red", cases: 31 },
                      { name: "Moga", status: "yellow", cases: 18 },
                      { name: "Sangrur", status: "green", cases: 9 },
                      { name: "Ferozepur", status: "red", cases: 28 },
                    ].map((d, i) => (
                      <div key={i} className="text-center p-1.5 rounded-lg bg-primary-foreground/5">
                        <div className={`w-2.5 h-2.5 rounded-full mx-auto mb-1 ${d.status === "green" ? "bg-success" : d.status === "yellow" ? "bg-gold" : "bg-accent"}`} />
                        <p className="text-[8px] font-bold">{d.name}</p>
                        <p className="text-[7px] opacity-40">{d.cases} cases</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="col-span-2 space-y-3">
                <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-3">
                  <p className="text-[10px] font-bold opacity-80 mb-2 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> AI Predicted Hotspots — Next 48hrs
                  </p>
                  {[
                    { area: "GT Road Corridor, Moga", risk: "92%", type: "Supply Route" },
                    { area: "Industrial Area, Ferozepur", risk: "87%", type: "Distribution" },
                    { area: "Border Zone, Pathankot", risk: "85%", type: "Smuggling" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-primary-foreground/5 mb-1.5 last:mb-0">
                      <div>
                        <p className="text-[9px] font-bold">{p.area}</p>
                        <p className="text-[7px] opacity-40">{p.type}</p>
                      </div>
                      <span className="text-[10px] font-black text-accent">{p.risk}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-3">
                  <p className="text-[10px] font-bold opacity-80 mb-2">📹 CCTV Integration Status</p>
                  <div className="space-y-2">
                    {[
                      { label: "Connected", val: "2,412", pct: 92 },
                      { label: "AI Active", val: "1,856", pct: 77 },
                      { label: "Alert-Enabled", val: "1,200", pct: 50 },
                    ].map((c, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[9px]">
                          <span className="opacity-60">{c.label}</span>
                          <span className="font-bold">{c.val}</span>
                        </div>
                        <div className="h-1 rounded-full bg-primary-foreground/10">
                          <div className="h-full rounded-full bg-success/70" style={{ width: `${c.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
