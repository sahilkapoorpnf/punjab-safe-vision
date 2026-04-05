import { Rocket, TrendingUp, Globe } from "lucide-react";
import SlideLayout from "./SlideLayout";

const phases = [
  {
    phase: "Phase 1",
    title: "Ludhiana Pilot",
    duration: "30–40 Days",
    items: ["Citizen Mobile App", "Admin Dashboard", "Basic AI Heatmaps", "Report Tracking"],
    color: "bg-primary",
    dotColor: "border-primary",
    icon: Rocket,
    gradient: "from-primary/10 to-transparent",
  },
  {
    phase: "Phase 2",
    title: "Multi-District Expansion",
    duration: "3–4 Months",
    items: ["Advanced AI Engine", "Gamification System", "District Comparison", "Data Intelligence"],
    color: "bg-gold",
    dotColor: "border-gold",
    icon: TrendingUp,
    gradient: "from-gold/10 to-transparent",
  },
  {
    phase: "Phase 3",
    title: "Punjab-Wide Grid",
    duration: "6–8 Months",
    items: ["Full State Coverage", "Predictive AI", "CCTV Integration", "Command Center"],
    color: "bg-accent",
    dotColor: "border-accent",
    icon: Globe,
    gradient: "from-accent/10 to-transparent",
  },
];

export default function SlideRoadmap() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="floating-shape w-28 h-28 bg-primary top-20 right-16" />
      <div className="floating-shape w-16 h-16 bg-gold bottom-40 left-24" style={{ animationDelay: "3s" }} />

      <div className="space-y-10 relative z-10">
        <div>
          <span className="badge-pill badge-blue mb-4">Section 10</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Implementation Roadmap
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {phases.map((p, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 ${p.dotColor} bg-card z-10`} />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className={`stat-card-hover bg-gradient-to-br ${p.gradient}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-primary-foreground ${p.color}`}>
                        {p.phase}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">{p.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${p.color}/10 flex items-center justify-center`}>
                        <p.icon className={`w-5 h-5 ${p.color === "bg-primary" ? "text-primary" : p.color === "bg-gold" ? "text-gold" : "text-accent"}`} />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{p.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {p.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full ${p.color}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
