import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/dashboard/GlassCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { LineSeries } from "@/components/dashboard/Charts";
import { DataTable, Column, StatusBadge } from "@/components/dashboard/DataTable";
import { UserPlus, Users, Repeat, Star } from "lucide-react";
import { clients, colors } from "@/lib/mock";

const growth = [
  { name: "Jan", new: 120, repeat: 84 },
  { name: "Feb", new: 142, repeat: 96 },
  { name: "Mar", new: 168, repeat: 112 },
  { name: "Apr", new: 195, repeat: 128 },
  { name: "May", new: 224, repeat: 148 },
  { name: "Jun", new: 256, repeat: 172 },
];

type Client = (typeof clients)[number];
const cols: Column<Client>[] = [
  { key: "name", header: "Client", render: (r) => <span className="font-medium">{r.name}</span> },
  { key: "contact", header: "Contact" },
  { key: "country", header: "Country" },
  { key: "revenue", header: "Revenue", render: (r) => <span className="text-neon-green">{r.revenue}</span> },
  { key: "orders", header: "Orders" },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function ClientsAnalytics() {
  return (
    <>
      <PageHeader title="Client Performance" description="New & repeat client acquisition and top revenue contributors." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Clients" value="2,184" delta={11.2} icon={Users} accent="purple" />
        <StatCard label="New (30d)" value="256" delta={18.4} icon={UserPlus} accent="green" />
        <StatCard label="Repeat Rate" value="68%" delta={4.6} icon={Repeat} accent="blue" />
        <StatCard label="Avg LTV" value="$8,420" delta={5.2} icon={Star} accent="orange" />
      </div>

      <div className="mt-4">
        <GlassCard title="Client Growth" description="New vs repeat clients">
          <LineSeries
            data={growth}
            keys={[
              { key: "new", color: colors.purple, name: "New Clients" },
              { key: "repeat", color: colors.green, name: "Repeat Clients" },
            ]}
          />
        </GlassCard>
      </div>

      <div className="mt-4">
        <DataTable title="Top Clients by Revenue" columns={cols} data={clients} searchKeys={["name", "contact", "country"]} addLabel="Add Client" />
      </div>
    </>
  );
}
