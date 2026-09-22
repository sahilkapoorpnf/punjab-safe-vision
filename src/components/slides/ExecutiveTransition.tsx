import ExecutiveShell from "./ExecutiveShell";
import { HandHeart, HeartPulse, RotateCcw, ShieldCheck } from "lucide-react";

const pillars = [
  { label: "Prevention", hi: "रोकथाम", icon: ShieldCheck, tone: "bg-primary" },
  { label: "Treatment", hi: "उपचार", icon: HeartPulse, tone: "bg-accent" },
  { label: "Rehabilitation", hi: "पुनर्वास", icon: HandHeart, tone: "bg-success" },
  { label: "Follow-up", hi: "निरंतर सहयोग", icon: RotateCcw, tone: "bg-gold" },
];

export default function ExecutiveTransition() {
  return (
    <ExecutiveShell eyebrow="From policy intent to connected delivery">
      <div className="mx-auto max-w-5xl pt-4 text-center">
        <h2 className="slide-title text-4xl uppercase leading-tight md:text-6xl">The fight does not end with an arrest.</h2>
        <p className="mt-3 text-xl font-black text-accent md:text-2xl">गिरफ़्तारी के बाद भी लड़ाई जारी रहती है</p>
        <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4">{pillars.map((item) => <div key={item.label} className="border bg-card p-5 shadow-sm"><div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${item.tone} text-primary-foreground`}><item.icon className="h-6 w-6" /></div><p className="mt-3 text-xs font-black uppercase">{item.label}</p><p className="mt-1 text-[10px] font-bold text-muted-foreground">{item.hi}</p></div>)}</div>
        <div className="mt-10 border-t pt-7"><p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Proposed digital ecosystem</p><h3 className="slide-title mt-2 text-3xl uppercase md:text-5xl">Nasha Mukt Himachal</h3><p className="mt-2 text-sm font-semibold text-muted-foreground">Connected information. Timely intervention. Continuous care.</p></div>
      </div>
    </ExecutiveShell>
  );
}