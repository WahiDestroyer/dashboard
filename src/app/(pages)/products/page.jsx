import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";


const page = () => {
  return (
    <div className="mx-6">
      <div>
        <div>
          <h2 className="font-poppins text-3xl text-white font-bold leading-8 pb-3.5">All Products</h2>
          <div className="flex items-center gap-3">
            <Link className="text-(--muted) flex items-center gap-2" href= '/'><RiHomeLine/> Home <IoChevronForward/></Link>
            <button className="text-(--accent)"> Products</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
