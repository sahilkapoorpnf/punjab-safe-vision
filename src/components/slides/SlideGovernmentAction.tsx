import { CarFront, Gavel, HeartHandshake, Network, ShieldCheck } from "lucide-react";
import SlideLayout from "./SlideLayout";
import SourceLink from "./SourceLink";
import cmSocial from "@/assets/cm-intro/cm-sukhu-social.jpg";

const milestones = [
  { date: "SEP 2024", icon: HeartHandshake, title: "Nasha Mukt Himachal Abhiyan", text: "Prevention, early identification और rehabilitation का three-pillar mission.", source: "http://himachalpr.gov.in/OnePressRelease.aspx?ID=36235&Language=1" },
  { date: "JAN 2025", icon: ShieldCheck, title: "Dedicated Special Task Force", text: "Organised networks, kingpins, illicit assets और intelligence पर focused action.", source: "http://himachalpr.gov.in/OnePressRelease.aspx?ID=38128&Language=1" },
  { date: "JUL 2025", icon: Gavel, title: "Zero-Tolerance Policy", text: "Recruitment dope-testing, employee accountability और coordinated enforcement.", source: "http://himachalpr.gov.in/OnePressRelease.aspx?ID=41814&Language=1" },
  { date: "DEC 2025", icon: Network, title: "234 Sensitive Panchayats", text: "Special deployment, local anti-drug committees और grassroots intelligence.", source: "http://himachalpr.gov.in/OneNews.aspx?ID=43940&Language=1" },
  { date: "JAN 2026", icon: CarFront, title: "Technology-led Policing", text: "12 modern anti-chitta vehicles with faster patrol, surveillance and response.", source: "http://www.himachalpr.gov.in/OneNews.aspx?ID=44935&Language=1" },
];

export default function SlideGovernmentAction() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative z-10 space-y-7">
        <div className="grid gap-5 md:grid-cols-[1.45fr_.55fr] md:items-end">
          <div>
            <span className="badge-pill badge-blue">Government Action</span>
            <h2 className="slide-title mt-3 text-4xl md:text-5xl">नीति से मैदान तक — a clear action chain</h2>
            <p className="mt-2 text-muted-foreground">Government ने enforcement, prevention, accountability और technology — चारों fronts पर कदम बढ़ाए.</p>
          </div>
          <img src={cmSocial} alt="Chief Minister Sukhu speaking during the anti-chitta campaign" className="hidden h-32 w-full rounded-lg object-cover object-top shadow-lg md:block" />
        </div>

        <div className="relative grid gap-3 md:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-border md:block" />
          {milestones.map((item) => (
            <article key={item.date} className="relative rounded-lg border border-border bg-card p-4 shadow-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-[10px] font-black text-accent">{item.date}</p>
              <h3 className="mt-1 text-sm font-black text-foreground">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              <div className="mt-3"><SourceLink href={item.source}>Official source</SourceLink></div>
            </article>
          ))}
        </div>

        <div className="border-l-4 border-primary bg-primary/5 px-5 py-3 text-sm font-semibold text-foreground">
          Foundation strong hai. अगला कदम: हर input को live, location-linked, measurable intelligence में बदलना.
        </div>
      </div>
    </SlideLayout>
  );
}