import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";
import { loginCommand, seedIfEmpty } from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";

export default function CommandLogin() {
  const nav = useNavigate();
  const [badgeId, setBadgeId] = useState("PB-LDH-1042");
  const [name, setName] = useState("Insp. H. Kaur");
  const [station, setStation] = useState("Ludhiana HQ");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!badgeId || password.length < 4) return;
    seedIfEmpty();
    loginCommand(badgeId, name, station);
    nav("/command");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[hsl(var(--navy))] p-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="glow-orb w-96 h-96 bg-primary top-0 -left-20" />
      <div className="glow-orb w-72 h-72 bg-accent bottom-0 right-0" />

      <div className="relative z-10 w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-sm">
            <ShieldCheck className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="text-primary-foreground">
            <h1 className="font-black text-2xl leading-tight">Command Centre</h1>
            <p className="text-xs opacity-70">NashaMukt Punjab · Restricted Access</p>
          </div>
        </div>

        <div className="bg-card rounded-3xl shadow-2xl p-8 border border-border">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-lg">Officer Sign-in</h2>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <Label>Badge ID</Label>
              <Input value={badgeId} onChange={(e) => setBadgeId(e.target.value)} />
            </div>
            <div>
              <Label>Officer Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Station / District</Label>
              <Input value={station} onChange={(e) => setStation(e.target.value)} />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Use demo1234"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Sign in Securely
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            Not an officer? <Link to="/app/login" className="text-primary font-semibold hover:underline">Citizen Login →</Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 opacity-70">
          <img src={bitdecentroLogo} alt="BitDecentro" className="h-5" />
          <span className="text-xs text-primary-foreground">Powered by BitDecentro</span>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="text-xs text-primary-foreground/70 hover:underline">← Back to Presentation</Link>
        </div>
      </div>
    </div>
  );
}
