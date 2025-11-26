"use client";

import React from "react";
import { BsListUl, BsGrid3X3Gap } from "react-icons/bs";

/**
 * Layout toggle control for switching between list and grid views.
 */
const Layout = ({ mode = "grid", onChange }) => {
  const handleList = () => onChange?.("list");
  const handleGrid = () => onChange?.("grid");

  const base =
    "flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors";

  return (
    <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={handleList}
        className={`${base} ${
          mode === "list"
            ? "bg-[var(--accent)] text-white"
            : "text-(--muted) hover:text-white"
        }`}
        aria-pressed={mode === "list"}
      >
        <BsListUl
          className={`text-lg ${mode === "list" ? "opacity-100" : "opacity-70"}`}
        />
        <span>List</span>
      </button>
      <button
        type="button"
        onClick={handleGrid}
        className={`${base} border-l border-[var(--border)] ${
          mode === "grid"
            ? "bg-[var(--accent)] text-white"
            : "text-(--muted) hover:text-white"
        }`}
        aria-pressed={mode === "grid"}
      >
        <BsGrid3X3Gap
          className={`text-lg ${
            mode === "grid" ? "opacity-100" : "opacity-70"
          }`}
        />
        <span>Grid</span>
      </button>
    </div>
  );
};

export default Layout;
