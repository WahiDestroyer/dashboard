"use client";

import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const toneStyles = {
  up: {
    color: "#34d399",
    icon: <FiTrendingUp />,
  },
  down: {
    color: "#f87171",
    icon: <FiTrendingDown />,
  },
};

const StatCard = ({ title, value, delta, note, tone = "up" }) => {
  const style = toneStyles[tone] ?? toneStyles.up;

  return (
    <div className="card p-4">
      <div className="flex items-start justify-between">
        <div className="text-sm muted">{title}</div>
        <button
          className="text-xs muted"
          aria-label="More options"
          style={{ background: "none" }}
        >
          •••
        </button>
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="mt-2 flex items-center gap-2 text-sm">
        <span
          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg"
          style={{
            background: "rgba(52, 211, 153, 0.12)",
            color: style.color,
          }}
        >
          <span className="text-base">{style.icon}</span>
          {delta}
        </span>
        <span className="muted">{note}</span>
      </div>
    </div>
  );
};

export default StatCard;
