import React from "react";
import { ShoppingCart } from "../component/RouteHead/RouteHead";
import Header1 from "../component/Header/Header1";
import { Inter } from "next/font/google";
import StarRating from "../component/star/star";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { AmountSetter }from "../component/counter/counter";
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });






function shoppingCart() {
  return (
    <div>
      <Header1 />
      <ShoppingCart />
      <div
        className="flex flex-col justify-center items-center gap-[20px]   py-[150px]"
        style={inter.style}
      >
        
        <div className="flex xl:flex-row flex-col items-start h-auto gap-[32px]">
         <div>
         <Table>

  <TableHeader>
    <TableRow className="flex flex-row s1400:w-[1225.86px] xl:w-[1120px] lg:w-[1000px] md:w-auto justify-between items-center   ">
      <TableHead className="s1400:w-[450px] xl:w-[400px] lg:w-[350px] font-bold text-[18px] text-black opacity-100" style={inter.style}>Product</TableHead>
      <TableHead className="font-bold text-[18px] text-black opacity-100" style={inter.style}>Price</TableHead>
      <TableHead className="font-bold text-[18px] text-black opacity-100" style={inter.style}>Quantity</TableHead>
      <TableHead className="font-bold text-[18px] text-black opacity-100" style={inter.style}>Total</TableHead>
      <TableHead className="font-bold text-[18px] text-black opacity-100" style={inter.style}>Remove</TableHead>
    </TableRow>
    
  </TableHeader>
  <TableBody className="flex flex-col gap-[32px] pt-[32px]">
    <TableRow className="flex flex-row s1400:w-[1225.86px] xl:w-[1120px] lg:w-[1000px] md:w-auto justify-between items-center   ">
      <TableCell className="s1400:w-[450px] xl:w-[400px] lg:w-[350px]">
        <div className="flex sm:flex-row flex-col gap-[8px]">
          <div><Image src="./shipp/product (2).svg" width={93} height={10} alt="burger"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-bold">Burger</p>
          <div className="flex flex-row sm:gap-[8px] gap-[2px]  "><StarRating/></div></div>
        </div>
        </TableCell>
      <TableCell className="text-[#333333]">$35.00</TableCell>
      <TableCell><AmountSetter/></TableCell>
      <TableCell className=" font-bold text-[#050303]">$221.00</TableCell>
      <TableCell className="active:text-[#FF9F0D] text-[#333333]"><button><RxCross2 className="w-[20px] h-[20px]"/></button></TableCell>
    </TableRow>
    <TableRow className="flex flex-row s1400:w-[1225.86px] xl:w-[1120px] lg:w-[1000px] md:w-auto justify-between items-center   ">
      <TableCell className="s1400:w-[450px] xl:w-[400px] lg:w-[350px]">
        <div className="flex sm:flex-row flex-col gap-[8px]">
          <div><Image src="./shipp/product (3).svg" width={93} height={10} alt="burger"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-bold">Fresh Lime</p>
          <div className="flex flex-row sm:gap-[8px] gap-[2px]  "><StarRating/></div></div>
        </div>
        </TableCell>
      <TableCell className="text-[#333333]">$25.00</TableCell>
      <TableCell><AmountSetter/></TableCell>
      <TableCell className=" font-bold text-[#333333]">$521.00</TableCell>
      <TableCell className="active:text-[#FF9F0D] text-[#333333]"><button><RxCross2 className="w-[20px] h-[20px]"/></button></TableCell>
    </TableRow>
    <TableRow className="flex flex-row s1400:w-[1225.86px] xl:w-[1120px] lg:w-[1000px] md:w-auto justify-between items-center   ">
      <TableCell className="s1400:w-[450px] xl:w-[400px] lg:w-[350px]">
        <div className="flex sm:flex-row flex-col gap-[8px]">
          <div><Image src="./shipp/product (4).svg" width={93} height={10} alt="burger"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-bold">Pizza</p>
          <div className="flex flex-row sm:gap-[8px] gap-[2px]  "><StarRating/></div></div>
        </div>
        </TableCell>
      <TableCell className="text-[#333333]">$15.00</TableCell>
      <TableCell><AmountSetter/></TableCell>
      <TableCell className=" font-bold text-[#333333]">$421.00</TableCell>
      <TableCell className="active:text-[#FF9F0D] text-[#333333]"><button><RxCross2 className="w-[20px] h-[20px]"/></button></TableCell>
    </TableRow>
    <TableRow className="flex flex-row s1400:w-[1225.86px] xl:w-[1120px] lg:w-[1000px] md:w-auto justify-between items-center   ">
      <TableCell className="s1400:w-[450px] xl:w-[400px] lg:w-[350px]">
        <div className="flex sm:flex-row flex-col gap-[8px]">
          <div><Image src="./shipp/product (5).svg" width={93} height={10} alt="burger"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-bold">Chocolate Muffin</p>
          <div className="flex flex-row sm:gap-[8px] gap-[2px]  "><StarRating/></div></div>
        </div>
        </TableCell>
      <TableCell className="text-[#333333]">$$45.00</TableCell>
      <TableCell><AmountSetter/></TableCell>
      <TableCell className=" font-bold text-[#333333]">$521.00</TableCell>
      <TableCell className="active:text-[#FF9F0D] text-[#333333]"><button><RxCross2 className="w-[20px] h-[20px]"/></button></TableCell>
    </TableRow>
    <TableRow className="flex flex-row s1400:w-[1225.86px] xl:w-[1120px] lg:w-[1000px] md:w-auto justify-between items-center   ">
      <TableCell className="s1400:w-[450px] xl:w-[400px] lg:w-[350px]">
        <div className="flex sm:flex-row flex-col gap-[8px]">
          <div><Image src="./shipp/product (1).svg" width={93} height={10} alt="burger"/></div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-bold">Cheese Butter</p>
          <div className="flex flex-row sm:gap-[8px] gap-[2px]  "><StarRating/></div></div>
        </div>
        </TableCell>
      <TableCell className="text-[#333333]">$15.00</TableCell>
      <TableCell><AmountSetter/></TableCell>
      <TableCell className=" font-bold text-[#333333]">$325.00</TableCell>
      <TableCell className="active:text-[#FF9F0D] text-[#333333]"><button><RxCross2 className="w-[20px] h-[20px]"/></button></TableCell>
    </TableRow>
  </TableBody>
</Table>

         </div>
        </div>
        <div  className="flex s1400:flex-row flex-col justify-between md:items-start items-center gap-[20px]   py-[150px] w-auto ">
<div className=" flex flex-col items-start justify-center gap-[32px] ">
<h2 className="font-bold font-helvetica text-[32px]">Coupon Code</h2>
<form className="p-[8px] flex flex-col items-start justify-center gap-[32px] h-auto border-solid border-[#E0E0E0] border-[1px] rounded-[6px]">
  <div className="p-[16px] flex flex-col items-start justify-center gap-[32px] h-auto">
    <label className="text-[18px] text-[#828282] md:w-[472px] w-auto" style={inter.style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</label>
   <div className="flex justify-between gap-0 border-solid border-[#E0E0E0] border-[1px] rounded-[6px]">
    <input type="text"  placeholder="Enter Here code" className="md:w-[598px] w-[50%] h-[62px] p-[16px]"/><Button variant="primary" size="sm2" >Apply</Button>
    </div>
  </div>
</form>
</div>
<div className=" flex flex-col items-start justify-between md:w-[648px] w-auto  ">
<div className="flex flex-col items-start justify-center gap-[32px] p-[16px]">
<h2 className="font-bold font-helvetica text-[32px]">Total Bill</h2>
  <div className="pt-[16px]  gap-[16px] border-solid border-[#BDBDBD] border-[1px] rounded-[6px] flex flex-col items-start justify-between">
    <div className="p-[16px]  gap-[16px] flex flex-col md:w-[600px] w-[300px]  items-start justify-between">
    <div className="flex flex-row items-start justify-between w-full font-bold text-[#333333] text-[18px] font-helvetica"><p>Cart Subtotal</p><p>$120.00</p></div>
    <div className="flex flex-row items-start justify-between w-full text-[#4F4F4F] text-[18px]" style={inter.style}><p>Shipping Charge</p><p>$00.00</p></div>
    </div>
     <div className="flex flex-row items-center justify-between w-full p-[16px] font-bold text-[#333333] text-[20px] border-solid border-[#BDBDBD] border-[1px] rounded-[6px] font-helvetica"><p>Total Amount</p><p>$205.00</p></div>
  </div> 
  <div className="flex justify-center items-center w-full"><Button variant="primary" size="sign">Proceed to Checkout</Button></div>
</div>

</div>
        </div>
      </div>
    </div>
  );
}

export default shoppingCart;
