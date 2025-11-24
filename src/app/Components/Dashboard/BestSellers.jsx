"use client";

import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const BestSellers = ({ sellers }) => {
  return (
    <div className="card p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm muted">Best Sellers</div>
          <div className="text-lg font-semibold">This month</div>
        </div>
        <button
          className="text-[var(--muted)]"
          aria-label="More best sellers actions"
        >
          <FiMoreVertical />
        </button>
      </div>
      <div className="space-y-3">
        {sellers.map((person) => (
          <div
            key={person.name}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition"
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{
                background: person.color,
                color: "#0f111a",
              }}
            >
              {person.name
                .split(" ")
                .map((s) => s[0])
                .join("")
                .slice(0, 2)}
            </span>
            <div className="flex-1">
              <div className="text-sm font-semibold">{person.name}</div>
              <div className="text-xs muted">{person.role}</div>
            </div>
            <div className="text-sm font-semibold">{person.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
