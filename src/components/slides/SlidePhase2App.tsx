import { Bell, Shield, MapPin, TrendingUp, Star } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlidePhase2App() {
  return (
    <SlideLayout>
      <div className="space-y-8">
        <div>
          <span className="badge-pill badge-gold mb-4">Phase 2 — Citizen App v2</span>
          <h2 className="slide-title text-3xl md:text-4xl text-foreground mt-4">
            Enhanced Citizen Experience
          </h2>
          <p className="text-muted-foreground mt-2">Smarter reporting, community engagement, and real-time safety insights</p>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Screen 1: Smart Alerts */}
          <div className="flex flex-col items-center gap-4">
            <div className="mockup-phone">
              <div className="mockup-phone-screen p-4 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-sm text-foreground">Safety Alerts</p>
                  <Bell className="w-4 h-4 text-accent" />
                </div>
                {[
                  { title: "High Activity Zone", area: "Civil Lines, Ludhiana", time: "2 min ago", severity: "high" },
                  { title: "New Hotspot Detected", area: "GT Road, Amritsar", time: "15 min ago", severity: "medium" },
                  { title: "Zone Cleared", area: "Model Town, Jalandhar", time: "1 hr ago", severity: "low" },
                  { title: "Patrol Deployed", area: "Sarabha Nagar", time: "2 hr ago", severity: "low" },
                ].map((a, i) => (
                  <div key={i} className={`mb-2 p-2.5 rounded-xl border text-left ${a.severity === "high" ? "bg-accent/5 border-accent/20" : a.severity === "medium" ? "bg-gold/5 border-gold/20" : "bg-success/5 border-success/20"}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-foreground">{a.title}</p>
                        <p className="text-[8px] text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="w-2 h-2" /> {a.area}
                        </p>
                      </div>
                      <span className="text-[7px] text-muted-foreground">{a.time}</span>
                    </div>
                  </div>
                ))}
                <div className="mt-auto p-2 rounded-lg bg-primary/10 text-center">
                  <p className="text-[9px] text-primary font-semibold">🛡️ Your area is safe — No alerts nearby</p>
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground">Smart Safety Alerts</p>
            <p className="text-xs text-muted-foreground text-center">Real-time zone alerts & safety status pushed to citizens</p>
          </div>

          {/* Screen 2: Community Impact */}
          <div className="flex flex-col items-center gap-4">
            <div className="mockup-phone">
              <div className="mockup-phone-screen p-4 flex flex-col">
                <p className="font-bold text-sm text-foreground mb-3">Community Impact</p>
                <div className="text-center space-y-2 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-bold text-foreground text-sm">Your Contribution</p>
                  <p className="text-[10px] text-muted-foreground">Making Punjab Safer Together</p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { val: "12", label: "Reports Filed" },
                    { val: "8", label: "Actions Taken" },
                    { val: "3", label: "Zones Cleared" },
                    { val: "67%", label: "Success Rate" },
                  ].map((s, i) => (
                    <div key={i} className="p-2 rounded-lg bg-secondary text-center">
                      <p className="text-lg font-black text-primary">{s.val}</p>
                      <p className="text-[8px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="p-2 rounded-lg bg-gold/10 border border-gold/20">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-gold" />
                    <div>
                      <p className="text-[9px] font-bold text-foreground">Top 5% Contributor</p>
                      <p className="text-[7px] text-muted-foreground">In Ludhiana District</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-1.5">
                  <p className="text-[9px] font-bold text-muted-foreground uppercase">Recent Activity</p>
                  {["Drug selling reported — Action Taken ✓", "Suspicious activity — Under Review", "Consumption spot — Zone Cleared ✓"].map((a, i) => (
                    <div key={i} className="text-[8px] text-muted-foreground p-1.5 rounded bg-secondary">
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground">Community Impact</p>
            <p className="text-xs text-muted-foreground text-center">Track personal impact and contributions to the mission</p>
          </div>

          {/* Screen 3: Area Safety Map */}
          <div className="flex flex-col items-center gap-4">
            <div className="mockup-phone">
              <div className="mockup-phone-screen p-3 flex flex-col">
                <p className="font-bold text-sm text-foreground mb-2">Area Safety Map</p>
                {/* Map area */}
                <div className="relative flex-1 rounded-xl bg-secondary overflow-hidden mb-3" style={{ minHeight: "220px" }}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 grid-rows-6 h-full w-full gap-px">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="bg-border" />
                      ))}
                    </div>
                  </div>
                  {/* Hotspot markers */}
                  <div className="heatmap-dot heatmap-red w-10 h-10" style={{ top: "20%", left: "30%" }} />
                  <div className="heatmap-dot heatmap-yellow w-8 h-8" style={{ top: "50%", left: "60%" }} />
                  <div className="heatmap-dot heatmap-green w-8 h-8" style={{ top: "70%", left: "25%" }} />
                  <div className="heatmap-dot heatmap-red w-6 h-6" style={{ top: "35%", left: "70%" }} />
                  <div className="heatmap-dot heatmap-green w-10 h-10" style={{ top: "60%", left: "45%" }} />
                  {/* User location */}
                  <div className="absolute w-4 h-4 rounded-full bg-primary border-2 border-primary-foreground shadow-lg" style={{ top: "45%", left: "40%" }} />
                </div>
                {/* Legend */}
                <div className="flex items-center justify-center gap-4 mb-2">
                  {[
                    { color: "bg-accent", label: "High Risk" },
                    { color: "bg-gold", label: "Caution" },
                    { color: "bg-success", label: "Safe" },
                  ].map((l, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${l.color}`} />
                      <span className="text-[7px] text-muted-foreground">{l.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground text-[9px] font-bold">
                    <TrendingUp className="w-3 h-3 inline mr-1" />Report Here
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-secondary text-foreground text-[9px] font-bold">
                    View Trends
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground">Area Safety Map</p>
            <p className="text-xs text-muted-foreground text-center">Live heatmap showing zone safety levels near the citizen</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
