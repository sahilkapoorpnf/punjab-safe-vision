import { Smartphone, Brain, BarChart3, ArrowRight } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlideSolution() {
  return (
    <SlideLayout>
      <div className="space-y-10">
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

        {/* System Architecture Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 py-8">
          <div className="flow-node bg-primary text-primary-foreground flex items-center gap-2">
            <Smartphone className="w-5 h-5" /> Citizens Report
          </div>
          <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
          <div className="flow-node bg-accent text-accent-foreground flex items-center gap-2">
            <Brain className="w-5 h-5" /> AI Engine Analyzes
          </div>
          <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
          <div className="flow-node bg-navy text-primary-foreground flex items-center gap-2">
            <BarChart3 className="w-5 h-5" /> Police Act
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="stat-card text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Smartphone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">Anonymous Reporting</h3>
            <p className="text-sm text-muted-foreground">
              Citizens report drug activity anonymously — no login required. Upload photos, videos with auto GPS capture.
            </p>
          </div>
          <div className="stat-card text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
              <Brain className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-bold text-foreground">AI Pattern Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Machine learning identifies hotspots, detects duplicate reports, and prioritizes cases automatically.
            </p>
          </div>
          <div className="stat-card text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto">
              <BarChart3 className="w-7 h-7 text-navy" />
            </div>
            <h3 className="font-bold text-foreground">Real-time Intelligence</h3>
            <p className="text-sm text-muted-foreground">
              Police receive actionable intelligence with live dashboards, heatmaps, and case management tools.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
