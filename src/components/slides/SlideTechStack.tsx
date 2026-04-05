import { Smartphone, Server, Brain, Database, Cloud } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroTechstack from "@/assets/hero-techstack.jpg";

const stack = [
  { icon: Smartphone, label: "Mobile App", tech: "Flutter", desc: "Cross-platform (Android + iOS)" },
  { icon: Server, label: "Backend", tech: "Laravel / Node.js", desc: "Scalable REST APIs" },
  { icon: Brain, label: "AI Engine", tech: "Python + ML", desc: "Pattern recognition & prediction" },
  { icon: Database, label: "Database", tech: "PostgreSQL", desc: "Secure, reliable data storage" },
  { icon: Cloud, label: "Cloud", tech: "India-based", desc: "Compliant, secure infrastructure" },
];

export default function SlideTechStack() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="floating-shape w-20 h-20 bg-primary top-24 right-32" />
      <div className="floating-shape w-14 h-14 bg-trust-blue bottom-60 left-16" style={{ animationDelay: "2s" }} />

      <div className="space-y-10 relative z-10">
        <div>
          <span className="badge-pill badge-blue mb-4">Section 7</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Technology Stack
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src={heroTechstack} alt="Technology stack visualization" className="w-full h-48 md:h-56 object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        </div>

        {/* Architecture diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stack.map((s, i) => (
            <div key={i} className="stat-card-hover text-center space-y-3 relative group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              <p className="font-bold text-foreground">{s.tech}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
              {i < stack.length - 1 && (
                <span className="hidden md:block absolute -right-3 top-1/2 text-muted-foreground/40 text-lg">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Architecture block */}
        <div className="stat-card">
          <p className="font-bold text-foreground mb-4">System Architecture</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
            <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold shadow-sm">Citizen App (Flutter)</div>
            <span className="text-muted-foreground">→</span>
            <div className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold shadow-sm">API Gateway</div>
            <span className="text-muted-foreground">→</span>
            <div className="px-4 py-2 rounded-lg bg-navy/10 text-navy font-semibold shadow-sm">AI Engine (Python)</div>
            <span className="text-muted-foreground">→</span>
            <div className="px-4 py-2 rounded-lg bg-success/10 text-success font-semibold shadow-sm">PostgreSQL + Cloud</div>
          </div>
          <div className="text-center mt-3">
            <span className="text-muted-foreground text-xs">↓</span>
            <div className="inline-block px-4 py-2 rounded-lg bg-gold/10 text-gold font-semibold text-sm ml-2 shadow-sm">
              Admin Dashboard (Web)
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
