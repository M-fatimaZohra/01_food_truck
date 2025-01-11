import Header from "./component/Header/Header";
import Image from "next/image";
import { TfiPinterest } from "react-icons/tfi";
import { RiTwitterFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { Great_Vibes } from "next/font/google";
import { Button } from "@/components/ui/button"
import {Inter} from "next/font/google"
import HomeC2 from "./component/HomeC2";
import HomeC1 from "./component/HomeC1";


const inter = Inter({weight:["400","700"], subsets:["latin"]})

const greatVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black w-full text-white h-full  ">
      <Header />
      <div className="flex lg:flex-row flex-col _3xl:px-[230px] xl:px-[150px] lg:px-[80px] xl:py-[200px] py-[100px] items-center   justify-between xl:gap-0 gap-[20px]">
        <div className=" flex lg:flex-col justify-start items-center xl:gap-[40px] lg:gap-[20px] h-auto ">
          <svg className="h-[158px] w-[10px] lg:block hidden">
            <rect width="1" height="158" fill="white" />
          </svg>
          <div className="flex lg:flex-col justify-center items-center xl:gap-[40px] gap-[20px]">
            <RiFacebookFill className="text-white" />
            <RiTwitterFill className="text-[#FF9F0D]" />
            <TfiPinterest className="text-white" />
          </div>
          <svg className="h-[158px] w-[10px] lg:block hidden">
            <rect width="1" height="158" fill="white" />
          </svg>
        </div>
        <div className="flex flex-col xl:w-[472px]  justify-between xl:gap-[40px] gap-[20px] xl:mx-[32px] mx-[20px] lg:items-start items-center">
          <div> <p className="text-[32px] text-center lg:text-start text-[#FF9F0D] " style={greatVibes.style}>
            Its Quick & Amusing!
          </p>
          <div> {/*Tecnical adjustmect of h1*/}
            <div className="flex flex-col xl:gap-0 gap-[4px] xl:text-[60px] lg:text-[35px] sm:text-[50px] text-[30px] font-bold lg:justify-start justify-center xl:items-start items-center  ">
              <div className="flex flex-row gap-0"> 
                <h1 className="text-[#FF9F0D] flex ">Th</h1>
                <h1>e Art of speed</h1>
              </div>
              <h1>food Quality</h1>
            </div>
          </div></div>
         
          <div>
            <p className="text-center lg:text-start xl:text-[16px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue</p>
          </div>
          <div>
            <Button variant="primary" size="primary" style={inter.style}>See Menu</Button>
          </div>
        </div>
        <div className="flex justify-end items-center "><Image src="/heropage/Image.svg" width={877.8} height={670} alt="icon"/></div>
      </div>
      <HomeC1/>
      <HomeC2/>
    </div>
  );
}
