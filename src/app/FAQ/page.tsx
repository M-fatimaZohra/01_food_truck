import React from "react";
import { FAQ } from "../component/RouteHead/RouteHead";
import Header1 from "../component/Header/Header1";
import { Inter } from "next/font/google";
import { IoAddOutline } from "react-icons/io5";
import { HiOutlineMinus } from "react-icons/hi";


const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function Faq() {
  return (
    <div>
      <Header1 />
      <FAQ />
      <div
        className="flex flex-col justify-center items-center gap-[32px]  py-[150px] sm:px-[50px] px-[25px] md:px-0"
        style={inter.style}
      >
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <h2 className="font-bold text-[48px] font-helvetica text-[#333333] text-center">Questions Looks Here</h2>
          <p className="text-[#4F4F4F] text-center" style={inter.style}>Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-[16px] ">
          <div className="bg-[#FAF7F2] md:w-[648px] md:h-[170px] sm:w-[500px] w-[300px] rounded-[8px] p-[16px] flex flex-row-reverse justify-between gap-0 items-start">
            <div><IoAddOutline className="w-[24px] h-[24px]"/></div>
            <div className="flex flex-col justify-between items-start gap-[16px]">
              <h3 className="font-bold font-helvetica text-[18px] text-[#333333]">How we serve food?</h3>
              <p className="text-[#4F4F4F]" style={inter.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
           <div className="bg-[#FAF7F2] md:w-[648px] md:h-[170px] sm:w-[500px] w-[300px] rounded-[8px] p-[16px] flex flex-row-reverse justify-between gap-0 items-start">
            <div>< HiOutlineMinus className="w-[24px] h-[24px]"/></div>
            <div className="flex flex-col justify-between items-start gap-[16px]">
              <h3 className="font-bold font-helvetica text-[18px] text-[#333333]">How can we get in touch with you?</h3>
              <p className="text-[#4F4F4F]" style={inter.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
           <div className="bg-[#FAF7F2] md:w-[648px] md:h-[170px] sm:w-[500px] w-[300px] rounded-[8px] p-[16px] flex flex-row-reverse justify-between gap-0 items-start">
            <div><IoAddOutline className="w-[24px] h-[24px]"/></div>
            <div className="flex flex-col justify-between items-start gap-[16px]">
              <h3 className="font-bold font-helvetica text-[18px] text-[#333333]">How is our food quality?</h3>
              <p className="text-[#4F4F4F]" style={inter.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
           <div className="bg-[#FAF7F2] md:w-[648px] md:h-[170px] sm:w-[500px] w-[300px] rounded-[8px] p-[16px] flex flex-row-reverse justify-between gap-0 items-start">
            <div><IoAddOutline className="w-[24px] h-[24px]"/></div>
            <div className="flex flex-col justify-between items-start gap-[16px]">
              <h3 className="font-bold font-helvetica text-[18px] text-[#333333]">What will be delivered? And When?</h3>
              <p className="text-[#4F4F4F]" style={inter.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
           <div className="bg-[#FAF7F2] md:w-[648px] md:h-[170px] sm:w-[500px] w-[300px] rounded-[8px] p-[16px] flex flex-row-reverse justify-between gap-0 items-start">
            <div><IoAddOutline className="w-[24px] h-[24px]"/></div>
            <div className="flex flex-col justify-between items-start gap-[16px]">
              <h3 className="font-bold font-helvetica text-[18px] text-[#333333]">How do we give home delivery?</h3>
              <p className="text-[#4F4F4F]" style={inter.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
           <div className="bg-[#FAF7F2] md:w-[648px] md:h-[170px] sm:w-[500px] w-[300px] rounded-[8px] p-[16px] flex flex-row-reverse justify-between gap-0 items-start">
            <div><IoAddOutline className="w-[24px] h-[24px]"/></div>
            <div className="flex flex-col justify-between items-start gap-[16px]">
              <h3 className="font-bold font-helvetica text-[18px] text-[#333333]">Is this restaurant 24 hours open?</h3>
              <p className="text-[#4F4F4F]" style={inter.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
