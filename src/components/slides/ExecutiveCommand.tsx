import { Activity, Bell, HeartHandshake, MapPin, Radio, ShieldCheck } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import himachalMap from "@/assets/hero-himachal-map.jpg";

const areas = [
  { icon: MapPin, label: "District Intelligence", value: "12 districts" },
  { icon: Radio, label: "Community Reporting", value: "84 inputs" },
  { icon: Bell, label: "Intervention", value: "18 active" },
  { icon: HeartHandshake, label: "Rehabilitation", value: "31 referred" },
  { icon: ShieldCheck, label: "Follow-up", value: "24 due" },
  { icon: Activity, label: "Outcomes", value: "76% tracked" },
];

export default function ExecutiveCommand() {
  return (
    <ExecutiveShell dark eyebrow="Proposed state-level command view">
      <div className="flex flex-wrap items-end justify-between gap-3"><h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">One state. One connected view.</h2><span className="border border-accent bg-accent/10 px-3 py-2 text-[10px] font-black text-accent">ALL FIGURES · DEMO DATA</span></div>
      <div className="mt-7 overflow-hidden border border-primary-foreground/15 bg-primary-foreground/5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-primary-foreground/15 px-5 py-3"><p className="text-xs font-black">NASHA MUKT HIMACHAL · EXECUTIVE COMMAND</p><p className="text-[10px] text-primary-foreground/50">PROPOSED PLATFORM · DEMO DATA</p></div>
        <div className="grid md:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-72 overflow-hidden border-b border-primary-foreground/15 md:border-b-0 md:border-r"><img src={himachalMap} alt="Himachal Pradesh map in the proposed command view" className="absolute inset-0 h-full w-full object-cover opacity-35" /><div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" /><div className="absolute left-[37%] top-[38%] h-7 w-7 rounded-full border-4 border-accent bg-accent/30 animate-pulse" /><div className="absolute bottom-5 left-5"><p className="text-xs font-black uppercase">Himachal Pradesh intelligence map</p><p className="text-[10px] text-primary-foreground/50">Illustrative hotspot layer · DEMO DATA</p></div></div>
          <div className="grid grid-cols-2 gap-px bg-primary-foreground/15">{areas.map((item) => <div key={item.label} className="bg-navy p-4"><item.icon className="h-4 w-4 text-accent" /><p className="mt-3 text-[10px] font-bold text-primary-foreground/55">{item.label}</p><p className="mt-1 text-xl font-black">{item.value}</p><p className="mt-1 text-[8px] font-black text-accent">DEMO DATA</p></div>)}</div>
        </div>
      </div>
    </ExecutiveShell>
  );
}