import React from "react";
import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400","700"], subsets: ["latin"] });
const greateVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
// incomplete hover effect left
function HomeC2() {
  return (
    <div className="w-full h-auto gap-[72px] flex flex-col justify-center items-center ">
      <div className="flex-col   justify-center items-center ">
        <p style={greateVibes.style} className="text-[#FF9F0D] text-[32px] text-center">
         
          Food Category
        </p>
        <div className="font-bold text-[48px] text-center flex flex-row gap-0" style={inter.style}>
        <h2 className="text-[#FF9F0D]">Ch</h2><h2>oose Food Iteam</h2>
        </div>
        
      </div>
      <div className="xl:flex flex-row grid md:grid-cols-2 grid-cols-1 _3xl:justify-between justify-center px-3 md:gap-8 gap-5 items-center _3xl:p-0 _3xl:w-[1320px] _3xl:gap-0  w-auto h-auto">
      <div className="bg-[url('/homeC2/food_1.svg')] w-[305px] h-[328px] xl:w-[295px] xl:h-[318px] rounded-[6px] "></div>
      <div className="bg-[url('/homeC2/food_2.svg')] w-[305px] h-[328px] xl:w-[295px] xl:h-[318px] rounded-[6px] "></div>
      <div className="bg-[url('/homeC2/food_3.svg')] w-[305px] h-[328px] xl:w-[295px] xl:h-[318px] rounded-[6px] "></div>
      <div className="bg-[url('/homeC2/food_4.svg')] w-[305px] h-[328px] xl:w-[295px] xl:h-[318px] rounded-[6px] "></div>
      
      </div>
    </div>
  );
}

export default HomeC2;
