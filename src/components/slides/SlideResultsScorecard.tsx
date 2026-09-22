import { BadgeIndianRupee, MapPinned, Scale, Users } from "lucide-react";
import SlideLayout from "./SlideLayout";
import SourceLink from "./SourceLink";

const results = [
  { value: "₹50 Cr+", label: "NDPS-linked assets seized", note: "CM statement · cumulative by Dec 2025", icon: BadgeIndianRupee },
  { value: "46", label: "Major traffickers detained", note: "Under PIT-NDPS · reported 1 Dec 2025", icon: Scale },
  { value: "234", label: "Sensitive panchayats prioritised", note: "Special deployment + local committees", icon: MapPinned },
  { value: "2,515", label: "NDPS arrests during 2024", note: "Government figures reported Feb 2025", icon: Users },
];

export default function SlideResultsScorecard() {
  return (
    <SlideLayout dark className="slide-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-60" />
      <div className="relative z-10 space-y-8">
        <div>
          <span className="badge-pill border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">Reported Outcomes</span>
          <h2 className="slide-title mt-4 text-4xl md:text-6xl">Action दिख रहा है. अब intelligence को scale करना है.</h2>
          <p className="mt-3 max-w-3xl text-primary-foreground/70">Publicly reported figures, date-stamped and attributed — not projections.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {results.map((result) => (
            <article key={result.label} className="border-t-4 border-accent bg-primary-foreground/10 p-5 backdrop-blur-sm">
              <result.icon className="mb-5 h-7 w-7 text-trust-blue" />
              <p className="text-3xl font-black md:text-4xl">{result.value}</p>
              <p className="mt-2 text-sm font-bold">{result.label}</p>
              <p className="mt-2 text-[10px] leading-relaxed text-primary-foreground/55">{result.note}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 border-t border-primary-foreground/15 pt-5 text-xs md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-3xl text-primary-foreground/65"><strong className="text-primary-foreground">Reading note:</strong> ₹46 Cr (1 Dec) and ₹50 Cr+ (17 Dec) are evolving cumulative CM statements; they are not added together.</p>
          <div className="flex flex-wrap gap-4">
            <SourceLink dark href="https://www.thehindu.com/news/national/himachal-pradesh/50-crore-in-assets-seized-under-ndps-act-four-times-bjp-tenure-figure-himachal-cm-sukhu/article70403736.ece">The Hindu · 17 Dec 2025</SourceLink>
            <SourceLink dark href="https://timesofindia.indiatimes.com/city/chandigarh/himachal-pradesh-police-arrested-2515-accused-under-ndps-act-in-2024/articleshow/118459850.cms">TOI · 21 Feb 2025</SourceLink>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}