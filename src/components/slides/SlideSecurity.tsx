import { Lock, UserX, Shield, KeyRound, FileText } from "lucide-react";
import SlideLayout from "./SlideLayout";
import heroSecurity from "@/assets/hero-security.jpg";

const items = [
  { icon: UserX, title: "Anonymous Reporting", desc: "No personal data collected. Citizens report without creating accounts." },
  { icon: Lock, title: "Data Encryption", desc: "End-to-end encryption for all data in transit and at rest (AES-256)." },
  { icon: Shield, title: "No Facial Recognition", desc: "Phase 1 uses activity-based alerts only — no biometric identification." },
  { icon: KeyRound, title: "Role-Based Access", desc: "Strict access control — officers see only their assigned cases and zones." },
  { icon: FileText, title: "Audit Logs", desc: "Complete audit trail for every action — ensuring accountability." },
];

export default function SlideSecurity() {
  return (
    <SlideLayout className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-48 h-48 bg-primary top-20 right-10 opacity-10" />

      <div className="space-y-10 relative z-10">
        <div>
          <span className="badge-pill badge-crimson mb-4">Section 8</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Security & Privacy
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src={heroSecurity} alt="Digital security shield visualization" className="w-full h-44 md:h-52 object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <p className="text-xs font-bold text-foreground bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">🔒 Government-Grade Security Standards</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className={`stat-card-hover space-y-3 group ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className="w-11 h-11 rounded-xl bg-navy/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <item.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 text-center">
          <p className="text-sm font-semibold text-primary">
            🔒 All systems comply with Indian IT Act and data localization requirements.
            Infrastructure hosted on India-based secure cloud.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
