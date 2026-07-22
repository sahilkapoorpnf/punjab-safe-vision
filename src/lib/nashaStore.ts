// Simple localStorage-backed demo store for NashaMukt Punjab Phase 1
// Handles auth (citizen + command), reports, zones, notifications.

export type UserRole = "citizen" | "command";

export interface CurrentUser {
  role: UserRole;
  id: string;
  name: string;
  phone?: string;
  badgeId?: string;
  station?: string;
}

export type ReportCategory =
  | "Drug Selling"
  | "Suspicious Activity"
  | "Consumption"
  | "Trafficking"
  | "Other";

export type ReportStatus = "New" | "Assigned" | "In Progress" | "Resolved";

export interface Evidence {
  type: "photo" | "video" | "audio";
  dataUrl: string; // for demo we store data URLs
  name: string;
}

export interface Report {
  id: string;
  citizenId: string;
  citizenName: string; // "Anonymous" if hidden
  anonymous: boolean;
  category: ReportCategory;
  description: string;
  lat: number;
  lng: number;
  address: string;
  createdAt: number;
  status: ReportStatus;
  assignedTo?: string;
  evidence: Evidence[];
  zoneId: string; // grouped by rounded lat/lng
  severity: "Low" | "Medium" | "High";
}

export interface AppNotification {
  id: string;
  reportId: string;
  title: string;
  message: string;
  createdAt: number;
  read: boolean;
  severity: "Low" | "Medium" | "High";
}

const K = {
  user: "nm_user",
  reports: "nm_reports",
  notifs: "nm_notifs",
};

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write<T>(key: string, val: T) {
  localStorage.setItem(key, JSON.stringify(val));
  window.dispatchEvent(new CustomEvent("nm-store-change", { detail: { key } }));
}

// ---------- Auth ----------
export function getUser(): CurrentUser | null {
  return read<CurrentUser | null>(K.user, null);
}
export function setUser(u: CurrentUser | null) {
  if (u) localStorage.setItem(K.user, JSON.stringify(u));
  else localStorage.removeItem(K.user);
  window.dispatchEvent(new CustomEvent("nm-store-change", { detail: { key: K.user } }));
}
export function loginCitizen(phone: string, name: string) {
  const u: CurrentUser = {
    role: "citizen",
    id: "cit_" + phone.slice(-6),
    name: name || "Citizen",
    phone,
  };
  setUser(u);
  return u;
}
export function loginCommand(badgeId: string, name: string, station: string) {
  const u: CurrentUser = {
    role: "command",
    id: "cmd_" + badgeId,
    name: name || "Officer",
    badgeId,
    station: station || "Ludhiana HQ",
  };
  setUser(u);
  return u;
}
export function logout() {
  setUser(null);
}

// ---------- Zones ----------
// Approximate: 3 decimal places ~ 111m. We use 3 dp ~ 110m for tight location grouping,
// so "same location" really means the same street corner.
export function zoneIdFromCoords(lat: number, lng: number) {
  return `Z_${lat.toFixed(3)}_${lng.toFixed(3)}`;
}
export function locationKey(lat: number, lng: number) {
  return `${lat.toFixed(4)}_${lng.toFixed(4)}`;
}

// Predefined Ludhiana points to make lat/lng realistic in the demo.
export const LUDHIANA_POINTS: { name: string; lat: number; lng: number }[] = [
  { name: "Model Town, Ludhiana", lat: 30.8622, lng: 75.8156 },
  { name: "Sarabha Nagar, Ludhiana", lat: 30.8845, lng: 75.8341 },
  { name: "Civil Lines, Ludhiana", lat: 30.9083, lng: 75.8467 },
  { name: "Dugri Phase 1, Ludhiana", lat: 30.8489, lng: 75.8371 },
  { name: "Haibowal Kalan, Ludhiana", lat: 30.9192, lng: 75.8271 },
  { name: "Basti Jodhewal, Ludhiana", lat: 30.9345, lng: 75.8501 },
  { name: "Salem Tabri, Ludhiana", lat: 30.9280, lng: 75.8620 },
  { name: "Focal Point, Ludhiana", lat: 30.8730, lng: 75.9110 },
  { name: "Jamalpur, Ludhiana", lat: 30.9420, lng: 75.8710 },
  { name: "Shimlapuri, Ludhiana", lat: 30.9218, lng: 75.8555 },
  { name: "Gill Road, Ludhiana", lat: 30.8945, lng: 75.8622 },
  { name: "Threekey Chowk, Ludhiana", lat: 30.8802, lng: 75.8480 },
];


// ---------- Reports ----------
export function getReports(): Report[] {
  return read<Report[]>(K.reports, []);
}
export function saveReports(list: Report[]) {
  write(K.reports, list);
}
export function addReport(r: Omit<Report, "id" | "createdAt" | "zoneId" | "status">): Report {
  const full: Report = {
    ...r,
    id: "RPT-" + Math.floor(5000 + Math.random() * 5000),
    createdAt: Date.now(),
    zoneId: zoneIdFromCoords(r.lat, r.lng),
    status: "New",
  };
  const all = getReports();
  all.unshift(full);
  saveReports(all);
  // trigger notification
  pushNotification({
    id: "N-" + Date.now(),
    reportId: full.id,
    title: `New ${full.category} report`,
    message: `${full.address} — Severity ${full.severity}`,
    createdAt: Date.now(),
    read: false,
    severity: full.severity,
  });
  return full;
}
export function updateReportStatus(id: string, status: ReportStatus, assignedTo?: string) {
  const all = getReports().map((r) =>
    r.id === id ? { ...r, status, assignedTo: assignedTo ?? r.assignedTo } : r,
  );
  saveReports(all);
}

// ---------- Notifications ----------
export function getNotifications(): AppNotification[] {
  return read<AppNotification[]>(K.notifs, []);
}
export function pushNotification(n: AppNotification) {
  const all = getNotifications();
  all.unshift(n);
  write(K.notifs, all.slice(0, 100));
}
export function markNotificationRead(id: string) {
  const all = getNotifications().map((n) => (n.id === id ? { ...n, read: true } : n));
  write(K.notifs, all);
}
export function markAllRead() {
  const all = getNotifications().map((n) => ({ ...n, read: true }));
  write(K.notifs, all);
}

// ---------- Derived: zones ----------
export interface ZoneStats {
  zoneId: string;
  centerLat: number;
  centerLng: number;
  label: string;
  reportCount: number;
  lastReportAt: number;
  categories: Record<string, number>;
  severity: "Low" | "Medium" | "High";
  reports: Report[];
}
export function computeZones(): ZoneStats[] {
  const map = new Map<string, ZoneStats>();
  for (const r of getReports()) {
    const cur = map.get(r.zoneId);
    if (cur) {
      cur.reportCount++;
      cur.lastReportAt = Math.max(cur.lastReportAt, r.createdAt);
      cur.categories[r.category] = (cur.categories[r.category] || 0) + 1;
      cur.reports.push(r);
    } else {
      map.set(r.zoneId, {
        zoneId: r.zoneId,
        centerLat: r.lat,
        centerLng: r.lng,
        label: r.address.split(",")[0],
        reportCount: 1,
        lastReportAt: r.createdAt,
        categories: { [r.category]: 1 },
        severity: "Low",
        reports: [r],
      });
    }
  }
  // severity from count
  for (const z of map.values()) {
    z.severity = z.reportCount >= 5 ? "High" : z.reportCount >= 3 ? "Medium" : "Low";
  }
  return Array.from(map.values()).sort((a, b) => b.reportCount - a.reportCount);
}

// ---------- Location detail ----------
export interface LocationStats {
  key: string;
  address: string;
  centerLat: number;
  centerLng: number;
  reports: Report[];
  firstAt: number;
  lastAt: number;
  categories: Record<string, number>;
  hourHistogram: number[]; // 24
  dayHistogram: number[]; // 7 (Sun..Sat)
}
export function getLocationStats(key: string): LocationStats | null {
  const reports = getReports().filter((r) => locationKey(r.lat, r.lng) === key);
  if (reports.length === 0) return null;
  const hourHistogram = new Array(24).fill(0);
  const dayHistogram = new Array(7).fill(0);
  const categories: Record<string, number> = {};
  let firstAt = reports[0].createdAt;
  let lastAt = reports[0].createdAt;
  for (const r of reports) {
    const d = new Date(r.createdAt);
    hourHistogram[d.getHours()]++;
    dayHistogram[d.getDay()]++;
    categories[r.category] = (categories[r.category] || 0) + 1;
    firstAt = Math.min(firstAt, r.createdAt);
    lastAt = Math.max(lastAt, r.createdAt);
  }
  return {
    key,
    address: reports[0].address,
    centerLat: reports[0].lat,
    centerLng: reports[0].lng,
    reports: reports.sort((a, b) => b.createdAt - a.createdAt),
    firstAt,
    lastAt,
    categories,
    hourHistogram,
    dayHistogram,
  };
}
export function getReportById(id: string): Report | null {
  return getReports().find((r) => r.id === id) ?? null;
}

// ---------- CSV ----------
export function reportsToCSV(reports: Report[]): string {
  const cols = [
    "id", "createdAt", "date", "time", "category", "severity", "status",
    "address", "lat", "lng", "zoneId", "reporter", "anonymous",
    "assignedTo", "evidenceCount", "description",
  ];
  const rows = reports.map((r) => {
    const d = new Date(r.createdAt);
    return [
      r.id,
      r.createdAt,
      d.toLocaleDateString("en-IN"),
      d.toLocaleTimeString("en-IN"),
      r.category,
      r.severity,
      r.status,
      r.address,
      r.lat.toFixed(6),
      r.lng.toFixed(6),
      r.zoneId,
      r.citizenName,
      r.anonymous ? "yes" : "no",
      r.assignedTo ?? "",
      r.evidence.length,
      (r.description || "").replace(/\r?\n/g, " "),
    ];
  });
  const esc = (v: any) => {
    const s = String(v ?? "");
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [cols.join(","), ...rows.map((r) => r.map(esc).join(","))].join("\n");
}
export function downloadCSV(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ---------- Seed demo data ----------
const CATEGORIES: ReportCategory[] = ["Drug Selling", "Suspicious Activity", "Consumption", "Trafficking", "Other"];
const SEVERITIES: ("Low" | "Medium" | "High")[] = ["Low", "Medium", "High"];
const DESCRIPTIONS: Record<ReportCategory, string[]> = {
  "Drug Selling": [
    "Repeated selling near park corner during late hours.",
    "Two men on bike exchanging packets, cash visible.",
    "Same location, different day — suspicious exchange.",
    "Local shopkeeper reports frequent hand-offs behind shutter.",
  ],
  "Suspicious Activity": [
    "Group loitering, exchanging packets.",
    "Unfamiliar SUV parked for 40+ minutes, engine running.",
    "Late-night gathering behind school wall.",
  ],
  "Consumption": [
    "Open consumption behind shops.",
    "Injecting drug use visible from footpath.",
    "Group smoking near community park.",
  ],
  "Trafficking": [
    "Vehicle repeatedly seen offloading at odd hours.",
    "Tempo unloading unmarked boxes at 2 AM.",
    "Same courier bike visits this spot every Tuesday.",
  ],
  "Other": [
    "Suspected pharmacy over-the-counter sale.",
    "Minor seen buying suspicious pouches.",
  ],
};

function makeRandomReport(i: number, now: number): Report {
  // Weighted distribution — first 4 points get most reports (repeat hotspots)
  const weight = [10, 8, 6, 5, 3, 3, 4, 3, 2, 2, 2, 2];
  const pool: number[] = [];
  weight.forEach((w, idx) => { for (let x = 0; x < w; x++) pool.push(idx); });
  const pIdx = pool[i % pool.length];
  const p = LUDHIANA_POINTS[pIdx];
  const category = CATEGORIES[i % CATEGORIES.length];
  const descPool = DESCRIPTIONS[category];
  const description = descPool[i % descPool.length];
  // Bias timestamps toward evenings/nights — that's when this stuff peaks
  const evenings = [20, 21, 22, 23, 0, 1, 2, 15, 17, 19];
  const hour = evenings[i % evenings.length];
  const daysAgo = i % 30;
  const d = new Date(now);
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, (i * 17) % 60, (i * 29) % 60, 0);
  const severity: "Low" | "Medium" | "High" =
    ["Drug Selling", "Trafficking"].includes(category) ? (i % 3 === 0 ? "High" : "Medium") : SEVERITIES[i % 3];
  // Tiny jitter so lat/lng repeats cluster tightly
  const jitterLat = ((i % 5) - 2) * 0.0002;
  const jitterLng = ((i % 4) - 2) * 0.0002;
  const lat = p.lat + jitterLat;
  const lng = p.lng + jitterLng;
  const statuses: ReportStatus[] = ["New", "New", "New", "Assigned", "In Progress", "Resolved"];
  const status = statuses[i % statuses.length];
  return {
    id: "RPT-" + (5000 + i),
    citizenId: "cit_demo" + ((i % 40) + 1),
    citizenName: "Anonymous",
    anonymous: true,
    category,
    description,
    lat,
    lng,
    address: p.name,
    createdAt: d.getTime(),
    status,
    assignedTo: status === "New" ? undefined : ["Insp. H. Kaur", "SI. R. Singh", "SI. M. Sharma", "ASI. J. Kaur"][i % 4],
    evidence: [],
    zoneId: zoneIdFromCoords(lat, lng),
    severity,
  };
}

export function seedIfEmpty() {
  if (getReports().length > 0) return;
  const now = Date.now();
  const list: Report[] = [];
  for (let i = 0; i < 84; i++) list.push(makeRandomReport(i, now));
  // Sort newest first
  list.sort((a, b) => b.createdAt - a.createdAt);
  saveReports(list);
  const notifs: AppNotification[] = list
    .filter((r) => r.status === "New")
    .slice(0, 20)
    .map((r) => ({
      id: "N-" + r.id,
      reportId: r.id,
      title: `New ${r.category} report`,
      message: `${r.address} — Severity ${r.severity}`,
      createdAt: r.createdAt,
      read: false,
      severity: r.severity,
    }));
  write(K.notifs, notifs);
}


// ---------- React hook helper ----------
import { useEffect, useState } from "react";
export function useStoreVersion() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const h = () => setV((x) => x + 1);
    window.addEventListener("nm-store-change", h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener("nm-store-change", h);
      window.removeEventListener("storage", h);
    };
  }, []);
  return v;
}
