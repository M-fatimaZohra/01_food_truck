import React from 'react'
import Header1 from '../component/Header/Header1'
import { Subscription } from '../component/RouteHead/RouteHead'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button';
import { FaHeart } from 'react-icons/fa';

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function page() {
  return (
    <div>
        <Header1 />
      <Subscription/>
      <div
        className="flex flex-col justify-center items-center gap-[32px]  py-[150px] sm:px-[50px] px-[25px] md:px-0"
        style={inter.style}
      
      >
        <div  className="flex s1400:flex-row flex-col justify-center items-center gap-[16px] " >
          <div className='flex flex-col justify-between p-8 sm:w-[424px] w-auto sm:h-[624px] h-auto bg-white border-white border-2 border-solid drop-shadow-[2px_2px_2px_rgba(255,159,13,0.2)]'>
              <div className='flex flex-col justify-between gap-[32px]'>
                <div><h3 className='text-[25px]  font-bold font-helvetica'>Free</h3>
                <h3 className='text-[40px]  font-medium font-helvetica'>0 Rs</h3>
                <p className='text-[15px]'>Perfect for casual users who want to explore the
                   menu and place occasional orders with standard delivery options.</p>
                </div>
                
                <div>
                 <div className='flex flex-col gap-[16px]'>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start  items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Access to the menu and order food</div>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Standard delivery time</div>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>No delivery fee for orders above 3000 Rs</div>

                 </div>
                </div>
                </div>
                <div className='flex flex-col gap-[16px] items-end'>
                  <Button variant="primary" size="sign" className='text-white'>Get Free</Button>
                  
                </div>
              
            </div>
          <div className='flex flex-col justify-between p-8 sm:w-[424px] w-auto sm:h-[624px] h-auto bg-white border-white border-2 border-solid drop-shadow-[2px_2px_2px_rgba(255,159,13,0.2)]'>
              <div className='flex flex-col justify-between gap-[32px]'>
                <div><h3 className='text-[25px]  font-bold font-helvetica'>Pro Plan</h3>
                <h3 className='text-[40px]  font-medium font-helvetica'>1200 Rs / month</h3>
                <p className='text-[15px]'> Designed for food lovers who enjoy perks like free 
                  delivery and exclusive discounts to enhance their dining experience.</p>
                </div>
                
                <div>
                 <div className='flex flex-col gap-[16px]'>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start  items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Free delivery on all orders</div>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Exclusive discounts (10% off on every order)</div>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Priority support for order issues</div>

                 </div>
                </div>
                </div>
                <div className='flex flex-col gap-[16px] items-end'>
                  <Button variant="primary" size="sign" className='text-white'>Get Pro</Button>
                  
                </div>
              
            </div>
          <div className='flex flex-col justify-between p-8 sm:w-[424px] w-auto sm:h-[624px] h-auto bg-white border-white border-2 border-solid drop-shadow-[2px_2px_2px_rgba(255,159,13,0.2)]'>
              <div className='flex flex-col justify-between gap-[32px]'>
                <div><h3 className='text-[25px]  font-bold font-helvetica'>Gourmet Plan</h3>
                <h3 className='text-[40px]  font-medium font-helvetica'>5000 Rs / month</h3>
                <p className='text-[15px]'>Tailored for food enthusiasts who crave premium experiences, with access to 
                  gourmet items, early dish releases, and delightful extras.</p>
                </div>
                
                <div>
                 <div className='flex flex-col gap-[16px]'>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start  items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>All Pro Plan benefits</div>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Access to exclusive gourmet/ premium menu options</div>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Early access to new dishes</div>
                  <div className='flex flex-row gap-[8px] px-[4px] justify-start items-center sm:w-auto h-[44px]  text-[16px]'><FaHeart  className='sm:w-[24px] sm:h-[24px] text-[16px] text-red-800'/>Free dessert or drink with every order above 500Rs</div>
                 </div>
                </div>
                </div>
                <div className='flex flex-col gap-[16px] items-end'>
                  <Button variant="primary" size="sign" className='text-white'>Get Gourmet</Button>
                  
                </div>
              
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default page

