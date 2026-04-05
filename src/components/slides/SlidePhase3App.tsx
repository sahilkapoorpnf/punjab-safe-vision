import { Shield, Bell, MapPin, Award, Flame, TrendingUp } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroPunjabMap from "@/assets/hero-punjab-map.jpg";

export default function SlidePhase3App() {
  return (
    <SlideLayout dark className="slide-gradient-navy relative overflow-hidden">
      <img src={heroPunjabMap} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 grid-pattern-dark" />
      <div className="glow-orb w-64 h-64 bg-primary top-0 right-0" />
      <div className="glow-orb w-48 h-48 bg-trust-blue bottom-20 left-10 animate-pulse-glow" />

      <div className="space-y-8 relative z-10">
        <div>
          <span className="badge-pill bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 mb-4">
            Phase 3 — Citizen App v3
          </span>
          <h2 className="slide-title text-3xl md:text-4xl mt-4">
            Punjab-Wide Citizen Platform
          </h2>
          <p className="opacity-70 mt-2">Full-featured app empowering every citizen across Punjab</p>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Screen 1: State-wide Dashboard */}
          <div className="flex flex-col items-center gap-4">
            <div className="mockup-phone" style={{ borderColor: "hsl(220 40% 35%)" }}>
              <div className="mockup-phone-screen p-4 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-sm text-foreground">Punjab Dashboard</p>
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mb-3 text-center">
                  <p className="text-[9px] text-primary font-bold uppercase tracking-wider">Punjab Drug-Free Index</p>
                  <p className="text-3xl font-black text-primary mt-1">78.4%</p>
                  <p className="text-[8px] text-success font-semibold">↑ 12.3% from last quarter</p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { val: "23", label: "Districts Active" },
                    { val: "47%", label: "Crime Down" },
                    { val: "4.2L", label: "Citizens Active" },
                    { val: "98%", label: "Report Rate" },
                  ].map((s, i) => (
                    <div key={i} className="p-2 rounded-lg bg-secondary text-center">
                      <p className="text-sm font-black text-foreground">{s.val}</p>
                      <p className="text-[7px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[9px] font-bold text-muted-foreground uppercase mb-2">My District — Ludhiana</p>
                <div className="p-2 rounded-lg bg-success/10 border border-success/20 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <div>
                    <p className="text-[9px] font-bold text-foreground">Safe Zone</p>
                    <p className="text-[7px] text-muted-foreground">No active alerts in your area</p>
                  </div>
                </div>

                <div className="mt-auto pt-3">
                  <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-[10px] font-bold shadow-lg shadow-primary/20">
                    🚨 Report Anonymously
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold">State Dashboard</p>
            <p className="text-xs opacity-60 text-center">Punjab-wide stats & personal district status</p>
          </div>

          {/* Screen 2: Advanced Reporting */}
          <div className="flex flex-col items-center gap-4">
            <div className="mockup-phone" style={{ borderColor: "hsl(220 40% 35%)" }}>
              <div className="mockup-phone-screen p-4 flex flex-col">
                <p className="font-bold text-sm text-foreground mb-3">Smart Report</p>

                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-4 h-4 text-accent" />
                    <p className="text-[10px] font-bold text-foreground">AI-Assisted Reporting</p>
                  </div>
                  <p className="text-[8px] text-muted-foreground">Our AI will analyze your report for patterns and match with existing intelligence</p>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <p className="text-[8px] text-muted-foreground mb-1">Category</p>
                    <div className="flex gap-1 flex-wrap">
                      {["Drug Selling", "Consumption", "Supply Route", "Lab", "Smuggling"].map((c, i) => (
                        <span key={i} className={`text-[7px] px-2 py-0.5 rounded-full ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary">
                    <p className="text-[8px] text-muted-foreground mb-1">Evidence</p>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="aspect-square rounded bg-muted flex items-center justify-center text-[8px] text-muted-foreground">📷</div>
                      <div className="aspect-square rounded bg-muted flex items-center justify-center text-[8px] text-muted-foreground">🎥</div>
                      <div className="aspect-square rounded bg-muted flex items-center justify-center text-[8px] text-muted-foreground">🎤</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-primary" />
                    <div>
                      <p className="text-[8px] font-bold text-foreground">GPS Auto-captured</p>
                      <p className="text-[7px] text-muted-foreground">30.9°N, 75.8°E — Ludhiana</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-accent text-accent-foreground text-[10px] font-bold mt-auto shadow-lg shadow-accent/20">
                  Submit Secure Report →
                </button>
                <p className="text-[7px] text-center text-muted-foreground mt-1">🔒 End-to-end encrypted • Fully anonymous</p>
              </div>
            </div>
            <p className="text-sm font-semibold">AI-Assisted Reporting</p>
            <p className="text-xs opacity-60 text-center">Enhanced categories & AI analysis</p>
          </div>

          {/* Screen 3: Rewards & Recognition */}
          <div className="flex flex-col items-center gap-4">
            <div className="mockup-phone" style={{ borderColor: "hsl(220 40% 35%)" }}>
              <div className="mockup-phone-screen p-4 flex flex-col">
                <p className="font-bold text-sm text-foreground mb-3">Rewards Hub</p>

                <div className="text-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-2 shadow-lg shadow-gold/20">
                    <Award className="w-7 h-7 text-gold" />
                  </div>
                  <p className="font-bold text-foreground text-sm">Punjab Hero — Level 5</p>
                  <p className="text-[9px] text-muted-foreground">4,850 Points • Top 1%</p>
                  <div className="w-full h-2 rounded-full bg-secondary mt-2">
                    <div className="h-full w-[85%] rounded-full bg-gold" />
                  </div>
                  <p className="text-[7px] text-muted-foreground mt-1">150 pts to Level 6</p>
                </div>

                <p className="text-[9px] font-bold text-muted-foreground uppercase mb-2">Unlocked Rewards</p>
                {[
                  { icon: "🏆", title: "CM Recognition Certificate", desc: "Verified contributor" },
                  { icon: "🎖️", title: "District Guardian Badge", desc: "50+ verified reports" },
                  { icon: "⭐", title: "State Leaderboard #3", desc: "All-time ranking" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gold/5 border border-gold/10 mb-1.5">
                    <span className="text-lg">{r.icon}</span>
                    <div>
                      <p className="text-[9px] font-bold text-foreground">{r.title}</p>
                      <p className="text-[7px] text-muted-foreground">{r.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-auto p-2 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-[9px] font-bold text-foreground">State Leaderboard</p>
                    <p className="text-[7px] text-muted-foreground">You're #3 across all Punjab</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold">Rewards & Recognition</p>
            <p className="text-xs opacity-60 text-center">CM-level rewards & achievements</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
