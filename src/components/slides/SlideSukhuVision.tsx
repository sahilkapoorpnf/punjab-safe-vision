import { ArrowRight, ShieldCheck } from "lucide-react";
import SlideLayout from "./SlideLayout";
import SourceLink from "./SourceLink";
import cmWalkathon from "@/assets/cm-intro/cm-sukhu-walkathon.jpg";

const SOURCE = "https://indianexpress.com/article/cities/chandigarh/hamirpur-cm-sukhu-leads-anti-chitta-walkathon-says-will-wipe-out-network-10424518/";

export default function SlideSukhuVision() {
  return (
    <SlideLayout dark className="relative flex items-end overflow-hidden bg-navy">
      <img src={cmWalkathon} alt="Chief Minister Sukhvinder Singh Sukhu leading an anti-chitta public pledge in Hamirpur" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/20" />

      <div className="relative z-10 max-w-3xl pb-8">
        <div className="mb-5 inline-flex items-center gap-2 border-l-4 border-accent bg-navy/75 px-4 py-2 text-xs font-bold uppercase backdrop-blur-sm">
          <ShieldCheck className="h-4 w-4" /> Hon’ble Chief Minister’s Sankalp
        </div>
        <h1 className="slide-title text-5xl leading-tight md:text-7xl">
          “चिट्टा मुक्त हिमाचल”
          <span className="mt-2 block text-2xl font-semibold md:text-4xl">अब एक जन-आंदोलन है.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-primary-foreground/80 md:text-xl">
          Hon’ble CM Thakur Sukhvinder Singh Sukhu के नेतृत्व में — strict enforcement, public participation और youth protection का निर्णायक संकल्प.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2 text-sm font-bold"><ArrowRight className="h-4 w-4 text-accent" /> Sankalp से measurable action तक</div>
          <SourceLink href={SOURCE} dark>Indian Express / PTI · 17 Dec 2025</SourceLink>
        </div>
      </div>
    </SlideLayout>
  );
}