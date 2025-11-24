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

const RevenueTrend = ({ data }) => {
  return (
    <div className="card p-4 h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold">Total Revenue</div>
        <button className="text-[var(--muted)]" aria-label="Revenue actions">
          •••
        </button>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="month" stroke="var(--muted)" />
            <YAxis stroke="var(--muted)" />
            <Tooltip
              contentStyle={{
                background: "#111523",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                color: "var(--text)",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="direct"
              stackId="1"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.4}
            />
            <Area
              type="monotone"
              dataKey="social"
              stackId="1"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.35}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueTrend;
