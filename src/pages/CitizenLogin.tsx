import { useNavigate, Link } from "react-router-dom";
import { Shield, EyeOff, Lock, MapPin } from "lucide-react";
import { setUser, seedIfEmpty } from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";
import MobileFrame from "@/components/MobileFrame";

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
    <MobileFrame caption="NashaMukt Punjab · Citizen App (Anonymous)">
      <div className="w-full min-h-full flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent p-5">
        <div className="w-full">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-primary-foreground">
              <h1 className="font-black text-xl leading-tight">NashaMukt Punjab</h1>
              <p className="text-[10px] opacity-80">Citizen Reporting · Pilot: Ludhiana</p>
            </div>
          </div>

          <div className="bg-card rounded-3xl shadow-2xl p-6">
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
