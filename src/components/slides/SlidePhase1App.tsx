import { Camera, MapPin, Send, ShieldCheck, Signal, Wifi, BatteryFull } from "lucide-react";
import SlideLayout from "./SlideLayout";
import sukhuPortrait from "@/assets/executive-intro/cm-sukhu-citizen-app.jpg";
import himachalMap from "@/assets/executive-intro/himachal-map.png";

function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[420px] w-[196px] shrink-0 rounded-[2.8rem] border-[3px] border-foreground/80 bg-foreground p-[7px] shadow-2xl md:h-[470px] md:w-[220px]">
      <span className="absolute -left-[5px] top-24 h-10 w-[3px] rounded-l bg-foreground/70" />
      <span className="absolute -left-[5px] top-36 h-16 w-[3px] rounded-l bg-foreground/70" />
      <span className="absolute -right-[5px] top-32 h-20 w-[3px] rounded-r bg-foreground/70" />
      <div className="relative h-full overflow-hidden rounded-[2.35rem] bg-card ring-1 ring-card/20">
        <div className="absolute left-1/2 top-2 z-30 h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-foreground" />
        <div className="absolute left-0 right-0 top-0 z-20 flex h-8 items-center justify-between px-5 text-[7px] font-bold text-foreground">
          <span>9:41</span>
          <span className="flex items-center gap-1"><Signal className="h-2 w-2" /><Wifi className="h-2 w-2" /><BatteryFull className="h-2.5 w-2.5" /></span>
        </div>
        {children}
        <div className="absolute bottom-1.5 left-1/2 z-30 h-1 w-20 -translate-x-1/2 rounded-full bg-foreground/80" />
      </div>
    </div>
  );
}

export default function SlidePhase1App() {
  return (
    <SlideLayout className="relative max-h-screen overflow-y-auto bg-card !py-10">
      <div className="absolute inset-0 grid-pattern" />
      <img src={himachalMap} alt="" className="pointer-events-none absolute -right-24 top-16 w-[34rem] opacity-[0.045] grayscale" />
      <img src="/favicon.png" alt="" className="pointer-events-none absolute -left-20 bottom-14 w-80 opacity-[0.035] grayscale" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
          <div>
            <span className="text-[11px] font-bold uppercase text-primary">Phase 1 · Proposed Citizen App</span>
            <h2 className="slide-title mt-1 text-3xl text-foreground md:text-4xl">जनभागीदारी से नशा मुक्त हिमाचल</h2>
          </div>
          <div className="hidden items-center gap-2 text-right md:flex">
            <ShieldCheck className="h-7 w-7 text-success" />
            <p className="text-xs font-bold text-foreground">Anonymous by design<br/><span className="font-normal text-muted-foreground">पहचान पूर्णतः सुरक्षित</span></p>
          </div>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[1.18fr_.82fr]">
          <div className="flex justify-center gap-5">
            <IPhoneFrame>
              <div className="relative flex h-full flex-col overflow-hidden bg-card pt-8">
                <img src={himachalMap} alt="" className="absolute -right-10 top-10 w-52 opacity-[0.08] grayscale" />
                <div className="absolute right-3 top-11 z-10 h-8 w-12 overflow-hidden rounded border border-border bg-card shadow-sm" aria-label="Congress flag">
                  <span className="absolute inset-x-0 top-0 h-2.5 bg-gold" />
                  <span className="absolute inset-x-0 bottom-0 h-2.5 bg-success" />
                  <img src="/favicon.png" alt="Congress hand symbol" className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-contain" />
                </div>
                <div className="relative mx-3 mt-2 h-[245px] overflow-hidden rounded-2xl bg-secondary">
                  <img src={sukhuPortrait} alt="Chief Minister Sukhvinder Singh Sukhu" className="h-full w-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 to-transparent px-3 pb-3 pt-10 text-primary-foreground">
                    <p className="text-[8px] font-semibold">मुख्यमंत्री ठाकुर सुखविंदर सिंह सुक्खू</p>
                    <p className="mt-1 text-[13px] font-black leading-tight">नशा मुक्त हिमाचल<br/>हमारा सामूहिक संकल्प</p>
                  </div>
                </div>
                <div className="relative px-4 pt-4 text-center">
                  <p className="text-[10px] font-bold text-foreground">आपकी सूचना · प्रदेश की सुरक्षा</p>
                  <p className="mt-1 text-[8px] text-muted-foreground">बिना नाम बताए सुरक्षित रिपोर्ट करें</p>
                  <div className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-[10px] font-black text-accent-foreground shadow-lg shadow-accent/20">
                    <Send className="h-3.5 w-3.5" /> गुप्त सूचना दें
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1 text-[7px] font-semibold text-success">
                    <ShieldCheck className="h-3 w-3" /> आपकी पहचान दर्ज नहीं की जाएगी
                  </div>
                </div>
              </div>
            </IPhoneFrame>

            <div className="hidden md:block">
            <IPhoneFrame>
              <div className="flex h-full flex-col bg-background px-4 pb-5 pt-10">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-black text-primary-foreground">NM</div>
                  <div><p className="text-[10px] font-black">गुप्त सूचना / Report</p><p className="text-[7px] text-muted-foreground">Una Pilot · GPS enabled</p></div>
                </div>
                <div className="space-y-2.5">
                  <div className="rounded-lg border border-border bg-card p-2.5 text-[8px] text-muted-foreground">
                    श्रेणी चुनें · Drug Selling
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[7px] font-bold">
                    <div className="rounded-lg border border-accent/30 bg-accent/10 p-2 text-center text-accent">नशा बिक्री</div>
                    <div className="rounded-lg bg-secondary p-2 text-center text-muted-foreground">संदिग्ध गतिविधि</div>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-2.5 text-[8px] text-muted-foreground">स्थान · Una Bus Stand</div>
                  <div className="h-16 rounded-lg border border-border bg-card p-2.5 text-[8px] text-muted-foreground">घटना का संक्षिप्त विवरण…</div>
                  <div className="rounded-xl border-2 border-dashed border-border bg-card p-5 text-center">
                    <Camera className="mx-auto mb-1 h-5 w-5 text-primary" />
                    <p className="text-[8px] font-semibold text-muted-foreground">Photo / Video Evidence</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-success/10 p-2 text-[7px] font-semibold text-success">
                    <MapPin className="h-3 w-3" /> समय व GPS स्वतः दर्ज होंगे
                  </div>
                  <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-[9px] font-black text-primary-foreground shadow-lg shadow-primary/20"><Send className="h-3 w-3" /> सुरक्षित रूप से भेजें</div>
                </div>
              </div>
            </IPhoneFrame>
            </div>
          </div>

          <div className="space-y-4 border-l border-border pl-7">
            <p className="text-[10px] font-bold uppercase text-accent">Citizen Intelligence · नागरिक शक्ति</p>
            <h3 className="text-2xl font-black leading-tight text-foreground">सरकार का संकल्प,<br/><span className="text-primary">हर नागरिक की भागीदारी</span></h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">एक सुरक्षित digital channel—जहाँ सूचना सीधे Command Centre तक पहुँचे।</p>
            {[
              ["01", "पूरी तरह Anonymous", "नाम, मोबाइल या पहचान आवश्यक नहीं"],
              ["02", "Evidence-led Reporting", "Photo, video, location और auto time"],
              ["03", "Trackable Action", "Unique report ID से status tracking"],
            ].map(([number, title, copy]) => (
              <div key={number} className="grid grid-cols-[38px_1fr] gap-3 border-t border-border pt-3">
                <span className="text-lg font-black text-accent">{number}</span>
                <div><p className="text-sm font-bold text-foreground">{title}</p><p className="text-[11px] text-muted-foreground">{copy}</p></div>
              </div>
            ))}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold via-card to-success" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
