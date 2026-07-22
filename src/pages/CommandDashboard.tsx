import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  Filter,
  LayoutDashboard,
  LogOut,
  Map as MapIcon,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import {
  Report,
  ReportStatus,
  computeZones,
  downloadCSV,
  getNotifications,
  getReports,
  getUser,
  locationKey,
  logout,
  markAllRead,
  markNotificationRead,
  reportsToCSV,
  seedIfEmpty,
  updateReportStatus,
  useStoreVersion,
} from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Area,
  AreaChart,
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { toast } from "sonner";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";


type Section = "overview" | "reports" | "zones" | "notifications" | "officers" | "analytics" | "settings";

export default function CommandDashboard() {
  const nav = useNavigate();
  const user = getUser();
  useStoreVersion();

  useEffect(() => {
    if (!user || user.role !== "command") {
      nav("/command/login");
    } else {
      seedIfEmpty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [section, setSection] = useState<Section>("overview");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  if (!user) return null;

  const reports = getReports();
  const zones = computeZones();
  const notifs = getNotifications();
  const unread = notifs.filter((n) => !n.read).length;

  const stats = {
    total: reports.length,
    newCount: reports.filter((r) => r.status === "New").length,
    assigned: reports.filter((r) => r.status === "Assigned" || r.status === "In Progress").length,
    resolved: reports.filter((r) => r.status === "Resolved").length,
    redZones: zones.filter((z) => z.severity === "High").length,
  };

  const nav_items: { key: Section; label: string; icon: any; badge?: number }[] = [
    { key: "overview", label: "Overview", icon: LayoutDashboard },
    { key: "reports", label: "Reports", icon: AlertTriangle, badge: stats.newCount },
    { key: "zones", label: "Hotspot Zones", icon: MapIcon, badge: stats.redZones },
    { key: "notifications", label: "Notifications", icon: Bell, badge: unread },
    { key: "officers", label: "Officers", icon: Users },
    { key: "analytics", label: "Analytics", icon: BarChart3 },
    { key: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-[hsl(var(--navy))] text-primary-foreground flex flex-col">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-black text-sm leading-tight">NashaMukt Punjab</p>
              <p className="text-[10px] opacity-70">Command Centre · Ludhiana</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {nav_items.map((n) => (
            <button
              key={n.key}
              onClick={() => setSection(n.key)}
              className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                section === n.key
                  ? "bg-primary text-primary-foreground"
                  : "text-primary-foreground/70 hover:bg-white/5 hover:text-primary-foreground"
              }`}
            >
              <span className="flex items-center gap-3">
                <n.icon className="w-4 h-4" />
                {n.label}
              </span>
              {n.badge ? (
                <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {n.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-white/5">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold">
              {user.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">{user.name}</p>
              <p className="text-[10px] opacity-60 truncate">{user.badgeId} · {user.station}</p>
            </div>
            <button onClick={() => { logout(); nav("/command/login"); }} className="p-1.5 rounded hover:bg-white/10">
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-3 opacity-60">
            <img src={bitdecentroLogo} alt="BitDecentro" className="h-3.5" />
            <span className="text-[9px]">Powered by BitDecentro</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 flex flex-col">
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="badge-pill badge-success">Live</span>
            <h1 className="font-bold text-lg capitalize">{section}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9 w-64 h-9" placeholder="Search reports, zones..." />
            </div>
            <button
              onClick={() => setSection("notifications")}
              className="relative p-2 rounded-lg hover:bg-secondary"
            >
              <Bell className="w-5 h-5" />
              {unread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 text-[9px] font-bold bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          {section === "overview" && <Overview stats={stats} reports={reports} zones={zones} onOpenReport={setSelectedReport} />}
          {section === "reports" && <ReportsSection reports={reports} onOpen={setSelectedReport} />}
          {section === "zones" && <ZonesSection zones={zones} />}
          {section === "notifications" && <NotificationsSection onOpenReport={(id) => {
            const r = reports.find((x) => x.id === id);
            if (r) setSelectedReport(r);
          }} />}
          {section === "officers" && <OfficersSection />}
          {section === "analytics" && <AnalyticsSection reports={reports} zones={zones} />}
          {section === "settings" && <SettingsSection />}
        </div>
      </main>

      <ReportDialog report={selectedReport} onClose={() => setSelectedReport(null)} />
    </div>
  );
}

// -------- Overview --------
function Overview({ stats, reports, zones, onOpenReport }: any) {
  const recent = reports.slice(0, 8);
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Total Reports", value: stats.total, icon: Activity, color: "text-primary" },
          { label: "New", value: stats.newCount, icon: AlertTriangle, color: "text-accent" },
          { label: "In Progress", value: stats.assigned, icon: Clock, color: "text-[hsl(45,70%,35%)]" },
          { label: "Resolved", value: stats.resolved, icon: CheckCircle2, color: "text-[hsl(var(--success))]" },
          { label: "Red Zones", value: stats.redZones, icon: Zap, color: "text-accent" },
        ].map((s) => (
          <div key={s.label} className="stat-card-hover">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</p>
              <s.icon className={`w-4 h-4 ${s.color}`} />
            </div>
            <p className={`text-3xl font-black mt-2 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Live Feed — Recent Reports</h3>
            <span className="text-xs text-muted-foreground">{recent.length} shown</span>
          </div>
          <div className="space-y-2">
            {recent.map((r: Report) => (
              <button
                key={r.id}
                onClick={() => onOpenReport(r)}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary transition-colors text-left"
              >
                <div className={`w-2 h-10 rounded-full ${
                  r.severity === "High" ? "bg-accent" : r.severity === "Medium" ? "bg-[hsl(var(--gold))]" : "bg-[hsl(var(--success))]"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{r.category} · <span className="text-muted-foreground font-normal">{r.address}</span></p>
                  <p className="text-xs text-muted-foreground truncate">{r.description}</p>
                </div>
                <div className="text-right">
                  <span className={`badge-pill text-[9px] ${
                    r.status === "Resolved" ? "badge-success" :
                    r.status === "Assigned" || r.status === "In Progress" ? "badge-gold" : "badge-crimson"
                  }`}>{r.status}</span>
                  <p className="text-[10px] text-muted-foreground mt-1">{new Date(r.createdAt).toLocaleTimeString()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="font-bold mb-4">Top Hotspot Zones</h3>
          <div className="space-y-3">
            {zones.slice(0, 5).map((z: any) => (
              <div key={z.zoneId} className="p-3 rounded-lg bg-secondary/40">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">{z.label}</p>
                  <span className={`badge-pill text-[9px] ${
                    z.severity === "High" ? "badge-crimson" : z.severity === "Medium" ? "badge-gold" : "badge-success"
                  }`}>{z.severity}</span>
                </div>
                <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                  <span>{z.reportCount} reports</span>
                  <span>{z.centerLat.toFixed(3)}, {z.centerLng.toFixed(3)}</span>
                </div>
              </div>
            ))}
            {zones.length === 0 && <p className="text-xs text-muted-foreground">No zones yet.</p>}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-bold mb-4">Ludhiana — Live Heatmap</h3>
        <div className="relative w-full h-72 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/10 border border-border overflow-hidden grid-pattern">
          {zones.map((z: any, i: number) => {
            const size = Math.min(24 + z.reportCount * 12, 96);
            const color = z.severity === "High" ? "heatmap-red" : z.severity === "Medium" ? "heatmap-yellow" : "heatmap-green";
            return (
              <div
                key={z.zoneId}
                className={`heatmap-dot ${color}`}
                style={{
                  width: size, height: size,
                  top: `${20 + ((i * 37) % 60)}%`,
                  left: `${10 + ((i * 53) % 80)}%`,
                }}
                title={`${z.label} · ${z.reportCount} reports`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// -------- Reports --------
function ReportsSection({ reports, onOpen }: { reports: Report[]; onOpen: (r: Report) => void }) {
  const [status, setStatus] = useState<string>("all");
  const [severity, setSeverity] = useState<string>("all");
  const [q, setQ] = useState("");

  const filtered = reports.filter((r) => {
    if (status !== "all" && r.status !== status) return false;
    if (severity !== "all" && r.severity !== severity) return false;
    if (q && !`${r.id} ${r.address} ${r.category} ${r.description}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 text-sm">
          <Filter className="w-4 h-4 text-muted-foreground" /> Filters:
        </div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
          <SelectContent>
            {["all", "New", "Assigned", "In Progress", "Resolved"].map((s) => (
              <SelectItem key={s} value={s}>{s === "all" ? "All statuses" : s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={severity} onValueChange={setSeverity}>
          <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
          <SelectContent>
            {["all", "Low", "Medium", "High"].map((s) => (
              <SelectItem key={s} value={s}>{s === "all" ? "All severities" : s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input className="w-64" placeholder="Search..." value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="text-xs text-muted-foreground ml-auto">{filtered.length} of {reports.length}</span>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-3">ID</th>
              <th className="text-left px-4 py-3">Category</th>
              <th className="text-left px-4 py-3">Location</th>
              <th className="text-left px-4 py-3">Reporter</th>
              <th className="text-left px-4 py-3">Severity</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-border hover:bg-secondary/30">
                <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                <td className="px-4 py-3">{r.category}</td>
                <td className="px-4 py-3">
                  <p>{r.address}</p>
                  <p className="text-[10px] text-muted-foreground">{r.lat.toFixed(4)}, {r.lng.toFixed(4)}</p>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{r.citizenName}</td>
                <td className="px-4 py-3">
                  <span className={`badge-pill text-[9px] ${
                    r.severity === "High" ? "badge-crimson" : r.severity === "Medium" ? "badge-gold" : "badge-success"
                  }`}>{r.severity}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`badge-pill text-[9px] ${
                    r.status === "Resolved" ? "badge-success" :
                    r.status === "Assigned" || r.status === "In Progress" ? "badge-gold" : "badge-crimson"
                  }`}>{r.status}</span>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{new Date(r.createdAt).toLocaleString()}</td>
                <td className="px-4 py-3">
                  <Button variant="outline" size="sm" onClick={() => onOpen(r)}>Open</Button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={8} className="text-center py-10 text-sm text-muted-foreground">No matching reports.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// -------- Zones --------
function ZonesSection({ zones }: any) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Repeated activity at the same lat/lng gets grouped into zones. High-count zones require immediate patrol allocation.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {zones.map((z: any) => (
          <div key={z.zoneId} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">{z.label}</p>
                <p className="text-[10px] text-muted-foreground font-mono">{z.zoneId}</p>
              </div>
              <span className={`badge-pill text-[9px] ${
                z.severity === "High" ? "badge-crimson" : z.severity === "Medium" ? "badge-gold" : "badge-success"
              }`}>{z.severity}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="p-2 rounded bg-secondary/50 text-center">
                <p className="text-lg font-black text-primary">{z.reportCount}</p>
                <p className="text-[9px] text-muted-foreground">Reports</p>
              </div>
              <div className="p-2 rounded bg-secondary/50 text-center">
                <p className="text-xs font-bold">{z.centerLat.toFixed(3)}</p>
                <p className="text-[9px] text-muted-foreground">Lat</p>
              </div>
              <div className="p-2 rounded bg-secondary/50 text-center">
                <p className="text-xs font-bold">{z.centerLng.toFixed(3)}</p>
                <p className="text-[9px] text-muted-foreground">Lng</p>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2">
              Last activity: {new Date(z.lastReportAt).toLocaleString()}
            </p>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">History ({z.reports.length})</p>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {z.reports.map((r: Report) => (
                  <div key={r.id} className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-muted-foreground">{r.id}</span>
                    <span>{r.category}</span>
                    <span className="text-muted-foreground">{new Date(r.createdAt).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {zones.length === 0 && <p className="text-sm text-muted-foreground">No zones detected yet.</p>}
      </div>
    </div>
  );
}

// -------- Notifications --------
function NotificationsSection({ onOpenReport }: { onOpenReport: (id: string) => void }) {
  useStoreVersion();
  const notifs = getNotifications();
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{notifs.length} notifications · {notifs.filter((n) => !n.read).length} unread</p>
        <Button variant="outline" size="sm" onClick={() => markAllRead()}>Mark all read</Button>
      </div>
      <div className="rounded-2xl border border-border bg-card divide-y divide-border">
        {notifs.map((n) => (
          <button
            key={n.id}
            onClick={() => {
              markNotificationRead(n.id);
              onOpenReport(n.reportId);
            }}
            className={`w-full text-left p-4 flex items-start gap-3 hover:bg-secondary/40 ${!n.read ? "bg-primary/5" : ""}`}
          >
            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
              n.severity === "High" ? "bg-accent" : n.severity === "Medium" ? "bg-[hsl(var(--gold))]" : "bg-[hsl(var(--success))]"
            }`} />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.message}</p>
            </div>
            <div className="text-[10px] text-muted-foreground shrink-0">{new Date(n.createdAt).toLocaleString()}</div>
            {!n.read && <span className="badge-pill badge-crimson text-[9px]">NEW</span>}
          </button>
        ))}
        {notifs.length === 0 && <div className="p-8 text-center text-sm text-muted-foreground">No notifications.</div>}
      </div>
    </div>
  );
}

// -------- Officers --------
function OfficersSection() {
  const officers = [
    { id: "PB-LDH-1042", name: "Insp. H. Kaur", station: "Ludhiana HQ", active: 12, resolved: 87 },
    { id: "PB-LDH-1087", name: "SI. R. Singh", station: "Model Town PS", active: 8, resolved: 63 },
    { id: "PB-LDH-1123", name: "SI. M. Sharma", station: "Civil Lines PS", active: 5, resolved: 44 },
    { id: "PB-LDH-1204", name: "ASI. J. Kaur", station: "Dugri PS", active: 3, resolved: 31 },
    { id: "PB-LDH-1298", name: "HC. P. Verma", station: "Haibowal PS", active: 2, resolved: 22 },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-secondary/50 text-xs uppercase text-muted-foreground">
          <tr>
            <th className="text-left px-4 py-3">Badge</th>
            <th className="text-left px-4 py-3">Officer</th>
            <th className="text-left px-4 py-3">Station</th>
            <th className="text-left px-4 py-3">Active Cases</th>
            <th className="text-left px-4 py-3">Resolved</th>
            <th className="text-left px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {officers.map((o) => (
            <tr key={o.id} className="border-t border-border">
              <td className="px-4 py-3 font-mono text-xs">{o.id}</td>
              <td className="px-4 py-3 font-semibold">{o.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{o.station}</td>
              <td className="px-4 py-3">{o.active}</td>
              <td className="px-4 py-3">{o.resolved}</td>
              <td className="px-4 py-3"><span className="badge-pill badge-success text-[9px]">On Duty</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// -------- Analytics --------
function AnalyticsSection({ reports, zones }: any) {
  const byCategory = useMemo(() => {
    const map: Record<string, number> = {};
    reports.forEach((r: Report) => (map[r.category] = (map[r.category] || 0) + 1));
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [reports]);

  const bySeverity = [
    { name: "High", value: reports.filter((r: Report) => r.severity === "High").length },
    { name: "Medium", value: reports.filter((r: Report) => r.severity === "Medium").length },
    { name: "Low", value: reports.filter((r: Report) => r.severity === "Low").length },
  ];

  const trend = useMemo(() => {
    const days: { day: string; count: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const label = d.toLocaleDateString("en-IN", { weekday: "short" });
      const count = reports.filter((r: Report) => {
        const rd = new Date(r.createdAt);
        return rd.toDateString() === d.toDateString();
      }).length;
      days.push({ day: label, count });
    }
    return days;
  }, [reports]);

  const COLORS = ["hsl(var(--accent))", "hsl(var(--gold))", "hsl(var(--success))"];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-bold mb-4">Reports by Category</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={byCategory}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" fontSize={11} />
            <YAxis fontSize={11} />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-bold mb-4">Severity Distribution</h3>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie data={bySeverity} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {bySeverity.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 md:col-span-2">
        <h3 className="font-bold mb-4">7-Day Report Trend</h3>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={trend}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="day" fontSize={11} />
            <YAxis fontSize={11} />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// -------- Settings --------
function SettingsSection() {
  return (
    <div className="max-w-2xl space-y-4">
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-bold mb-2">Command Centre Configuration</h3>
        <p className="text-sm text-muted-foreground">Configure alert thresholds, patrol zones, and officer assignments.</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Auto-escalation threshold</label>
            <Input defaultValue="3 reports in same zone" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Zone radius (km)</label>
            <Input defaultValue="1.1" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">SLA — High severity</label>
            <Input defaultValue="30 minutes" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">SLA — Medium</label>
            <Input defaultValue="2 hours" />
          </div>
        </div>
        <Button className="mt-4">Save changes</Button>
      </div>
    </div>
  );
}

// -------- Report Dialog --------
function ReportDialog({ report, onClose }: { report: Report | null; onClose: () => void }) {
  if (!report) return null;
  const otherInZone = getReports().filter((r) => r.zoneId === report.zoneId && r.id !== report.id);

  const setStatus = (s: ReportStatus) => {
    updateReportStatus(report.id, s, s === "Assigned" ? "Insp. H. Kaur" : undefined);
    toast.success(`Report ${report.id} → ${s}`);
    onClose();
  };

  return (
    <Dialog open={!!report} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            {report.id} · {report.category}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="text-[10px] uppercase text-muted-foreground">Reporter</p>
              <p className="font-semibold">{report.citizenName} {report.anonymous && <span className="text-[10px] badge-pill badge-blue ml-2">Anonymous</span>}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-muted-foreground">Location</p>
              <p className="font-semibold">{report.address}</p>
              <p className="text-xs text-muted-foreground font-mono">{report.lat.toFixed(5)}, {report.lng.toFixed(5)}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-muted-foreground">Description</p>
              <p className="text-sm">{report.description}</p>
            </div>
            <div className="flex gap-2">
              <span className={`badge-pill text-[9px] ${
                report.severity === "High" ? "badge-crimson" : report.severity === "Medium" ? "badge-gold" : "badge-success"
              }`}>{report.severity} severity</span>
              <span className={`badge-pill text-[9px] ${
                report.status === "Resolved" ? "badge-success" :
                report.status === "Assigned" || report.status === "In Progress" ? "badge-gold" : "badge-crimson"
              }`}>{report.status}</span>
            </div>
            <p className="text-[10px] text-muted-foreground">Reported {new Date(report.createdAt).toLocaleString()}</p>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-[10px] uppercase text-muted-foreground mb-1">Evidence ({report.evidence.length})</p>
              {report.evidence.length === 0 ? (
                <p className="text-xs text-muted-foreground italic">No evidence attached.</p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
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
            <div>
              <p className="text-[10px] uppercase text-muted-foreground mb-1">Zone history — {otherInZone.length} prior reports</p>
              <div className="max-h-40 overflow-y-auto space-y-1">
                {otherInZone.map((r) => (
                  <div key={r.id} className="text-[11px] flex items-center justify-between p-2 rounded bg-secondary/40">
                    <span className="font-mono">{r.id}</span>
                    <span>{r.category}</span>
                    <span className="text-muted-foreground">{new Date(r.createdAt).toLocaleDateString()}</span>
                  </div>
                ))}
                {otherInZone.length === 0 && <p className="text-xs text-muted-foreground italic">First report in this zone.</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-2 border-t border-border">
          <Button size="sm" variant="outline" onClick={() => setStatus("Assigned")}>Assign to me</Button>
          <Button size="sm" variant="outline" onClick={() => setStatus("In Progress")}>Mark In Progress</Button>
          <Button size="sm" onClick={() => setStatus("Resolved")}>Mark Resolved</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
