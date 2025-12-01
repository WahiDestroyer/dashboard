

import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const renderStars = (value) =>
  Array.from({ length: 5 }).map((_, idx) => (
    <AiFillStar
      key={idx}
      className={`text-[13px] ${
        idx + 1 <= Math.round(value) ? "text-yellow-400" : "text-(--muted)"
      }`}
    />
  ));

const ProductItems = ({ product }) => {
  if (!product) return null;

  const {
    image,
    name,
    desc,
    sku,
    price,
    status,
    size,
    qty,
    rating = 0,
    sales,
  } = product;

  const fallbackSrc = "/LogoDark.png";
  const [imgSrc, setImgSrc] = useState(image || fallbackSrc);

  return (
    <div className="card bg-transparent">
      <Link
        href="/productdetails"
        className="flex items-center gap-4 px-4 py-4 hover:bg-[#181b25] transition-colors text-sm"
      >
        <div className="w-[72px] shrink-0">
          <Image
            src={imgSrc}
            alt={name}
            width={48}
            height={48}
            onError={() => {
              if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
            }}
            className="h-12 w-12 rounded-xl object-cover bg-(--surface) ring-1 ring-(--border) shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="flex-[1.6] min-w-[180px] space-y-1">
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-[13px] text-(--muted) leading-tight">{desc}</p>
        </div>
        <span className="flex-1 text-(--muted)">{sku}</span>
        <span className="flex-[0.9] text-white font-semibold">{price}</span>
        <span className="flex-[0.9] inline-flex items-center gap-2 text-white">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          {status}
        </span>
        <span className="flex-[0.7] text-white">{size}</span>
        <span className="flex-[0.8] text-white">{qty}</span>
        <div className="flex-[0.9] flex items-center gap-2 text-white">
          <span className="flex">{renderStars(rating)}</span>
          <span className="text-(--muted) text-xs">{rating.toFixed(1)}</span>
        </div>
        <span className="flex-[0.8] text-white">{sales}</span>
      </Link>
    </div>
  );
};

export default ProductItems;
