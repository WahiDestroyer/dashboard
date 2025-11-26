import Link from "next/link";
import React from "react";
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
      "https://images.unsplash.com/photo-1542293787938-4d2720d45ff4?auto=format&fit=crop&w=200&q=80",
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
      "https://images.unsplash.com/photo-1518449037360-1858ba38e3c4?auto=format&fit=crop&w=200&q=80",
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
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=200&q=80",
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

const listColumns =
  "grid grid-cols-[72px,1.6fr,1fr,0.9fr,0.9fr,0.7fr,0.8fr,0.9fr,0.8fr] items-center";

const page = () => {
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
          <Layout />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] text-sm text-(--muted)">
          <span className="text-white font-semibold">Products</span>
          <span className="text-xs bg-[var(--accent)]/15 text-[var(--accent)] px-2 py-0.5 rounded-full">
            {products.length} items
          </span>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[1100px] divide-y divide-[var(--border)]">
            <div
              className={`${listColumns} px-4 py-3 text-xs uppercase tracking-wide text-(--muted)`}
            >
              <span>Image</span>
              <span>Name</span>
              <span>SKU</span>
              <span>Price</span>
              <span>Status</span>
              <span>Size</span>
              <span>Qty</span>
              <span>Rating</span>
              <span>Sales</span>
            </div>
            {products.map((item) => (
              <ProductItems key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
