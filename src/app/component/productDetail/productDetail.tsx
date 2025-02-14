//for dynamic routes
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PiBagLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { AmountSetterShop } from "@/app/component/counter/counter";
import StarRating from "@/app/component/star/star";
import Link from "next/link";
import { Food } from "@/lib/types";
import CartData from "../CartData/CartData";

interface ProductDetailsClientProps {
  itemsInfo: Food;
  relatedItems: Food[];
}

export default function ProductDetailsClient({ itemsInfo,relatedItems,}: ProductDetailsClientProps) {
  const [cartData, setCartData] = useState<Food[]>([]);
  const Qty = 1

  const addToWishList = () => {
    alert("Item added to Wish list");
    console.log("Item added to Wish list");
  };

  const addToCart = (item: Food) => {

    if (itemsInfo.available) {
  
      setCartData((prevCart) => (prevCart ? [...prevCart, item] : [item]));
      alert("Item added to cart");
    } 
    else {
      alert("item is out of stock");
      setCartData([]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-[150px] gap-10">
      <CartData cartData={cartData} />
      <div className="flex lg:flex-row flex-col justify-center lg:items-center items-start lg:px-0 px-[16px] gap-10">
        <div>
          <img
            src={itemsInfo.imageUrl}
            width={449}
            height={569}
            alt={itemsInfo.name}
            className="rounded-[6px]"
          />
        </div>
        <div className="md:w-[608px] w-auto flex flex-col gap-[16px]">
          <div className="flex flex-col">
            <div className="py-2 px-1 rounded-[6px] text-white w-auto h-auto flex">
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
            <h1 className="font-helvetica font-bold lg:text-[48px] text-[32px]">
              {itemsInfo.name}
            </h1>
            <p className="text-[#4F4F4F] md:text-[18px] text-[12px]">
              {itemsInfo.description}
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-[8px]">
            <p className="font-bold text-[32px] font-helvetica">
              {itemsInfo.price.toFixed(2)}$
            </p>
            <div>
              <StarRating />
            </div>
            <div className="text-black md:text-[18px] text-[12px]">
              {itemsInfo.tags.join(" / ")}
            </div>
            <div className="flex md:flex-row flex-col gap-[16px]">
              <div>
                <AmountSetterShop qty={Qty}  /> 
               
              </div>
              <div>
                <Button
                  variant="primary"
                  size="none"
                  className="text-white w-auto h-auto py-2 px-1"
                  onClick={() => addToCart(itemsInfo)}
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
                onClick={addToWishList}
              >
                <FaHeart />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start px-[50px] gap-[10px]">
        <h4 className="text-black font-bold font-helvetica text-[32px]">
          Similar Products
        </h4>
        <div className="flex flex-row justify-center items-center gap-5">
          {relatedItems.slice(0, 4).map((food) => (
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
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                {/* Wrap the Button with Link or use asChild if supported */}
                <Link href={`/Shop/${food._id}`}>
                  <Button
                    variant="primary"
                    size="none"
                    className="py-2 px-2 hover:bg-[#ffaf37] drop-shadow-[3px_3px_1px_rgba(189,188,187,0.5)] active:drop-shadow-none"
                  >
                    Order Now!
                  </Button>
                </Link>
                <div className="py-2 px-1 rounded-[6px] text-white w-auto h-auto flex">
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
  );
}
