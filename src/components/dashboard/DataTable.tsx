import { Plus, Pencil, Trash2, Search, Filter, Download } from "lucide-react";
import { ReactNode, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { GlassCard } from "@/components/dashboard/GlassCard";

export type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
};

interface DataTableProps<T> {
  title: string;
  columns: Column<T>[];
  data: T[];
  searchKeys?: (keyof T)[];
  addLabel?: string;
}

export function DataTable<T extends Record<string, any>>({
  title, columns, data, searchKeys = [], addLabel = "Add New",
}: DataTableProps<T>) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q) return data;
    const lower = q.toLowerCase();
    return data.filter((row) =>
      (searchKeys.length ? searchKeys : Object.keys(row)).some((k) =>
        String(row[k as keyof T] ?? "").toLowerCase().includes(lower)
      )
    );
  }, [data, q, searchKeys]);

  return (
    <GlassCard className="p-0">
      <div className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-display text-base font-semibold">{title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{filtered.length} records</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              className="h-9 w-44 rounded-lg border-white/5 bg-white/5 pl-9 text-sm md:w-56"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9 gap-1.5 rounded-lg border-white/10 bg-white/5">
            <Filter className="h-4 w-4" /> Filters
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-1.5 rounded-lg border-white/10 bg-white/5">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button size="sm" className="h-9 gap-1.5 rounded-lg bg-gradient-primary text-white shadow-glow hover:opacity-90">
            <Plus className="h-4 w-4" /> {addLabel}
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-white/5">
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              {columns.map((c) => (
                <TableHead key={String(c.key)} className={`text-xs uppercase tracking-wider text-muted-foreground/70 ${c.className ?? ""}`}>
                  {c.header}
                </TableHead>
              ))}
              <TableHead className="text-right text-xs uppercase tracking-wider text-muted-foreground/70">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row, i) => (
              <TableRow key={i} className="border-white/5 transition-colors hover:bg-white/[0.03]">
                {columns.map((c) => (
                  <TableCell key={String(c.key)} className={`py-3 text-sm ${c.className ?? ""}`}>
                    {c.render ? c.render(row) : String(row[c.key as keyof T] ?? "")}
                  </TableCell>
                ))}
                <TableCell className="py-3 text-right">
                  <div className="inline-flex items-center gap-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-neon-blue/10 hover:text-neon-blue">
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-destructive/10 hover:text-destructive">
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="py-12 text-center text-sm text-muted-foreground">
                  No records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </GlassCard>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    active: "bg-success/15 text-success ring-success/30",
    inactive: "bg-muted text-muted-foreground ring-white/10",
    pending: "bg-warning/15 text-warning ring-warning/30",
    completed: "bg-success/15 text-success ring-success/30",
    cancelled: "bg-destructive/15 text-destructive ring-destructive/30",
    paid: "bg-success/15 text-success ring-success/30",
    unpaid: "bg-destructive/15 text-destructive ring-destructive/30",
    processing: "bg-neon-blue/15 text-neon-blue ring-neon-blue/30",
    shipped: "bg-neon-purple/15 text-neon-purple ring-neon-purple/30",
    online: "bg-success/15 text-success ring-success/30",
    offline: "bg-muted text-muted-foreground ring-white/10",
  };
  const cls = map[status.toLowerCase()] ?? "bg-white/5 text-foreground ring-white/10";
  return (
    <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ring-1 ${cls} hover:${cls}`}>
      {status}
    </Badge>
  );
}
