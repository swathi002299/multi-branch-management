import {
  DollarSign, TrendingUp, Wallet, Users, ShoppingCart, Building2,
  Plus, UserPlus, FileText, ClipboardList, FilePlus2, FileBarChart, ArrowUpRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { GlassCard } from "@/components/dashboard/GlassCard";
import { MiniArea, LineSeries, BarSeries } from "@/components/dashboard/Charts";
import { Button } from "@/components/ui/button";
import { colors, miniSeries, monthlyTrend } from "@/lib/mock";
import { StatusBadge } from "@/components/dashboard/DataTable";

const quick = [
  { label: "Add Branch", icon: Building2, color: "text-neon-purple bg-neon-purple/10" },
  { label: "Add Worker", icon: UserPlus, color: "text-neon-blue bg-neon-blue/10" },
  { label: "Add Client", icon: Users, color: "text-neon-green bg-neon-green/10" },
  { label: "Create Order", icon: ClipboardList, color: "text-neon-orange bg-neon-orange/10" },
  { label: "Create Invoice", icon: FilePlus2, color: "text-neon-pink bg-neon-pink/10" },
  { label: "Generate Report", icon: FileBarChart, color: "text-neon-purple bg-neon-purple/10" },
];

const activities = [
  { who: "Sarah Chen", what: "approved invoice INV-4421", when: "2m ago", status: "completed" },
  { who: "Marco Rossi", what: "added new branch in Milan", when: "18m ago", status: "active" },
  { who: "Yuki Tanaka", what: "uploaded Q2 sales report", when: "1h ago", status: "processing" },
  { who: "Anja Müller", what: "onboarded 4 new employees", when: "3h ago", status: "completed" },
  { who: "Khalid Al-Farsi", what: "processed bulk order #10246", when: "5h ago", status: "shipped" },
];

export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Welcome back, Admin. Here's what's happening across your branches today."
        actions={
          <Button className="rounded-xl bg-gradient-primary text-white shadow-glow hover:opacity-90">
            <Plus className="mr-1.5 h-4 w-4" /> New Action
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Total Revenue" value="$1.24M" delta={12.4} icon={DollarSign} accent="purple" />
        <StatCard label="Net Profit" value="$486K" delta={8.7} icon={TrendingUp} accent="green" />
        <StatCard label="Expenses" value="$754K" delta={-3.2} icon={Wallet} accent="orange" />
        <StatCard label="Customers" value="14,820" delta={15.1} icon={Users} accent="blue" />
        <StatCard label="Orders" value="3,412" delta={6.8} icon={ShoppingCart} accent="pink" />
        <StatCard label="Branches" value="28" delta={4.0} icon={Building2} accent="purple" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2" title="Revenue Trend" description="Last 12 months performance">
          <LineSeries
            data={monthlyTrend}
            keys={[
              { key: "revenue", color: colors.purple, name: "Revenue" },
              { key: "profit", color: colors.green, name: "Profit" },
            ]}
          />
        </GlassCard>

        <GlassCard title="Branch Output" description="Orders by region (last 30d)">
          <BarSeries
            height={300}
            data={[
              { name: "NA", orders: 1240 },
              { name: "EU", orders: 980 },
              { name: "APAC", orders: 870 },
              { name: "MEA", orders: 640 },
              { name: "LATAM", orders: 410 },
            ]}
            keys={[{ key: "orders", color: colors.blue, name: "Orders" }]}
          />
        </GlassCard>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Daily Visitors", value: "8,420", color: colors.purple, data: [3, 5, 4, 7, 6, 9, 8] },
          { label: "Conversion", value: "4.86%", color: colors.green, data: [2, 4, 3, 5, 4, 6, 7] },
          { label: "Avg Order", value: "$364", color: colors.orange, data: [4, 3, 5, 4, 6, 5, 7] },
          { label: "Refund Rate", value: "1.2%", color: colors.pink, data: [5, 4, 3, 4, 3, 2, 2] },
        ].map((m) => (
          <GlassCard key={m.label} className="p-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</p>
            <p className="mt-1 font-display text-xl font-bold">{m.value}</p>
            <div className="mt-2"><MiniArea data={miniSeries(m.data)} color={m.color} /></div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <GlassCard title="Quick Actions" description="Common workflows" className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-2">
            {quick.map((q) => (
              <button key={q.label}
                className="group flex flex-col items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-left transition-all hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/5">
                <div className={`rounded-lg p-2 ring-1 ring-white/5 ${q.color}`}>
                  <q.icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium">{q.label}</span>
              </button>
            ))}
          </div>
        </GlassCard>

        <GlassCard title="Recent Activities" description="Live operations feed" className="lg:col-span-2"
          action={<Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
            View all <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>}>
          <div className="space-y-2">
            {activities.map((a, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-xs font-semibold text-white">
                  {a.who.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm"><span className="font-medium">{a.who}</span> <span className="text-muted-foreground">{a.what}</span></p>
                  <p className="text-[11px] text-muted-foreground/70">{a.when}</p>
                </div>
                <StatusBadge status={a.status} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </>
  );
}
