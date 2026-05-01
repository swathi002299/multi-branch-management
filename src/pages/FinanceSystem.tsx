import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/dashboard/GlassCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { LineSeries, BarSeries, Donut } from "@/components/dashboard/Charts";
import { DataTable, StatusBadge, Column } from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet, Receipt, CreditCard, FileText, DollarSign, TrendingUp, Database, Activity, LifeBuoy, MessageSquare, ShieldCheck, HardDrive } from "lucide-react";
import { colors, monthlyTrend } from "@/lib/mock";

/* ---------- Finance ---------- */
const txns = [
  { id: "TX-9821", account: "Revenue • Operating", type: "Credit", amount: "+$12,400", date: "2026-04-30", status: "completed" },
  { id: "TX-9822", account: "Expense • Salaries", type: "Debit", amount: "-$48,200", date: "2026-04-30", status: "completed" },
  { id: "TX-9823", account: "Revenue • Subscriptions", type: "Credit", amount: "+$8,920", date: "2026-04-29", status: "completed" },
  { id: "TX-9824", account: "Expense • Utilities", type: "Debit", amount: "-$2,140", date: "2026-04-29", status: "pending" },
  { id: "TX-9825", account: "Revenue • Services", type: "Credit", amount: "+$18,700", date: "2026-04-28", status: "completed" },
];

const txnCols: Column<(typeof txns)[number]>[] = [
  { key: "id", header: "Tx ID", render: (r) => <span className="font-medium">{r.id}</span> },
  { key: "account", header: "Account" },
  { key: "type", header: "Type" },
  { key: "amount", header: "Amount", render: (r) => <span className={r.amount.startsWith("+") ? "text-neon-green" : "text-destructive"}>{r.amount}</span> },
  { key: "date", header: "Date" },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export const AccountsPage = () => (
  <>
    <PageHeader title="Accounts" description="Chart of accounts and balances." />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total Assets" value="$4.82M" delta={6.2} icon={Wallet} accent="green" />
      <StatCard label="Liabilities" value="$1.24M" delta={-2.1} icon={Receipt} accent="orange" />
      <StatCard label="Equity" value="$3.58M" delta={8.4} icon={TrendingUp} accent="purple" />
      <StatCard label="Cash on Hand" value="$842K" delta={4.6} icon={DollarSign} accent="blue" />
    </div>
    <div className="mt-4">
      <DataTable title="Recent Transactions" columns={txnCols} data={txns} addLabel="New Account" />
    </div>
  </>
);

export const ExpensesPage = () => (
  <>
    <PageHeader title="Expenses" description="Track and categorize all company expenses." />
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <GlassCard className="lg:col-span-2" title="Expense Trend" description="Last 12 months">
        <LineSeries data={monthlyTrend} keys={[{ key: "expenses", color: colors.orange, name: "Expenses" }]} />
      </GlassCard>
      <GlassCard title="Expense Mix" description="By category">
        <Donut
          data={[
            { name: "Salaries", value: 52, color: colors.purple },
            { name: "Operations", value: 22, color: colors.blue },
            { name: "Marketing", value: 14, color: colors.orange },
            { name: "Other", value: 12, color: colors.green },
          ]}
        />
      </GlassCard>
    </div>
    <div className="mt-4">
      <DataTable title="Expense Records" columns={txnCols} data={txns.filter((t) => t.type === "Debit")} addLabel="Log Expense" />
    </div>
  </>
);

export const PaymentsPage = () => (
  <>
    <PageHeader title="Payments" description="Incoming & outgoing payment activity." />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Received" value="$284K" delta={9.2} icon={CreditCard} accent="green" />
      <StatCard label="Sent" value="$162K" delta={4.4} icon={CreditCard} accent="blue" />
      <StatCard label="Pending" value="$24K" delta={-2.8} icon={Receipt} accent="orange" />
      <StatCard label="Failed" value="$1.8K" delta={-12.4} icon={Receipt} accent="purple" />
    </div>
    <div className="mt-4">
      <DataTable title="Payment History" columns={txnCols} data={txns} addLabel="New Payment" />
    </div>
  </>
);

export const PayrollPage = () => {
  const data = [
    { id: "PR-2401", name: "Sarah Chen", role: "Branch Manager", net: "$8,420", date: "2026-04-30", status: "paid" },
    { id: "PR-2402", name: "Marco Rossi", role: "Senior Accountant", net: "$6,180", date: "2026-04-30", status: "paid" },
    { id: "PR-2403", name: "Yuki Tanaka", role: "Sales Lead", net: "$5,920", date: "2026-04-30", status: "processing" },
    { id: "PR-2404", name: "Anja Müller", role: "HR Specialist", net: "$5,240", date: "2026-04-30", status: "pending" },
  ];
  return (
    <>
      <PageHeader title="Payroll" description="Monthly payroll runs and salary disbursement." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Payroll" value="$842K" delta={3.2} icon={Wallet} accent="purple" />
        <StatCard label="Headcount" value="1,284" delta={2.1} icon={CreditCard} accent="blue" />
        <StatCard label="Avg Salary" value="$5,420" delta={1.4} icon={DollarSign} accent="green" />
        <StatCard label="Pending" value="42" delta={-4.6} icon={Receipt} accent="orange" />
      </div>
      <div className="mt-4">
        <DataTable
          title="Latest Payroll Run"
          columns={[
            { key: "id", header: "Payroll #", render: (r) => <span className="font-medium">{r.id}</span> },
            { key: "name", header: "Employee" },
            { key: "role", header: "Role" },
            { key: "net", header: "Net Pay", render: (r) => <span className="text-neon-green">{r.net}</span> },
            { key: "date", header: "Date" },
            { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
          ]}
          data={data}
          addLabel="Run Payroll"
        />
      </div>
    </>
  );
};

export const ReportsPage = () => (
  <>
    <PageHeader title="Financial Reports" description="P&L, cash flow and custom report generation." />
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <GlassCard className="lg:col-span-2" title="Profit & Loss" description="12-month overview">
        <BarSeries
          data={monthlyTrend}
          keys={[
            { key: "revenue", color: colors.purple, name: "Revenue" },
            { key: "expenses", color: colors.orange, name: "Expenses" },
            { key: "profit", color: colors.green, name: "Profit" },
          ]}
        />
      </GlassCard>
      <GlassCard title="Cash Flow" description="Operating activities">
        <Donut
          data={[
            { name: "Operating", value: 64, color: colors.green },
            { name: "Investing", value: 22, color: colors.blue },
            { name: "Financing", value: 14, color: colors.purple },
          ]}
        />
      </GlassCard>
    </div>
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {["Income Statement", "Balance Sheet", "Cash Flow", "Tax Summary"].map((r) => (
        <GlassCard key={r} className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-neon-purple/10 p-2 text-neon-purple ring-1 ring-neon-purple/30"><FileText className="h-4 w-4" /></div>
            <span className="text-sm font-medium">{r}</span>
          </div>
          <Button size="sm" variant="ghost" className="rounded-lg text-xs hover:bg-white/5">Generate</Button>
        </GlassCard>
      ))}
    </div>
  </>
);

/* ---------- System ---------- */
export const SettingsPage = () => (
  <>
    <PageHeader title="Settings" description="Workspace and account preferences." />
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <GlassCard title="Organization" description="Brand and identity">
        <div className="space-y-3">
          <div><Label className="text-xs text-muted-foreground">Company Name</Label><Input defaultValue="Multi Branch Management" className="mt-1 rounded-lg border-white/5 bg-white/5" /></div>
          <div><Label className="text-xs text-muted-foreground">Email</Label><Input defaultValue="contact@mbms.io" className="mt-1 rounded-lg border-white/5 bg-white/5" /></div>
          <div><Label className="text-xs text-muted-foreground">Default Currency</Label><Input defaultValue="USD ($)" className="mt-1 rounded-lg border-white/5 bg-white/5" /></div>
          <Button className="rounded-xl bg-gradient-primary text-white shadow-glow">Save Changes</Button>
        </div>
      </GlassCard>
      <GlassCard title="Preferences" description="Notifications and security">
        <div className="space-y-4">
          {[
            { label: "Email Notifications", desc: "Daily summary and alerts", on: true },
            { label: "Two-Factor Auth", desc: "Required for all admins", on: true },
            { label: "Audit Logging", desc: "Track every admin action", on: true },
            { label: "Beta Features", desc: "Early access to new tools", on: false },
          ].map((p) => (
            <div key={p.label} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div>
                <p className="text-sm font-medium">{p.label}</p>
                <p className="text-[11px] text-muted-foreground">{p.desc}</p>
              </div>
              <Switch defaultChecked={p.on} />
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </>
);

export const ActivityLogPage = () => {
  const data = [
    { id: "LOG-9821", user: "Admin User", action: "Updated branch 'New York HQ'", ip: "192.168.1.4", date: "2026-04-30 14:22", status: "completed" },
    { id: "LOG-9822", user: "Sarah Chen", action: "Approved invoice INV-4421", ip: "10.0.0.12", date: "2026-04-30 13:48", status: "completed" },
    { id: "LOG-9823", user: "Marco Rossi", action: "Exported financial report", ip: "10.0.0.18", date: "2026-04-30 12:30", status: "completed" },
    { id: "LOG-9824", user: "System", action: "Backup completed", ip: "127.0.0.1", date: "2026-04-30 03:00", status: "completed" },
    { id: "LOG-9825", user: "James O'Brien", action: "Failed login attempt", ip: "203.0.113.7", date: "2026-04-30 01:14", status: "cancelled" },
  ];
  return (
    <>
      <PageHeader title="Activity Log" description="Auditable record of every action in the system." />
      <DataTable
        title="System Activity"
        columns={[
          { key: "id", header: "Log #", render: (r) => <span className="font-medium">{r.id}</span> },
          { key: "user", header: "User" },
          { key: "action", header: "Action" },
          { key: "ip", header: "IP Address" },
          { key: "date", header: "Timestamp" },
          { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
        ]}
        data={data}
        addLabel="Export Log"
      />
    </>
  );
};

export const BackupsPage = () => {
  const data = [
    { id: "BAK-0421", type: "Full", size: "8.4 GB", date: "2026-04-30 03:00", status: "completed" },
    { id: "BAK-0420", type: "Incremental", size: "412 MB", date: "2026-04-29 03:00", status: "completed" },
    { id: "BAK-0419", type: "Incremental", size: "388 MB", date: "2026-04-28 03:00", status: "completed" },
    { id: "BAK-0418", type: "Full", size: "8.2 GB", date: "2026-04-27 03:00", status: "completed" },
  ];
  return (
    <>
      <PageHeader title="Backups" description="Database and file backup history." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Last Backup" value="11h ago" delta={0} icon={Database} accent="green" />
        <StatCard label="Storage Used" value="184 GB" delta={2.1} icon={HardDrive} accent="blue" />
        <StatCard label="Retention" value="30 days" delta={0} icon={ShieldCheck} accent="purple" />
        <StatCard label="Schedule" value="Daily 03:00" delta={0} icon={Activity} accent="orange" />
      </div>
      <div className="mt-4">
        <DataTable
          title="Backup History"
          columns={[
            { key: "id", header: "Backup #", render: (r) => <span className="font-medium">{r.id}</span> },
            { key: "type", header: "Type" },
            { key: "size", header: "Size" },
            { key: "date", header: "Created" },
            { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
          ]}
          data={data}
          addLabel="Run Backup Now"
        />
      </div>
    </>
  );
};

export const SupportPage = () => {
  const tickets = [
    { id: "TKT-2421", subject: "Invoice not generating", from: "Sarah Chen", priority: "High", date: "2026-04-30", status: "processing" },
    { id: "TKT-2420", subject: "Branch sync delayed", from: "Marco Rossi", priority: "Med", date: "2026-04-29", status: "pending" },
    { id: "TKT-2419", subject: "Export to PDF broken", from: "Yuki Tanaka", priority: "Low", date: "2026-04-28", status: "completed" },
    { id: "TKT-2418", subject: "Payroll calculation issue", from: "Anja Müller", priority: "High", date: "2026-04-27", status: "completed" },
  ];
  return (
    <>
      <PageHeader title="Support" description="Customer and internal help-desk tickets." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Open Tickets" value="14" delta={-8.2} icon={LifeBuoy} accent="orange" />
        <StatCard label="Resolved (30d)" value="248" delta={12.4} icon={MessageSquare} accent="green" />
        <StatCard label="Avg Response" value="2.4h" delta={-14.2} icon={Activity} accent="blue" />
        <StatCard label="Satisfaction" value="96%" delta={2.1} icon={ShieldCheck} accent="purple" />
      </div>
      <div className="mt-4">
        <DataTable
          title="Support Tickets"
          columns={[
            { key: "id", header: "Ticket #", render: (r) => <span className="font-medium">{r.id}</span> },
            { key: "subject", header: "Subject" },
            { key: "from", header: "From" },
            { key: "priority", header: "Priority" },
            { key: "date", header: "Date" },
            { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
          ]}
          data={tickets}
          addLabel="New Ticket"
        />
      </div>
    </>
  );
};
