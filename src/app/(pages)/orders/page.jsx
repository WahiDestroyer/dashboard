import Link from 'next/link'
import React from 'react'
import { GoHome } from 'react-icons/go'
import { IoChevronForwardSharp } from 'react-icons/io5'

const page = () => {
  const time = new Date().toLocaleTimeString();
  
  return (
    <div className="m-6 space-y-6">
      <div className="flex items-center justify-between pb-7">
      <div>
          <h2 className="font-poppins text-3xl font-bold text-white leading-8 pb-3.5">
            Orders List
          </h2>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-sm hover:underline flex items-center gap-1">
              <GoHome className='text-base'/> Home
            </Link>
            <IoChevronForwardSharp />
            <span className="text-base text-(--accent)"> Order List</span>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default page
