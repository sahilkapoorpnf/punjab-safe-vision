import { BellRing, Eye, Fingerprint, MapPin, MoveRight, ScanSearch } from "lucide-react";
import SlideLayout from "./SlideLayout";

const inputs = [
  { icon: Fingerprint, label: "Anonymous citizen evidence" },
  { icon: MapPin, label: "Auto date, time & GPS" },
  { icon: ScanSearch, label: "Repeat-location detection" },
];

export default function SlideDigitalBridge() {
  return (
    <SlideLayout dark className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 grid-pattern-dark" />
      <div className="relative z-10 space-y-8">
        <div className="max-w-4xl">
          <span className="badge-pill border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">The Next Force Multiplier</span>
          <h2 className="slide-title mt-4 text-4xl md:text-6xl">सरकार की action को एक live intelligence layer चाहिए.</h2>
          <p className="mt-3 text-primary-foreground/70">NashaMukt Himachal existing enforcement को replace नहीं करता — उसे faster, connected और measurable बनाता है.</p>
        </div>

        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1.25fr]">
          <div className="space-y-3">
            {inputs.map((item) => (
              <div key={item.label} className="flex items-center gap-3 border border-primary-foreground/15 bg-primary-foreground/5 p-4">
                <item.icon className="h-5 w-5 text-trust-blue" /><span className="text-sm font-bold">{item.label}</span>
              </div>
            ))}
          </div>
          <MoveRight className="mx-auto h-10 w-10 rotate-90 text-accent md:rotate-0" />
          <div className="border-l-4 border-accent bg-primary-foreground/10 p-6 shadow-2xl backdrop-blur-sm">
            <p className="text-xs font-black uppercase text-trust-blue">NashaMukt Command Intelligence</p>
            <h3 className="mt-2 text-2xl font-black">One verified operational picture</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-semibold">
              <div className="flex items-center gap-2 bg-navy/60 p-3"><BellRing className="h-4 w-4 text-accent" /> Priority alerts</div>
              <div className="flex items-center gap-2 bg-navy/60 p-3"><MapPin className="h-4 w-4 text-gold" /> Hotspot history</div>
              <div className="flex items-center gap-2 bg-navy/60 p-3"><Eye className="h-4 w-4 text-trust-blue" /> Case visibility</div>
              <div className="flex items-center gap-2 bg-navy/60 p-3"><ScanSearch className="h-4 w-4 text-success" /> Trend intelligence</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-primary-foreground/15 pt-5">
          <p className="text-sm font-bold">Una pilot → evidence-led learning → 12-district scale</p>
          <p className="text-xs text-primary-foreground/50">अब देखते हैं complete platform.</p>
        </div>
      </div>
    </SlideLayout>
  );
}