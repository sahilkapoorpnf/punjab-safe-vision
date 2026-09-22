import { ReactNode } from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";

interface MobileFrameProps {
  children: ReactNode;
  /** Optional label shown under the phone */
  caption?: string;
}

/**
 * MobileFrame — renders children inside an iPhone 16 Pro Max style
 * titanium chassis so every citizen-app screen looks like a real device.
 * Proportions follow the 16 Pro Max: 6.9" display, ultra-thin bezels,
 * Dynamic Island, grade-5 titanium band with action/volume buttons.
 */
export default function MobileFrame({ children, caption }: MobileFrameProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-primary/90 to-accent/80 flex flex-col items-center justify-center py-6 px-3 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/30 blur-3xl pointer-events-none" />

      {/* iPhone 16 Pro Max chassis */}
      <div className="relative z-10">
        <div className="relative mx-auto w-[400px] max-w-[95vw] rounded-[3.6rem] bg-gradient-to-b from-neutral-400 via-neutral-700 to-neutral-500 p-[2.5px] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
          {/* Titanium side buttons — action, volume up/down (left), power (right) */}
          <div className="absolute -left-[2.5px] top-[104px] w-[3px] h-7 rounded-l-md bg-gradient-to-b from-neutral-300 to-neutral-500" />
          <div className="absolute -left-[2.5px] top-[150px] w-[3px] h-12 rounded-l-md bg-gradient-to-b from-neutral-300 to-neutral-500" />
          <div className="absolute -left-[2.5px] top-[212px] w-[3px] h-12 rounded-l-md bg-gradient-to-b from-neutral-300 to-neutral-500" />
          <div className="absolute -right-[2.5px] top-[170px] w-[3px] h-16 rounded-r-md bg-gradient-to-b from-neutral-300 to-neutral-500" />
          {/* Camera Control button (16 Pro) */}
          <div className="absolute -right-[2.5px] top-[260px] w-[3px] h-9 rounded-r-md bg-neutral-500/80" />

          <div className="rounded-[3.5rem] bg-black p-[6px]">
            {/* Screen — 430 x 932 pt ratio (6.9") */}
            <div className="relative rounded-[3.1rem] overflow-hidden bg-background aspect-[9/19.2] max-h-[82vh]">
              {/* Dynamic Island */}
              <div className="absolute top-[11px] left-1/2 -translate-x-1/2 z-40 h-[30px] w-[110px] rounded-full bg-black flex items-center justify-end pr-3 shadow-inner">
                <span className="h-[9px] w-[9px] rounded-full bg-[#1a2a44] ring-1 ring-black" />
              </div>

              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 pt-4 text-[11px] font-semibold text-foreground pointer-events-none">
                <span className="tracking-wide">
                  {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Signal className="h-3 w-3" />
                  <Wifi className="h-3 w-3" />
                  <BatteryFull className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Scrollable screen content */}
              <div className="absolute inset-0 overflow-y-auto pt-12">
                {children}
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 z-40 h-[5px] w-[130px] -translate-x-1/2 rounded-full bg-foreground/70" />
            </div>
          </div>
        </div>

        {caption && (
          <p className="mt-4 text-center text-xs font-semibold text-white/70 tracking-wide">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
