import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  Camera,
  Clock,
  EyeOff,
  History,
  LogOut,
  MapPin,
  Send,
  Shield,
  Video,
  X,
} from "lucide-react";

import {
  Evidence,
  LUDHIANA_POINTS,
  ReportCategory,
  addReport,
  getReports,
  getUser,
  logout,
  useStoreVersion,
} from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";
import MobileFrame from "@/components/MobileFrame";

const categories: ReportCategory[] = [
  "Drug Selling",
  "Suspicious Activity",
  "Consumption",
  "Trafficking",
  "Other",
];

export default function CitizenApp() {
  const nav = useNavigate();
  const user = getUser();
  useStoreVersion();

  if (!user || user.role !== "citizen") {
    nav("/app/login");
    return null;
  }

  const [tab, setTab] = useState<"report" | "history" | "map">("report");
  const [category, setCategory] = useState<ReportCategory>("Drug Selling");
  const [description, setDescription] = useState("");
  const [locIdx, setLocIdx] = useState(0);
  const anonymous = true;
  const [severity, setSeverity] = useState<"Low" | "Medium" | "High">("High");
  const [evidence, setEvidence] = useState<Evidence[]>([]);

  const myReports = useMemo(
    () => getReports().filter((r) => r.citizenId === user.id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [useStoreVersion()],
  );

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>, type: "photo" | "video") => {
    const files = Array.from(e.target.files ?? []);
    for (const f of files) {
      const reader = new FileReader();
      reader.onload = () => {
        setEvidence((prev) => [
          ...prev,
          { type, dataUrl: reader.result as string, name: f.name },
        ]);
      };
      reader.readAsDataURL(f);
    }
    e.target.value = "";
  };

  const submit = () => {
    if (!description.trim()) {
      toast.error("Please add a short description");
      return;
    }
    const loc = LUDHIANA_POINTS[locIdx];
    addReport({
      citizenId: user.id,
      citizenName: anonymous ? "Anonymous" : user.name,
      anonymous,
      category,
      description,
      lat: loc.lat + (Math.random() - 0.5) * 0.003,
      lng: loc.lng + (Math.random() - 0.5) * 0.003,
      address: loc.name,
      evidence,
      severity,
    });
    toast.success("Report submitted to Command Centre");
    setDescription("");
    setEvidence([]);
    setTab("history");
  };

  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-md flex flex-col bg-card min-h-screen shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground px-5 pt-6 pb-8 rounded-b-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <div>
                <p className="font-black leading-tight">NashaMukt Punjab</p>
                <p className="text-[10px] opacity-80">Pilot · Ludhiana</p>
              </div>
            </div>
            <button
              onClick={() => {
                logout();
                nav("/app/login");
              }}
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <EyeOff className="w-4 h-4 opacity-80" />
            <div>
              <p className="text-xs opacity-80">You are reporting as</p>
              <p className="text-lg font-bold">Anonymous Citizen</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 border-b border-border sticky top-0 bg-card z-10">
          {[
            { k: "report", label: "Report", icon: AlertTriangle },
            { k: "history", label: "My Reports", icon: History },
            { k: "map", label: "Zones", icon: MapPin },
          ].map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k as typeof tab)}
              className={`py-3 flex flex-col items-center gap-1 text-xs font-semibold ${
                tab === t.k ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex-1 p-5 space-y-4">
          {tab === "report" && (
            <>
              <div>
                <Label>Category</Label>
                <Select value={category} onValueChange={(v) => setCategory(v as ReportCategory)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Location (GPS pinned)</Label>
                <Select value={String(locIdx)} onValueChange={(v) => setLocIdx(Number(v))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {LUDHIANA_POINTS.map((p, i) => (
                      <SelectItem key={p.name} value={String(i)}>{p.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-[10px] text-muted-foreground mt-1">
                  Lat {LUDHIANA_POINTS[locIdx].lat.toFixed(4)}, Lng {LUDHIANA_POINTS[locIdx].lng.toFixed(4)} · Auto-detected via GPS
                </p>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-border">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <p className="text-[11px] text-muted-foreground">
                  Date & time are captured automatically — you don't need to enter them.
                  <span className="block text-foreground font-semibold">{new Date().toLocaleString("en-IN")}</span>
                </p>
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What did you observe? (people, vehicles, activity...)"
                  rows={3}
                />
              </div>


              <div>
                <Label>Severity</Label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {(["Low", "Medium", "High"] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSeverity(s)}
                      className={`py-2 rounded-lg text-xs font-semibold border ${
                        severity === s
                          ? s === "High"
                            ? "bg-accent text-accent-foreground border-accent"
                            : s === "Medium"
                            ? "bg-[hsl(var(--gold))] text-white border-[hsl(var(--gold))]"
                            : "bg-[hsl(var(--success))] text-white border-[hsl(var(--success))]"
                          : "bg-secondary text-foreground border-border"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Evidence</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <label className="flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-dashed border-border hover:border-primary cursor-pointer text-xs font-semibold text-muted-foreground">
                    <Camera className="w-4 h-4" /> Add Photo
                    <input type="file" accept="image/*" capture="environment" hidden onChange={(e) => handleFile(e, "photo")} />
                  </label>
                  <label className="flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-dashed border-border hover:border-primary cursor-pointer text-xs font-semibold text-muted-foreground">
                    <Video className="w-4 h-4" /> Add Video
                    <input type="file" accept="video/*" capture="environment" hidden onChange={(e) => handleFile(e, "video")} />
                  </label>
                </div>
                {evidence.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {evidence.map((ev, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
                        {ev.type === "photo" ? (
                          <img src={ev.dataUrl} alt="evidence" className="w-full h-full object-cover" />
                        ) : (
                          <video src={ev.dataUrl} className="w-full h-full object-cover" />
                        )}
                        <button
                          onClick={() => setEvidence((prev) => prev.filter((_, x) => x !== i))}
                          className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <EyeOff className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold">You are fully anonymous</p>
                  <p className="text-[10px] text-muted-foreground">Officers only see the incident details — never your identity.</p>
                </div>
              </div>

              <Button onClick={submit} className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" /> Submit Report
              </Button>
            </>
          )}

          {tab === "history" && (
            <div className="space-y-3">
              <p className="text-sm font-semibold">Your submitted reports ({myReports.length})</p>
              {myReports.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-8">No reports yet.</p>
              )}
              {myReports.map((r) => (
                <div key={r.id} className="p-3 rounded-xl border border-border bg-card">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-sm">{r.category}</p>
                      <p className="text-[11px] text-muted-foreground">{r.address}</p>
                    </div>
                    <span className={`badge-pill text-[9px] ${
                      r.status === "Resolved" ? "badge-success" :
                      r.status === "Assigned" || r.status === "In Progress" ? "badge-gold" : "badge-crimson"
                    }`}>{r.status}</span>
                  </div>
                  <p className="text-xs mt-2 text-foreground/80">{r.description}</p>
                  <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground">
                    <span>#{r.id}</span>
                    <span>{new Date(r.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "map" && (
            <div>
              <p className="text-sm font-semibold mb-2">Safety zones near you</p>
              <div className="relative w-full h-64 rounded-xl bg-secondary/50 border border-border overflow-hidden">
                <div className="absolute inset-0 grid-pattern" />
                {LUDHIANA_POINTS.map((p, i) => {
                  const reports = getReports().filter((r) => r.address === p.name).length;
                  const color = reports >= 3 ? "bg-accent" : reports >= 1 ? "bg-[hsl(var(--gold))]" : "bg-[hsl(var(--success))]";
                  return (
                    <div key={p.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: `${15 + (i % 4) * 22}%`, left: `${15 + Math.floor(i / 4) * 60}%` }}>
                      <div className={`w-6 h-6 rounded-full ${color} opacity-70 animate-pulse`} />
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold text-foreground bg-card px-1 rounded">
                        {p.name.split(",")[0]} · {reports}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 text-[10px]">
                <div className="p-2 rounded-lg bg-[hsl(var(--success)/0.1)] text-center"><span className="font-bold text-[hsl(var(--success))]">Safe</span></div>
                <div className="p-2 rounded-lg bg-[hsl(var(--gold)/0.15)] text-center"><span className="font-bold text-[hsl(45,70%,35%)]">Moderate</span></div>
                <div className="p-2 rounded-lg bg-[hsl(var(--accent)/0.1)] text-center"><span className="font-bold text-accent">Red Zone</span></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 py-3 border-t border-border opacity-60">
          <img src={bitdecentroLogo} alt="BitDecentro" className="h-4" />
          <span className="text-[10px] text-muted-foreground">Powered by BitDecentro</span>
        </div>
      </div>
    </div>
  );
}
