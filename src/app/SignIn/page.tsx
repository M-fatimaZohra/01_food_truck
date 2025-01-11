import React from 'react'
import { SignIn } from '../component/RouteHead/RouteHead'
import Header1 from '../component/Header/Header1'
import { Inter } from 'next/font/google'
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

import { PiEnvelopeSimple } from "react-icons/pi";
import { PiLock } from "react-icons/pi";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });


function Signin() {
  return (
   <div>
        <Header1/>
        <SignIn/>
        <div className='flex flex-col justify-center items-center gap-[20px]  py-[150px]' style={inter.style}>
          
            <div className='flex flex-col justify-between p-8 sm:w-[424px] w-auto h-auto bg-white border-white border-2 border-solid sm:drop-shadow-[0_0_45px_rgba(255,159,13,0.2)] drop-shadow-[0_0_30px_rgba(255,159,13,0.2)]'>
              <div className='flex flex-col gap-[32px]'>
                <div><h3 className='text-[20px]  font-bold font-helvetica'>Sign In</h3></div>
                <div>
                 <form className='flex flex-col gap-[16px]'>
                  <div className='flex flex-row gap-[4px] px-[4px] justify-between items-center sm:w-auto h-[44px] border-solid border-[2px] border-[#E0E0E0] '><PiEnvelopeSimple className='sm:w-[24px] sm:h-[24px] text-[#4F4F4F]'/><input type="text" className='sm:w-[300px] w-[240px] '  placeholder='Email'/></div>
                  <div className='flex flex-row gap-[4px] px-[4px] justify-between items-center sm:w-auto h-[44px] border-solid border-[2px] border-[#E0E0E0] '><PiLock className='sm:w-[24px] sm:h-[24px] text-[#4F4F4F]'/><input type="text" className='sm:w-[300px] w-[240px] ' placeholder='Passward'/></div>
                <div> <label className="flex items-center space-x-2">
             <Checkbox id="terms" />
                 <span className="text-sm text-[#333333]">Remember me?</span>
                </label></div>
                 </form>
                </div>
                <div className='flex flex-col gap-[16px] items-end'>
                  <Button variant="primary" size="sign" className='text-white'>Sign Up</Button>
                  <p className='text-[#828282]'>Forget password?</p>
                </div>
              </div>
              <div className='flex flex-col gap-[16px]'>
                   <div className='flex flex-row justify-between items-center w-full '>
                         <span className='border-b-[1px] border-solid w-[49%]'></span>
                          <span className='sm:w-[32px] sm:h-[32px] w-[28px] h-[28px] border-solid border-[1px] border-[#E0E0E0] flex justify-center items-center text-[#4F4F4F]'>OR</span>
                          <span className='border-b-[1px] border-solid w-[49%]'></span>
                   </div>

                   <div className='flex flex-row justify-start items-center py-[16px] px-[16px] gap-[25%] rounded-none w-full h-auto border-solid border-[1px]'>
                   <span><FcGoogle className='w-[20px] h-[20px]'/></span>
                   <Button variant="none" size="none" >
                    <span className='text-center'>Sign up with Google</span>
                   </Button>
                   </div>
                   <div className='flex flex-row justify-start items-center py-[16px] px-[16px] gap-[25%] rounded-none w-full h-auto border-solid border-[1px]'>
                   <span><IoLogoApple className='w-[20px] h-[20px]'/></span>
                   <Button variant="none" size="none" >
                    <span className='text-center'>Sign up with Apple</span>
                   </Button>
                   </div>
                   
              </div>
            </div>
            </div>
          
    </div>
  )
}

export default Signin
