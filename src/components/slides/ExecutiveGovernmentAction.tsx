import { Building2, HandHeart, Landmark, ShieldCheck } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import stf from "@/assets/cm-intro/news-stf-crop.jpg";
import seizure from "@/assets/executive-intro/challenge-seizure.png";
import community from "@/assets/executive-intro/response-community.png";
import rehab from "@/assets/executive-intro/response-rehab.png";

const actions = [
  { icon: ShieldCheck, title: "SPECIAL TASK FORCE", hi: "संगठित नेटवर्क पर सीधा प्रहार", source: "HP GOVERNMENT", date: "15 JAN 2025", image: stf, tone: "bg-primary" },
  { icon: Landmark, title: "ASSET ACTION", hi: "तस्करों की संपत्ति पर कार्रवाई", source: "THE HINDU", date: "17 DEC 2025", image: seizure, tone: "bg-accent" },
  { icon: Building2, title: "PANCHAYAT MOBILISATION", hi: "समुदाय को अभियान से जोड़ा", source: "HP GOVERNMENT", date: "15 DEC 2025", image: community, tone: "bg-success" },
  { icon: HandHeart, title: "REHABILITATION", hi: "उपचार और पुनर्वास का विस्तार", source: "THE TRIBUNE", date: "08 JUN 2026", image: rehab, tone: "bg-gold" },
];

export default function ExecutiveGovernmentAction() {
  return (
    <ExecutiveShell eyebrow="Verified government action · सत्यापित सरकारी कदम">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">Action on every front</h2>
          <p className="mt-2 text-lg font-black text-accent md:text-2xl">हर स्तर पर निर्णायक कार्रवाई</p>
        </div>
        <p className="border-l-4 border-success pl-3 text-xs font-black uppercase text-muted-foreground">Enforcement · Community · Care</p>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((item) => (
          <article key={item.title} className="group relative min-h-[310px] overflow-hidden border bg-card shadow-lg">
            <img src={item.image} alt={`${item.source} evidence dated ${item.date}`} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
              <div className={`flex h-10 w-10 items-center justify-center ${item.tone}`}><item.icon className="h-5 w-5" /></div>
              <h3 className="mt-3 text-sm font-black">{item.title}</h3>
              <p className="mt-1 text-xs font-bold">{item.hi}</p>
              <p className="mt-4 border-t border-primary-foreground/30 pt-2 text-[9px] font-black">{item.source} · {item.date}</p>
            </div>
          </article>
        ))}
      </div>
    </ExecutiveShell>
  );
}