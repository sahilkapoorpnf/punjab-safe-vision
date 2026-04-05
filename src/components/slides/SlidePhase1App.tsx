import { Camera, MapPin, Send, CheckCircle2 } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlidePhase1App() {
  return (
    <SlideLayout>
      <div className="space-y-8">
        <div>
          <span className="badge-pill badge-blue mb-4">Phase 1 — Citizen App</span>
          <h2 className="slide-title text-3xl md:text-4xl text-foreground mt-4">
            Mobile App — Anonymous Reporting
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Phone mockups */}
          <div className="flex gap-6 justify-center">
            {/* Home Screen */}
            <div className="mockup-phone scale-90">
              <div className="mockup-phone-screen p-4 flex flex-col">
                <div className="text-center pt-4 pb-6">
                  <div className="w-12 h-12 rounded-full bg-primary mx-auto flex items-center justify-center mb-2">
                    <span className="text-primary-foreground font-black text-lg">N</span>
                  </div>
                  <p className="font-bold text-sm text-foreground">NashaMukt Punjab</p>
                  <p className="text-[10px] text-muted-foreground">Report Anonymously. Stay Safe.</p>
                </div>
                <button className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center gap-2 mb-3">
                  <Send className="w-4 h-4" /> Report Now
                </button>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary text-[10px]">
                    <CheckCircle2 className="w-3 h-3 text-success" />
                    <span className="text-foreground">RPT-4821 — Action Taken</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary text-[10px]">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                    <span className="text-foreground">RPT-4820 — Under Review</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Screen */}
            <div className="mockup-phone scale-90 hidden md:block">
              <div className="mockup-phone-screen p-4 flex flex-col">
                <p className="font-bold text-sm text-foreground mb-4">Submit Report</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-secondary text-[10px] text-muted-foreground">
                    Select Category ▼
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[9px]">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent font-semibold text-center border border-accent/20">Drug Selling</div>
                    <div className="p-2 rounded-lg bg-secondary text-muted-foreground text-center">Consumption</div>
                    <div className="p-2 rounded-lg bg-secondary text-muted-foreground text-center">Suspicious</div>
                    <div className="p-2 rounded-lg bg-secondary text-muted-foreground text-center">Other</div>
                  </div>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                    <Camera className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                    <p className="text-[10px] text-muted-foreground">Upload Photo/Video</p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <MapPin className="w-3 h-3" /> GPS Auto-Captured
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs">
                    Submit Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-bold text-lg text-foreground">Key Features</h3>
            {[
              "No login required — fully anonymous",
              "One-tap 'Report Now' button",
              "Upload photo/video evidence",
              "Automatic GPS location capture",
              "Categories: Drug Selling, Consumption, Suspicious Activity",
              "Report ID for anonymous tracking",
              "Status updates: Received → Under Review → Action Taken",
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
