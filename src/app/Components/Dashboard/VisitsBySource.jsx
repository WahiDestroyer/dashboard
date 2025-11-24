"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const VisitsBySource = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const topShare = Math.round((data[0]?.value / total) * 100 || 0);

  return (
    <div className="card p-4 h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold">Visits by Source</div>
        <button className="text-[var(--muted)]" aria-label="Visits actions">
          •••
        </button>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={40}
              outerRadius={70}
              dataKey="value"
              paddingAngle={4}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#111523",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                color: "var(--text)",
              }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-2">
        <div className="text-2xl font-semibold">{topShare}%</div>
        <div className="text-xs muted">Top source share</div>
      </div>
    </div>
  );
};

export default VisitsBySource;
