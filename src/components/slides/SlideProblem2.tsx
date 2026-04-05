import SlideLayout from "./SlideLayout";
import heroProblem from "@/assets/hero-problem.jpg";

export default function SlideProblem2() {
  return (
    <SlideLayout dark className="slide-gradient-crimson relative overflow-hidden">
      {/* Background image layer */}
      <img src={heroProblem} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark" />

      {/* Glow orbs */}
      <div className="glow-orb w-80 h-80 bg-accent top-10 left-10" />
      <div className="glow-orb w-64 h-64 bg-gold bottom-20 right-20 animate-pulse-glow" />

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-10 relative z-10">
        <h2 className="slide-title text-4xl md:text-6xl leading-tight max-w-4xl">
          "Every day without action,
          <br />
          Punjab loses more of its youth."
        </h2>
        <div className="slide-accent-bar w-32" />

        {/* Heatmap visualization */}
        <div className="relative w-full max-w-lg h-64 rounded-2xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-widest opacity-40 absolute top-4 left-4">
            Drug Activity Hotspots — Punjab
          </p>
          <div className="heatmap-dot heatmap-red w-16 h-16" style={{ top: "30%", left: "25%" }} />
          <div className="heatmap-dot heatmap-red w-20 h-20" style={{ top: "40%", left: "55%" }} />
          <div className="heatmap-dot heatmap-yellow w-12 h-12" style={{ top: "60%", left: "35%" }} />
          <div className="heatmap-dot heatmap-yellow w-14 h-14" style={{ top: "25%", left: "70%" }} />
          <div className="heatmap-dot heatmap-red w-10 h-10" style={{ top: "55%", left: "65%" }} />
          <div className="heatmap-dot heatmap-green w-8 h-8" style={{ top: "70%", left: "80%" }} />
          <div className="heatmap-dot heatmap-yellow w-10 h-10" style={{ top: "45%", left: "15%" }} />

          <div className="absolute bottom-4 right-4 flex items-center gap-3 text-xs opacity-60">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-accent/60" /> High</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-gold/60" /> Medium</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-success/60" /> Low</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-4">
          {[
            { val: "73%", label: "Youth Affected" },
            { val: "10K+", label: "Annual Cases" },
            { val: "0", label: "Unified Systems" },
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
              <p className="text-4xl font-black">{s.val}</p>
              <p className="text-sm opacity-60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
