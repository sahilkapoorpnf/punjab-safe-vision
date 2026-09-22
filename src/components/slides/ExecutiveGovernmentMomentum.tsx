import { ArrowRight, Building2, HandHeart, ShieldCheck, Users } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import cmPhoto from "@/assets/executive-intro/cm-sukhu-rehab.jpg";
import stf from "@/assets/cm-intro/news-stf-crop.jpg";
import community from "@/assets/executive-intro/response-community.png";

const milestones = [
  { date: "JAN 2025", title: "STF", hi: "विशेष बल", icon: ShieldCheck, tone: "bg-primary" },
  { date: "JUL 2025", title: "ZERO TOLERANCE", hi: "कड़ी नीति", icon: Building2, tone: "bg-accent" },
  { date: "DEC 2025", title: "PANCHAYAT ACTION", hi: "जनभागीदारी", icon: Users, tone: "bg-success" },
  { date: "JUN 2026", title: "NAV JEEVAN", hi: "पुनर्वास", icon: HandHeart, tone: "bg-gold" },
];

export default function ExecutiveGovernmentMomentum() {
  return (
    <ExecutiveShell eyebrow="Policy to field action · नीति से ज़मीन तक">
      <div className="grid gap-7 md:grid-cols-[.9fr_1.1fr] md:items-center">
        <div>
          <h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">Visible momentum</h2>
          <p className="mt-3 text-xl font-black text-accent md:text-2xl">सरकार का काम ज़मीन पर दिख रहा है</p>

          <div className="mt-8 space-y-3">
            {milestones.map((item, index) => (
              <div key={item.date} className="grid grid-cols-[46px_1fr_auto] items-center gap-3 border-b pb-3">
                <div className={`flex h-11 w-11 items-center justify-center ${item.tone} text-primary-foreground`}><item.icon className="h-5 w-5" /></div>
                <div><p className="text-[10px] font-black text-muted-foreground">{item.date}</p><p className="text-sm font-black">{item.title} · <span className="text-muted-foreground">{item.hi}</span></p></div>
                {index < milestones.length - 1 && <ArrowRight className="h-4 w-4 text-accent" />}
              </div>
            ))}
          </div>
          <p className="mt-5 text-[9px] font-bold text-muted-foreground">Sources: Himachal Pradesh Government · The Tribune · verified publication dates shown</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <figure className="col-span-2 overflow-hidden border-b-8 border-accent shadow-xl">
            <img src={cmPhoto} alt="Chief Minister Sukhvinder Singh Sukhu at Nav Jeevan rehabilitation centre" className="aspect-[16/7] w-full object-cover" />
            <figcaption className="bg-card px-3 py-2 text-[9px] font-black">NAV JEEVAN CENTRE · THE TRIBUNE · 08 JUN 2026</figcaption>
          </figure>
          <figure className="overflow-hidden border-b-4 border-primary shadow-md">
            <img src={stf} alt="Official Special Task Force announcement" className="aspect-[4/3] w-full object-cover object-top" />
            <figcaption className="bg-card px-3 py-2 text-[8px] font-black">STF · HP GOVT · 15 JAN 2025</figcaption>
          </figure>
          <figure className="overflow-hidden border-b-4 border-success shadow-md">
            <img src={community} alt="Official panchayat mobilisation evidence" className="aspect-[4/3] w-full object-cover object-top" />
            <figcaption className="bg-card px-3 py-2 text-[8px] font-black">PANCHAYATS · HP GOVT · 15 DEC 2025</figcaption>
          </figure>
        </div>
      </div>
    </ExecutiveShell>
  );
}