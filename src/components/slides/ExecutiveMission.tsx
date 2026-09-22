import ExecutiveShell from "./ExecutiveShell";
import cmPortrait from "@/assets/executive-intro/cm-sukhu-portrait.jpg";
import himachalMap from "@/assets/executive-intro/himachal-map.png";

export default function ExecutiveMission() {
  return (
    <ExecutiveShell className="flex items-center">
      <div className="relative grid w-full gap-4 md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-10">
        <img
          src={himachalMap}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 hidden w-[38rem] -translate-y-1/2 opacity-[0.09] grayscale md:block"
        />
        <figure className="relative z-10 mx-auto w-full max-w-[240px] md:max-w-none">
          <div
            className="relative mx-auto h-[34vh] max-h-[300px] aspect-[2/3] overflow-hidden rounded-sm border border-border shadow-xl md:h-[55vh] md:max-h-[440px]"
          >
            <img
              src={cmPortrait}
              alt="मुख्यमंत्री ठाकुर सुखविंदर सिंह सुक्खू"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-card/90 px-3 py-1.5 text-center text-[9px] font-black uppercase tracking-[0.14em] text-foreground md:px-4 md:py-2 md:text-[10px]">
              ठाकुर सुखविंदर सिंह सुक्खू · Chief Minister
            </figcaption>
          </div>
          <h2 className="mt-3 text-center text-base font-black leading-tight md:mt-5 md:text-xl">
            <span className="bg-gradient-to-r from-gold via-foreground to-success bg-clip-text text-transparent">
              नशा मुक्त हिमाचल — यह हमारा संकल्प है।
            </span>
          </h2>
        </figure>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent md:text-xs">मुख्यमंत्री का संकल्प · Mission</p>
          <h1 className="mt-2 text-4xl uppercase leading-[.95] sm:text-5xl md:mt-3 md:text-6xl">
            Chitta-Free<br />Himachal
          </h1>
          <div className="my-3 h-1 w-20 bg-accent md:my-5 md:w-24" />
          <p className="text-lg font-black leading-snug md:text-2xl">नशा मुक्त हिमाचल<br /><span className="text-muted-foreground">Enforcement से Recovery तक</span></p>
          <p className="mt-4 max-w-sm text-[8px] font-bold uppercase leading-relaxed tracking-[0.12em] text-muted-foreground md:mt-6 md:text-[10px] md:tracking-[0.16em]">Thakur Sukhvinder Singh Sukhu · Chief Minister, Himachal Pradesh</p>
        </div>
      </div>
    </ExecutiveShell>
  );
}
