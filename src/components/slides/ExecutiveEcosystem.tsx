import { ArrowRight } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";

const journey = ["Enforcement", "Prevention", "Reporting", "Treatment", "Rehabilitation", "Reintegration"];
export default function ExecutiveEcosystem() {
  return (
    <ExecutiveShell eyebrow="Policy continuum">
      <h2 className="slide-title max-w-5xl text-4xl uppercase leading-none md:text-6xl">The next opportunity: connect the ecosystem</h2>
      <div className="mt-16 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-2">
        {journey.map((item, index) => <div key={item} className="contents"><div className="flex min-h-24 flex-1 items-center border-y border-foreground/20 px-3"><div><p className="text-[10px] font-black text-accent">0{index + 1}</p><p className="mt-1 text-sm font-black uppercase">{item}</p></div></div>{index < journey.length - 1 && <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-muted-foreground md:rotate-0" />}</div>)}
      </div>
      <p className="mt-14 max-w-4xl border-l-4 border-accent pl-5 text-xl font-semibold md:text-2xl">Technology can connect information, intervention and follow-up across the journey.</p>
    </ExecutiveShell>
  );
}