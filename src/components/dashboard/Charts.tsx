import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend,
} from "recharts";

const tooltipStyle = {
  contentStyle: {
    background: "hsl(232 40% 10% / 0.95)",
    border: "1px solid hsl(232 30% 22%)",
    borderRadius: 12,
    backdropFilter: "blur(12px)",
    fontSize: 12,
    color: "hsl(220 30% 96%)",
  },
  labelStyle: { color: "hsl(220 15% 65%)", fontSize: 11, marginBottom: 4 },
  cursor: { fill: "hsl(252 95% 68% / 0.06)" },
};

export function MiniArea({ data, color = "hsl(252 95% 68%)" }: { data: { v: number }[]; color?: string }) {
  return (
    <ResponsiveContainer width="100%" height={50}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`mini-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.6} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke={color} strokeWidth={2} fill={`url(#mini-${color})`} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function LineSeries({
  data, keys,
}: {
  data: any[];
  keys: { key: string; color: string; name?: string }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(232 30% 18%)" vertical={false} />
        <XAxis dataKey="name" stroke="hsl(220 15% 55%)" fontSize={11} tickLine={false} axisLine={false} />
        <YAxis stroke="hsl(220 15% 55%)" fontSize={11} tickLine={false} axisLine={false} />
        <Tooltip {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11, color: "hsl(220 15% 65%)" }} iconType="circle" />
        {keys.map((k) => (
          <Line key={k.key} type="monotone" dataKey={k.key} name={k.name ?? k.key}
            stroke={k.color} strokeWidth={2.5} dot={{ r: 3, fill: k.color }} activeDot={{ r: 5 }} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarSeries({
  data, keys, height = 300,
}: {
  data: any[];
  keys: { key: string; color: string; name?: string }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(232 30% 18%)" vertical={false} />
        <XAxis dataKey="name" stroke="hsl(220 15% 55%)" fontSize={11} tickLine={false} axisLine={false} />
        <YAxis stroke="hsl(220 15% 55%)" fontSize={11} tickLine={false} axisLine={false} />
        <Tooltip {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11, color: "hsl(220 15% 65%)" }} iconType="circle" />
        {keys.map((k) => (
          <Bar key={k.key} dataKey={k.key} name={k.name ?? k.key} fill={k.color} radius={[6, 6, 0, 0]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export function Donut({
  data, height = 260,
}: { data: { name: string; value: number; color: string }[]; height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Tooltip {...tooltipStyle} />
        <Pie data={data} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={3} stroke="none">
          {data.map((d, i) => <Cell key={i} fill={d.color} />)}
        </Pie>
        <Legend wrapperStyle={{ fontSize: 11, color: "hsl(220 15% 65%)" }} iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  );
}
