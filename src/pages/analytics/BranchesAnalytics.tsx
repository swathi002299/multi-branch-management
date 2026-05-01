import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/dashboard/GlassCard";
import { BarSeries } from "@/components/dashboard/Charts";
import { DataTable, Column, StatusBadge } from "@/components/dashboard/DataTable";
import { branches, colors } from "@/lib/mock";

type B = (typeof branches)[number];
const cols: Column<B>[] = [
  { key: "name", header: "Branch", render: (r) => <span className="font-medium">{r.name}</span> },
  { key: "city", header: "Location" },
  { key: "revenue", header: "Revenue", render: (r) => <span className="text-neon-green">{r.revenue}</span> },
  { key: "profit", header: "Profit", render: (r) => <span className="text-neon-blue">{r.profit}</span> },
  { key: "orders", header: "Orders" },
  {
    key: "perf", header: "Performance",
    render: (r) => (
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${r.perf}%` }} />
        </div>
        <span className="text-xs">{r.perf}%</span>
      </div>
    ),
  },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function BranchesAnalytics() {
  return (
    <>
      <PageHeader title="Branch Performance" description="Compare revenue, profit and operational efficiency across branches." />

      <div>
        <GlassCard title="Branch Comparison" description="Revenue vs Profit (USD)">
          <BarSeries
            data={branches.map((b) => ({
              name: b.name.split(" ")[0],
              revenue: parseInt(b.revenue.replace(/\D/g, "")),
              profit: parseInt(b.profit.replace(/\D/g, "")),
            }))}
            keys={[
              { key: "revenue", color: colors.purple, name: "Revenue" },
              { key: "profit", color: colors.green, name: "Profit" },
            ]}
          />
        </GlassCard>
      </div>

      <div className="mt-4">
        <DataTable title="All Branches" columns={cols} data={branches} searchKeys={["name", "city"]} addLabel="Add Branch" />
      </div>
    </>
  );
}
