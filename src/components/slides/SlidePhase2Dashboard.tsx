import { BarChart3, TrendingUp, AlertTriangle, Users, Map, Activity } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlidePhase2Dashboard() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-48 h-48 bg-primary top-10 right-0 opacity-10" />

      <div className="space-y-8 relative z-10">
        <div>
          <span className="badge-pill badge-blue mb-4">Phase 2 — Command Center</span>
          <h2 className="slide-title text-3xl md:text-4xl text-foreground mt-4">
            Multi-District Intelligence Dashboard
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        {/* Dashboard mockup */}
        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-gold" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-xs font-semibold text-muted-foreground ml-2">NashaMukt Punjab — Admin Dashboard v2.0</span>
            </div>
            <span className="text-[10px] text-muted-foreground">Last synced: 2 min ago</span>
          </div>

          <div className="p-5 space-y-5">
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: Map, label: "Active Districts", value: "8", change: "+3 this month", color: "text-primary" },
                { icon: AlertTriangle, label: "Open Cases", value: "342", change: "-12% vs last week", color: "text-accent" },
                { icon: Users, label: "Active Officers", value: "156", change: "92% response rate", color: "text-success" },
                { icon: Activity, label: "AI Alerts Today", value: "47", change: "18 high priority", color: "text-gold" },
              ].map((s, i) => (
                <div key={i} className="stat-card-hover !p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                    <TrendingUp className="w-3 h-3 text-success" />
                  </div>
                  <p className="text-2xl font-black text-foreground">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                  <p className="text-[9px] text-success">{s.change}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* District comparison chart */}
              <div className="col-span-2 stat-card !p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-foreground flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" /> District Performance Comparison
                  </p>
                  <span className="text-[10px] text-muted-foreground">Last 30 days</span>
                </div>
                <div className="flex items-end gap-3 h-32 pt-4">
                  {[
                    { name: "Ludhiana", h: "100%", cases: 89 },
                    { name: "Amritsar", h: "78%", cases: 67 },
                    { name: "Jalandhar", h: "65%", cases: 52 },
                    { name: "Patiala", h: "55%", cases: 44 },
                    { name: "Mohali", h: "45%", cases: 36 },
                    { name: "Bathinda", h: "38%", cases: 28 },
                    { name: "Pathankot", h: "30%", cases: 22 },
                    { name: "Moga", h: "22%", cases: 15 },
                  ].map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[8px] font-bold text-foreground">{d.cases}</span>
                      <div className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary" style={{ height: d.h }} />
                      <span className="text-[7px] text-muted-foreground truncate w-full text-center">{d.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Officer leaderboard */}
              <div className="stat-card !p-4 space-y-3">
                <p className="text-xs font-bold text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-success" /> Top Officers
                </p>
                {[
                  { name: "SHO R. Singh", cases: 34, rate: "96%" },
                  { name: "SI K. Kaur", cases: 28, rate: "93%" },
                  { name: "ASI M. Sharma", cases: 25, rate: "91%" },
                  { name: "SHO P. Kumar", cases: 22, rate: "89%" },
                  { name: "SI A. Gill", cases: 19, rate: "87%" },
                ].map((o, i) => (
                  <div key={i} className="flex items-center justify-between text-[10px] py-1 border-b border-border last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-muted-foreground">#{i + 1}</span>
                      <span className="text-foreground font-medium">{o.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">{o.cases} cases</span>
                      <span className="text-success font-bold">{o.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend analysis row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card !p-4 space-y-3">
                <p className="text-xs font-bold text-foreground">📊 Monthly Trend Analysis</p>
                <div className="flex items-end gap-2 h-20">
                  {[40, 55, 48, 72, 65, 80, 75, 90, 85, 78, 92, 88].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                      <div className="w-full rounded-sm bg-trust-blue/60 hover:bg-trust-blue/80 transition-colors" style={{ height: `${v}%` }} />
                      <span className="text-[6px] text-muted-foreground">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="stat-card !p-4 space-y-3">
                <p className="text-xs font-bold text-foreground">🔥 Hotspot Categories</p>
                <div className="space-y-2">
                  {[
                    { cat: "Drug Selling", pct: 42, color: "bg-accent" },
                    { cat: "Consumption", pct: 31, color: "bg-gold" },
                    { cat: "Suspicious Activity", pct: 18, color: "bg-primary" },
                    { cat: "Other", pct: 9, color: "bg-muted-foreground" },
                  ].map((c, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-muted-foreground">{c.cat}</span>
                        <span className="font-bold text-foreground">{c.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary">
                        <div className={`h-full rounded-full ${c.color} transition-all`} style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
