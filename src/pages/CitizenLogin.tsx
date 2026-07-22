import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Smartphone } from "lucide-react";
import { loginCitizen, seedIfEmpty } from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";

export default function CitizenLogin() {
  const nav = useNavigate();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setOtpSent(true);
  };
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) return;
    seedIfEmpty();
    loginCitizen(phone, name || "Citizen");
    nav("/app");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
            <Shield className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="text-primary-foreground">
            <h1 className="font-black text-2xl leading-tight">NashaMukt Punjab</h1>
            <p className="text-xs opacity-80">Citizen Reporting App · Pilot: Ludhiana</p>
          </div>
        </div>

        <div className="bg-card rounded-3xl shadow-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <Smartphone className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-lg">Sign in to report</h2>
          </div>

          {!otpSent ? (
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <Label>Your Name (optional)</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Leave blank to stay anonymous"
                />
              </div>
              <div>
                <Label>Mobile Number</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit mobile"
                  inputMode="numeric"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send OTP
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-4">
              <p className="text-sm text-muted-foreground">
                OTP sent to +91 {phone}. Use <b>1234</b> for demo.
              </p>
              <div>
                <Label>Enter OTP</Label>
                <Input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="4-digit OTP"
                  inputMode="numeric"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Verify & Enter App
              </Button>
              <button
                type="button"
                onClick={() => setOtpSent(false)}
                className="text-xs text-muted-foreground hover:underline w-full text-center"
              >
                Change number
              </button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            Command Centre staff? <Link to="/command/login" className="text-primary font-semibold hover:underline">Officer Login →</Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 opacity-70">
          <img src={bitdecentroLogo} alt="BitDecentro" className="h-5" />
          <span className="text-xs text-primary-foreground">Powered by BitDecentro</span>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="text-xs text-primary-foreground/80 hover:underline">← Back to Presentation</Link>
        </div>
      </div>
    </div>
  );
}
