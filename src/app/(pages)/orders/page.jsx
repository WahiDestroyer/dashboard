"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { IoChevronForwardSharp } from "react-icons/io5";

const page = () => {
  const [time, setTime] = useState(null)
    useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleString();
      setTime(time);
    }, 1000);
  }, []);
  
  return (
    <div className="m-6 space-y-6">
      <div className="flex items-center justify-between pb-7">
        <div>
          <h2 className="font-poppins text-3xl font-bold leading-8 pb-3.5 ">
            Orders List
          </h2>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm hover:underline flex items-center gap-1 "
            >
              <GoHome className="text-base" /> Home
            </Link>
            <IoChevronForwardSharp />
            <span className="text-base text-(--accent)"> Order List</span>
          </div>
        </div>
        <p className="">{time}</p>
      </div>
    </div>
  );
};

export default page;
