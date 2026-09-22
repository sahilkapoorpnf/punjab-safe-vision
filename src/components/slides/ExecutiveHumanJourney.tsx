import { ArrowDown } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import rehabPhoto from "@/assets/executive-intro/rehab-photo.jpg.asset.json";
import SourceLink from "./SourceLink";

const steps = ["Identification", "Counselling", "Treatment", "Rehabilitation", "Follow-up", "Reintegration"];
export default function ExecutiveHumanJourney() {
  return (
    <ExecutiveShell dark eyebrow="An anonymised care pathway">
      <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
        <div><h2 className="slide-title text-4xl uppercase leading-none md:text-6xl">From reporting to recovery</h2><div className="mt-8 grid grid-cols-[1fr_auto_1fr] gap-x-4 gap-y-2">{steps.map((step, i) => <div key={step} className="contents"><p className={`border-b border-primary-foreground/15 py-2 text-sm font-black uppercase ${i % 2 ? "col-start-3" : "col-start-1"}`}>{step}</p>{i < steps.length - 1 && <ArrowDown className="col-start-2 row-auto h-4 w-4 self-end text-accent" />}</div>)}</div><p className="mt-7 text-xs text-primary-foreground/50">Illustrative pathway only. No personal or clinical outcome data shown.</p></div>
        <div className="relative min-h-[420px] overflow-hidden"><img src={rehabPhoto.url} alt="Chief Minister Sukhvinder Singh Sukhu at the Nav Jeevan women's rehabilitation centre" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-5"><p className="text-sm font-black">Care must continue beyond first contact.</p><div className="mt-2"><SourceLink dark href="https://www.tribuneindia.com/news/himachal/himachal-gets-first-women-de-addiction-centre-in-mashobra/">The Tribune · Nav Jeevan, Mashobra · 8 Jun 2026</SourceLink></div></div></div>
      </div>
    </ExecutiveShell>
  );
}