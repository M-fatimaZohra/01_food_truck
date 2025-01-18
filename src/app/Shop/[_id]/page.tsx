import React from 'react'
import { client } from "@/sanity/lib/client";
import { ShopItems } from '@/app/component/RouteHead/RouteHead';
import Header1 from '@/app/component/Header/Header1';
import { Inter } from 'next/font/google';
import StarRating from '@/app/component/star/star';
import { AmountSetterShop } from '@/app/component/counter/counter';
import { Button } from '@/components/ui/button';
import { PiBagLight } from "react-icons/pi";
const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

type ItemParams = {
    params: Promise<{ _id: string }>;
  };
  

  async function getItems(_id: string) {
    const Fetch = await client.fetch(
        `*[_type == "food" && _id == $id]{
    "_id": _id,
    name,
    description,
    price,
    category,
    originalPrice,
    tags,
    "imageUrl":image.asset -> url,
    available
}`
,
        { id: _id }
    );

    console.log('Fetched items:', Fetch);

    if (!Fetch.length) {
        throw new Error(`No item found with the id "${_id}"`);
    }

    return Fetch[0]; // Return the single object
}



 

async function page({params}:ItemParams) {

  const itemsInfo = await getItems((await params)._id) // Fetch blog data using the `id` from URL

  console.log(itemsInfo)
  return (
    
      <div>
<Header1/>
<ShopItems/>
<div className='flex flex-row  justify-center items-center py-[150px] gap-10'>
          <div className=''><img src={itemsInfo.imageUrl} width={449} height={569} alt={itemsInfo.name} className='rounded-[6px]'/></div>
          <div className='w-[608px] flex flex-col gap-[16px]'>
            <div className=' flex flex-col '>
            <div className=' py-2 px-1 rounded-[6px] text-white w-auto h-auto flex'>{itemsInfo.available ? <div className='bg-[#FF9F0D] px-[6px] py-[7px] rounded-[6px]'>In stock</div>:<div className='bg-[#595858] px-[6px] py-[7px] rounded-[6px]'>Stock Out</div>}</div>
            <h1 className='font-helvetica font-bold text-[48px]'>{itemsInfo.name}</h1>
            <p className='text-[#4F4F4F] text-[18px]' style={inter.style}>{itemsInfo.description}</p>
            </div>
            <hr/>
            <div className=' flex flex-col gap-[8px] '>
              <p className='font-bold text-[32px] font-helvetica'>{itemsInfo.price.toFixed(2)}$</p> {/*To make number like 50.00$ */}
              <div><StarRating/></div>
              <div>{itemsInfo.tags.join(" / ")}{/* to make tags like "food / cheezy / spicy" */}</div>
              <div className='flex flex-row gap-[16px]'>
                <div><AmountSetterShop/></div>
              <div><Button variant="primary" size="none" className='text-white w-auto h-auto py-2 px-1'><PiBagLight /> Add to cart</Button></div>
              </div>
              

            </div>
            </div>
          </div>
      </div>
  
  
  )
}

export default page
