"use client"
import { Food } from "@/lib/types"
import { useEffect, useState } from "react";

function CartData(props:{cartData:Food[]| undefined}) {

  const storage = JSON.parse(localStorage.getItem("Add-To-Cart") as string)
  const [cartItems, setCartItems] = useState<Food[]>([storage]);
  const [cartNumber, setCartNumber] = useState<number >(storage?.length);



useEffect(() => {

  console.log("Data",props.cartData)
  
  if(props.cartData?.length){
  

    if(cartNumber){
  
    }
    else{
      setCartNumber(1)
     setCartItems(props.cartData)
     
    }
    localStorage.setItem("Add-To-Cart",JSON.stringify(props.cartData))
  }
  
}, [props.cartData]);


  return (
    <div>
      <button className=" bg-black text-white py-1 px-2 rounded-md">Cart ({cartNumber})</button>
    </div>
  )
}

export default CartData
