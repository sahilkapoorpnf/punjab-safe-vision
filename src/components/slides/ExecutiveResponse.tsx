import { Building2, HandHeart, Landmark, Shield } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import stf from "@/assets/cm-intro/news-stf-crop.jpg";
import seizure from "@/assets/executive-intro/challenge-seizure.png";
import community from "@/assets/executive-intro/response-community.png";
import rehab from "@/assets/executive-intro/response-rehab.png";

const actions = [
  { icon: Shield, title: "STF", text: "संगठित अपराध पर प्रहार", date: "15 JAN 2025", source: "HP GOVERNMENT", image: stf, tone: "bg-primary" },
  { icon: Landmark, title: "ENFORCEMENT", text: "Assets और traffickers targeted", date: "17 DEC 2025", source: "THE HINDU", image: seizure, tone: "bg-accent" },
  { icon: Building2, title: "COMMUNITY", text: "Panchayat-level mobilisation", date: "15 DEC 2025", source: "HP GOVERNMENT", image: community, tone: "bg-success" },
  { icon: HandHeart, title: "REHABILITATION", text: "Treatment infrastructure expansion", date: "08 JUN 2026", source: "THE TRIBUNE", image: rehab, tone: "bg-gold" },
];

export default function ExecutiveResponse() {
  return (
    <ExecutiveShell eyebrow="Government response · सत्यापित कदम">
      <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">The response is expanding</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((item) => <article key={item.title} className="overflow-hidden border bg-card shadow-md"><div className="h-36 overflow-hidden"><img src={item.image} alt={`${item.source} evidence for ${item.title}`} className="h-full w-full object-cover object-top" /></div><div className="p-4"><div className={`flex h-9 w-9 items-center justify-center ${item.tone} text-primary-foreground`}><item.icon className="h-5 w-5" /></div><h3 className="mt-3 text-base font-black">{item.title}</h3><p className="mt-1 text-xs font-semibold text-muted-foreground">{item.text}</p><p className="mt-4 text-[9px] font-black">{item.source} · {item.date}</p></div></article>)}
      </div>
    </ExecutiveShell>
  );
}