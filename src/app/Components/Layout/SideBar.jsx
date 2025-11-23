"use client";

import React, { useEffect, useState } from "react";
import Toggle from "../ui/Toggle";

const navItems = [
  { label: "Dashboard", icon: "🔍", active: true },
  { label: "Products", icon: "📦" },
  { label: "Orders", icon: "🧾" },
  { label: "Payments", icon: "💳" },
  { label: "Transactions", icon: "💱" },
  { label: "Clients", icon: "👥" },
];

const categories = [
  { label: "Laptops", color: "#ffd54f" },
  { label: "Mobile phones", color: "#ff6f6f" },
  { label: "Desktops", color: "#7c6bff" },
  { label: "Accessories", color: "#6ce5a5" },
  { label: "Portable storage", color: "#6ce5a5" },
  { label: "Networking", color: "#50d1b2" },
];

const avatars = [
  "#d97706",
  "#6366f1",
  "#f43f5e",
  "#06b6d4",
  "#84cc16",
  "#c084fc",
];

const SideBar = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("theme-light", isLight);
    document.body.classList.toggle("theme-dark", !isLight);
  }, [isLight]);

  return (
    <aside
      className="w-64 min-h-screen flex flex-col justify-between"
      style={{ background: "var(--surface)", color: "var(--text)" }}
    >
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xl shadow-lg">
            F
          </div>
          <div className="text-lg font-semibold">Frox</div>
          <span className="ml-auto text-sm text-[var(--muted)]">↗</span>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
                item.active
                  ? "bg-[var(--accent)] text-white shadow"
                  : "hover:bg-[rgba(255,255,255,0.06)] text-[var(--muted)]"
              }`}
            >
              <span>{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="border-t" style={{ borderColor: "var(--border)" }} />

        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wide text-[var(--muted)]">
            Categories
          </div>
          <div className="space-y-2">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="flex items-center justify-between text-sm text-[var(--text)]"
              >
                <span>{cat.label}</span>
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: cat.color }}
                />
              </div>
            ))}
            <button className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition">
              <span className="text-lg">＋</span>
              <span>Add category</span>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wide text-[var(--muted)]">
            Top sellers
          </div>
          <div className="flex items-center gap-2">
            {avatars.map((color, idx) => (
              <span
                key={color + idx}
                className="w-9 h-9 rounded-full border-2"
                style={{
                  background: color,
                  borderColor: "var(--surface)",
                  boxShadow: "0 0 0 2px rgba(0,0,0,0.1)",
                }}
              />
            ))}
            <span
              className="w-9 h-9 rounded-full border flex items-center justify-center text-xs font-semibold"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted)",
              }}
            >
              36
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl p-4 shadow"
          style={{ background: "var(--bg)", boxShadow: "var(--shadow)" }}
        >
          <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-3">
            <span>Pro</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </div>
          <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl text-white">
            🛍️
          </div>
          <div className="text-sm text-[var(--text)] mb-2 leading-tight">
            Unlock more by upgrading to Pro.
          </div>
          <button className="w-full mt-2 bg-[var(--accent)] text-white text-sm font-semibold py-2 rounded-xl shadow hover:brightness-110 transition">
            Upgrade now
          </button>
        </div>
      </div>

      <div className="p-4">
        <Toggle onToggle={setIsLight} />
      </div>
    </aside>
  );
};

export default SideBar;
