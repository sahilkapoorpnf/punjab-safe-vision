import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Download,
  Flame,
  MapPin,
  TrendingUp,
} from "lucide-react";
import {
  downloadCSV,
  getLocationStats,
  getUser,
  reportsToCSV,
  useStoreVersion,
} from "@/lib/nashaStore";
import { Button } from "@/components/ui/button";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CommandLocationDetail() {
  const { key = "" } = useParams();
  const nav = useNavigate();
  const user = getUser();
  useStoreVersion();
  if (!user || user.role !== "command") {
    nav("/command/login");
    return null;
  }
  const stats = getLocationStats(key);
  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg font-bold">Location not found</p>
          <Button className="mt-4" onClick={() => nav("/command")}>Back to Command Centre</Button>
        </div>
      </div>
    );
  }

  const hourData = stats.hourHistogram.map((count, hour) => ({
    hour: `${String(hour).padStart(2, "0")}:00`,
    count,
  }));
  const dayData = stats.dayHistogram.map((count, i) => ({
    day: DAY_LABELS[i],
    count,
  }));
  const catData = Object.entries(stats.categories).map(([name, value]) => ({ name, value }));
  const COLORS = ["hsl(var(--accent))", "hsl(var(--gold))", "hsl(var(--success))", "hsl(var(--primary))", "hsl(var(--navy))"];

  const peakHour = hourData.reduce((a, b) => (b.count > a.count ? b : a));
  const peakDay = dayData.reduce((a, b) => (b.count > a.count ? b : a));
  const spanDays = Math.max(1, Math.ceil((stats.lastAt - stats.firstAt) / 86400000));
  const frequency = (stats.reports.length / spanDays).toFixed(2);
  const severity = stats.reports.length >= 8 ? "Critical" : stats.reports.length >= 4 ? "High" : "Moderate";

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
              <p className="font-black text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" /> {stats.address}
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                {stats.centerLat.toFixed(5)}, {stats.centerLng.toFixed(5)} · {stats.reports.length} reports
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => downloadCSV(`location-${key}.csv`, reportsToCSV(stats.reports))}
          >
            <Download className="w-4 h-4 mr-1" /> Export CSV
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Total repeats", value: stats.reports.length, icon: Flame, color: "text-accent" },
            { label: "Peak hour", value: peakHour.hour, icon: Clock, color: "text-primary" },
            { label: "Peak day", value: peakDay.day, icon: TrendingUp, color: "text-[hsl(45,70%,35%)]" },
            { label: "Freq / day", value: frequency, icon: TrendingUp, color: "text-[hsl(var(--success))]" },
            { label: "Risk", value: severity, icon: Flame, color: severity === "Critical" ? "text-accent" : "text-[hsl(45,70%,35%)]" },
          ].map((s) => (
            <div key={s.label} className="stat-card-hover">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</p>
                <s.icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <p className={`text-2xl font-black mt-2 ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-5">
            <h3 className="font-bold mb-4">Activity by hour of day</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={hourData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="hour" fontSize={10} interval={1} />
                <YAxis fontSize={11} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-2">
              Peak activity at <b>{peakHour.hour}</b> — recommend patrol allocation ±1 hr around this window.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-bold mb-4">Category mix</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={catData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {catData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="font-bold mb-4">Activity by day of week</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={dayData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="day" fontSize={11} />
              <YAxis fontSize={11} allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="font-bold">Full report history at this location</h3>
            <span className="text-xs text-muted-foreground">{stats.reports.length} entries</span>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="text-left px-4 py-3">ID</th>
                <th className="text-left px-4 py-3">Date</th>
                <th className="text-left px-4 py-3">Time</th>
                <th className="text-left px-4 py-3">Category</th>
                <th className="text-left px-4 py-3">Severity</th>
                <th className="text-left px-4 py-3">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stats.reports.map((r) => {
                const d = new Date(r.createdAt);
                return (
                  <tr key={r.id} className="border-t border-border hover:bg-secondary/30">
                    <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                    <td className="px-4 py-3">{d.toLocaleDateString("en-IN")}</td>
                    <td className="px-4 py-3">{d.toLocaleTimeString("en-IN")}</td>
                    <td className="px-4 py-3">{r.category}</td>
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
                    <td className="px-4 py-3">
                      <Link to={`/command/report/${r.id}`}>
                        <Button variant="outline" size="sm">Open</Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
