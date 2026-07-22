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
// Approximate: 3 decimal places ~ 111m. We use 2 dp ~ 1.1 km for zone grouping.
export function zoneIdFromCoords(lat: number, lng: number) {
  return `Z_${lat.toFixed(2)}_${lng.toFixed(2)}`;
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

// ---------- Seed demo data ----------
export function seedIfEmpty() {
  if (getReports().length > 0) return;
  const now = Date.now();
  const samples: Omit<Report, "id" | "createdAt" | "zoneId" | "status">[] = [
    {
      citizenId: "cit_demo1",
      citizenName: "Anonymous",
      anonymous: true,
      category: "Drug Selling",
      description: "Repeated selling near park corner during late hours.",
      lat: LUDHIANA_POINTS[0].lat,
      lng: LUDHIANA_POINTS[0].lng,
      address: LUDHIANA_POINTS[0].name,
      evidence: [],
      severity: "High",
    },
    {
      citizenId: "cit_demo1",
      citizenName: "Anonymous",
      anonymous: true,
      category: "Drug Selling",
      description: "Same location, different day — suspicious exchange.",
      lat: LUDHIANA_POINTS[0].lat + 0.001,
      lng: LUDHIANA_POINTS[0].lng - 0.001,
      address: LUDHIANA_POINTS[0].name,
      evidence: [],
      severity: "High",
    },
    {
      citizenId: "cit_demo2",
      citizenName: "R. Singh",
      anonymous: false,
      category: "Suspicious Activity",
      description: "Group loitering, exchanging packets.",
      lat: LUDHIANA_POINTS[2].lat,
      lng: LUDHIANA_POINTS[2].lng,
      address: LUDHIANA_POINTS[2].name,
      evidence: [],
      severity: "Medium",
    },
    {
      citizenId: "cit_demo3",
      citizenName: "Anonymous",
      anonymous: true,
      category: "Consumption",
      description: "Open consumption behind shops.",
      lat: LUDHIANA_POINTS[4].lat,
      lng: LUDHIANA_POINTS[4].lng,
      address: LUDHIANA_POINTS[4].name,
      evidence: [],
      severity: "Low",
    },
    {
      citizenId: "cit_demo4",
      citizenName: "Anonymous",
      anonymous: true,
      category: "Trafficking",
      description: "Vehicle repeatedly seen offloading at odd hours.",
      lat: LUDHIANA_POINTS[7].lat,
      lng: LUDHIANA_POINTS[7].lng,
      address: LUDHIANA_POINTS[7].name,
      evidence: [],
      severity: "High",
    },
  ];
  // Insert with staggered timestamps
  const list: Report[] = samples.map((s, i) => ({
    ...s,
    id: "RPT-" + (5000 + i),
    createdAt: now - (samples.length - i) * 1000 * 60 * 60 * 6,
    zoneId: zoneIdFromCoords(s.lat, s.lng),
    status: i === 2 ? "Assigned" : i === 3 ? "Resolved" : "New",
    assignedTo: i === 2 ? "Insp. Kaur" : undefined,
  }));
  saveReports(list);
  // notifications for the new ones
  const notifs: AppNotification[] = list
    .filter((r) => r.status === "New")
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
