import React from 'react'
import Header1 from './component/Header/Header1'
import { _404 } from './component/RouteHead/RouteHead'
import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

function NotFound() {
  return (
    <div>
        <Header1/>
        <_404/>
        <div className='flex flex-col justify-center items-center gap-[20px]  py-[150px]' style={inter.style}>
            <h1 className='text-[96px] font-bold text-[#FF9F0D]'>404</h1>
            <h4 className='sm:text-[32px] xs:w-[200px] sm:w-[490px]  xs:text-center  font-bold' >Oops! Look likes something going wrong</h4>
            <p className='text-[18px] text-[#4F4F4F] text-center lg:w-[490px] xs:w-[200px]'>Page Cannot be found! we’ll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:</p>
            <Button variant="primary" size="basic" className='text-white'>Go to home</Button>
            
        </div>
      
    </div>
  )
}

export default NotFound
