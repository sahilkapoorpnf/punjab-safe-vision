import ExecutiveShell from "./ExecutiveShell";
import SourceLink from "./SourceLink";
import cases from "@/assets/executive-intro/challenge-cases.png";
import seizure from "@/assets/executive-intro/challenge-seizure.png";
import deaths from "@/assets/executive-intro/challenge-deaths.png";

const items = [
  { image: cases, source: "THE TRIBUNE", date: "01 JAN 2026", caption: "Case registrations rose in 2025", href: "https://www.tribuneindia.com/news/himachal/as-cases-rise-28-govt-launches-decisive-battle-against-narcotics/" },
  { image: seizure, source: "THE HINDU", date: "17 DEC 2025", caption: "Drug-linked assets targeted statewide", href: "https://www.thehindu.com/news/national/himachal-pradesh/50-crore-in-assets-seized-under-ndps-act-four-times-bjp-tenure-figure-himachal-cm-sukhu/article70403736.ece" },
  { image: deaths, source: "THE TRIBUNE", date: "25 MAR 2026", caption: "Overdose deaths reported to Assembly", href: "https://www.tribuneindia.com/news/himachal/66-drug-overdose-deaths-in-3-years-6200-cases-lodged-himachal-cm-sukhu/" },
];

export default function ExecutiveEvidence() {
  return (
    <ExecutiveShell eyebrow="Evidence wall · Original publication captures">
      <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">The challenge is visible on the ground</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {items.map((item, i) => <article key={item.caption} className="border-t-4 border-accent bg-card shadow-xl"><div className="aspect-[4/3] overflow-hidden bg-secondary"><img src={item.image} alt={`${item.source} report dated ${item.date}`} className="h-full w-full object-cover object-top" /></div><div className="p-4"><p className="text-[10px] font-black text-accent">EVIDENCE 0{i + 1}</p><h3 className="mt-1 text-base font-black">{item.caption}</h3><div className="mt-4 flex items-center justify-between gap-3"><p className="text-[10px] font-bold">{item.source} · {item.date}</p><SourceLink href={item.href}>Source</SourceLink></div></div></article>)}
      </div>
    </ExecutiveShell>
  );
}