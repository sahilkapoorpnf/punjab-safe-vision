import { Smartphone, Brain, BarChart3, ArrowRight } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroSolution from "@/assets/hero-solution.jpg";

export default function SlideSolution() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-60 h-60 bg-primary top-20 right-0 opacity-10" />
      <div className="floating-shape w-16 h-16 bg-accent bottom-40 left-20" style={{ animationDelay: "4s" }} />

      <div className="space-y-10 relative z-10">
        <div>
          <span className="badge-pill badge-blue mb-4">Section 3</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Solution Overview
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            NashaMukt Punjab — AI Surveillance & Citizen Reporting System
          </p>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src={heroSolution} alt="AI neural network connecting citizens to police" className="w-full h-48 md:h-56 object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-transparent to-card/60" />
        </div>

        {/* System Architecture Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 py-4">
          <div className="flow-node bg-primary text-primary-foreground flex items-center gap-2 shadow-lg shadow-primary/20">
            <Smartphone className="w-5 h-5" /> Citizens Report
          </div>
          <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
          <div className="flow-node bg-accent text-accent-foreground flex items-center gap-2 shadow-lg shadow-accent/20">
            <Brain className="w-5 h-5" /> AI Engine Analyzes
          </div>
          <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
          <div className="flow-node bg-navy text-primary-foreground flex items-center gap-2 shadow-lg shadow-navy/20">
            <BarChart3 className="w-5 h-5" /> Police Act
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Smartphone, title: "Anonymous Reporting", desc: "Citizens report drug activity anonymously — no login required. Upload photos, videos with auto GPS capture.", color: "bg-primary/10", iconColor: "text-primary" },
            { icon: Brain, title: "AI Pattern Analysis", desc: "Machine learning identifies hotspots, detects duplicate reports, and prioritizes cases automatically.", color: "bg-accent/10", iconColor: "text-accent" },
            { icon: BarChart3, title: "Real-time Intelligence", desc: "Police receive actionable intelligence with live dashboards, heatmaps, and case management tools.", color: "bg-navy/10", iconColor: "text-navy" },
          ].map((item, i) => (
            <div key={i} className="stat-card-hover text-center space-y-3 group">
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto transition-transform group-hover:scale-110`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
