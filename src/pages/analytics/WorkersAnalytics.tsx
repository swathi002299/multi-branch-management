import { PageHeader } from "@/components/layout/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { GlassCard } from "@/components/dashboard/GlassCard";
import { BarSeries } from "@/components/dashboard/Charts";
import { DataTable, Column } from "@/components/dashboard/DataTable";
import { Users, Activity, Gauge, Award } from "lucide-react";
import { colors } from "@/lib/mock";

type W = { name: string; role: string; branch: string; tasks: number; perf: number };
const top: W[] = [
  { name: "Sarah Chen", role: "Branch Manager", branch: "New York HQ", tasks: 248, perf: 98 },
  { name: "Marco Rossi", role: "Senior Accountant", branch: "London Central", tasks: 214, perf: 95 },
  { name: "Yuki Tanaka", role: "Sales Lead", branch: "Tokyo Tower", tasks: 198, perf: 93 },
  { name: "Anja Müller", role: "HR Specialist", branch: "Berlin West", tasks: 176, perf: 91 },
  { name: "Khalid Al-Farsi", role: "Logistics Mgr", branch: "Dubai Marina", tasks: 162, perf: 88 },
];

const cols: Column<W>[] = [
  { key: "name", header: "Worker", render: (r) => <span className="font-medium">{r.name}</span> },
  { key: "role", header: "Role" },
  { key: "branch", header: "Branch" },
  { key: "tasks", header: "Tasks" },
  {
    key: "perf",
    header: "Performance",
    render: (r) => (
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${r.perf}%` }} />
        </div>
        <span className="text-xs text-neon-green">{r.perf}%</span>
      </div>
    ),
  },
];

export default function WorkersAnalytics() {
  return (
    <>
      <PageHeader title="Worker Performance" description="Workforce productivity, activity and top performers." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Workers" value="1,284" delta={3.2} icon={Users} accent="purple" />
        <StatCard label="Active Now" value="942" delta={6.1} icon={Activity} accent="green" />
        <StatCard label="Avg Performance" value="86%" delta={2.4} icon={Gauge} accent="blue" />
        <StatCard label="Top Performers" value="124" delta={8.8} icon={Award} accent="orange" />
      </div>

      <div className="mt-4">
        <GlassCard title="Tasks Completed by Department" description="Last 30 days">
          <BarSeries
            data={[
              { name: "Sales", tasks: 1240 },
              { name: "Ops", tasks: 980 },
              { name: "Finance", tasks: 740 },
              { name: "HR", tasks: 420 },
              { name: "IT", tasks: 580 },
              { name: "Marketing", tasks: 690 },
            ]}
            keys={[{ key: "tasks", color: colors.purple, name: "Tasks" }]}
          />
        </GlassCard>
      </div>

      <div className="mt-4">
        <DataTable title="Top Performing Workers" columns={cols} data={top} searchKeys={["name", "role", "branch"]} addLabel="Add Worker" />
      </div>
    </>
  );
}
