import React from "react";
import { About } from "../component/RouteHead/RouteHead";
import Header1 from "../component/Header/Header1";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Miniver } from "next/font/google";
import { IoPlayOutline } from "react-icons/io5";
import { PiCoffeeThin } from "react-icons/pi";
const miniver = Miniver({ weight: ["400"], subsets: ["latin"] });

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function AboutWeb() {
  return (
    <div>
      <Header1 />
      <About />
      <div
        className="flex flex-col justify-center items-center gap-[20px] w-full  py-[150px] lg:px-[200px] px-[120px]"
        style={inter.style}
      >
        <div className="flex-col flex  gap-[120px]">
          <div className="flex lg:flex-row flex-col justify-center gap-[120px] w-full  ">
            <div className="flex flex-row gap-4 items-start lg:w-1/2 w-full">
              <img
                src="/About/About (1).svg"
                width={336}
                height={536}
                alt="Image 1"
                className="  rounded-[6px]"
              />
              <div className="flex flex-col gap-4 ">
                <img
                  src="/About/About (2).svg"
                  width={309}
                  height={271}
                  alt="Image 2"
                  className=" pt-8 rounded-[6px]"
                />
                <img
                  src="/About/About (3).svg"
                  width={309}
                  height={282}
                  alt="Image 3"
                  className=" rounded-[6px] "
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-start items-center">
              <div className="flex flex-col gap-4 items-start justify-center md:w-[536px] w-auto">
                <div
                  className="text-[#FF9F0D] font-[18px] flex gap-[10px]"
                  style={miniver.style}
                >
                  <p>About us</p> <p style={inter.style}>____</p>
                </div>
                <h2 className="font-bold text-[48px] text-[#333333] font-helvetica">
                  Food is an important part Of a balanced Diet
                </h2>
                <p className="text-[#4F4F4F] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                  bibendum. Urna, elit augue urna, vitae feugiat pretium donec
                  id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et
                  ac dapibus sit eu velit in consequat.
                </p>
                <div className="flex flex-row gap-3 items-center">
                  <Button
                    variant="primary"
                    className="w-[195px] h-[58px] text-white font-bold"
                    size="basic"
                  >
                    Show more
                  </Button>
                  <button className="rounded-full  p-[21px] bg-[#FF9F0D]  text-white">
                    <IoPlayOutline className="h-[20px] w-[20px]" />
                  </button>
                  <p
                    className="font-bold text-[16px] text-[#333333]"
                    style={inter.style}
                  >
                    Watch video
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px] items-center">
            <div className="flex flex-col gap-[4px] items-center xl:w-[579px] w-auto">
              <h2 className="font-bold text-[48px] text-[#333333] font-helvetica">
                Why Choose us
              </h2>
              <p className="text-[#4F4F4F]  text-[16px] leading-[24px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
              </p>
            </div>
            <div className="lg:block hidden">
              <img
                src="/About/About (4).svg"
               
                alt="Why Choose Us"
                className="rounded-[6px]"
              />
            </div>
            <div className="block lg:hidden">
              <img
                src="/About/About (4).svg"
                alt="Why Choose Us"
                className="rounded-[6px]"
                width={1300}
                height={386}
              />
            </div>
            <div className="flex xl:flex-row flex-col gap-[72px] ">
              <div className="flex flex-col gap-[16px] justify-center items-center">
                <div>
                  <img
                    src="/About/Best-chef.svg"
                    width={80}
                    height={80}
                    alt="Why Choose Us"
                    className="rounded-[6px]"
                  />
                </div>
                <h5 className="text-[#333333] font-bold text-[24px]">
                  Best Chef
                </h5>
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[24px] text-center w-[359px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat{" "}
                </p>
              </div>
              <div className="flex flex-col gap-[16px] justify-center items-center">
                <div>
                <PiCoffeeThin className="text-[80px]"/>
                </div>
                <h5 className="text-[#333333] font-bold text-[24px]">
                120 Item food 
                </h5> 
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[24px] text-center w-[359px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat{" "}
                </p>
              </div>
              <div className="flex flex-col gap-[16px] justify-center items-center">
                <div>
                <img
                    src="/About/Person.svg"
                    width={80}
                    height={80}
                    alt="Why Choose Us"
                    className="rounded-[6px]"
                  />
                </div>
                <h5 className="text-[#333333] font-bold text-[24px]">
                Clean Environment
                </h5>
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[24px] text-center w-[359px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat{" "}
                </p>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AboutWeb;
