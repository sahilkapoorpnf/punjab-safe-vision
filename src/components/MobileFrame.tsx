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
        <div className="relative mx-auto w-[392px] max-w-[95vw] rounded-[3.4rem] bg-gradient-to-b from-neutral-500 via-neutral-800 to-neutral-600 p-[3px] shadow-[0_50px_90px_-20px_rgba(0,0,0,0.7)]">
          {/* Titanium side buttons */}
          <div className="absolute -left-[3px] top-28 w-[3px] h-9 rounded-l bg-neutral-400/80" />
          <div className="absolute -left-[3px] top-44 w-[3px] h-14 rounded-l bg-neutral-400/80" />
          <div className="absolute -left-[3px] top-64 w-[3px] h-14 rounded-l bg-neutral-400/80" />
          <div className="absolute -right-[3px] top-52 w-[3px] h-20 rounded-r bg-neutral-400/80" />

          <div className="rounded-[3.25rem] bg-black p-[10px]">
            {/* Screen */}
            <div className="relative rounded-[2.7rem] overflow-hidden bg-background h-[770px] max-h-[80vh]">
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 h-[26px] w-[104px] rounded-full bg-black flex items-center justify-end pr-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-800 ring-1 ring-neutral-700" />
              </div>

              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-7 pt-3.5 text-[11px] font-semibold text-foreground pointer-events-none">
                <span>
                  {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Signal className="h-3 w-3" />
                  <Wifi className="h-3 w-3" />
                  <BatteryFull className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Scrollable screen content */}
              <div className="absolute inset-0 overflow-y-auto pt-11">
                {children}
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 z-40 h-1 w-32 -translate-x-1/2 rounded-full bg-foreground/70" />
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
