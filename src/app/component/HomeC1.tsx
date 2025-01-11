import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";
import { FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import Image from "next/image";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });
const greateVibes = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
// incomplete hover effect left
function HomeC1() {
  return (
    <div className="w-full text-white flex lg:flex-col flex-row justify-center items-center">
      <div className=" _3xl:w-[1320px] w-auto h-auto 2xl:gap-[72px] lg:gap-0 md:gap-[72px] flex lg:flex-row lg:px-10 xl:px-0 flex-col-reverse 2xl:justify-center justify-between items-center ">
        <div className="xl:w-1/2 w-4/5  flex flex-col  justify-center items-start  gap-8 h-auto">
          <div >
            <p style={greateVibes.style} className="text-[#FF9F0D] text-[32px] ">
    About us
            </p>
            <div className="font-bold xl:text-[48px] lg:text-[35px] sm:text-[50px] text-[30px] grid grid-cols-5 grid-row-2 xl:w-[446px] w-auto ">
              <h2 className=" col-span-1 text-[#FF9F0D]">We</h2>
              <h2 className="col-start-2 row-start-1 col-span-4">
                Create the best
              </h2>
              <h2 className="row-start-2 col-span-4"> foody product</h2>
            </div>
            
          </div>
          <div>
              <p className=" xl:w-[526px] md:w-[500px] w-auto" style={inter.style}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
            </div>
            <div>
            <ul className="list-none space-y-2 text-[18px] flex flex-col gap-4" style={inter.style}>
      <li className="flex items-center">
        <FaCheck   className="mr-2 text-[20px]" />
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </li>
      <li className="flex items-center">
        <FaCheck   className="mr-2 text-[20px]" />
        Quisque diam pellentesque bibendum non dui volutpat fringilla 
      </li>
      <li className="flex items-center">
        <FaCheck   className="mr-2 text-[20px]" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </li>
    </ul>
            </div>
            <div>
            <Button variant="primary" size="primary" style={inter.style}>Read More</Button>
          </div>
        </div>
        <div className="xl:w-1/2 w-4/5 ">
        <div className="grid grid-cols-6 gap-y-[16px] gap-x-[16px]">
<Image src="/HomeC1/food1.svg" alt="food" width={660} height={100} className="col-start-1 col-span-6 rounded-[6px]"></Image>
<Image src="/HomeC1/food2.svg" alt="food" width={322} height={100}className="col-start-1 col-span-3 rounded-[6px]"></Image>
<Image src="/HomeC1/food3.svg" alt="food" width={322} height={100}className="col-start-4 col-span-3 rounded-[6px]"></Image>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomeC1;
