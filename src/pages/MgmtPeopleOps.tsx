import { PageHeader } from "@/components/layout/PageHeader";
import { DataTable, Column, StatusBadge } from "@/components/dashboard/DataTable";
import { branches, employees, clients, products, orders } from "@/lib/mock";
import { GlassCard } from "@/components/dashboard/GlassCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Building2, FolderTree, BadgeCheck, Users, ShieldCheck,
  UserCog, Briefcase, HardHat, UserCheck, Store, Calculator, HeartHandshake,
  Package, ShoppingCart, ShoppingBag, Boxes, Receipt, Repeat,
} from "lucide-react";

type Person = { name: string; role: string; email: string; branch: string; status: string };

const peopleSet = (role: string, branch: string[], n = 6): Person[] =>
  Array.from({ length: n }).map((_, i) => ({
    name: ["Alex Kim", "Maria Lopez", "Jordan Lee", "Sam Patel", "Taylor Brooks", "Robin Singh", "Casey Park", "Morgan Reid"][i % 8],
    role,
    email: `${role.toLowerCase().replace(/\s/g, ".")}${i + 1}@mbms.io`,
    branch: branch[i % branch.length],
    status: i % 5 === 0 ? "pending" : i % 7 === 0 ? "inactive" : "active",
  }));

const personCols = (label: string): Column<Person>[] => [
  {
    key: "name", header: label,
    render: (r) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8 ring-1 ring-white/10">
          <AvatarFallback className="bg-gradient-primary text-[10px] font-semibold text-white">
            {r.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">{r.name}</span>
          <span className="text-[11px] text-muted-foreground">{r.email}</span>
        </div>
      </div>
    ),
  },
  { key: "role", header: "Role" },
  { key: "branch", header: "Branch" },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

/* ---------- Management Pages ---------- */
export const BranchesPage = () => (
  <>
    <PageHeader title="Branches" description="Manage all your global branches in one place." />
    <DataTable
      title="All Branches"
      columns={[
        { key: "name", header: "Branch", render: (r) => <span className="font-medium">{r.name}</span> },
        { key: "city", header: "Location" },
        { key: "revenue", header: "Revenue", render: (r) => <span className="text-neon-green">{r.revenue}</span> },
        { key: "orders", header: "Orders" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
      data={branches}
      searchKeys={["name", "city"]}
      addLabel="Add Branch"
    />
  </>
);

export const DepartmentsPage = () => {
  const depts = [
    { name: "Sales", head: "Yuki Tanaka", members: 142, branch: "Global", status: "active" },
    { name: "Operations", head: "Sarah Chen", members: 98, branch: "Global", status: "active" },
    { name: "Finance", head: "Marco Rossi", members: 64, branch: "London Central", status: "active" },
    { name: "Human Resources", head: "Anja Müller", members: 41, branch: "Berlin West", status: "active" },
    { name: "Technology", head: "James O'Brien", members: 78, branch: "Toronto North", status: "pending" },
    { name: "Marketing", head: "Emma Wilson", members: 52, branch: "Sydney Bay", status: "active" },
  ];
  return (
    <>
      <PageHeader title="Departments" description="Organize teams and ownership across the company." />
      <DataTable
        title="All Departments"
        columns={[
          { key: "name", header: "Department", render: (r) => <span className="font-medium">{r.name}</span> },
          { key: "head", header: "Head" },
          { key: "members", header: "Members" },
          { key: "branch", header: "Branch" },
          { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
        ]}
        data={depts}
        addLabel="Add Department"
      />
    </>
  );
};

export const DesignationsPage = () => {
  const data = [
    { title: "CEO", level: "C-Suite", count: 1, status: "active" },
    { title: "Branch Manager", level: "Senior", count: 28, status: "active" },
    { title: "Senior Accountant", level: "Senior", count: 14, status: "active" },
    { title: "Sales Lead", level: "Mid", count: 32, status: "active" },
    { title: "HR Specialist", level: "Mid", count: 18, status: "active" },
    { title: "Junior Analyst", level: "Junior", count: 84, status: "pending" },
  ];
  return (
    <>
      <PageHeader title="Designations" description="Job titles, levels and headcount across the org." />
      <DataTable
        title="All Designations"
        columns={[
          { key: "title", header: "Title", render: (r) => <span className="font-medium">{r.title}</span> },
          { key: "level", header: "Level" },
          { key: "count", header: "Headcount" },
          { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
        ]}
        data={data}
        addLabel="Add Designation"
      />
    </>
  );
};

export const EmployeesPage = () => (
  <>
    <PageHeader title="Employees" description="Browse and manage all employees across branches." />
    <DataTable
      title="All Employees"
      columns={[
        {
          key: "name", header: "Employee",
          render: (r) => (
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8"><AvatarFallback className="bg-gradient-primary text-[10px] text-white">{r.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback></Avatar>
              <div className="leading-tight"><div className="text-sm font-medium">{r.name}</div><div className="text-[11px] text-muted-foreground">{r.email}</div></div>
            </div>
          ),
        },
        { key: "role", header: "Role" },
        { key: "dept", header: "Department" },
        { key: "branch", header: "Branch" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
      data={employees}
      searchKeys={["name", "role", "dept", "branch"]}
      addLabel="Add Employee"
    />
  </>
);

export const RolesPage = () => {
  const data = [
    { name: "Super Admin", users: 2, perms: 124, status: "active" },
    { name: "Admin", users: 18, perms: 96, status: "active" },
    { name: "Manager", users: 42, perms: 64, status: "active" },
    { name: "Accountant", users: 24, perms: 38, status: "active" },
    { name: "Worker", users: 1240, perms: 18, status: "active" },
    { name: "Read Only", users: 8, perms: 6, status: "inactive" },
  ];
  return (
    <>
      <PageHeader title="Roles & Permissions" description="Define access roles and permission scopes." />
      <DataTable
        title="All Roles"
        columns={[
          { key: "name", header: "Role", render: (r) => <span className="font-medium">{r.name}</span> },
          { key: "users", header: "Users" },
          { key: "perms", header: "Permissions" },
          { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
        ]}
        data={data}
        addLabel="Add Role"
      />
    </>
  );
};

/* ---------- People Pages ---------- */
const branchList = branches.map((b) => b.name);

const peoplePage = (title: string, role: string, desc: string) => () => (
  <>
    <PageHeader title={title} description={desc} />
    <DataTable title={`All ${title}`} columns={personCols(title.replace(/s$/, ""))} data={peopleSet(role, branchList, 7)} searchKeys={["name", "role", "branch"]} addLabel={`Add ${title.replace(/s$/, "")}`} />
  </>
);

export const AdminsPage = peoplePage("Admins", "Administrator", "System administrators with elevated permissions.");
export const ManagersPage = peoplePage("Managers", "Manager", "Branch and department managers.");
export const WorkersPage = peoplePage("Workers", "Worker", "Frontline workforce across all branches.");
export const VendorsPage = peoplePage("Vendors", "Vendor", "Suppliers and third-party vendors.");
export const AccountantsPage = peoplePage("Accountants", "Accountant", "Finance & accounting team members.");
export const HRPage = peoplePage("HR", "HR Specialist", "Human resources team and specialists.");

export const ClientsPage = () => (
  <>
    <PageHeader title="Clients" description="Customer accounts and revenue contributors." />
    <DataTable
      title="All Clients"
      columns={[
        { key: "name", header: "Client", render: (r) => <span className="font-medium">{r.name}</span> },
        { key: "contact", header: "Contact" },
        { key: "country", header: "Country" },
        { key: "revenue", header: "Revenue", render: (r) => <span className="text-neon-green">{r.revenue}</span> },
        { key: "orders", header: "Orders" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
      data={clients}
      searchKeys={["name", "contact"]}
      addLabel="Add Client"
    />
  </>
);

/* ---------- Operations Pages ---------- */
const opsSummary = (a: { label: string; value: string; delta: number; icon: any; accent?: any }[]) => (
  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {a.map((s) => <StatCard key={s.label} {...s} />)}
  </div>
);

export const ProductsPage = () => (
  <>
    <PageHeader title="Products" description="Catalog of all products and SKUs." />
    {opsSummary([
      { label: "Total SKUs", value: "1,284", delta: 4.2, icon: Package, accent: "purple" },
      { label: "Active", value: "1,162", delta: 2.1, icon: BadgeCheck, accent: "green" },
      { label: "Low Stock", value: "42", delta: -8.4, icon: Boxes, accent: "orange" },
      { label: "Categories", value: "28", delta: 0, icon: FolderTree, accent: "blue" },
    ])}
    <DataTable
      title="All Products"
      columns={[
        { key: "sku", header: "SKU" },
        { key: "name", header: "Product", render: (r) => <span className="font-medium">{r.name}</span> },
        { key: "category", header: "Category" },
        { key: "price", header: "Price", render: (r) => <span className="text-neon-green">{r.price}</span> },
        { key: "stock", header: "Stock" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
      data={products}
      searchKeys={["name", "sku", "category"]}
      addLabel="Add Product"
    />
  </>
);

export const SalesPage = () => (
  <>
    <PageHeader title="Sales" description="Recent sales orders and invoicing." />
    {opsSummary([
      { label: "Sales (30d)", value: "$284K", delta: 12.4, icon: ShoppingCart, accent: "purple" },
      { label: "Avg Order", value: "$486", delta: 3.2, icon: Receipt, accent: "blue" },
      { label: "Refunds", value: "$2.4K", delta: -1.8, icon: Repeat, accent: "orange" },
      { label: "New Customers", value: "184", delta: 8.6, icon: Users, accent: "green" },
    ])}
    <DataTable
      title="Recent Sales"
      columns={[
        { key: "id", header: "Order", render: (r) => <span className="font-medium">{r.id}</span> },
        { key: "client", header: "Client" },
        { key: "amount", header: "Amount", render: (r) => <span className="text-neon-green">{r.amount}</span> },
        { key: "date", header: "Date" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
      data={orders}
      addLabel="New Sale"
    />
  </>
);

export const PurchasesPage = () => {
  const data = orders.map((o) => ({ ...o, id: o.id.replace("ORD", "PUR"), client: ["Acme Supplies", "Globex Parts", "Initech Steel", "Stark Forge", "Wayne Materials", "Umbrella Chem"][Math.floor(Math.random() * 6)] }));
  return (
    <>
      <PageHeader title="Purchases" description="Procurement and supplier purchase orders." />
      {opsSummary([
        { label: "Purchases (30d)", value: "$184K", delta: 6.2, icon: ShoppingBag, accent: "blue" },
        { label: "Suppliers", value: "48", delta: 2.0, icon: Store, accent: "purple" },
        { label: "Pending POs", value: "14", delta: -4.1, icon: Receipt, accent: "orange" },
        { label: "On-time %", value: "94%", delta: 1.2, icon: BadgeCheck, accent: "green" },
      ])}
      <DataTable
        title="Purchase Orders"
        columns={[
          { key: "id", header: "PO #", render: (r) => <span className="font-medium">{r.id}</span> },
          { key: "client", header: "Vendor" },
          { key: "amount", header: "Amount" },
          { key: "date", header: "Date" },
          { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
        ]}
        data={data}
        addLabel="Create PO"
      />
    </>
  );
};

export const InventoryPage = () => (
  <>
    <PageHeader title="Inventory" description="Stock levels across warehouses and branches." />
    {opsSummary([
      { label: "Total Items", value: "48,210", delta: 1.4, icon: Boxes, accent: "purple" },
      { label: "Warehouses", value: "12", delta: 0, icon: Building2, accent: "blue" },
      { label: "Out of Stock", value: "18", delta: -22.4, icon: Package, accent: "orange" },
      { label: "Stock Value", value: "$2.1M", delta: 4.6, icon: BadgeCheck, accent: "green" },
    ])}
    <DataTable
      title="Inventory Items"
      columns={[
        { key: "sku", header: "SKU" },
        { key: "name", header: "Item", render: (r) => <span className="font-medium">{r.name}</span> },
        { key: "category", header: "Category" },
        { key: "stock", header: "On Hand" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
      data={products}
      addLabel="Adjust Stock"
    />
  </>
);

export const OrdersPage = () => (
  <>
    <PageHeader title="Orders" description="All customer orders and fulfillment status." />
    {opsSummary([
      { label: "Orders (30d)", value: "3,412", delta: 6.8, icon: Receipt, accent: "purple" },
      { label: "Processing", value: "184", delta: 2.4, icon: ShoppingCart, accent: "blue" },
      { label: "Shipped", value: "2,840", delta: 8.2, icon: Repeat, accent: "green" },
      { label: "Cancelled", value: "42", delta: -3.6, icon: Boxes, accent: "orange" },
    ])}
    <DataTable
      title="All Orders"
      columns={[
        { key: "id", header: "Order #", render: (r) => <span className="font-medium">{r.id}</span> },
        { key: "client", header: "Client" },
        { key: "amount", header: "Amount", render: (r) => <span className="text-neon-green">{r.amount}</span> },
        { key: "date", header: "Date" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
      data={orders}
      addLabel="New Order"
    />
  </>
);

export const TransfersPage = () => {
  const data = [
    { id: "TRF-2401", from: "New York HQ", to: "Toronto North", item: "Widget Pro x40", date: "2026-04-28", status: "completed" },
    { id: "TRF-2402", from: "London Central", to: "Berlin West", item: "Smart Gadget x12", date: "2026-04-29", status: "shipped" },
    { id: "TRF-2403", from: "Tokyo Tower", to: "Sydney Bay", item: "Cloud Licenses x80", date: "2026-04-30", status: "processing" },
    { id: "TRF-2404", from: "Dubai Marina", to: "London Central", item: "Brackets x500", date: "2026-04-30", status: "pending" },
  ];
  return (
    <>
      <PageHeader title="Transfers" description="Inter-branch and warehouse stock transfers." />
      <DataTable
        title="All Transfers"
        columns={[
          { key: "id", header: "Transfer #", render: (r) => <span className="font-medium">{r.id}</span> },
          { key: "from", header: "From" },
          { key: "to", header: "To" },
          { key: "item", header: "Item" },
          { key: "date", header: "Date" },
          { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
        ]}
        data={data}
        addLabel="New Transfer"
      />
    </>
  );
};

/* Re-exports for convenience */
export const PeopleIcons = {
  UserCog, Briefcase, HardHat, UserCheck, Store, Calculator, HeartHandshake,
};
