import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { RiSearchLine } from "react-icons/ri";
import { PiHandbag } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";

//this header is for all pages

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function Header1() {
  return (
    <div className=" w-full h-auto  bg-black">
      <div className="xl:absolute sm:static flex 2xl:flex-row sm:flex-col xs:flex-col 2xl:justify-between sm:justify-center items-center bg-black w-full lg:h-[90px] sm:px-[300px] xs:px-[20px] ">
      <div className="w-full 2xl:h-[45px]  flex lg:flex-row sm:flex-col xs:flex-col 2xl:justify-between xs:justify-center items-center 2xl:gap-0 sm:gap-[10px]">
        <div className="flex flex-row gap-0 justify-center items-center text-[24px] font-bold ">
          <h1 className="text-[#FF9F0D]">Food</h1>
          <h1 className="text-white">tuck</h1>
        </div>
        <div className="flex 2xl:justify-between 2xl:flex-row 2xl:gap-0 xl:gap-[30px] lg:justify-between lg:flex-col md:gap-[30px] md:flex-col gap-[20px]    flex-col  items-center">
          <div
            className="flex flex-row justify-center item-center text-[10px] sm:text-[16px] gap-[20px]  sm:gap-[34px] text-white"
            style={inter.style}
          >
            <Link href="./">Home</Link>
            <Link href="/Menu">Menu</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Pages">Pages</Link>
            <Link href="/About">About</Link>
            <Link href="/Shop">Shop </Link>
            <Link href="/Contact">Contact </Link>
          </div>
        </div>
        <div className="flex flex-row gap-[10px] sm:py-[8px] 2xl:py-0 text-white">
          <Button className="w-[24px] h-[24px]"><RiSearchLine /></Button>
         <Link href="/SignUp"><Button className="w-[24px] h-[24px]"><PiUserLight /></Button></Link> 
         <Link href="/wishlist"> <Button className="w-[24px] h-[24px]"><PiHandbag /></Button></Link> 
            
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Header1;
