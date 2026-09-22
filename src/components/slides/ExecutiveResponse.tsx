import { Building2, HandHeart, Landmark, Shield } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import SourceLink from "./SourceLink";
import stf from "@/assets/cm-intro/news-stf-crop.jpg";
import seizure from "@/assets/executive-intro/challenge-seizure.png";
import community from "@/assets/executive-intro/response-community.png";
import rehab from "@/assets/executive-intro/response-rehab.png";

const actions = [
  { icon: Shield, title: "STF", text: "Special Task Force against drug abuse & organised crime", date: "15 JAN 2025", source: "HP GOVERNMENT", image: stf, href: "http://himachalpr.gov.in/OnePressRelease.aspx?ID=38128&Language=1" },
  { icon: Landmark, title: "ENFORCEMENT", text: "Drug-linked assets and traffickers targeted", date: "17 DEC 2025", source: "THE HINDU", image: seizure, href: "https://www.thehindu.com/news/national/himachal-pradesh/50-crore-in-assets-seized-under-ndps-act-four-times-bjp-tenure-figure-himachal-cm-sukhu/article70403736.ece" },
  { icon: Building2, title: "COMMUNITY", text: "Panchayat-level anti-chitta mobilisation", date: "15 DEC 2025", source: "HP GOVERNMENT", image: community, href: "http://himachalpr.gov.in/OnePressRelease.aspx?ID=44107&Language=1" },
  { icon: HandHeart, title: "REHABILITATION", text: "Expansion of de-addiction infrastructure", date: "08 JUN 2026", source: "THE TRIBUNE", image: rehab, href: "https://www.tribuneindia.com/news/himachal/himachal-gets-first-women-de-addiction-centre-in-mashobra/" },
];

export default function ExecutiveResponse() {
  return (
    <ExecutiveShell dark eyebrow="Government response · Verified milestones">
      <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">The response is expanding</h2>
      <div className="mt-8 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((item) => <article key={item.title} className="bg-navy"><div className="h-32 overflow-hidden"><img src={item.image} alt={`${item.source} evidence for ${item.title}`} className="h-full w-full object-cover object-top opacity-85" /></div><div className="p-5"><item.icon className="h-5 w-5 text-accent" /><h3 className="mt-3 text-lg font-black">{item.title}</h3><p className="mt-2 min-h-12 text-xs leading-relaxed text-primary-foreground/65">{item.text}</p><p className="mt-4 text-[9px] font-bold text-primary-foreground/45">{item.source} · {item.date}</p><div className="mt-2"><SourceLink dark href={item.href}>View evidence</SourceLink></div></div></article>)}
      </div>
    </ExecutiveShell>
  );
}