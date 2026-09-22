import ExecutiveShell from "./ExecutiveShell";
import cases from "@/assets/executive-intro/challenge-cases.png";
import seizure from "@/assets/executive-intro/challenge-seizure.png";
import deaths from "@/assets/executive-intro/challenge-deaths.png";

const items = [
  { image: cases, source: "THE TRIBUNE", date: "01 JAN 2026", caption: "CASES ↑ 28%" },
  { image: seizure, source: "THE HINDU", date: "17 DEC 2025", caption: "ASSETS SEIZED" },
  { image: deaths, source: "THE TRIBUNE", date: "25 MAR 2026", caption: "66 DEATHS REPORTED" },
];

export default function ExecutiveEvidence() {
  return (
    <ExecutiveShell eyebrow="Evidence wall · Original publication captures">
      <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">Ground evidence</h2>
      <p className="mt-2 text-lg font-bold text-muted-foreground">ज़मीनी हकीकत · Original publication captures</p>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {items.map((item, i) => <article key={item.caption} className="overflow-hidden border-t-4 border-accent bg-card shadow-lg"><div className="aspect-[4/3] overflow-hidden bg-secondary"><img src={item.image} alt={`${item.source} report dated ${item.date}`} className="h-full w-full object-cover object-top" /></div><div className="flex items-end justify-between gap-3 p-4"><div><p className="text-[9px] font-black text-accent">EVIDENCE 0{i + 1}</p><h3 className="mt-1 text-sm font-black">{item.caption}</h3></div><p className="text-right text-[9px] font-bold text-muted-foreground">{item.source}<br />{item.date}</p></div></article>)}
      </div>
    </ExecutiveShell>
  );
}