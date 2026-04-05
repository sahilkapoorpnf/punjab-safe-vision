import { AlertTriangle, Clock, EyeOff, Database } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroProblem from "@/assets/hero-problem.jpg";

const problems = [
  { icon: AlertTriangle, title: "Widespread Drug Abuse", desc: "Punjab faces one of India's most severe drug crises, affecting youth, families, and communities across the state.", color: "text-accent" },
  { icon: EyeOff, title: "Fear of Reporting", desc: "Citizens are afraid to report drug activity due to fear of retaliation and lack of anonymous channels.", color: "text-gold" },
  { icon: Database, title: "No Centralized Intelligence", desc: "Law enforcement lacks a unified system to aggregate, analyze, and act on drug-related intelligence.", color: "text-trust-blue" },
  { icon: Clock, title: "Delayed Response", desc: "Without real-time data, police action is reactive rather than preventive — critical time is lost.", color: "text-crimson" },
];

export default function SlideProblem() {
  return (
    <SlideLayout className="relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating shapes */}
      <div className="floating-shape w-32 h-32 bg-accent top-20 right-10" />
      <div className="floating-shape w-20 h-20 bg-primary bottom-40 left-10" style={{ animationDelay: "3s" }} />

      <div className="space-y-10 relative z-10">
        <div>
          <span className="badge-pill badge-crimson mb-4">Section 1</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Punjab Needs a Digital
            <br />
            <span className="text-accent">Weapon Against Drugs</span>
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src={heroProblem} alt="Drug crisis visualization" className="w-full h-48 md:h-64 object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="text-sm font-bold text-foreground">The drug crisis demands immediate technological intervention</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="stat-card-hover flex gap-4 group">
              <div className={`${p.color} mt-1 transition-transform group-hover:scale-110`}>
                <p.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
