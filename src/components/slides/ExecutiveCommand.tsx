import { Activity, Bell, HeartHandshake, MapPin } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import himachalMap from "@/assets/hero-himachal-map.jpg";

const trend = [32, 45, 37, 56, 48, 67, 61, 75];
const districts = [{ name: "Una", n: 84 }, { name: "Kangra", n: 68 }, { name: "Solan", n: 53 }, { name: "Mandi", n: 41 }];

export default function ExecutiveCommand() {
  return (
    <ExecutiveShell eyebrow="Proposed state command · Executive analytics">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">One state. One view.</h2><p className="mt-2 text-lg font-bold text-muted-foreground">राज्य स्तरीय integrated command</p></div><span className="bg-accent px-3 py-2 text-[10px] font-black text-primary-foreground">ALL FIGURES · DEMO DATA</span></div>
      <div className="mt-5 overflow-hidden border bg-card shadow-xl">
        <div className="flex items-center justify-between bg-navy px-5 py-3 text-primary-foreground"><p className="text-xs font-black">NASHA MUKT HIMACHAL · EXECUTIVE COMMAND</p><p className="text-[9px]">PROPOSED PLATFORM</p></div>
        <div className="grid md:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-52 overflow-hidden border-b md:border-b-0 md:border-r"><img src={himachalMap} alt="Himachal Pradesh map in the proposed command view" className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" /><div className="absolute left-[38%] top-[35%] h-6 w-6 rounded-full border-4 border-accent bg-accent/25 animate-pulse" /><div className="absolute bottom-4 left-4"><MapPin className="h-5 w-5 text-accent" /><p className="mt-1 text-xs font-black uppercase">District intelligence</p><p className="text-[8px] font-black text-accent">DEMO DATA</p></div></div>
          <div className="grid grid-cols-2 gap-px bg-border">
            <div className="bg-card p-4"><Activity className="h-4 w-4 text-primary" /><p className="mt-2 text-[9px] font-bold text-muted-foreground">COMMUNITY INPUTS</p><p className="text-2xl font-black">84</p><p className="text-[7px] font-black text-accent">DEMO DATA</p></div>
            <div className="bg-card p-4"><Bell className="h-4 w-4 text-accent" /><p className="mt-2 text-[9px] font-bold text-muted-foreground">ACTIVE INTERVENTIONS</p><p className="text-2xl font-black">18</p><p className="text-[7px] font-black text-accent">DEMO DATA</p></div>
            <div className="col-span-2 bg-card p-4"><p className="text-[9px] font-black">REPORTING TREND · DEMO DATA</p><div className="mt-4 flex h-20 items-end gap-2">{trend.map((n, i) => <div key={i} className="flex-1 bg-primary" style={{height: `${n}%`}} />)}</div></div>
          </div>
        </div>
        <div className="grid gap-px border-t bg-border md:grid-cols-3">
          <div className="bg-card p-4"><p className="text-[9px] font-black">DISTRICT COMPARISON · DEMO DATA</p><div className="mt-3 space-y-2">{districts.map(d => <div key={d.name} className="grid grid-cols-[45px_1fr_20px] items-center gap-2 text-[8px] font-bold"><span>{d.name}</span><div className="h-2 bg-secondary"><div className="h-full bg-success" style={{width: `${d.n}%`}} /></div><span>{d.n}</span></div>)}</div></div>
          <div className="bg-card p-4"><p className="text-[9px] font-black">INTERVENTION FUNNEL · DEMO DATA</p><div className="mt-3 space-y-1 text-center text-[8px] font-black text-primary-foreground"><div className="mx-auto w-full bg-primary py-1.5">84 REPORTS</div><div className="mx-auto w-4/5 bg-trust-blue py-1.5">52 VERIFIED</div><div className="mx-auto w-3/5 bg-accent py-1.5">31 REFERRED</div><div className="mx-auto w-2/5 bg-success py-1.5">24 FOLLOW-UP</div></div></div>
          <div className="bg-card p-4"><HeartHandshake className="h-5 w-5 text-success" /><p className="mt-2 text-[9px] font-black">CARE CONTINUITY</p><p className="mt-1 text-3xl font-black">76%</p><p className="text-[9px] text-muted-foreground">cases tracked through follow-up</p><p className="mt-2 text-[7px] font-black text-accent">DEMO DATA</p></div>
        </div>
      </div>
    </ExecutiveShell>
  );
}