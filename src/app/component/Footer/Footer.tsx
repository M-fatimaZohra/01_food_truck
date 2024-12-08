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
    <div
      className="h-auto lg:pt-[80px]   w-full bg-black text-white "
      style={inter.style}
    >
      <div className="flex flex-col justify-center items-center _3xl:gap-[40px] xs:py-[80px] lg:gap-[60px] lg:py-0 lg:px-[30px] xl:px-0  ">
        <div className="flex lg:justify-between lg:items-start lg:flex-row xs:flex-col sm:h-[120px] xs:h-auto _3xl:w-[1169px] xs:w-auto lg:w-full border-solid border-b-[1px] border-[#FF9F0D]">
          <div className="flex justify-between lg:items-start xs:items-center flex-col gap-[20px] lg:text-start xs:text-center">
            <div className="flex flex-row gap-0 sm:text-[32px] xs:text-[25px] font-bold ">
              <h5 className="text-[#FF9F0D]">St</h5>
              <h5>ill You Need Our Support ?</h5>
            </div>
            <p className="xs:w-[190px] sm:w-full">
              Don’t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="flex items-center xs:justify-center lg:justify-start sm:flex-row xs:flex-col  sm:gap-0 xs:gap-2 sm:w-[459px] xs:w-auto ">
            <input
              type="email"
              placeholder=" Enter Your Email"
              className="h-[55.86px]  sm:w-full xs:auto bg-[#FF9F0D] placeholder:text-white placeholder:opacity-[59%] px-[20px]"
            />
            <Button variant="white" size="white">
              Subscribe Now
            </Button>
          </div>
        </div>
        <div className="flex justify-between 2xl:items-start xs:items-center 2xl:flex-row xs:flex-col 2xl:h-[331px] 2xl:w-[1320px] w-full xs:h-auto">
          <div
            className="sm:w-[395.2px] xs:w-auto xs:py-[40px] _3xl:py-0 flex flex-col 2xl:gap-[20px] xs:text-center 2xl:text-start "
            style={inter.style}
          >
            <div className="font-bold 2xl:text-[20px] sm:text-[40px] xs:text-[20px]">About Us.</div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[18px]">
                orporate clients and leisure travelers hasbeen relying on
                Groundlink for dependablesafe, and professional chauffeured
                carservice in major cities across World.
              </p>
              <div className="flex 2xl:flex-row xs:flex-col 2xl:justify-between 2xl:items-stretch xs:justify-center xs:items-center  2xl:w-[243.74px] xs:w-full">
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
          <div className="flex flex-col xs:pb-[40px] _3xl:pb-0 2xl:justify-between 2xl:item-start xs:justify-center xs:items-center 2xl:text-start xs:text-center h-[275.17px]">
            <div className="font-bold text-[20px] xs:pb-[20px] 2xl:pb-0">Useful Links</div>
            <div className="flex flex-col justify-center gap-[16px] item-start">
               <p>About</p>
              <p>News</p>
              <p>Patners</p>
              <p>Team</p>
              <p>Menu</p>
              <p>Contact</p>
            </div> 
            </div>
          <div className="flex flex-col xs:pb-[40px] _3xl:pb-0 2xl:justify-between 2xl:item-start xs:justify-center xs:items-center 2xl:text-start xs:text-center h-[275.17px]">
            <div className="font-bold text-[20px] xs:pb-[20px] 2xl:pb-0">Help?</div>
            <div className="flex flex-col justify-center gap-[16px] item-start">
              <p>FAQ</p>
              <p>Term & Condition</p>
              <p>Reporting</p>
              <p>Documentation</p>
              <p>Support Policy</p>
              <p>Privacy</p>
            </div>
          </div>
          <div className="flex flex-col 2xl:justify-between 2xl:item-start xs:justify-center xs:items-center h-[275.17px] w-[273.83px]">
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
      <div className="sticky bottom-0 flex justify-center items-center  w-full h-[99px] bg-[#4F4F4F]">
        <div className="flex flex-row justify-between items-center w-[1318px]">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex flex-row gap-[20px]"> 
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
                <div className="flex flex-row justify-center items-center bg-white text-black w-[35.85px] h-[35.85px] rounded-[3px]">
                  <FaPinterest />
                </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


