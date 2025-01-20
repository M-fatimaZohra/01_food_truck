import React from 'react'
import { Inter } from 'next/font/google';
import { WishList } from '../component/RouteHead/RouteHead';
import Header1 from '../component/Header/Header1';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

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



// interface WishListsProps {
//   wishlist: Food[];
// }
function WishLists( ) {
  
  const foods:Food[] =[]

  
  return (
    <div>
      <Header1 />
      <WishList />
      <div
        className="flex flex-col justify-center items-center gap-[32px]  py-[150px] sm:px-[50px] px-[25px] md:px-0"
        style={inter.style}
    
      >

        <h1 className='text-[48px] font-bold text-black'>Your Wishlist</h1>
        <div className="grid lg:grid-cols-3  lg:gap-[32px] grid-col-1 gap-[16px]">
                {foods.map((food) => (
                  <div
                    key={food._id}
                    className="w-auto flex flex-col items-start justify-between gap-[8px]"
                  >
                    <div>
                      <img
                        src={food.imageUrl}
                        width={312}
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
  )
}

export default WishLists
