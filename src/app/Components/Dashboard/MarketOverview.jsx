"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const MarketOverview = ({ data }) => {
  return (
    <div className="card p-4 h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold">Market Overview</div>
        <button className="text-[var(--muted)]" aria-label="Market actions">
          •••
        </button>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={12}>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="day" stroke="var(--muted)" />
            <YAxis stroke="var(--muted)" />
            <Tooltip
              contentStyle={{
                background: "#111523",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                color: "var(--text)",
              }}
            />
            <Bar dataKey="direct" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketOverview;
