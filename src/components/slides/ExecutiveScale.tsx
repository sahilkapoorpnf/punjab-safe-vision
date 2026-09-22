import ExecutiveShell from "./ExecutiveShell";
import { Activity, FileText, Skull, TrendingUp } from "lucide-react";

const totals = [
  { icon: FileText, value: "6,246", label: "NDPS CASES", period: "2023–2025*", tone: "text-primary" },
  { icon: Skull, value: "66", label: "OVERDOSE DEATHS", period: "2023–2025", tone: "text-accent" },
  { icon: TrendingUp, value: "1,967", label: "CASES", period: "JAN–NOV 2025", tone: "text-success" },
  { icon: Activity, value: "1,537", label: "CASES", period: "JAN–NOV 2024", tone: "text-gold" },
];

export default function ExecutiveScale() {
  return (
    <ExecutiveShell eyebrow="Verified data · सत्यापित आंकड़े">
      <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">The data shows the scale</h2>
      <p className="mt-2 text-lg font-bold text-muted-foreground">चुनौती का वास्तविक पैमाना</p>
      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {totals.map((item) => <div key={item.period} className="border bg-card p-5 shadow-sm"><item.icon className={`h-6 w-6 ${item.tone}`} /><p className="mt-4 text-4xl font-black md:text-5xl">{item.value}</p><p className="mt-1 text-xs font-black">{item.label}</p><p className="mt-1 text-[10px] text-muted-foreground">{item.period}</p></div>)}
      </div>
      <div className="mt-6 grid gap-6 border-t pt-6 md:grid-cols-[.35fr_1.65fr] md:items-center">
        <div><p className="text-xs font-black uppercase text-muted-foreground">Jan–Nov comparison</p><p className="mt-1 text-2xl font-black text-accent">+28%</p><p className="text-xs text-muted-foreground">reported cases</p></div>
        <div className="space-y-4">
          <div className="grid grid-cols-[52px_1fr_58px] items-center gap-3 text-xs font-black"><span>2024</span><div className="h-8 bg-primary/20"><div className="h-full w-[78%] bg-primary" /></div><span>1,537</span></div>
          <div className="grid grid-cols-[52px_1fr_58px] items-center gap-3 text-xs font-black"><span>2025</span><div className="h-8 bg-accent/15"><div className="h-full w-full bg-accent" /></div><span>1,967</span></div>
        </div>
      </div>
      <p className="mt-5 text-[9px] font-semibold text-muted-foreground">Sources: Himachal Pradesh Vidhan Sabha statement / The Tribune · 25 Mar 2026; HP Police data / The Tribune · 01 Jan 2026. *Cases reported Jan 2023–Jan 2026.</p>
    </ExecutiveShell>
  );
}