//This header is for main home page
import Link from "next/link";
import React from "react";
import {Inter} from "next/font/google"
import { RiSearchLine } from "react-icons/ri";
import { PiHandbag } from "react-icons/pi";

const inter = Inter({weight:["400","700"], subsets:["latin"]})


function Header() {
  return (
    <div className="_3xl:fixed static  flex justify-center bg-black w-full ">
      <div className="w-[1320px] h-[87px] mt-[45px]  flex flex-col">
        <div className="flex flex-row gap-0 justify-center items-center text-[24px] font-bold ">
          <h1 className="text-[#FF9F0D]">Food</h1>
          <h1 className="text-white">tuck</h1>
        </div>
        <div className="flex _3xl:justify-between xl:flex-row 2xl:gap-0 xl:gap-[30px] lg:justify-between lg:flex-col md:gap-[30px] md:flex-col gap-[20px]    flex-col  items-center">
          <div className="flex flex-row justify-center item-center text-[10px] sm:text-[16px] gap-[20px]  sm:gap-[34px] text-white" style={inter.style}>
          <Link href="./">Home</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Pages</Link>
            <select className="bg-black app ">
              <option defaultValue="English">About</option>
              <option>A</option> 
              <option>B</option>
              <option>C</option>
            </select>
          <Link href="/">Shop </Link>
          <Link href="/">Contact </Link></div>
          <div className="flex flex-row justify-center items-center gap-[10px]">
          <form className="flex flex-row gap-[34px] justify-center items-center bg-black border-[#FF9F0D] border-[1px] border-solid py-[7px] pl-[20px] pr-[12px] rounded-full text-white">
            <input
              type="search"
              placeholder="Search..."
              className="bg-black text-white placeholder-shown:opacity-100"
              style={inter.style}
            />
            <RiSearchLine className="w-[24px] h-[24px] "/>
          </form>
          <PiHandbag className="w-[24px] h-[24px] text-white flex"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
