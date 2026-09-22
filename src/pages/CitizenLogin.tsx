import { useNavigate, Link } from "react-router-dom";
import { Shield, EyeOff, Lock, MapPin, ShieldCheck, Send } from "lucide-react";
import { setUser, seedIfEmpty } from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";
import MobileFrame from "@/components/MobileFrame";
import sukhuPortrait from "@/assets/executive-intro/cm-sukhu-citizen-app.jpg";
import himachalMap from "@/assets/executive-intro/himachal-map.png";

export default function CitizenLogin() {
  const nav = useNavigate();

  const enterAnonymously = () => {
    seedIfEmpty();
    // Random opaque ID; no phone, no name, no identity
    const anonId = "anon_" + Math.random().toString(36).slice(2, 10);
    setUser({ role: "citizen", id: anonId, name: "Anonymous" });
    nav("/app");
  };

  return (
    <MobileFrame caption="NashaMukt Himachal · Citizen App (Anonymous)">
      <div className="relative w-full min-h-full bg-card">
        <img src={himachalMap} alt="" className="pointer-events-none absolute -right-16 top-24 w-80 opacity-[0.07] grayscale" />
        <img src="/favicon.png" alt="" className="pointer-events-none absolute -left-16 bottom-10 w-72 opacity-[0.04] grayscale" />

        {/* Awareness hero — CM Sukhu */}
        <div className="relative px-4 pt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-black text-sm leading-tight">NashaMukt Himachal</h1>
                <p className="text-[9px] text-muted-foreground">Citizen Reporting · Pilot: Una</p>
              </div>
            </div>
            <div className="relative h-8 w-12 overflow-hidden rounded border border-border bg-card shadow-sm" aria-label="Congress flag">
              <span className="absolute inset-x-0 top-0 h-2.5 bg-[hsl(var(--gold))]" />
              <span className="absolute inset-x-0 bottom-0 h-2.5 bg-[hsl(var(--success))]" />
              <img src="/favicon.png" alt="" className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 object-contain" />
            </div>
          </div>

          <div className="relative mt-3 h-[230px] overflow-hidden rounded-2xl bg-secondary">
            <img src={sukhuPortrait} alt="Chief Minister Sukhvinder Singh Sukhu" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 to-transparent px-4 pb-3 pt-12 text-primary-foreground">
              <p className="text-[9px] font-semibold opacity-90">मुख्यमंत्री ठाकुर सुखविंदर सिंह सुक्खू</p>
              <p className="mt-1 text-lg font-black leading-tight">नशा मुक्त हिमाचल<br />हमारा सामूहिक संकल्प</p>
            </div>
          </div>

          <div className="mt-3 text-center">
            <p className="text-xs font-bold text-foreground">आपकी सूचना · प्रदेश की सुरक्षा</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">बिना नाम बताए सुरक्षित रूप से रिपोर्ट करें</p>
            <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-[hsl(var(--success))]">
              <ShieldCheck className="h-3.5 w-3.5" /> आपकी पहचान दर्ज नहीं की जाएगी
            </div>
          </div>
        </div>

        <div className="relative w-full p-4 pb-6">
          <div className="bg-card rounded-3xl border border-border shadow-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <EyeOff className="w-5 h-5 text-primary" />
              <h2 className="font-bold text-base">100% Anonymous</h2>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              No name. No mobile number. No login. Your identity is never collected or shared with the Command Centre.
            </p>

            <div className="space-y-2 mb-5">
              {[
                { icon: EyeOff, title: "No personal details", desc: "We don't ask for your name, number, or Aadhaar." },
                { icon: Lock, title: "End-to-end encrypted", desc: "Reports are encrypted before leaving your device." },
                { icon: MapPin, title: "Only location & evidence", desc: "Officers see the incident — not who reported it." },
              ].map((f) => (
                <div key={f.title} className="flex gap-2.5 p-2.5 rounded-xl bg-secondary/50">
                  <f.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold">{f.title}</p>
                    <p className="text-[10px] text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={enterAnonymously} className="w-full" size="lg">
              Continue Anonymously →
            </Button>

            <p className="text-[9px] text-center text-muted-foreground mt-3">
              By continuing you agree to report in good faith. False reporting is a punishable offence under law.
            </p>

            <div className="mt-4 pt-4 border-t border-border text-center text-[11px] text-muted-foreground">
              Command Centre staff?{" "}
              <Link to="/command/login" className="text-primary font-semibold hover:underline">
                Officer Login →
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5 opacity-80">
            <img src={bitdecentroLogo} alt="BitDecentro" className="h-4" />
            <span className="text-[10px] text-primary-foreground">Powered by BitDecentro</span>
          </div>

          <div className="text-center mt-3">
            <Link to="/" className="text-[10px] text-primary-foreground/80 hover:underline">← Back to Presentation</Link>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
