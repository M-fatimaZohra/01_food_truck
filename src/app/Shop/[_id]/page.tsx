"use client";
import React from "react";
import { client } from "@/sanity/lib/client";
import { ShopItems } from "@/app/component/RouteHead/RouteHead";
import Header1 from "@/app/component/Header/Header1";
import { Inter } from "next/font/google";
import StarRating from "@/app/component/star/star";
import { AmountSetterShop } from "@/app/component/counter/counter";
import { Button } from "@/components/ui/button";
import { PiBagLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { Foods15 } from "@/sanity/lib/queries";
import Link from "next/link";



const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

type ItemParams = {
  params: Promise<{ _id: string }>;
};

type Food = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  description: string;
  available: true;
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
}`,
    { id: _id }
  );

  

  if (!Fetch.length) {
    throw new Error(`No item found with the id "${_id}"`);
  }

  return Fetch[0]; // Return the single object
}

async function page({ params }: ItemParams) {

  const itemsInfo:Food = await getItems((await params)._id); // Fetch  data using the `id` from URL

  const products: Food[] = await Foods15(0, 14);//get all products


  const showAlert = () => {
    alert("Item added to cart"); 
    console.log("Item added to cart");//just for alert effect
  };

  const addTOWishList = ()=>{
  
    alert("Item added to Wish list")
    console.log("Item added to Wish list");//just for alert effect
  }
 

 //get similar items
  const relatedItems = products.filter((product) => product.category === itemsInfo.category);




  return (
    <div>
      <Header1 />
      <ShopItems />
      <div className="flex flex-col  justify-center items-center py-[150px] gap-10">
        <div className="flex flex-row  justify-center items-center  gap-10">
        <div >
          <img
            src={itemsInfo.imageUrl}
            width={449}
            height={569}
            alt={itemsInfo.name}
            className="rounded-[6px]"
          />
        </div>
        <div className="w-[608px] flex flex-col gap-[16px]">
          <div className=" flex flex-col ">
            <div className=" py-2 px-1 rounded-[6px] text-white w-auto h-auto flex">
              {itemsInfo.available ? (
                <div className="bg-[#FF9F0D] px-[6px] py-[7px] rounded-[6px]">
                  In stock
                </div>
              ) : (
                <div className="bg-[#595858] px-[6px] py-[7px] rounded-[6px]">
                  Stock Out
                </div>
              )}
            </div>
            <h1 className="font-helvetica font-bold text-[48px]">
              {itemsInfo.name}
            </h1>
            <p className="text-[#4F4F4F] text-[18px]" style={inter.style}>
              {itemsInfo.description}
            </p>
          </div>
          <hr />
          <div className=" flex flex-col gap-[8px] ">
            <p className="font-bold text-[32px] font-helvetica">
              {itemsInfo.price.toFixed(2)}$
            </p>{" "}
            {/*To make number like 50.00$ */}
            <div>
              <StarRating />
            </div>
            <div>
              {itemsInfo.tags.join(" / ")}
              {/* to make tags like "food / cheezy / spicy" */}
            </div>
            <div className="flex flex-row gap-[16px]">
              <div>
                
                <AmountSetterShop />
              </div>
              <div>
                <Button
                  variant="primary"
                  size="none"
                  className="text-white w-auto h-auto py-2 px-1"
                  onClick={showAlert}
                >
                  <PiBagLight /> Add to cart
                </Button>
              </div>
            </div>
            <div className="text-[18px] text-[#4F4F4F] flex flex-row gap-[8px]">
              <p>Add to Wishlist</p>
              <Button
                variant="none"
                size="none"
                className="focus:text-red-700 text-gray-400"
                onClick={addTOWishList}
              >
                <FaHeart />
              </Button>
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-col  justify-center items-start px-[50px] gap-[10px]">
          <h4 className="text-black font-bold font-helvetica text-[32px]">Similar Products</h4>
          <div className="flex flex-row  justify-center items-center  gap-5">
            {relatedItems.map((food)=>(
              <div
              key={food._id}
              className="w-auto flex flex-col items-start justify-between gap-[8px]"
            >
              <div>
                <img
                  src={food.imageUrl}
                  width={212}
                  height={267}
                  alt={food.name}
                />
              </div>
              <div className="w-full flex flex-col items-start justify-between gap-[8px]">
                <h3 className="font-bold text-[18px]">{food.name}</h3>
                <div className="w-auto flex flex-row items-start justify-between gap-[16px]">
                  <div className="text-[#FF9F0D]">
                    ${food.originalPrice.toFixed(2)}
                  </div>
                  <div>
                    {food.price ? (
                      <div className="text-[#828282] line-through">
                        ${food.price.toFixed(2)}
                      </div>
                    ) : (
                      <div className="hidden"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <Button
                  variant="primary"
                  size="none"
                  className="py-2 px-2 hover:bg-[#ffaf37] drop-shadow-[3px_3px_1px_rgba(189,188,187,0.5)] active:drop-shadow-none"
                >
                  <Link
                    href={`/Shop/${food._id}`}
                    className="text-[14px]"
                  >
                    Order Now!
                  </Link>
                </Button>
                <div className=" py-2 px-1 rounded-[6px] text-white w-auto h-auto flex">
                  {food.available ? (
                    <div className="bg-[#FF9F0D] px-[6px] py-[7px] rounded-[6px]">
                      In stock
                    </div>
                  ) : (
                    <div className="bg-[#595858] px-[6px] py-[7px] rounded-[6px]">
                      Stock Out
                    </div>
                  )}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
       
      </div>
      
    </div>
  );
}

export default page;
