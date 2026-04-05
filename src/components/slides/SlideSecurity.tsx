import { Lock, UserX, Shield, KeyRound, FileText } from "lucide-react";
import SlideLayout from "./SlideLayout";

const items = [
  { icon: UserX, title: "Anonymous Reporting", desc: "No personal data collected. Citizens report without creating accounts." },
  { icon: Lock, title: "Data Encryption", desc: "End-to-end encryption for all data in transit and at rest (AES-256)." },
  { icon: Shield, title: "No Facial Recognition", desc: "Phase 1 uses activity-based alerts only — no biometric identification." },
  { icon: KeyRound, title: "Role-Based Access", desc: "Strict access control — officers see only their assigned cases and zones." },
  { icon: FileText, title: "Audit Logs", desc: "Complete audit trail for every action — ensuring accountability." },
];

export default function SlideSecurity() {
  return (
    <SlideLayout>
      <div className="space-y-10">
        <div>
          <span className="badge-pill badge-crimson mb-4">Section 8</span>
          <h2 className="slide-title text-4xl md:text-5xl text-foreground mt-4">
            Security & Privacy
          </h2>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className={`stat-card space-y-3 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className="w-11 h-11 rounded-xl bg-navy/10 flex items-center justify-center">
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
