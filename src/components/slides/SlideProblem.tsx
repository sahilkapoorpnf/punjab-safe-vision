import { AlertTriangle, Clock, EyeOff, Database } from "lucide-react";
import SlideLayout from "./SlideLayout";

const problems = [
  { icon: AlertTriangle, title: "Widespread Drug Abuse", desc: "Punjab faces one of India's most severe drug crises, affecting youth, families, and communities across the state.", color: "text-accent" },
  { icon: EyeOff, title: "Fear of Reporting", desc: "Citizens are afraid to report drug activity due to fear of retaliation and lack of anonymous channels.", color: "text-gold" },
  { icon: Database, title: "No Centralized Intelligence", desc: "Law enforcement lacks a unified system to aggregate, analyze, and act on drug-related intelligence.", color: "text-trust-blue" },
  { icon: Clock, title: "Delayed Response", desc: "Without real-time data, police action is reactive rather than preventive — critical time is lost.", color: "text-crimson" },
];

export default function SlideProblem() {
  return (
    <SlideLayout>
      <div className="space-y-10">
        <div>
          <span className="badge-pill badge-crimson mb-4">Section 1</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Punjab Needs a Digital
            <br />
            <span className="text-accent">Weapon Against Drugs</span>
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="stat-card flex gap-4">
              <div className={`${p.color} mt-1`}>
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
