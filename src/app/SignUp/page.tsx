import React from 'react'
import { SignUp } from '../component/RouteHead/RouteHead'
import Header1 from '../component/Header/Header1'
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });


function Signup() {
  return (
   <div>
        <Header1/>
        <SignUp/>
        <div className='flex flex-col justify-center items-center gap-[20px]  py-[150px]' style={inter.style}>
          
            <div className='w-[424px] h-[624px] bg-white blur-0 border-solid border-[#FF9F0D] border-[10px] '></div></div>
          
    </div>
  )
}

export default Signup
