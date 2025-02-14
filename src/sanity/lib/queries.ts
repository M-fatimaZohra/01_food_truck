import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Food } from "@/lib/types";


export async function Foodstest (page:number,perpage:number){
  const res = await client.fetch(
    `*[_type == "food"][${page}..${perpage}]{
  _id,
  name,
  description,
  price,
  category,
    originalPrice,
    tags,
    "imageUrl":image.asset -> url,
   available 
    
    
}`)
const Food:Food[] =await res
const totalCards = parseInt(res.headers.get("X-total-Count")|| "0")
return {Food, totalCards} 

}

//for /Shop
export async function Foods15 (page:number,perpage:number){
  const res = await client.fetch(
    `*[_type == "food"][${page}..${perpage}]{
  _id,
  name,
  description,
  price,
  category,
    originalPrice,
    tags,
    "imageUrl":image.asset -> url,
   available 
    
    
}`)
const Food:Food[] =await res
return Food 

}
 

export const Foods = defineQuery(
  `*[_type == "food"]{
_id,
name,
description,
price,
category,
  originalPrice,
  tags,
  "imageUrl":image.asset -> url,
 available 
  
  
}`)

export const ChefsData = defineQuery(
    `*[_type =="chef"]{
  _id,
  name,
  description,
  position,
  available ,
  experience,
  specialty,
  "imageUrl":image.asset -> url,
    
    
}`)


export const ChefsData12 = defineQuery(
  `*[_type =="chef"][0..11]{
_id,
name,
description,
position,
available ,
experience,
specialty,
"imageUrl":image.asset -> url,
  
  
}`)

export const getItemById = defineQuery(
  `*[_type == "food" && _id == $id]{
    "_id": _id,
    name,
    description,
    price,
    category,
    originalPrice,
    tags,
    "imageUrl":image.asset -> url,
    available
  }`
);



