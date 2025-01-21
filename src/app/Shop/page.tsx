"use client";
import { useState, useEffect, useCallback } from "react";
import Header1 from "../component/Header/Header1";
import { Shop } from "../component/RouteHead/RouteHead";
import { Inter } from "next/font/google";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Slider } from "@/components/ui/slider";
import { Foods15 } from "@/sanity/lib/queries";
import Link from "next/link";
import Searchbar from "../component/Searchbar/searchbar";


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


const filters = [
  "Drink",
  "Dessert",
  "Sandwich",
  "Main Course",
  "Appetizer",
  "Burger",
  "Pizza",
  "Non Veg",
];


function ShopItems() {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]); //check box
  const [filteredItems, setFilteredItems] = useState<Food[]>([]); //check box
  const [loading, setLoading] = useState(false); //loader


  //for check box
  const HandleFilterButtonWhenClick = (selectCatagory: string) => {
    if (selectedFilter.includes(selectCatagory)) {
      const filter = selectedFilter.filter((e) => e !== selectCatagory); //remove items that is not equal to selected check box
      setSelectedFilter(filter);
    } else {
      setSelectedFilter([...selectedFilter, selectCatagory]);
    }
  };
  const filterItems = useCallback((products: Food[]) => {
    if (selectedFilter.length > 0) {
      const items = selectedFilter.flatMap((selectedCategory) =>
        products.filter((item) => item.category === selectedCategory)
      );
      setFilteredItems(items);
    } else {
      setFilteredItems(products);
    }
  }, [selectedFilter]);

  useEffect(() => {
    //for check box
    
    const fetchData = async () => {
      try {
      const products: Food[] = await Foods15(0, 14);
      filterItems(products);
      } catch (error) {
      console.error("Error fetching data:", error);
      }
    };

    fetchData();

    //create loader
    setLoading(true);
    setTimeout(() => {
      console.log("this is running before component load");
      setLoading(false);
    }, 5000);
  }, [filterItems]);

  
  const load = (
    <div className="flex justify-center items-center h-screen lg:w-[984px] w-auto">
      <div className="border-solid border-[#FF9F0D] border-b-[5px] border-t-[3px] w-auto h-auto animate-spin rounded-full duration-500 ">
        {" "}
        <div className=" m-3 flex justify-center items-center border-solid border-black border-[5px] w-[50px] h-[50px] animate-spin rounded-full duration-500  "></div>
      </div>
    </div>
  );

  return (
    <div>
      <Header1 />
      <Shop />

      <div className="flex md:flex-row flex-col-reverse gap-[16px] justify-center py-[150px]">
        {loading ? (
          load
        ) : (
          <div
            className="flex flex-col justify-center items-center gap-[20px]   "
            style={inter.style}
          >
            <div className="flex flex-col items-start gap-[32px]">
              <div className="flex lg:flex-row flex-col justify-center gap-[32px]">
                <form className="flex flex-row gap-[16px] justify-center items-center">
                  <label>Sort By :</label>
                  <select className="border-[#E0E0E0] border-[1px] border-solid rounded-[6px] w-[236px] h-[46px] text-[#E0E0E0] focus:text-black">
                    <option defaultValue="Newest">Newest </option>
                    <option>Oldest</option>
                    <option>Popular</option>
                    <option>Latest</option>
                  </select>
                </form>
                <form className="flex flex-row gap-[16px] justify-center items-center">
                  <label>Show :</label>
                  <select className="border-[#E0E0E0] border-[1px] border-solid rounded-[6px] w-[236px] h-[46px] text-[#E0E0E0] focus:text-black">
                    <option defaultValue="Default">Default </option>
                    <option>Food Tuck Offical</option>
                  </select>
                </form>
              </div>
              <div className="grid lg:grid-cols-3  lg:gap-[32px] grid-col-1 gap-[16px]">
                {filteredItems.map((food) => (
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
                {/* <Cards/>  */}
              </div>
            </div>
          </div>
        )}
        <div className="border-solid border-[#F2F2F2] border-[1px] rounded-[6px] px-[16px] py-[32px] h-auto flex flex-col gap-[32px]">
          <div>
            <Searchbar />
          </div>
          <div className="flex flex-col  md:gap-[32px] gap-[16px]">
            <div>
              <h6 className="font-bold font-helvetica text-[20px] ">
                Category
              </h6>
            </div>
            <div className="md:flex flex-col grid sm:grid-cols-4 grid-cols-2 gap-[16px]">
              {filters.map((catagory,i) => (
                <div key={i} className="flex flex-row gap-[8px]">
                  {" "}
                  <Checkbox
                    id="terms"
                    className=""
                    onClick={() => HandleFilterButtonWhenClick(catagory)}
                  />
                  <span className="text-sm text-[#333333]">{catagory}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[url('/adofshop.svg')] py-[32px] px-[16px] flex flex-col justify-between text-white h-[286px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="font-bold" style={inter.style}>
                  Perfect Taste
                </p>
                <h6 className="font-bold font-helvetice text-[20px]">
                  Classic Restaurant
                </h6>
              </div>

              <p className="font-bold text-[#FF9F0D]" style={inter.style}>
                45.00$
              </p>
            </div>
            <button
              className="flex flex-row gap-[8px] items-center"
              style={inter.style}
            >
              <p>Shop Now</p>{" "}
              <IoArrowForwardCircleOutline className="w-[24px] h-[24px] " />
            </button>
          </div>
          <div>
            <Slider defaultValue={[20]} max={100} step={1} />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ShopItems;
