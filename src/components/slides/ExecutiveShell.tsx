import type { ReactNode } from "react";

interface ExecutiveShellProps {
  children: ReactNode;
  dark?: boolean;
  eyebrow?: string;
  className?: string;
}

export default function ExecutiveShell({ children, dark = false, eyebrow, className = "" }: ExecutiveShellProps) {
  return (
    <section className={`relative min-h-screen overflow-hidden px-6 pb-32 pt-14 md:px-16 lg:px-24 ${dark ? "bg-navy text-primary-foreground grid-pattern-dark" : "bg-background text-foreground grid-pattern"} ${className}`}>
      <div className="absolute inset-y-0 left-5 w-px bg-accent/50 md:left-10" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {eyebrow && <p className={`mb-5 text-[11px] font-black uppercase tracking-[0.22em] ${dark ? "text-primary-foreground/55" : "text-muted-foreground"}`}>{eyebrow}</p>}
        {children}
      </div>
    </section>
  );
}