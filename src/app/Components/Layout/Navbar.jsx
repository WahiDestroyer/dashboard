"use client";

import React from "react";
import { FiSearch, FiCompass, FiBell, FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 right-0 flex items-center gap-4 px-6 py-4 z-40"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        borderBottom: "1px solid var(--border)",
        left: "16rem",
      }}
    >
      <div
        className="flex items-center gap-3 flex-1 max-w-lg px-3 py-2 rounded-xl border"
        style={{
          background: "#161922",
          borderColor: "var(--border)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <FiSearch className="text-[var(--muted)]" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm w-full placeholder-[var(--muted)]"
          style={{ color: "var(--text)" }}
        />
      </div>

      <button
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xl border"
        style={{
          background: "#161922",
          borderColor: "var(--border)",
          color: "var(--muted)",
        }}
      >
        <FiCompass size={18} />
        <span>Browse</span>
      </button>

      <div className="flex items-center gap-3 ml-auto text-[var(--muted)]">
        <button
          className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-[var(--text)] transition"
          style={{ borderColor: "var(--border)", background: "#161922" }}
          aria-label="Notifications"
        >
          <FiBell size={18} />
        </button>
        <button
          className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-[var(--text)] transition"
          style={{ borderColor: "var(--border)", background: "#161922" }}
          aria-label="Settings"
        >
          <FiSettings size={18} />
        </button>
        <span
          className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-semibold shadow"
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(135deg, #8a5cf5, #f76b8a)",
            color: "#fff",
          }}
        >
          <span aria-hidden="true">A</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
