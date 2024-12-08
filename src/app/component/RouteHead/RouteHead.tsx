
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import Link from 'next/link'

  import { Inter } from 'next/font/google'
  
  const inter= Inter({weight:["400","700"], subsets:["latin"]})


 export function Menu() {
  return (
    <div className='w-full lg:h-[410px] xs:h-[300px] flex flex-col justify-center items-center  bg-[url("/compMaterial/routehead.svg")]'>
        <div className='flex flex-col justify-center items-center gap-[20px] text-white'>
            <h1 className='text-[48px] font-bold '>Our Menu</h1>
            <Breadcrumb className='flex flex-col justify-center items-center '>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/" className='text-white text-[20px]' style={inter.style}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-white text-[20px]' style={inter.style}/>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/Menu" className='text-[#FF9F0D] text-[20px]' style={inter.style}>Menu</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
            </div>
      
    </div>
  )
}

export function _404() {
  return (
    <div className='w-full lg:h-[410px] xs:h-[300px] flex flex-col justify-center items-center  bg-[url("/compMaterial/routehead.svg")]'>
        <div className='flex flex-col justify-center items-center gap-[20px] text-white'>
            <h1 className='text-[48px] font-bold '>404</h1>
            <Breadcrumb className='flex flex-col justify-center items-center '>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/" className='text-white text-[20px]' style={inter.style}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-white text-[20px]' style={inter.style}/>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/not-found" className='text-[#FF9F0D] text-[20px]' style={inter.style}>404</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
            </div>
      
    </div>
  )
}

export function SignUp() {
  return (
    <div className='w-full lg:h-[410px] xs:h-[300px] flex flex-col justify-center items-center  bg-[url("/compMaterial/routehead.svg")]'>
        <div className='flex flex-col justify-center items-center gap-[20px] text-white'>
            <h1 className='text-[48px] font-bold '>Sign up page</h1>
            <Breadcrumb className='flex flex-col justify-center items-center '>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="./" className='text-white text-[20px]' style={inter.style}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-white text-[20px]' style={inter.style}/>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/SignUp" className='text-[#FF9F0D] text-[20px]' style={inter.style}>sign up</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
            </div>
      
    </div>
  )
}

