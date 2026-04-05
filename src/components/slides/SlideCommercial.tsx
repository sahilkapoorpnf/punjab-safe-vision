import { IndianRupee, CheckCircle2, Sparkles } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlideCommercial() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-64 h-64 bg-gold top-10 right-0 opacity-10" />
      <div className="floating-shape w-20 h-20 bg-primary bottom-32 left-10" style={{ animationDelay: "2s" }} />

      <div className="space-y-10 relative z-10">
        <div>
          <span className="badge-pill badge-gold mb-4">Section 11</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Commercial Proposal
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { phase: "Phase 1", title: "Pilot — Ludhiana", price: "₹10 – ₹30 Lakhs", items: ["Citizen App", "Admin Dashboard", "Basic AI", "30-day deployment"], highlight: false, gradient: "from-primary/5" },
            { phase: "Phase 2", title: "Multi-District", price: "₹1.5 – ₹3 Crore", items: ["Advanced AI", "Gamification", "8+ Districts", "Data Intelligence"], highlight: true, gradient: "from-primary/10" },
            { phase: "Phase 3", title: "Full Punjab", price: "₹5 – ₹12 Crore", items: ["State-wide grid", "Predictive AI", "CCTV Integration", "Command Center"], highlight: false, gradient: "from-accent/5" },
          ].map((tier, i) => (
            <div key={i} className={`stat-card-hover space-y-4 relative bg-gradient-to-b ${tier.gradient} to-transparent ${tier.highlight ? "ring-2 ring-primary shadow-lg shadow-primary/10" : ""}`}>
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-pill badge-blue text-[10px] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Recommended
                </span>
              )}
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{tier.phase}</p>
              <h3 className="font-bold text-lg text-foreground">{tier.title}</h3>
              <div className="flex items-baseline gap-1">
                <IndianRupee className="w-5 h-5 text-primary" />
                <p className="text-2xl font-black text-primary">{tier.price}</p>
              </div>
              <ul className="space-y-2 pt-2">
                {tier.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="stat-card text-center space-y-3 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Total Project Value</p>
          <p className="text-4xl font-black text-primary">₹7 – ₹15 Crore</p>
        </div>

        <div className="p-5 rounded-xl bg-gold/5 border border-gold/20">
          <p className="font-bold text-foreground text-sm mb-1">💡 Optional: Hybrid SaaS Model</p>
          <p className="text-sm text-muted-foreground">
            Lower upfront cost with annual maintenance of ₹1–2 Crore. Ideal for phased budget allocation.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
