import React from 'react'
import Header1 from '../component/Header/Header1'
import { Shop } from '../component/RouteHead/RouteHead'
import { Inter } from "next/font/google";
import { foodItems } from './object';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Slider } from "@/components/ui/slider"


import Image from 'next/image';
const foodcard = foodItems

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function shop() {
  return (
    <div>
         <Header1 />
         <Shop/>
         <div className='flex flex-row gap-[16px] justify-center py-[150px]'>
         <div
        className="flex flex-col justify-center items-center gap-[20px]   "
        style={inter.style}
      >
        <div className='flex flex-col items-start gap-[32px]'>
          <div className='flex flex-row justify-center gap-[32px]'>
            <form className='flex flex-row gap-[16px] justify-center items-center'>
              <label>Sort By :</label>
              <select className='border-[#E0E0E0] border-[1px] border-solid rounded-[6px] w-[236px] h-[46px] text-[#E0E0E0] focus:text-black' >
                <option defaultValue="Newest">Newest </option>
                <option >Oldest</option>
                <option >Popular</option>
                <option >Latest</option>
                </select>
            </form>
            <form className='flex flex-row gap-[16px] justify-center items-center'>
              <label>Show :</label>
              <select className='border-[#E0E0E0] border-[1px] border-solid rounded-[6px] w-[236px] h-[46px] text-[#E0E0E0] focus:text-black' >
                <option defaultValue="Default">Default </option>
                <option >Food Tuck Offical</option>
            
                </select>
          
            </form>
          </div>
          <div className='grid grid-cols-3 gap-[32px]'>
            {foodcard.map((food,)=>(
              <div key={food._id} className='w-auto flex flex-col items-start justify-between gap-[8px]'>
              <div>
                <Image src={food.img} width={312} height={267} alt={food.title}/>
              </div>
              <div className='w-full flex flex-col items-start justify-between gap-[8px]'>

               <h3 className='font-bold text-[18px]'>{food.title}</h3>
               <div className='w-auto flex flex-row items-start justify-between gap-[16px]'>
                <div className='text-[#FF9F0D]'>${food.price.toFixed(2)}</div>
                <div>{food.discountPrice? <div className='text-[#828282] line-through'>${food.discountPrice.toFixed(2)}</div> : <div className='hidden'></div>}</div>
               </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className='border-solid border-[#F2F2F2] border-[1px] rounded-[6px] px-[16px] py-[32px] h-auto flex flex-col gap-[32px]'>
     
        <div>
          <form className='bg-[#fef3e1]  h-[46px] flex flex-row gap-0 justify-between items-center'>
          <input type="text" placeholder='Search Product' className='bg-[#fef3e1] px-[16px] placeholder:text-[#828282] '/><Button variant="primary" size="input"></Button></form>
        </div>
        <div className='flex flex-col gap-[32px]'>
        <div><h6 className='font-bold font-helvetica text-[20px] '>Category</h6></div>
        <div className='flex flex-col gap-[16px]'>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">Sandwiches</span></div>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">Burger</span></div>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">Chicken Chup</span></div>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">Drink</span></div>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">Pizza</span></div>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">RThi</span></div>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">Non Veg</span></div>
        <div className='flex flex-row gap-[8px]'>   <Checkbox id="terms" />
        <span className="text-sm text-[#333333]">Uncategorized</span></div>
        </div>
        </div>
        <div className="bg-[url('/adofshop.svg')] py-[32px] px-[16px] flex flex-col justify-between text-white h-[286px]">
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[8px]'>
          <p className='font-bold' style={inter.style}>Perfect Taste</p>
          <h6 className='font-bold font-helvetice text-[20px]'>Classic Restaurant</h6>
          </div>
          
          <p className='font-bold text-[#FF9F0D]' style={inter.style}>45.00$</p>
        </div>
        <button className='flex flex-row gap-[8px] items-center' style={inter.style}>
          <p >Shop Now</p> <IoArrowForwardCircleOutline className='w-[24px] h-[24px] '/></button>
        </div>
        <div><Slider defaultValue={[20]} max={100} step={1} />
        </div>
        <div></div>
        <div></div>
        </div>
        </div>
    </div>
  )
}

export default shop
