import { motion } from "framer-motion";
import ExecutiveShell from "./ExecutiveShell";

const nodes = ["Prevent", "Report", "Identify", "Rehabilitate", "Reintegrate"];
export default function ExecutiveSolution() {
  return (
    <ExecutiveShell dark eyebrow="Proposed technology solution">
      <h2 className="slide-title text-5xl uppercase leading-none md:text-7xl">Nasha Mukt Himachal</h2>
      <p className="mt-5 max-w-4xl text-lg text-primary-foreground/65 md:text-2xl">A proposed digital platform to connect prevention, reporting, intervention and rehabilitation.</p>
      <div className="relative mt-16 grid gap-5 md:grid-cols-5">
        <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-primary-foreground/20 md:block" />
        <motion.div className="absolute left-[8%] top-1/2 hidden h-1 w-12 bg-accent md:block" animate={{ left: ["8%", "84%", "8%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
        {nodes.map((node, i) => <div key={node} className="relative flex min-h-28 items-center justify-center border border-primary-foreground/20 bg-navy px-4 text-center"><span className="absolute left-3 top-3 text-[10px] font-black text-accent">0{i + 1}</span><p className="text-sm font-black uppercase">{node}</p></div>)}
      </div>
    </ExecutiveShell>
  );
}