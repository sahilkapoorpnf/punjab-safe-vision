import ExecutiveShell from "./ExecutiveShell";
import cmPhoto from "@/assets/executive-intro/cm-sukhu-rehab.jpg";

export default function ExecutiveMission() {
  return (
    <ExecutiveShell className="flex items-center">
      <div className="grid w-full gap-7 md:grid-cols-[.82fr_1.18fr] md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">मुख्यमंत्री का संकल्प · Mission</p>
          <h1 className="slide-title mt-4 text-5xl uppercase leading-[.95] md:text-7xl">Chitta-Free<br />Himachal</h1>
          <div className="my-6 h-1 w-24 bg-accent" />
          <p className="text-xl font-black leading-snug md:text-3xl">नशा मुक्त हिमाचल<br /><span className="text-muted-foreground">Enforcement से Recovery तक</span></p>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Thakur Sukhvinder Singh Sukhu · Chief Minister</p>
        </div>
        <figure className="relative overflow-hidden border-b-8 border-accent shadow-xl">
          <img src={cmPhoto} alt="Chief Minister Sukhvinder Singh Sukhu inaugurating the Nav Jeevan women's rehabilitation centre" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-card/90 px-4 py-3 text-[10px] font-bold">Authentic public photograph · The Tribune · 08 Jun 2026</figcaption>
        </figure>
      </div>
    </ExecutiveShell>
  );
}