import { ArrowRight, BadgeCheck, HandHeart, HeartPulse, MessageCircle, Search, Users } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import rehabPhoto from "@/assets/executive-intro/rehab-photo.jpg";

const steps = [
  { label: "Identify", hi: "पहचान", icon: Search }, { label: "Counsel", hi: "परामर्श", icon: MessageCircle },
  { label: "Treat", hi: "उपचार", icon: HeartPulse }, { label: "Rehabilitate", hi: "पुनर्वास", icon: HandHeart },
  { label: "Follow-up", hi: "निरंतर सहयोग", icon: BadgeCheck }, { label: "Reintegrate", hi: "पुनर्स्थापन", icon: Users },
];
export default function ExecutiveHumanJourney() {
  return (
    <ExecutiveShell eyebrow="An anonymised care pathway · मानवीय यात्रा">
      <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">From reporting to recovery</h2>
      <div className="mt-7 grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-center">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">{steps.map((step, i) => <div key={step.label} className="relative border bg-card p-4 shadow-sm"><step.icon className="h-6 w-6 text-primary" /><p className="mt-3 text-xs font-black uppercase">{step.label}</p><p className="text-[10px] font-bold text-muted-foreground">{step.hi}</p>{i < steps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 text-accent md:block" />}</div>)}</div>
        <figure className="relative overflow-hidden border-b-8 border-success"><img src={rehabPhoto} alt="Chief Minister Sukhvinder Singh Sukhu at the Nav Jeevan women's rehabilitation centre" className="aspect-[4/3] w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-card/90 px-4 py-3 text-[9px] font-bold">Nav Jeevan, Mashobra · The Tribune · 08 Jun 2026</figcaption></figure>
      </div>
      <p className="mt-5 text-[9px] text-muted-foreground">Illustrative care pathway · No personal or clinical outcome data shown.</p>
    </ExecutiveShell>
  );
}