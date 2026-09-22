import ExecutiveShell from "./ExecutiveShell";
import cmPortrait from "@/assets/executive-intro/cm-sukhu-portrait.avif.asset.json";

export default function ExecutiveMission() {
  return (
    <ExecutiveShell className="flex items-center">
      <div className="grid w-full gap-8 md:grid-cols-[.85fr_1.15fr] md:items-center">
        <figure className="mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-sm border border-border shadow-xl">
            <img
              src={cmPortrait.url}
              alt="मुख्यमंत्री ठाकुर सुखविंदर सिंह सुक्खू"
              className="aspect-[2/3] w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-card/90 px-4 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.14em] text-foreground">
              ठाकुर सुखविंदर सिंह सुक्खू · Chief Minister
            </figcaption>
          </div>
          <h2 className="mt-6 text-center text-2xl font-black leading-tight md:text-3xl">
            <span className="bg-gradient-to-r from-gold via-foreground to-success bg-clip-text text-transparent">
              मुझे अपना प्रदेश बचाना है,
              <br />
              इसे नशा मुक्त बनाना है।
            </span>
          </h2>
        </figure>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">मुख्यमंत्री का संकल्प · Mission</p>
          <h1 className="slide-title mt-4 text-5xl uppercase leading-[.95] md:text-7xl">Chitta-Free<br />Himachal</h1>
          <div className="my-6 h-1 w-24 bg-accent" />
          <p className="text-xl font-black leading-snug md:text-3xl">नशा मुक्त हिमाचल<br /><span className="text-muted-foreground">Enforcement से Recovery तक</span></p>
          <p className="mt-8 max-w-sm text-[9px] font-bold uppercase leading-relaxed tracking-[0.12em] text-muted-foreground md:text-xs md:tracking-[0.16em]">Thakur Sukhvinder Singh Sukhu · Chief Minister, Himachal Pradesh</p>
        </div>
      </div>
    </ExecutiveShell>
  );
}
