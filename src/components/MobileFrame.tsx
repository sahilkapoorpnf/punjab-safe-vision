import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  /** Optional label shown under the phone */
  caption?: string;
}

/**
 * MobileFrame — renders children inside a realistic phone chassis
 * so every citizen-app screen looks like a real mobile device.
 */
export default function MobileFrame({ children, caption }: MobileFrameProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-primary/90 to-accent/80 flex flex-col items-center justify-center py-6 px-3 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/30 blur-3xl pointer-events-none" />

      {/* Phone chassis */}
      <div className="relative z-10">
        <div className="relative mx-auto w-[380px] max-w-[95vw] rounded-[3rem] bg-neutral-950 p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
          {/* Side buttons */}
          <div className="absolute -left-1 top-24 w-1 h-10 rounded-l bg-neutral-800" />
          <div className="absolute -left-1 top-40 w-1 h-16 rounded-l bg-neutral-800" />
          <div className="absolute -right-1 top-32 w-1 h-20 rounded-r bg-neutral-800" />

          {/* Screen */}
          <div className="relative rounded-[2.35rem] overflow-hidden bg-background h-[760px] max-h-[80vh]">
            {/* Notch / dynamic island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 h-6 w-28 rounded-full bg-black" />

            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 pt-2 pb-1 text-[10px] font-semibold text-foreground/80 pointer-events-none">
              <span>
                {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false })}
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-3.5 h-2 rounded-sm border border-current relative">
                  <span className="absolute inset-0.5 bg-current rounded-[1px]" />
                </span>
                5G
              </span>
            </div>

            {/* Scrollable screen content */}
            <div className="absolute inset-0 overflow-y-auto pt-7">
              {children}
            </div>
          </div>

          {/* Home indicator */}
          <div className="mx-auto mt-2 h-1.5 w-32 rounded-full bg-neutral-700" />
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
