"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = {
  completed: "#ef4444",
  pending: "#f9a8d4",
  unpaid: "#38bdf8",
  delivered: "#8b5cf6",
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div
      className="rounded-xl p-3 text-sm"
      style={{ background: "#111523", border: "1px solid var(--border)", color: "var(--text)" }}
    >
      <div className="font-semibold mb-1">{label}</div>
      {payload.map((item) => (
        <div key={item.dataKey} className="flex items-center gap-2 muted">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: item.color }}
          />
          <span className="capitalize">{item.dataKey}</span>
          <span className="text-white ml-auto">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

const SalesPerformance = ({ data }) => {
  return (
    <div className="card p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm muted">Sales Performance</div>
          <div className="text-lg font-semibold">Monthly</div>
        </div>
        <span className="pill text-xs">Today&apos;s • Monthly</span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 0, right: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="month" stroke="var(--muted)" />
            <YAxis stroke="var(--muted)" />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={30} />
            <Area
              type="monotone"
              dataKey="completed"
              stackId="1"
              stroke={COLORS.completed}
              fill={COLORS.completed}
              fillOpacity={0.4}
              activeDot={{ r: 4 }}
            />
            <Area
              type="monotone"
              dataKey="pending"
              stackId="1"
              stroke={COLORS.pending}
              fill={COLORS.pending}
              fillOpacity={0.45}
            />
            <Area
              type="monotone"
              dataKey="unpaid"
              stackId="1"
              stroke={COLORS.unpaid}
              fill={COLORS.unpaid}
              fillOpacity={0.4}
            />
            <Area
              type="monotone"
              dataKey="delivered"
              stackId="1"
              stroke={COLORS.delivered}
              fill={COLORS.delivered}
              fillOpacity={0.45}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPerformance;
