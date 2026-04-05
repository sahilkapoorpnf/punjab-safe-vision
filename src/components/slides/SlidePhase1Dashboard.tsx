import { MapPin, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroLudhiana from "@/assets/hero-ludhiana.jpg";

export default function SlidePhase1Dashboard() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="floating-shape w-16 h-16 bg-trust-blue top-32 right-8" style={{ animationDelay: "2s" }} />

      <div className="space-y-8 relative z-10">
        <div>
          <span className="badge-pill badge-blue mb-4">Phase 1 — Admin Dashboard</span>
          <h2 className="slide-title text-3xl md:text-4xl text-foreground mt-4">
            Command Center Dashboard
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        {/* Dashboard mockup */}
        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="font-bold text-sm text-foreground">NashaMukt — Admin Panel</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="badge-pill badge-success">Live</span>
              Ludhiana District
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {/* Map area with real image */}
            <div className="md:col-span-2 border-r border-border relative min-h-[320px] overflow-hidden">
              <img src={heroLudhiana} alt="Ludhiana map view" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-b from-card/40 to-card/60" />
              <div className="relative p-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Live Heatmap — Ludhiana
                </p>
                <div className="relative w-full h-56 rounded-xl bg-secondary/30 backdrop-blur-sm overflow-hidden border border-border">
                  <div className="heatmap-dot heatmap-red w-12 h-12" style={{ top: "20%", left: "30%" }} />
                  <div className="heatmap-dot heatmap-red w-16 h-16" style={{ top: "45%", left: "55%" }} />
                  <div className="heatmap-dot heatmap-yellow w-10 h-10" style={{ top: "60%", left: "25%" }} />
                  <div className="heatmap-dot heatmap-yellow w-8 h-8" style={{ top: "30%", left: "70%" }} />
                  <div className="heatmap-dot heatmap-green w-8 h-8" style={{ top: "75%", left: "65%" }} />
                  <MapPin className="absolute w-4 h-4 text-accent" style={{ top: "22%", left: "32%" }} />
                  <MapPin className="absolute w-4 h-4 text-accent" style={{ top: "47%", left: "57%" }} />
                  <MapPin className="absolute w-4 h-4 text-gold" style={{ top: "62%", left: "27%" }} />
                </div>
              </div>
            </div>

            {/* Case list */}
            <div className="p-4 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Live Feed
              </p>
              {[
                { id: "RPT-5012", cat: "Drug Selling", status: "New", icon: AlertTriangle, color: "text-accent" },
                { id: "RPT-5011", cat: "Suspicious", status: "Assigned", icon: Clock, color: "text-gold" },
                { id: "RPT-5010", cat: "Consumption", status: "Resolved", icon: CheckCircle2, color: "text-success" },
                { id: "RPT-5009", cat: "Drug Selling", status: "New", icon: AlertTriangle, color: "text-accent" },
                { id: "RPT-5008", cat: "Suspicious", status: "Assigned", icon: Clock, color: "text-gold" },
              ].map((c, i) => (
                <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border flex items-center justify-between text-xs hover:bg-secondary/80 transition-colors">
                  <div className="flex items-center gap-2">
                    <c.icon className={`w-3.5 h-3.5 ${c.color}`} />
                    <div>
                      <p className="font-semibold text-foreground">{c.id}</p>
                      <p className="text-muted-foreground">{c.cat}</p>
                    </div>
                  </div>
                  <span className={`font-medium ${c.color}`}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-4 border-t border-border">
            {[
              { label: "Total Reports", value: "1,247", color: "text-primary" },
              { label: "Active Cases", value: "89", color: "text-accent" },
              { label: "Resolved", value: "1,102", color: "text-success" },
              { label: "Red Zones", value: "12", color: "text-accent" },
            ].map((s, i) => (
              <div key={i} className="text-center py-4 border-r last:border-r-0 border-border">
                <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
