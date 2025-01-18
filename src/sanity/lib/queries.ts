import { defineQuery } from "next-sanity";

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

export const Foods15 = defineQuery(
  `*[_type == "food"][0..14]{
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

