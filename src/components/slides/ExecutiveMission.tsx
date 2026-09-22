import { MapPinned } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";
import SourceLink from "./SourceLink";
import cmPhoto from "@/assets/cm-intro/cm-sukhu-walkathon.jpg.asset.json";
import himachalMap from "@/assets/hero-himachal-map.jpg";

export default function ExecutiveMission() {
  return (
    <ExecutiveShell dark className="flex items-end">
      <img src={cmPhoto.url} alt="Chief Minister Sukhvinder Singh Sukhu at the Hamirpur anti-chitta walkathon" className="absolute inset-0 h-full w-full object-cover object-center" />
      <img src={himachalMap} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/25" />
      <div className="relative z-10 max-w-4xl pb-4 md:pb-10">
        <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary-foreground/75">
          <MapPinned className="h-5 w-5 text-accent" /> Government of Himachal Pradesh
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/70">Sukhvinder Singh Sukhu · Chief Minister</p>
        <h1 className="slide-title mt-3 text-5xl uppercase leading-none md:text-8xl">Chitta-Free<br />Himachal</h1>
        <p className="mt-5 max-w-3xl text-lg font-semibold md:text-2xl">From enforcement to prevention, rehabilitation and community action.</p>
        <div className="mt-7 border-l-2 border-accent pl-4 text-sm text-primary-foreground/75">Government-led statewide campaign against drug abuse and trafficking.</div>
        <div className="mt-5"><SourceLink dark href="https://indianexpress.com/article/cities/chandigarh/hamirpur-cm-sukhu-leads-anti-chitta-walkathon-says-will-wipe-out-network-10424518/">Indian Express / PTI · 17 Dec 2025</SourceLink></div>
      </div>
    </ExecutiveShell>
  );
}