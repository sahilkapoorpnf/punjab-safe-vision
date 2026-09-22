import SlideLayout from "./SlideLayout";
import SourceLink from "./SourceLink";
import stfRelease from "@/assets/cm-intro/news-stf-crop.jpg";
import zeroToleranceRelease from "@/assets/cm-intro/news-zero-tolerance-crop.jpg";
import modernisationRelease from "@/assets/cm-intro/news-modernisation-crop.jpg";

const evidence = [
  { image: stfRelease, date: "15 JAN 2025", title: "Special Task Force", source: "http://himachalpr.gov.in/OnePressRelease.aspx?ID=38128&Language=1" },
  { image: zeroToleranceRelease, date: "29 JUL 2025", title: "Zero-Tolerance", source: "http://himachalpr.gov.in/OnePressRelease.aspx?ID=41814&Language=1" },
  { image: modernisationRelease, date: "09 JAN 2026", title: "Modern Anti-Chitta Fleet", source: "http://www.himachalpr.gov.in/OneNews.aspx?ID=44935&Language=1" },
];

export default function SlideNewsEvidence() {
  return (
    <SlideLayout className="relative overflow-hidden bg-muted">
      <div className="relative z-10 space-y-6">
        <div>
          <span className="badge-pill badge-crimson">Official Record</span>
          <h2 className="slide-title mt-3 text-4xl md:text-5xl">Headlines नहीं — documented government action</h2>
          <p className="mt-2 text-muted-foreground">Original Himachal Pradesh Information & Public Relations releases, source and date preserved.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {evidence.map((item, index) => (
            <article key={item.title} className={`overflow-hidden border bg-card shadow-xl ${index === 1 ? "md:-translate-y-2" : ""}`}>
              <div className="h-64 overflow-hidden bg-secondary md:h-80">
                <img src={item.image} alt={`Official release: ${item.title}`} className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]" />
              </div>
              <div className="flex items-end justify-between gap-3 p-4">
                <div><p className="text-[10px] font-black text-accent">{item.date}</p><h3 className="text-sm font-black">{item.title}</h3></div>
                <SourceLink href={item.source}>Open release</SourceLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}