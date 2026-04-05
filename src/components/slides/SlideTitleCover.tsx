import { Shield, Eye, Users } from "lucide-react";
import SlideLayout from "./SlideLayout";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";

export default function SlideTitleCover() {
  return (
    <SlideLayout dark className="slide-gradient-navy flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 badge-pill bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">
          <Shield className="w-4 h-4" />
          Government of Punjab Initiative
        </div>

        <h1 className="slide-title text-5xl md:text-7xl lg:text-8xl leading-tight">
          NashaMukt
          <br />
          <span className="text-trust-blue">Punjab</span>
        </h1>

        <div className="slide-accent-bar w-32 mx-auto" />

        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 font-light">
          AI-Powered Drug Control & Citizen Intelligence System
        </p>

        <div className="flex items-center justify-center gap-8 pt-8 opacity-60">
          <div className="flex items-center gap-2 text-sm">
            <Eye className="w-5 h-5" /> AI Surveillance
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-5 h-5" /> Citizen Reporting
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-5 h-5" /> Real-time Intelligence
          </div>
        </div>

        <div className="pt-12 flex flex-col items-center gap-3">
          <p className="text-xs opacity-40 uppercase tracking-widest">Built by</p>
          <img src={bitdecentroLogo} alt="BitDecentro" className="h-8 opacity-80" />
          <p className="text-sm opacity-50 font-medium">bitdecentro.com</p>
        </div>

        <p className="text-sm opacity-40">
          Confidential — For Government Officials & Decision Makers Only
        </p>
      </div>
    </SlideLayout>
  );
}
