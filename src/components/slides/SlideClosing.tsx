import { Shield, Mail, Phone, Globe } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlideClosing() {
  return (
    <SlideLayout dark className="slide-gradient-navy flex items-center justify-center">
      <div className="text-center space-y-10 max-w-4xl mx-auto">
        <Shield className="w-16 h-16 mx-auto opacity-40" />

        <h2 className="slide-title text-3xl md:text-4xl lg:text-5xl leading-tight">
          "This is not just a software platform — this is Punjab's digital mission to eliminate drugs through{" "}
          <span className="text-trust-blue">technology</span>,{" "}
          <span className="text-gold">transparency</span>, and{" "}
          <span className="text-success">citizen empowerment</span>."
        </h2>

        <div className="slide-accent-bar w-32 mx-auto" />

        <div className="pt-8 space-y-6">
          <h3 className="text-2xl font-bold">Thank You</h3>
          <p className="opacity-60 text-sm">NashaMukt Punjab — Building a Safer Future Together</p>

          <div className="flex items-center justify-center gap-8 pt-4 opacity-50 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contact@example.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 XXXX XXXX XX
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" /> www.example.com
            </div>
          </div>
        </div>

        <p className="text-xs opacity-30 pt-8">
          Confidential Document — Government of Punjab
        </p>
      </div>
    </SlideLayout>
  );
}
