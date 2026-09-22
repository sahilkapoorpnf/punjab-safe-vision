import ExecutiveShell from "./ExecutiveShell";

export default function ExecutiveTransition() {
  return (
    <ExecutiveShell dark eyebrow="From policy intent to connected delivery">
      <div className="mx-auto max-w-5xl pt-8 text-center md:pt-16">
        <h2 className="slide-title text-4xl uppercase leading-tight md:text-6xl">The fight against drug abuse does not end with an arrest.</h2>
        <div className="mx-auto my-9 h-px w-28 bg-accent" />
        <p className="text-xl font-black uppercase leading-relaxed text-primary-foreground/75 md:text-3xl">It continues with prevention.<br />Treatment.<br />Rehabilitation.<br />And follow-up.</p>
        <div className="mt-12 border-t border-primary-foreground/15 pt-8"><p className="text-sm font-black uppercase tracking-[0.2em] text-accent">Proposed digital ecosystem</p><h3 className="slide-title mt-2 text-3xl uppercase md:text-5xl">Nasha Mukt Himachal</h3><p className="mt-3 text-sm text-primary-foreground/60 md:text-lg">A connected digital ecosystem for a healthier Himachal.</p></div>
      </div>
    </ExecutiveShell>
  );
}