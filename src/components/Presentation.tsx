import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideTitleCover from "./slides/SlideTitleCover";
import SlideProblem from "./slides/SlideProblem";
import SlideProblem2 from "./slides/SlideProblem2";
import SlideLudhiana from "./slides/SlideLudhiana";
import SlideSolution from "./slides/SlideSolution";
import SlidePhase1Title from "./slides/SlidePhase1Title";
import SlidePhase1App from "./slides/SlidePhase1App";
import SlidePhase1Dashboard from "./slides/SlidePhase1Dashboard";
import SlidePhase2 from "./slides/SlidePhase2";
import SlidePhase2Gamification from "./slides/SlidePhase2Gamification";
import SlidePhase3 from "./slides/SlidePhase3";
import SlideTechStack from "./slides/SlideTechStack";
import SlideSecurity from "./slides/SlideSecurity";
import SlideImpact from "./slides/SlideImpact";
import SlideRoadmap from "./slides/SlideRoadmap";
import SlideCommercial from "./slides/SlideCommercial";
import SlideClosing from "./slides/SlideClosing";

const slides = [
  SlideTitleCover,
  SlideProblem,
  SlideProblem2,
  SlideLudhiana,
  SlideSolution,
  SlidePhase1Title,
  SlidePhase1App,
  SlidePhase1Dashboard,
  SlidePhase2,
  SlidePhase2Gamification,
  SlidePhase3,
  SlideTechStack,
  SlideSecurity,
  SlideImpact,
  SlideRoadmap,
  SlideCommercial,
  SlideClosing,
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);

  const goTo = (i: number) => {
    if (i >= 0 && i < slides.length) setCurrent(i);
  };

  const SlideComponent = slides[current];

  return (
    <div className="slide-container">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full min-h-screen"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all disabled:opacity-30 hover:bg-secondary text-foreground"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === slides.length - 1}
            className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all disabled:opacity-30 hover:bg-secondary text-foreground"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center pb-2 text-xs text-muted-foreground">
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
