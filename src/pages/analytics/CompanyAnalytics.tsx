import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/dashboard/GlassCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { LineSeries, BarSeries, Donut } from "@/components/dashboard/Charts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Percent, Target, DollarSign } from "lucide-react";
import { colors, monthlyTrend } from "@/lib/mock";

export default function CompanyAnalytics() {
  return (
    <>
      <PageHeader
        title="Company Performance"
        description="Track revenue, profit, expenses, ROI and growth indicators."
        actions={
          <Tabs defaultValue="monthly">
            <TabsList className="rounded-xl border border-white/5 bg-white/5">
              <TabsTrigger value="weekly" className="rounded-lg text-xs">Weekly</TabsTrigger>
              <TabsTrigger value="monthly" className="rounded-lg text-xs">Monthly</TabsTrigger>
              <TabsTrigger value="yearly" className="rounded-lg text-xs">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Revenue Growth" value="+24.6%" delta={6.4} icon={TrendingUp} accent="green" />
        <StatCard label="ROI" value="38.2%" delta={4.1} icon={Target} accent="purple" />
        <StatCard label="Profit Margin" value="41.5%" delta={2.3} icon={Percent} accent="blue" />
        <StatCard label="Avg Deal Size" value="$12.4K" delta={-1.2} icon={DollarSign} accent="orange" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2" title="Revenue vs Profit vs Expenses" description="12-month comparison">
          <LineSeries
            data={monthlyTrend}
            keys={[
              { key: "revenue", color: colors.purple, name: "Revenue" },
              { key: "profit", color: colors.green, name: "Profit" },
              { key: "expenses", color: colors.orange, name: "Expenses" },
            ]}
          />
        </GlassCard>
        <GlassCard title="Revenue Mix" description="By business segment">
          <Donut
            data={[
              { name: "Products", value: 48, color: colors.purple },
              { name: "Services", value: 28, color: colors.blue },
              { name: "Subscriptions", value: 18, color: colors.green },
              { name: "Other", value: 6, color: colors.orange },
            ]}
          />
        </GlassCard>
      </div>

      <div className="mt-4">
        <GlassCard title="Quarterly Profit" description="Year-over-year">
          <BarSeries
            data={[
              { name: "Q1", "2024": 32000, "2025": 47500 },
              { name: "Q2", "2024": 41000, "2025": 62000 },
              { name: "Q3", "2024": 48000, "2025": 71500 },
              { name: "Q4", "2024": 55000, "2025": 84000 },
            ]}
            keys={[
              { key: "2024", color: colors.blue },
              { key: "2025", color: colors.purple },
            ]}
          />
        </GlassCard>
      </div>
    </>
  );
}
