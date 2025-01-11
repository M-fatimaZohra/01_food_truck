import React from "react";
import Header1 from "../component/Header/Header1";
import { Menu } from "../component/RouteHead/RouteHead";
import { Inter } from "next/font/google";
import Image from "next/image";
import { PiCoffee } from "react-icons/pi";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function Menu_() {
  return (
    <div>
      <Header1 />
      <Menu />
      <div
        className="py-[150px] _3xl:px-0 px-[100px] flex flex-col justify-center items-center gap-[150px]"
        style={inter.style}
      >
        <div className="flex lg:flex-row flex-col justify-center items-center gap-[150px] ">
          <div>
            <Image
              src="/menuImg/Menu (1).svg"
              alt="Starter Menu"
              width={448}
              height={626}
            />
          </div>
          <div className="flex flex-col justify-start items-start lg:w-[760px] sm:w-[500px]">
            <div className="flex flex-col justify-center items-start">
              <PiCoffee className="text-[#FF9F0D] w-[24px] h-auto" />
              <h2 className="font-bold text-[48px]">Starter Menu</h2>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
                <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
                  <h5 className="text-[24px] font-bold">
                    Alder Grilled Chinook Salmon
                  </h5>
                  <p className="text-[16px]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282] text-[16px]">560 CAL</p>
                </div>
                <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
                  32$
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
                <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
                  <h5 className="text-[24px] font-bold text-[#FF9F0D]">
                    Berries and creme tart
                  </h5>
                  <p className="text-[16px]">
                    Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="text-[#828282] text-[16px]">700 CAL</p>
                </div>
                <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
                  43$
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
                <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
                  <h5 className="text-[24px] font-bold">
                    Tormentoso Bush Pizza Pintoage
                  </h5>
                  <p className="text-[16px]">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-[#828282] text-[16px]">1000 CAL</p>
                </div>
                <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
                  14$
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
                <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
                  <h5 className="text-[24px] font-bold">
                    Spicy Vegan Potato Curry
                  </h5>
                  <p className="text-[16px]">
                    Spreadable cream cheese, crumbled blue cheese
                  </p>
                  <p className="text-[#828282] text-[16px]">560 CAL</p>
                </div>
                <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
                  35$
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col justify-center items-center gap-[150px] ">
<div>
  <Image
    src="/menuImg/Menu (2).svg"
    alt="Main Course"
    width={448}
    height={626}
  />
</div>
<div className="flex flex-col justify-start items-start lg:w-[760px] sm:w-[500px]">
  <div className="flex flex-col justify-center items-start">
    <PiCoffee className="text-[#FF9F0D] w-[24px] h-auto" />
    <h2 className="font-bold text-[48px]">Main Course</h2>
  </div>
  <div className="flex flex-col gap-[10px]">
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
          Optic Big Breakfast Combo Menu
        </h5>
        <p className="text-[16px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="text-[#828282] text-[16px]">560 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        32$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold text-[#FF9F0D]">
          Cashew Chicken With Stir-Fry
        </h5>
        <p className="text-[16px]">
          Gorgonzola, ricotta, mozzarella, taleggio
        </p>
        <p className="text-[#828282] text-[16px]">700 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        43$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
          Vegetables & Green Salad
        </h5>
        <p className="text-[16px]">
          Ground cumin, avocados, peeled and cubed
        </p>
        <p className="text-[#828282] text-[16px]">1000 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        14$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
          Spicy Vegan Potato Curry
        </h5>
        <p className="text-[16px]">
          Spreadable cream cheese, crumbled blue cheese
        </p>
        <p className="text-[#828282] text-[16px]">560 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        35$
      </div>
    </div>
  </div>
</div>
</div>
      </div>
      <div className="w-full lg:h-[468px] h-auto bg-[url('/menuImg/cta.svg')] flex flex-row justify-center items-center">
        <div className="w-full h-full bg-black opacity-[85%] flex flex-row justify-center items-center">
          <div className="flex lg:flex-row flex-col justify-between items-center lg:w-[1314px] ">
            <div className="flex flex-col justify-between items-center text-white">
              <Image
                src="/menuImg/CTAobj/CTAobj (1).svg"
                alt="Starter Menu"
                width={120}
                height={120}
              />
              <h3 className="text-[40px] font-bold">420</h3>
              <p className="text-[24px] font-bold">Professional Chefs</p>
            </div>
            <div className="flex flex-col justify-between items-center text-white">
              <Image
                src="/menuImg/CTAobj/CTAobj (2).svg"
                alt="Starter Menu"
                width={120}
                height={120}
              />
              <h3 className="text-[40px] font-bold">320</h3>
              <p className="text-[24px] font-bold">Items Of Food</p>
            </div>
            <div className="flex flex-col justify-between items-center text-white">
              <Image
                src="/menuImg/CTAobj/CTAobj (3).svg"
                alt="Starter Menu"
                width={120}
                height={120}
              />
              <h3 className="text-[40px] font-bold">30+</h3>
              <p className="text-[24px] font-bold">Years Of Experienced</p>
            </div>
            <div className="flex flex-col justify-between items-center text-white">
              <Image
                src="/menuImg/CTAobj/CTAobj (4).svg"
                alt="Starter Menu"
                width={120}
                height={120}
              />
              <h3 className="text-[40px] font-bold">220</h3>
              <p className="text-[24px] font-bold">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div
         className="py-[150px] _3xl:px-0 mx-[100px] flex flex-col justify-center items-center gap-[150px]"
         style={inter.style}
      >
        <div className="flex lg:flex-row flex-col justify-center items-center gap-[150px] ">
<div>
  <Image
    src="/menuImg/Menu (3).svg"
    alt="Dessert"
    width={448}
    height={626}
  />
</div>
<div className="flex flex-col justify-start items-start lg:w-[760px] sm:w-[500px]">
  <div className="flex flex-col justify-center items-start">
    <PiCoffee className="text-[#FF9F0D] w-[24px] h-auto" />
    <h2 className="font-bold text-[48px]">Dessert</h2>
  </div>
  <div className="flex flex-col gap-[10px]">
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
          Fig and lemon cake
        </h5>
        <p className="text-[16px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="text-[#828282] text-[16px]">560 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        32$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold text-[#FF9F0D]">
         Creamy mascarpone cake
        </h5>
        <p className="text-[16px]">
          Gorgonzola, ricotta, mozzarella, taleggio
        </p>
        <p className="text-[#828282] text-[16px]">700 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        43$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
       Pastry, blueberries, lemon juice
        </h5>
        <p className="text-[16px]">
          Ground cumin, avocados, peeled and cubed
        </p>
        <p className="text-[#828282] text-[16px]">1000 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        14$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
        Pain au chocolat
        </h5>
        <p className="text-[16px]">
          Spreadable cream cheese, crumbled blue cheese
        </p>
        <p className="text-[#828282] text-[16px]">560 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        35$
      </div>
    </div>
  </div>
</div>
</div>
<div className="flex lg:flex-row-reverse flex-col justify-center items-center gap-[150px] ">
<div>
  <Image
    src="/menuImg/Menu (4).svg"
    alt="Drinks"
    width={448}
    height={626}
  />
</div>
<div className="flex flex-col justify-start items-start lg:w-[760px] sm:w-[500px]">
  <div className="flex flex-col justify-center items-start">
    <PiCoffee className="text-[#FF9F0D] w-[24px] h-auto" />
    <h2 className="font-bold text-[48px]">Drinks</h2>
  </div>
  <div className="flex flex-col gap-[10px]">
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
          Caffè macchiato
        </h5>
        <p className="text-[16px]">
          Toasted French bread topped with romano, cheddar
        </p>
        <p className="text-[#828282] text-[16px]">560 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        32$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold text-[#FF9F0D]">
          Aperol Spritz Capacianno
        </h5>
        <p className="text-[16px]">
          Gorgonzola, ricotta, mozzarella, taleggio
        </p>
        <p className="text-[#828282] text-[16px]">700 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        43$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
          Caffe Latte Campuri
        </h5>
        <p className="text-[16px]">
          Ground cumin, avocados, peeled and cubed
        </p>
        <p className="text-[#828282] text-[16px]">1000 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        14$
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between items-start border-solid border-b-[1px] border-[#E0E0E0] pb-5">
      <div className="flex flex-col gap-[10px] justify-between lg:w-[760px] sm:w-[500px] items-start">
        <h5 className="text-[24px] font-bold">
          Tormentoso BushTea Pintoage
        </h5>
        <p className="text-[16px]">
          Spreadable cream cheese, crumbled blue cheese
        </p>
        <p className="text-[#828282] text-[16px]">560 CAL</p>
      </div>
      <div className="text-[#FF9F0D] font-bold flex justify-center items-end">
        35$
      </div>
    </div>
  </div>
</div>
</div>
      </div>
      <div className="w-auto pb-[150px] h-auto gap-[20px] flex flex-col justify-between items-center">
        <div className="flex justify-center items-center text-center _3xl:text-start flex-col">
          <p className="text-[18px]">Partners & Clients</p>
          <h2 className="text-[48px] font-bold">We work with the best pepole</h2>
        </div>
        <div className="flex lg:flex-row flex-col  justify-between items-center xl:w-[1200px] 2xl:w-[1322px]   w-auto">  <Image
                src="/menuImg/CTAobj2/ctaObj2 (1).svg"
                alt="resturants"
                width={240.96}
                height={120}
              />
              <Image
                src="/menuImg/CTAobj2/ctaObj2 (2).svg"
                alt="resturants"
                width={166.04}
                height={120}
              /><Image
              src="/menuImg/CTAobj2/ctaObj2 (3).svg"
              alt="resturants"
              width={143.98}
              height={120}
            /><Image
            src="/menuImg/CTAobj2/ctaObj2 (4).svg"
            alt="resturants"
            width={130.98}
            height={120}
          /><Image
          src="/menuImg/CTAobj2/ctaObj2 (5).svg"
          alt="resturants"
          width={169.97}
          height={120}
        /><Image
        src="/menuImg/CTAobj2/ctaObj2 (6).svg"
        alt="resturants"
        width={113.98}
        height={120}
      /></div>
              
      </div>
    </div>
  );
}

export default Menu_;


