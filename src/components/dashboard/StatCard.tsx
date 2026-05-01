import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  delta?: number;
  icon: LucideIcon;
  accent?: "purple" | "blue" | "green" | "orange" | "pink";
}

const accentMap = {
  purple: { ring: "ring-neon-purple/30", bg: "bg-neon-purple/10", text: "text-neon-purple" },
  blue: { ring: "ring-neon-blue/30", bg: "bg-neon-blue/10", text: "text-neon-blue" },
  green: { ring: "ring-neon-green/30", bg: "bg-neon-green/10", text: "text-neon-green" },
  orange: { ring: "ring-neon-orange/30", bg: "bg-neon-orange/10", text: "text-neon-orange" },
  pink: { ring: "ring-neon-pink/30", bg: "bg-neon-pink/10", text: "text-neon-pink" },
};

export function StatCard({ label, value, delta, icon: Icon, accent = "purple" }: StatCardProps) {
  const a = accentMap[accent];
  const positive = (delta ?? 0) >= 0;
  return (
    <div className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow">
      <div className={cn("absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl opacity-40", a.bg)} />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="mt-2 font-display text-2xl font-bold md:text-3xl">{value}</p>
          {delta !== undefined && (
            <div className={cn("mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
              positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive")}>
              {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {positive ? "+" : ""}{delta}%
              <span className="text-muted-foreground/70">vs last</span>
            </div>
          )}
        </div>
        <div className={cn("rounded-xl p-2.5 ring-1", a.bg, a.ring, a.text)}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
