"use client"
import { useState } from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { IoAddOutline } from 'react-icons/io5';


// for add to cart section
export function AmountSetter() {
  
  const [amount, setAmount] = useState(1);

  
  const increment = () => {
    setAmount(prevAmount => prevAmount + 1);
  };

  
  const decrement = () => {

    setAmount(prevAmount => Math.max(prevAmount - 1, 1));
  };

  
  

  return (
    <div className="w-[110px] h-[32px] rounded-[18px] border border-solid border-[#E0E0E0] flex justify-between px-[16px] items-center">
      <button onClick={decrement}>
        <HiOutlineMinus className="w-[16px] h-[16px] text-[#1F242E]" />
      </button>
      <p>{amount}</p> 
      <button onClick={increment}>
        <IoAddOutline className="w-[16px] h-[16px] text-[#1F242E]" />
      </button>
    </div>
  )

  
}




//dyanamic route section
export function AmountSetterShop(props:{qty:number}) {
  
  const [amount, setAmount] = useState(props.qty);

  
  const increment = () => {
    setAmount(prevAmount => prevAmount + 1);
  };

  
  const decrement = () => {

    setAmount(prevAmount => Math.max(prevAmount - 1, 1));
  };


  

  return (
    <div className="w-[110px] h-[32px]  border border-solid border-[#E0E0E0] flex justify-between items-center">
      <button onClick={decrement} className='border-black border-solid border-[1px] h-full w-[32px] flex justify-center items-center'>
        <HiOutlineMinus className="w-[16px] h-[16px] text-[#1F242E] " />
      </button>
      <p>{amount}</p> 
      <button onClick={increment} className='border-black border-solid border-[1px] h-full w-[32px] flex justify-center items-center'>
        <IoAddOutline className="w-[16px] h-[16px] text-[#1F242E]" />
      </button>
    </div>
  )

  
}
