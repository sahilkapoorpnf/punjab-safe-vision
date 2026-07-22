import { useNavigate, useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import {
  ArrowLeft,
  Clock,
  Download,
  MapPin,
  Shield,
  UserCheck,
  Activity,
} from "lucide-react";
import {
  ReportStatus,
  downloadCSV,
  getReportById,
  getReports,
  getUser,
  locationKey,
  reportsToCSV,
  updateReportStatus,
  useStoreVersion,
} from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CommandReportDetail() {
  const { id = "" } = useParams();
  const nav = useNavigate();
  const user = getUser();
  useStoreVersion();
  if (!user || user.role !== "command") {
    nav("/command/login");
    return null;
  }
  const report = getReportById(id);
  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-bold">Report not found</p>
          <Button className="mt-4" onClick={() => nav("/command")}>Back to Command Centre</Button>
        </div>
      </div>
    );
  }

  const locKey = locationKey(report.lat, report.lng);
  const sameLocation = useMemo(
    () => getReports().filter((r) => locationKey(r.lat, r.lng) === locKey),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, useStoreVersion()],
  );
  const sameZone = useMemo(
    () => getReports().filter((r) => r.zoneId === report.zoneId),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, useStoreVersion()],
  );
  const priorAtLocation = sameLocation.filter((r) => r.id !== report.id);
  const timeline = [...sameLocation].sort((a, b) => a.createdAt - b.createdAt);

  const setStatus = (s: ReportStatus) => {
    updateReportStatus(report.id, s, s === "Assigned" ? "Insp. H. Kaur" : undefined);
    toast.success(`Report ${report.id} → ${s}`);
  };

  const d = new Date(report.createdAt);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => nav("/command")}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Command Centre
            </Button>
            <div className="h-6 w-px bg-border" />
            <div>
              <p className="font-black text-lg">{report.id}</p>
              <p className="text-xs text-muted-foreground">{report.category} · {report.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => downloadCSV(`${report.id}.csv`, reportsToCSV([report]))}
            >
              <Download className="w-4 h-4 mr-1" /> CSV
            </Button>
            <Button size="sm" variant="outline" onClick={() => setStatus("Assigned")}>Assign</Button>
            <Button size="sm" variant="outline" onClick={() => setStatus("In Progress")}>In Progress</Button>
            <Button size="sm" onClick={() => setStatus("Resolved")}>Resolve</Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`badge-pill text-[10px] ${
                    report.severity === "High" ? "badge-crimson" : report.severity === "Medium" ? "badge-gold" : "badge-success"
                  }`}>{report.severity} severity</span>
                  <span className={`badge-pill text-[10px] ${
                    report.status === "Resolved" ? "badge-success" :
                    report.status === "Assigned" || report.status === "In Progress" ? "badge-gold" : "badge-crimson"
                  }`}>{report.status}</span>
                  {report.anonymous && <span className="badge-pill badge-blue text-[10px]">Anonymous</span>}
                </div>
                <h1 className="text-2xl font-black">{report.category}</h1>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <Link to={`/command/location/${locKey}`} className="text-primary hover:underline font-semibold">
                    {report.address}
                  </Link>
                  <span className="text-muted-foreground font-mono ml-2">{report.lat.toFixed(5)}, {report.lng.toFixed(5)}</span>
                </p>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                <p className="flex items-center gap-1 justify-end"><Clock className="w-3 h-3" /> {d.toLocaleString("en-IN")}</p>
                <p className="mt-1">Auto-captured by app</p>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-border">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Description</p>
              <p className="text-sm leading-relaxed">{report.description}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold mb-4">Evidence ({report.evidence.length})</h3>
            {report.evidence.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">No media attached to this report.</p>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {report.evidence.map((ev, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-secondary">
                    {ev.type === "photo" ? (
                      <img src={ev.dataUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <video src={ev.dataUrl} controls className="w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Timeline at this exact location</h3>
              <span className="text-xs text-muted-foreground">{timeline.length} events</span>
            </div>
            <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-1 before:bottom-1 before:w-px before:bg-border">
              {timeline.map((r) => {
                const dt = new Date(r.createdAt);
                const isCurrent = r.id === report.id;
                return (
                  <div key={r.id} className="relative">
                    <div className={`absolute -left-[18px] top-1 w-3 h-3 rounded-full ${
                      isCurrent ? "bg-primary ring-4 ring-primary/20" :
                      r.severity === "High" ? "bg-accent" : r.severity === "Medium" ? "bg-[hsl(var(--gold))]" : "bg-[hsl(var(--success))]"
                    }`} />
                    <Link to={`/command/report/${r.id}`} className="block group">
                      <p className="text-xs text-muted-foreground">{dt.toLocaleString("en-IN")}</p>
                      <p className="text-sm font-semibold group-hover:text-primary">
                        {r.category} <span className="font-normal text-muted-foreground">· {r.id}</span>
                      </p>
                      <p className="text-xs text-foreground/70 line-clamp-1">{r.description}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Assigned to</p>
              <p className="font-semibold text-sm flex items-center gap-1"><UserCheck className="w-4 h-4 text-primary" />{report.assignedTo ?? "Unassigned"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Zone</p>
              <p className="font-mono text-xs">{report.zoneId}</p>
              <p className="text-xs text-muted-foreground">{sameZone.length} reports in zone</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Repeat activity here</p>
              <p className="text-2xl font-black text-accent">{sameLocation.length}</p>
              <p className="text-xs text-muted-foreground">reports at {report.lat.toFixed(4)}, {report.lng.toFixed(4)}</p>
              <Link
                to={`/command/location/${locKey}`}
                className="mt-2 inline-flex items-center text-xs font-semibold text-primary hover:underline"
              >
                Open location detail →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h4 className="font-bold text-sm mb-3 flex items-center gap-1"><Activity className="w-4 h-4 text-primary" /> Prior reports at exact spot</h4>
            {priorAtLocation.length === 0 && <p className="text-xs text-muted-foreground italic">This is the first report at this location.</p>}
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {priorAtLocation.map((r) => (
                <Link
                  key={r.id}
                  to={`/command/report/${r.id}`}
                  className="block p-2 rounded-lg bg-secondary/40 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono">{r.id}</span>
                    <span className={`badge-pill text-[9px] ${
                      r.severity === "High" ? "badge-crimson" : r.severity === "Medium" ? "badge-gold" : "badge-success"
                    }`}>{r.severity}</span>
                  </div>
                  <p className="text-[11px] mt-1">{r.category}</p>
                  <p className="text-[10px] text-muted-foreground">{new Date(r.createdAt).toLocaleString("en-IN")}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <p className="font-bold text-sm">Anonymity guaranteed</p>
            </div>
            <p className="text-xs text-muted-foreground">
              No PII is exposed to officers. All timestamps and geo-coordinates are captured automatically by the citizen app.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
