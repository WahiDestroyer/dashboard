"use client";

import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const statusColors = {
  Delivered: "#34d399",
  Pending: "#fbbf24",
  Canceled: "#f87171",
};

const RecentPurchases = ({ rows }) => {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Recent Purchases</div>
        <button className="text-[var(--muted)]" aria-label="Purchases actions">
          <FiMoreVertical />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left muted">
            <tr className="border-b" style={{ borderColor: "var(--border)" }}>
              <th className="py-2 font-normal">Products</th>
              <th className="py-2 font-normal">Order ID</th>
              <th className="py-2 font-normal">Date</th>
              <th className="py-2 font-normal">Customer name</th>
              <th className="py-2 font-normal">Status</th>
              <th className="py-2 font-normal">Amount</th>
              <th className="py-2 font-normal text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.product + idx}
                className="border-b last:border-0 hover:bg-[rgba(255,255,255,0.02)]"
                style={{ borderColor: "var(--border)" }}
              >
                <td className="py-3 font-medium">{row.product}</td>
                <td className="py-3 muted">{row.orderId}</td>
                <td className="py-3 muted">{row.date}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "var(--text)",
                      }}
                    >
                      {row.customer[0]}
                    </span>
                    <span>{row.customer}</span>
                  </div>
                </td>
                <td className="py-3">
                  <span
                    className="px-2 py-1 rounded-lg text-xs font-semibold"
                    style={{
                      background: `${statusColors[row.status] || "#a5b4fc"}1a`,
                      color: statusColors[row.status] || "#a5b4fc",
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3 font-semibold">{row.amount}</td>
                <td className="py-3 text-right">
                  <button className="text-[var(--muted)]">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPurchases;
