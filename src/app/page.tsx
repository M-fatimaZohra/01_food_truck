import Header from "./component/Header/Header";
import Image from "next/image";
import { TfiPinterest } from "react-icons/tfi";
import { RiTwitterFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { Great_Vibes } from "next/font/google";
import { Button } from "@/components/ui/button"
import {Inter} from "next/font/google"


const inter = Inter({weight:["400","700"], subsets:["latin"]})

const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black w-full text-white h-full  ">
      <Header />
      <div className="flex 2xl:flex-row flex-col _3xl:px-[230px] 2xl:px-[150px] 2xl:py-[200px] py-[100px] items-center   justify-between 2xl:gap-0 gap-[20px]">
        <div className=" flex 2xl:flex-col justify-start items-center 2xl:gap-[40px] h-auto ">
          <svg className="h-[158px] w-[10px] 2xl:block hidden">
            <rect width="1" height="158" fill="white" />
          </svg>
          <div className="flex 2xl:flex-col justify-center items-center 2xl:gap-[40px] gap-[20px]">
            <RiFacebookFill className="text-white" />
            <RiTwitterFill className="text-[#FF9F0D]" />
            <TfiPinterest className="text-white" />
          </div>
          <svg className="h-[158px] w-[10px] 2xl:block hidden">
            <rect width="1" height="158" fill="white" />
          </svg>
        </div>
        <div className="flex flex-col 2xl:w-[472px]  justify-center 2xl:gap-[40px] gap-[20px] 2xl:mx-[32px] mx-[20px] 2xl:items-start items-center">
          <div> <p className="text-[32px] text-center 2xl:text-start text-[#FF9F0D] " style={greatVibes.style}>
            Its Quick & Amusing!
          </p>
          <div> {/*Tecnical adjustmect of h1*/}
            <div className="flex flex-col 2xl:gap-0 gap-[4px]  2xl:text-[60px] sm:text-[50px] text-[30px] font-bold 2xl:justify-start justify-center 2xl:items-start items-center  ">
              <div className="flex flex-row gap-0"> 
                <h1 className="text-[#FF9F0D] flex ">Th</h1>
                <h1>e Art of speed</h1>
              </div>
              <h1>food Quality</h1>
            </div>
          </div></div>
         
          <div>
            <p className="text-center 2xl:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue</p>
          </div>
          <div>
            <Button variant="primary" size="primary" style={inter.style}>See Menu</Button>
          </div>
        </div>
        <div className="flex justify-end items-center "><Image src="/heropage/Image.svg" width={877.8} height={670} alt="icon"/></div>
      </div>
    </div>
  );
}
