import ExecutiveShell from "./ExecutiveShell";
import SourceLink from "./SourceLink";

const totals = [
  { value: "6,246", label: "NDPS cases", period: "2023–2025*" },
  { value: "66", label: "Reported overdose deaths", period: "2023–2025" },
  { value: "1,967", label: "NDPS cases", period: "Jan–Nov 2025" },
  { value: "1,537", label: "NDPS cases", period: "Jan–Nov 2024" },
];

export default function ExecutiveScale() {
  return (
    <ExecutiveShell dark eyebrow="Verified public record · Policy briefing">
      <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">The data shows the scale</h2>
      <div className="mt-9 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
        {totals.map((item) => <div key={item.period} className="bg-navy p-6 md:p-8"><p className="text-4xl font-black md:text-5xl">{item.value}</p><p className="mt-2 text-sm font-bold">{item.label}</p><p className="mt-1 text-xs text-primary-foreground/55">{item.period}</p></div>)}
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-[.65fr_1.35fr] md:items-end">
        <div><p className="text-xs font-black uppercase text-primary-foreground/55">NDPS cases, Jan–Nov</p><p className="mt-2 max-w-sm text-sm text-primary-foreground/65">A neutral comparison of reported case registrations. No causal interpretation is applied.</p></div>
        <div className="space-y-5 border-l border-primary-foreground/15 pl-5">
          <div><div className="mb-2 flex justify-between text-sm font-bold"><span>2024</span><span>1,537</span></div><div className="h-8 w-[78%] bg-primary-foreground/35" /></div>
          <div><div className="mb-2 flex justify-between text-sm font-bold"><span>2025</span><span>1,967</span></div><div className="h-8 w-full bg-accent" /></div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-primary-foreground/15 pt-4">
        <SourceLink dark href="https://www.tribuneindia.com/news/himachal/66-drug-overdose-deaths-in-3-years-6200-cases-lodged-himachal-cm-sukhu/">The Tribune · 25 Mar 2026 · Vidhan Sabha statement</SourceLink>
        <SourceLink dark href="https://www.tribuneindia.com/news/himachal/as-cases-rise-28-govt-launches-decisive-battle-against-narcotics/">The Tribune · 1 Jan 2026 · HP Police data</SourceLink>
        <p className="text-[10px] text-primary-foreground/45">*Reported for Jan 2023–Jan 2026; no January 2026 overdose death was reported.</p>
      </div>
    </ExecutiveShell>
  );
}