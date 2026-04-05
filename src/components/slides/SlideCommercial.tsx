import { IndianRupee, CheckCircle2 } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlideCommercial() {
  return (
    <SlideLayout>
      <div className="space-y-10">
        <div>
          <span className="badge-pill badge-gold mb-4">Section 11</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Commercial Proposal
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { phase: "Phase 1", title: "Pilot — Ludhiana", price: "₹10 – ₹30 Lakhs", items: ["Citizen App", "Admin Dashboard", "Basic AI", "30-day deployment"], highlight: false },
            { phase: "Phase 2", title: "Multi-District", price: "₹1.5 – ₹3 Crore", items: ["Advanced AI", "Gamification", "8+ Districts", "Data Intelligence"], highlight: true },
            { phase: "Phase 3", title: "Full Punjab", price: "₹5 – ₹12 Crore", items: ["State-wide grid", "Predictive AI", "CCTV Integration", "Command Center"], highlight: false },
          ].map((tier, i) => (
            <div key={i} className={`stat-card space-y-4 relative ${tier.highlight ? "ring-2 ring-primary" : ""}`}>
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-pill badge-blue text-[10px]">
                  Recommended
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

        <div className="stat-card text-center space-y-3">
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
