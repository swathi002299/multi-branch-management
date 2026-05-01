import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BarChart3, Building2, Users, Briefcase, ShieldCheck,
  Package, ShoppingCart, Boxes, Truck, Wallet, Receipt, CreditCard,
  FileText, Settings, Activity, Database, LifeBuoy, UserCog, UserCheck,
  HardHat, Handshake, Store, Calculator, HeartHandshake, ShoppingBag,
  Repeat, FolderTree, BadgeCheck, ChevronRight, Sparkles
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar
} from "@/components/ui/sidebar";

const groups = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Analytics",
    items: [
      { title: "Company", url: "/analytics/company", icon: BarChart3 },
      { title: "Clients", url: "/analytics/clients", icon: Handshake },
      { title: "Workers", url: "/analytics/workers", icon: HardHat },
      { title: "Branches", url: "/analytics/branches", icon: Building2 },
    ],
  },
  {
    label: "Management",
    items: [
      { title: "Branches", url: "/branches", icon: Building2 },
      { title: "Departments", url: "/departments", icon: FolderTree },
      { title: "Designations", url: "/designations", icon: BadgeCheck },
      { title: "Employees", url: "/employees", icon: Users },
      { title: "Roles", url: "/roles", icon: ShieldCheck },
    ],
  },
  {
    label: "People",
    items: [
      { title: "Admins", url: "/admins", icon: UserCog },
      { title: "Managers", url: "/managers", icon: Briefcase },
      { title: "Workers", url: "/workers", icon: HardHat },
      { title: "Clients", url: "/clients", icon: UserCheck },
      { title: "Vendors", url: "/vendors", icon: Store },
      { title: "Accountants", url: "/accountants", icon: Calculator },
      { title: "HR", url: "/hr", icon: HeartHandshake },
    ],
  },
  {
    label: "Operations",
    items: [
      { title: "Products", url: "/products", icon: Package },
      { title: "Sales", url: "/sales", icon: ShoppingCart },
      { title: "Purchases", url: "/purchases", icon: ShoppingBag },
      { title: "Inventory", url: "/inventory", icon: Boxes },
      { title: "Orders", url: "/orders", icon: Receipt },
      { title: "Transfers", url: "/transfers", icon: Repeat },
    ],
  },
  {
    label: "Finance",
    items: [
      { title: "Accounts", url: "/accounts", icon: Wallet },
      { title: "Expenses", url: "/expenses", icon: Receipt },
      { title: "Payments", url: "/payments", icon: CreditCard },
      { title: "Payroll", url: "/payroll", icon: Truck },
      { title: "Reports", url: "/reports", icon: FileText },
    ],
  },
  {
    label: "System",
    items: [
      { title: "Settings", url: "/settings", icon: Settings },
      { title: "Activity Log", url: "/activity-log", icon: Activity },
      { title: "Backups", url: "/backups", icon: Database },
      { title: "Support", url: "/support", icon: LifeBuoy },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold leading-tight gradient-text">Multi Branch</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Management</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 py-3">
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            {!collapsed && (
              <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const active = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton asChild isActive={active}>
                        <NavLink
                          to={item.url}
                          className={`group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-all ${
                            active
                              ? "bg-gradient-primary text-white shadow-glow font-medium"
                              : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          }`}
                        >
                          <item.icon className="h-4 w-4 shrink-0" />
                          {!collapsed && <span className="truncate">{item.title}</span>}
                          {!collapsed && active && <ChevronRight className="ml-auto h-3.5 w-3.5" />}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
