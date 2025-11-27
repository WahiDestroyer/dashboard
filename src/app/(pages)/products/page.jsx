"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import ProductItems from "@/app/Components/Products/ProductItems";
import Layout from "@/app/Components/ui/Layout";

const products = [
  {
    id: 1,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.8,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1679421253067-b5adad691552?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.8,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.8,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 5,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1641457474717-26e699f45414?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.9,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.8,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1710934443296-d00b8c78110e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.7,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 8,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.8,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 9,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 5,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 10,
    name: "Cubiom Smart Watch",
    desc: "Design lorem ipsum dolor sit amet, consectetur adip elit sed do eiusmod tempor",
    sku: "FROX-13953",
    price: "$679.28",
    status: "Active",
    size: "50S",
    qty: 566,
    rating: 4.9,
    sales: "186 / 2038",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=200&q=80",
  },
];

const page = () => {
  const [view, setView] = useState("list");

  return (
    <div className="m-6 space-y-6">
      <div className="flex items-center justify-between pb-7">
        <div>
          <h2 className="font-poppins text-3xl font-bold text-white leading-8 pb-3.5">
            All Products
          </h2>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-sm hover:underline flex items-center gap-1">
              <GoHome /> Home{" "}
            </Link>
            <IoChevronForwardSharp />
            <span className="text-base text-(--accent)"> Products</span>
          </div>
        </div>
        <div>
          <Layout mode={view} onChange={setView} />
        </div>
      </div>

      {view === "list" ? (
        <div className="card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-(--border) text-sm text-(--muted)">
            <span className="text-white font-semibold">Products</span>
            <span className="text-xs bg-(--accent)/15 text-(--accent) px-2 py-0.5 rounded-full">
              {products.length} items
            </span>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[1100px] divide-y divide-(--border)">
              <div className="flex items-center gap-4 px-4 py-3 text-xs uppercase tracking-wide text-(--muted)">
                <span className="w-[72px] shrink-0">Image</span>
                <span className="flex-[1.6] min-w-[180px]">Name</span>
                <span className="flex-1">SKU</span>
                <span className="flex-[0.9]">Price</span>
                <span className="flex-[0.9]">Status</span>
                <span className="flex-[0.7]">Size</span>
                <span className="flex-[0.8]">Qty</span>
                <span className="flex-[0.9]">Rating</span>
                <span className="flex-[0.8]">Sales</span>
              </div>
              {products.map((item) => (
                <ProductItems key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="card p-4 space-y-3 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-xl object-cover bg-(--surface) ring-1 ring-(--border)"
                />
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-xs text-(--muted)">{item.sku}</p>
                </div>
              </div>
              <p className="text-sm text-(--muted) leading-tight">{item.desc}</p>
              <div className="flex items-center justify-between text-sm text-white">
                <span className="font-semibold">{item.price}</span>
                <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-(--accent)/15 text-(--accent)">
                  <span className="h-2 w-2 rounded-full bg-(--accent)" />
                  {item.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-(--muted)">
                <div>
                  <p className="text-white font-semibold">{item.size}</p>
                  <p>Size</p>
                </div>
                <div>
                  <p className="text-white font-semibold">{item.qty}</p>
                  <p>Qty</p>
                </div>
                <div>
                  <p className="text-white font-semibold">{item.sales}</p>
                  <p>Sales</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;

