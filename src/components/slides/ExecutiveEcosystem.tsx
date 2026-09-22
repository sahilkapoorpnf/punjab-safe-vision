import { ArrowRight, BadgeAlert, Eye, HandHeart, Radio, ShieldCheck, Users } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";

const journey = [
  { label: "Enforcement", hi: "कार्रवाई", icon: ShieldCheck, tone: "bg-primary" },
  { label: "Prevention", hi: "रोकथाम", icon: Eye, tone: "bg-gold" },
  { label: "Reporting", hi: "सूचना", icon: Radio, tone: "bg-accent" },
  { label: "Treatment", hi: "उपचार", icon: BadgeAlert, tone: "bg-trust-blue" },
  { label: "Rehabilitation", hi: "पुनर्वास", icon: HandHeart, tone: "bg-success" },
  { label: "Reintegration", hi: "पुनर्स्थापन", icon: Users, tone: "bg-navy" },
];
export default function ExecutiveEcosystem() {
  return (
    <ExecutiveShell eyebrow="Policy continuum">
      <h2 className="slide-title max-w-5xl text-4xl uppercase leading-none md:text-6xl">Connect the ecosystem</h2>
      <p className="mt-2 text-lg font-bold text-muted-foreground">एक जुड़ा हुआ सरकारी response system</p>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6">
        {journey.map((item, index) => <div key={item.label} className="relative border bg-card p-4 text-center shadow-sm"><div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${item.tone} text-primary-foreground`}><item.icon className="h-6 w-6" /></div><p className="mt-3 text-xs font-black uppercase">{item.label}</p><p className="mt-1 text-[10px] font-bold text-muted-foreground">{item.hi}</p>{index < journey.length - 1 && <ArrowRight className="absolute -right-3 top-8 z-10 hidden h-5 w-5 text-accent md:block" />}</div>)}
      </div>
      <p className="mt-10 border-l-4 border-accent pl-5 text-xl font-black md:text-2xl">Information → Intervention → Follow-up</p>
    </ExecutiveShell>
  );
}