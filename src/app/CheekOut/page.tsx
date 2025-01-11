import React from "react";
import { CheekOut } from "../component/RouteHead/RouteHead";
import Header1 from "../component/Header/Header1";
import { Inter } from "next/font/google";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function cheekOut() {
  return (
    <div>
      <Header1 />
      <CheekOut />
      <div
        className="flex flex-col justify-center items-center gap-[20px]   py-[150px]"
        style={inter.style}
      >
        <div className="flex xl:flex-row flex-col items-start h-auto gap-[32px]">
          <div className="flex flex-col gap-[32px] ">
            <h2 className="text-[20px] font-bold font-helvetica">
              Shipping Address
            </h2>
            <form className="grid lg:grid-cols-2 grid-cols-1 gap-x-[32px] gap-y-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">First name</label>
                <input
                  type="text"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Last name</label>
                <input
                  type="text"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Email address</label>
                <input
                  type="email"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Phone number</label>
                <input
                  type="tel"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Company</label>
                <input
                  type="text"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Country</label>
                <select className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px] ">
                  <option className="opacity-50">Choose country</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="italy">Italy</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">City</label>
                <select className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]">
                  <option className="opacity-50">Choose city</option>
                  <option value="pakistan">Karachi</option>
                  <option value="italy">Lahore</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Zip code</label>
                <input
                  type="number"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Address 1</label>
                <input
                  type="text"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#333333]">Address 2</label>
                <input
                  type="text"
                  
                  className="border-[1px] border-solid border-[#E0E0E0] h-[56px] lg:w-[424px] w-[300px]"
                />
              </div>
            </form>
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <h2 className="text-[20px] font-bold font-helvetica">
                  Billing Address
                </h2>
                <form>
                  <div>
                    
                    <label className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <span className="text-sm text-[#333333]">
                        Same as shipping address
                      </span>
                    </label>
                  </div>
                </form>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[32px] gap-y-[32px] lg:gap-y-0">
                <Button
                  variant="outline"
                  size="sign"
                  className="text-[#4F4F4F]"
                >
                  <SlArrowLeft /> Back to cart
                </Button>
                <Button variant="primary" size="sign">
                  Proceed to shipping <SlArrowRight />
                </Button>
              </div>
            </div> 
          </div>
          <div className="border-[1px] border-solid border-[#E0E0E0] flex xl:flex-col lg:flex-row  flex-col  lg:justify-between xl:justify-normal justify-normal lg:items-center xl:items-stretch items-stretch xl:gap-[32px] lg:gap-[45px] gap-[32px] p-[16px] lg:w-[850px]  xl:w-auto w-auto">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-row items-start justify-start gap-[8px] border-b-[1px] pb-[16px] border-solid">
                <Image
                  src="./foodImage/Tikka.svg"
                  width={82}
                  height={82}
                  alt="tikka"
                />
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <p className="text-[#333333] font-bold">Chicken Tikka Kabab</p>
                  <p className="text-[#4F4F4F]">150 gm net</p>
                  <p className="text-[#4F4F4F]">50$</p>
                </div>
              </div>
             
              <div className="flex flex-row items-start justify-start gap-[8px] border-b-[1px] pb-[16px] border-solid">
                <Image
                  src="./foodImage/Tikka.svg"
                  width={82}
                  height={82}
                  alt="tikka"
                />
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <p className="text-[#333333] font-bold">Chicken Tikka Kabab</p>
                  <p className="text-[#4F4F4F]">150 gm net</p>
                  <p className="text-[#4F4F4F]">50$</p>
                </div>
              </div>
             
              <div className="flex flex-row items-start justify-start gap-[8px] border-b-[1px] pb-[16px] border-solid">
                <Image
                  src="./foodImage/Tikka.svg"
                  width={82}
                  height={82}
                  alt="tikka"
                />
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <p className="text-[#333333] font-bold">Chicken Tikka Kabab</p>
                  <p className="text-[#4F4F4F]">150 gm net</p>
                  <p className="text-[#4F4F4F]">50$</p>
                </div>
              </div>
             
            </div>
            <div className="flex flex-col gap-[16px]">
<div className="flex justify-between">
  <p className="text-[#4F4F4F]">Sub-total</p>
  <p className="text-[#333333]">130$</p>
</div>
<div className="flex justify-between">
  <p className="text-[#4F4F4F]">Shipping</p>
  <p className="text-[#333333]">Free</p>
</div>
<div className="flex justify-between">
  <p className="text-[#4F4F4F]">Discount</p>
  <p className="text-[#333333]">25%</p>
</div>
<div className="flex justify-between">
  <p className="text-[#4F4F4F]">Tax</p>
  <p className="text-[#333333]">54.76$</p>
</div>
<hr/>
<div className="flex justify-between text-[18px]">
  <p className="text-[#4F4F4F]">Total</p>
  <p className="text-[#333333] font-helvetica font-bold">432.65$</p>
</div>
<Button variant="primary" size="sign" className="md:w-[376px] w-auto rounded-[6px]">Place an order <HiArrowRight/></Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cheekOut;
