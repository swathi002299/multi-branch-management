import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import CompanyAnalytics from "./pages/analytics/CompanyAnalytics";
import ClientsAnalytics from "./pages/analytics/ClientsAnalytics";
import WorkersAnalytics from "./pages/analytics/WorkersAnalytics";
import BranchesAnalytics from "./pages/analytics/BranchesAnalytics";

import {
  BranchesPage, DepartmentsPage, DesignationsPage, EmployeesPage, RolesPage,
  AdminsPage, ManagersPage, WorkersPage, ClientsPage, VendorsPage, AccountantsPage, HRPage,
  ProductsPage, SalesPage, PurchasesPage, InventoryPage, OrdersPage, TransfersPage,
} from "./pages/MgmtPeopleOps";

import {
  AccountsPage, ExpensesPage, PaymentsPage, PayrollPage, ReportsPage,
  SettingsPage, ActivityLogPage, BackupsPage, SupportPage,
} from "./pages/FinanceSystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/analytics/company" element={<CompanyAnalytics />} />
            <Route path="/analytics/clients" element={<ClientsAnalytics />} />
            <Route path="/analytics/workers" element={<WorkersAnalytics />} />
            <Route path="/analytics/branches" element={<BranchesAnalytics />} />

            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/designations" element={<DesignationsPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/roles" element={<RolesPage />} />

            <Route path="/admins" element={<AdminsPage />} />
            <Route path="/managers" element={<ManagersPage />} />
            <Route path="/workers" element={<WorkersPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/vendors" element={<VendorsPage />} />
            <Route path="/accountants" element={<AccountantsPage />} />
            <Route path="/hr" element={<HRPage />} />

            <Route path="/products" element={<ProductsPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/purchases" element={<PurchasesPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/transfers" element={<TransfersPage />} />

            <Route path="/accounts" element={<AccountsPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/payroll" element={<PayrollPage />} />
            <Route path="/reports" element={<ReportsPage />} />

            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/activity-log" element={<ActivityLogPage />} />
            <Route path="/backups" element={<BackupsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
