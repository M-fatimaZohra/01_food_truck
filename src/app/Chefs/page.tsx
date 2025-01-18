import React from 'react'
import Header1 from '../component/Header/Header1'
import { Chefs } from '../component/RouteHead/RouteHead'
import { sanityFetch } from "@/sanity/lib/live";
import { ChefsData12 } from '@/sanity/lib/queries';

type Chef = {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
  description: string;
  available: true
}

async function page() {
  const response = (await sanityFetch({ query:ChefsData12})).data;
    const chefs: Chef[] = response; 
  return (
    <div>
      <Header1/>
      <Chefs/>
      <div className='flex flex-row gap-[16px] justify-center py-[150px] text-black'>
        <div className='grid grid-cols-4 gap-[32px]'>
        {chefs.slice(0,12).map((chef)=>(
        <div key={chef._id} className='w-auto flex flex-col items-center justify-between gap-[8px]'>
          <div>
          <img src={chef.imageUrl} width={312} height={379} alt={chef.name}/>
           </div>
<p className='font-bold text-[20px]'>{chef.name}</p>
<p>{chef.position}</p>
        </div>
      ))}
        </div>
      
      </div>
    </div>
    
  )
}

export default page
