import React from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { AiOutlineHistory } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function Footer() {
  return (
    <div className="h-auto md:pt-[80px]   w-full bg-black text-white "
      style={inter.style}
    >
      <div className="flex flex-col justify-center items-center xl:gap-[40px] py-[80px] md:gap-[60px] md:py-0 md:px-[30px] xl:px-0  ">
        <div className="flex md:justify-between md:items-start md:flex-row flex-col sm:h-[120px] h-auto xl:w-[1169px] w-auto md:w-full border-solid border-b-[1px] border-[#FF9F0D]">
          <div className="flex justify-between md:items-start items-center flex-col gap-[20px] md:text-start text-center">
            <div className="flex flex-row gap-0 sm:text-[32px] text-[25px] font-bold ">
              <h5 className="text-[#FF9F0D]">St</h5>
              <h5>ill You Need Our Support ?</h5>
            </div>
            <p className="w-[190px] sm:w-full">
              Don’t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start sm:flex-row flex-col  sm:gap-0 gap-2 sm:w-[459px] w-auto ">
            <input
              type="email"
              placeholder=" Enter Your Email"
              className="h-[55.86px]  sm:w-full auto bg-[#FF9F0D] placeholder:text-white placeholder:opacity-[59%] px-[20px]"
            />
            <Button variant="white" size="white">
              Subscribe Now
            </Button>
          </div>
        </div>
        <div className="flex justify-between lg:items-start items-center lg:flex-row flex-col lg:h-[331px] _3xl:w-[1320px] w-full _3xl:p-0 px-8 h-auto">
          <div className="sm:w-[395.2px] w-auto py-[40px] xl:py-0 flex flex-col lg:gap-[20px] text-center md:text-start "
            style={inter.style}
          >
            <div className="font-bold lg:text-[20px] sm:text-[40px] text-[20px] font-helvetica"  >About Us.</div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[18px]">
                orporate clients and leisure travelers hasbeen relying on
                Groundlink for dependablesafe, and professional chauffeured
                carservice in major cities across World.
              </p>
              <div className="flex lg:flex-row flex-col lg:justify-between lg:items-stretch justify-center items-center  lg:w-[243.74px] w-full">
                <div className="flex flex-row  justify-center items-center  bg-[#FF9F0D] text-white w-[77.23px] h-[70.79px] rounded-[3px]">
                  <AiOutlineHistory className="w-[39.61px] h-[39.33px]" />
                </div>
                <div
                  className="flex flex-col justify-between items-start h-auto"
                  style={inter.style}
                >
                  <p className="text-[18px]">Opening Houres</p>
                  <p className="text-[14px]">Mon - Sat(8.00 - 6.00)</p>
                  <p className="text-[14px]">Sunday - Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-[40px] xl:pb-0 lg:justify-between lg:item-start justify-center items-center md:items-start h-[275.17px]">
            <div className="font-bold text-[20px] pb-[20px] lg:pb-0">Useful Links</div>
            <div className="flex flex-col justify-center gap-[16px] item-start">
               <p>About</p>
              <p>News</p>
              <p>Patners</p>
              <p>Team</p>
              <p>Menu</p>
              <p>Contact</p>
            </div> 
            </div>
          <div className="flex flex-col pb-[40px] xl:pb-0 lg:justify-between lg:item-start justify-center items-center md:items-start h-[275.17px]">
            <div className="font-bold text-[20px] pb-[20px] lg:pb-0">Help?</div>
            <div className="flex flex-col justify-center gap-[16px] item-start">
              <p>FAQ</p>
              <p>Term & Condition</p>
              <p>Reporting</p>
              <p>Documentation</p>
              <p>Support Policy</p>
              <p>Privacy</p>
            </div>
          </div>
          <div className="flex flex-col lg:justify-between lg:item-start justify-center items-center md:items-start h-[275.17px] w-[273.83px]">
            <div className="font-bold text-[20px] pb-[20px]">Recent Post</div>
            <div className="flex flex-col justify-center gap-[16px] item-start">
              <div className="flex flex-row justify-between w-[273.83px]">
                <div className='flex flex-row justify-center items-center bg-[url("/footericon.svg")] w-[77.23px] h-[70.79px] rounded-[3px]'></div>
                <div
                  className="flex flex-col justify-between items-start h-auto w-[177.54px]"
                  style={inter.style}
                >
                  <p>Is fastfood good for your body?</p>
                  <p className="text-[14px] opacity-[49%]">February 28,2022</p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-[273.83px]">
                <div className='flex flex-row justify-center items-center bg-[url("/footericon.svg")] w-[77.23px] h-[70.79px] rounded-[3px]'></div>
                <div
                  className="flex flex-col justify-between items-start h-auto w-[177.54px]"
                  style={inter.style}
                >
                  <p>Change your food habit With organic food</p>
                  <p className="text-[14px] opacity-[49%]">February 28,2022</p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-[273.83px]">
                <div className='flex flex-row justify-center items-center bg-[url("/footericon.svg")] w-[77.23px] h-[70.79px] rounded-[3px]'></div>
                <div
                  className="flex flex-col justify-between items-start h-auto w-[177.54px]"
                  style={inter.style}
                >
                  <p>Do you like fastfood for your life?</p>
                  <p className="text-[14px] opacity-[49%]">February 28,2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  w-full lg:h-[99px] h-auto bg-[#4F4F4F]">
        <div className="flex lg:flex-row  flex-col justify-between items-center w-[1318px]">
          <p className="lg:text-[16px] text-[18px]">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-[20px] gap-[10px]"> 
            <div className="flex flex-row justify-center items-center bg-white text-black w-[35.85px] h-[35.85px] rounded-[3px]">
                  <FaFacebookF  />
                </div>
                <div className="flex flex-row justify-center items-center bg-white text-black w-[35.85px] h-[35.85px] rounded-[3px]">
                  <FaTwitter  />
                </div>
                <div className="flex flex-row justify-center items-center bg-white text-black w-[35.85px] h-[35.85px] rounded-[3px]">
                  <FaInstagram  />
                </div>
                <div className="flex flex-row justify-center items-center bg-white text-[#FF9F0D] w-[35.85px] h-[35.85px] rounded-[3px]">
                  <BsYoutube  />
                </div>
                <div className="flex flex-row justify-center items-center bg-white text-black w-[35.85px] h-[35.85px] rounded-[3px] ">
                  <FaPinterest />
                </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


