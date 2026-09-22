import { motion } from "framer-motion";
import { Eye, HandHeart, Radio, ScanSearch, Users } from "lucide-react";
import ExecutiveShell from "./ExecutiveShell";

const nodes = [
  { label: "Prevent", hi: "रोकथाम", icon: Eye }, { label: "Report", hi: "सूचना", icon: Radio },
  { label: "Identify", hi: "पहचान", icon: ScanSearch }, { label: "Rehabilitate", hi: "पुनर्वास", icon: HandHeart },
  { label: "Reintegrate", hi: "पुनर्स्थापन", icon: Users },
];
export default function ExecutiveSolution() {
  return (
    <ExecutiveShell eyebrow="Proposed technology solution · प्रस्तावित मंच">
      <h2 className="slide-title text-5xl uppercase leading-none md:text-7xl">Nasha Mukt Himachal</h2>
      <p className="mt-3 text-lg font-bold text-muted-foreground">One connected digital ecosystem</p>
      <div className="relative mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
        <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-border md:block" />
        <motion.div className="absolute left-[8%] top-1/2 hidden h-1 w-12 bg-accent md:block" animate={{ left: ["8%", "84%", "8%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
        {nodes.map((node, i) => <div key={node.label} className="relative flex min-h-36 flex-col items-center justify-center border bg-card px-4 text-center shadow-md"><span className="absolute left-3 top-3 text-[10px] font-black text-accent">0{i + 1}</span><node.icon className="h-8 w-8 text-primary" /><p className="mt-3 text-sm font-black uppercase">{node.label}</p><p className="mt-1 text-[10px] font-bold text-muted-foreground">{node.hi}</p></div>)}
      </div>
    </ExecutiveShell>
  );
}