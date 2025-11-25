"use client";

import React, { useEffect, useState } from "react";
import Toggle from "../ui/Toggle";
import logo from "../../../../public/LogoDark.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LuChartSpline } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import { AiOutlineSwap } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";





const NAV_ITEMS = [
  { label: "Dashboard", icon: <LuChartSpline />, href: "/" },
  { label: "Products", icon: <BsShop/>, href: "/products" },
  { label: "Orders", icon: <GoChecklist/> , href: "/orders" },
  { label: "Payments", icon: <MdPayment/> , href: "/payments" },
  { label: "Transactions", icon: <AiOutlineSwap/>, href: "/transactions"  },
  { label: "Clients", icon: <BsPeople/> , href: "/clients" },
];

const CATEGORIES = [
  { label: "Laptops", color: "#ffd54f" },
  { label: "Mobile phones", color: "#ff6f6f" },
  { label: "Desktops", color: "#7c6bff" },
  { label: "Accessories", color: "#6ce5a5" },
  { label: "Portable storage", color: "#6ce5a5" },
  { label: "Networking", color: "#50d1b2" },
];

const AVATAR_COLORS = ["#d97706", "#6366f1", "#f43f5e", "#06b6d4", "#84cc16", "#c084fc"];

const Sidebar = () => {
  const [isLight, setIsLight] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [activeNav, setActiveNav] = useState(NAV_ITEMS[0]?.label ?? "");
  const pathname = usePathname();
  const router = useRouter();

  const sidebarWidth = isOpen ? "16rem" : "0rem";

  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(isLight ? "theme-light" : "theme-dark");
  }, [isLight]);

  useEffect(() => {
    const body = document.body;
    body.style.setProperty("--sidebar-width", sidebarWidth);
    return () => {
      body.style.setProperty("--sidebar-width", "16rem");
    };
  }, [sidebarWidth]);

  return (
    <div
      className=" fixed top-0 left-0 z-50 h-screen"
      style={{ width: sidebarWidth, overflow: "visible" }}
    >
      <aside
        className="w-64 px-2 h-screen flex flex-col transition-transform duration-300 overflow-y-auto sidebar-scroll"
        style={{
          background: "var(--surface)",
          color: "var(--text)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
      <div className="p-4 space-y-6 flex-1 pr-2">
        <header className="flex items-center gap-3">
          <Image src={logo} alt="logo"/>
          <span className="ml-auto text-sm text-[var(--muted)]">PRO</span>
        </header>

        <nav className="space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setActiveNav(item.label);
                if (item.href) router.push(item.href);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-base transition ${
                (item.href ? pathname === item.href : activeNav === item.label)
                  ? "bg-(--accent) text-white shadow"
                  : "hover:bg-[rgba(255,255,255,0.06)] text-(--muted)"
              }`}
            >
              <span className="font-bold">{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="border-t" style={{ borderColor: "var(--border)" }} />

        <section className="space-y-3">
          <div className="text-xs uppercase tracking-wide text-[var(--muted)]">Categories</div>
          <div className="space-y-2">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="flex items-center justify-between text-sm text-[var(--text)]"
              >
                <span>{cat.label}</span>
                <span className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
              </div>
            ))}
            <button className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition">
              <span className="text-lg font-semibold">+</span>
              <span>Add category</span>
            </button>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-xs uppercase tracking-wide text-[var(--muted)]">Top sellers</div>
          <div className="flex items-center gap-2">
            {AVATAR_COLORS.map((color, idx) => (
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
        </section>

        <section
          className="rounded-2xl p-4 shadow"
          style={{ background: "var(--bg)", boxShadow: "var(--shadow)" }}
        >
          <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-3">
            <span>Pro</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </div>
          <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl text-white">
            PRO
          </div>
          <div className="text-sm text-[var(--text)] mb-2 leading-tight">
            Unlock more by upgrading to Pro.
          </div>
          <button className="w-full mt-2 bg-[var(--accent)] text-white text-sm font-semibold py-2 rounded-xl shadow hover:brightness-110 transition">
            Upgrade now
          </button>
        </section>
      </div>

        <div className="p-4 pt-0">
          <Toggle onToggle={setIsLight} />
        </div>
      </aside>
      <button
        type="button"
        className="absolute top-13 z-50 w-10 h-10 rounded-full text-sm font-semibold border shadow transition bg-[var(--surface)] text-[var(--text)] hover:bg-[rgba(255,255,255,0.05)] flex items-center justify-center"
        style={{
          borderColor: "var(--border)",
          left: isOpen ? "14.7rem" : "0.5rem",
        }}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
};

export default Sidebar;
