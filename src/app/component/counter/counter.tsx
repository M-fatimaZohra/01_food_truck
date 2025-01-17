"use client"
import { useState } from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { IoAddOutline } from 'react-icons/io5';

function AmountSetter() {
  
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


export default AmountSetter;
