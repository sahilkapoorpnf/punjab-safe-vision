import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, PresentationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlideSukhuVision from "./slides/SlideSukhuVision";
import SlideGovernmentAction from "./slides/SlideGovernmentAction";
import SlideResultsScorecard from "./slides/SlideResultsScorecard";
import SlideNewsEvidence from "./slides/SlideNewsEvidence";
import SlideDigitalBridge from "./slides/SlideDigitalBridge";
import SlideTitleCover from "./slides/SlideTitleCover";
import SlideProblem from "./slides/SlideProblem";
import SlideProblem2 from "./slides/SlideProblem2";
import SlideUna from "./slides/SlideUna";
import SlideSolution from "./slides/SlideSolution";
import SlidePhase1Title from "./slides/SlidePhase1Title";
import SlidePhase1App from "./slides/SlidePhase1App";
import SlidePhase1Dashboard from "./slides/SlidePhase1Dashboard";
import SlidePhase2 from "./slides/SlidePhase2";
import SlidePhase2Dashboard from "./slides/SlidePhase2Dashboard";
import SlidePhase2App from "./slides/SlidePhase2App";
import SlidePhase2Gamification from "./slides/SlidePhase2Gamification";
import SlidePhase3 from "./slides/SlidePhase3";
import SlidePhase3Dashboard from "./slides/SlidePhase3Dashboard";
import SlidePhase3App from "./slides/SlidePhase3App";
import SlideTechStack from "./slides/SlideTechStack";
import SlideSecurity from "./slides/SlideSecurity";
import SlideImpact from "./slides/SlideImpact";
import SlideRoadmap from "./slides/SlideRoadmap";
import SlideCommercial from "./slides/SlideCommercial";
import SlideClosing from "./slides/SlideClosing";

const slides = [
  SlideSukhuVision,
  SlideGovernmentAction,
  SlideResultsScorecard,
  SlideNewsEvidence,
  SlideDigitalBridge,
  SlideTitleCover,
  SlideProblem,
  SlideProblem2,
  SlideUna,
  SlideSolution,
  SlidePhase1Title,
  SlidePhase1App,
  SlidePhase1Dashboard,
  SlidePhase2,
  SlidePhase2Dashboard,
  SlidePhase2App,
  SlidePhase2Gamification,
  SlidePhase3,
  SlidePhase3Dashboard,
  SlidePhase3App,
  SlideTechStack,
  SlideSecurity,
  SlideImpact,
  SlideRoadmap,
  // SlideCommercial, // hidden
  SlideClosing,
];

export default function Presentation() {
  const getInitialSlide = () => {
    const value = Number(new URLSearchParams(window.location.search).get("slide"));
    return Number.isInteger(value) && value >= 1 && value <= slides.length ? value - 1 : 0;
  };

  const [current, setCurrent] = useState(getInitialSlide);

  const goTo = useCallback((i: number) => {
    if (i < 0 || i >= slides.length) return;
    setCurrent(i);
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(i + 1));
    window.history.replaceState({}, "", url);
  }, []);

  useEffect(() => {
    document.title = `${current + 1}/${slides.length} — NashaMukt Himachal`;
  }, [current]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") goTo(current + 1);
      if (event.key === "ArrowLeft") goTo(current - 1);
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(slides.length - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current, goTo]);

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
          <Button
            variant="ghost"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>

          <div className="hidden max-w-[55vw] items-center gap-1.5 overflow-hidden sm:flex">
            {slides.map((_, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-5 w-5 shrink-0 rounded-full p-0"
              >
                <span className={`block h-2.5 w-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"}`} />
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-muted-foreground sm:hidden">
            <PresentationIcon className="h-4 w-4" /> {current + 1} / {slides.length}
          </div>

          <Button
            variant="ghost"
            onClick={() => goTo(current + 1)}
            disabled={current === slides.length - 1}
            className="gap-1"
          >
            Next <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-center pb-2 text-xs text-muted-foreground">
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
