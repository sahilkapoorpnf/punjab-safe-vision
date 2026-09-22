import type { ReactNode } from "react";
import congressMark from "@/assets/brand/congress-hand.webp.asset.json";

interface ExecutiveShellProps {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
}

export default function ExecutiveShell({ children, eyebrow, className = "" }: ExecutiveShellProps) {
  return (
    <section className={`relative min-h-screen overflow-hidden bg-card px-6 pb-32 pt-12 text-foreground md:px-16 lg:px-24 ${className}`}>
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-gold via-card to-success" />
      <div className="absolute inset-y-0 left-5 w-px bg-accent/45 md:left-10" />
      <img src={congressMark.url} alt="" aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/2 w-[34rem] -translate-y-1/2 opacity-[0.035] grayscale" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {eyebrow && <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>}
        {children}
      </div>
    </section>
  );
}