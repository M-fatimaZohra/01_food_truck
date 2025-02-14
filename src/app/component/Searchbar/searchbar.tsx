"use client"
import React from 'react'
import { useState, FormEvent } from 'react' 
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const filters = [
    "Drink",
    "Dessert",
    "Sandwich",
    "Main Course",
    "Appetizer",
    "Burger",
    "Pizza",
    "Non Veg",
  ];

  const foodName = [
    "Fresh Lime",
    "Chocolate Muffin",
    "Burger",
    "Country Burger",
    "Pizza",
    "Chicken Chup",
  ];

  const join = foodName.concat(filters); 

function Searchbar() {
  //to join foodName with filters array
    
    const [searchbar, setSearchBar ] = useState("")
    
    const handleSubmittion = async (e: FormEvent) => {
        e.preventDefault()
        const response = await fetch(`/api/foods/search?query=${searchbar}`)
        const data = await response.json()
        console.log(data) // Handle the search results here
    }

    return (
        <div>
            <form className="bg-[#fef3e1] h-[46px] w-auto flex flex-row gap-0 justify-between items-center" onSubmit={handleSubmittion}>
                <input
                    type="text"
                    placeholder="Search Product"
                    className="bg-[#fef3e1] px-[16px] placeholder:text-[#828282]"
                    list="name"
                    value={searchbar} 
                    onChange={(e) => setSearchBar(e.target.value)} 
                />
                <datalist id="name">
                    {join.map((cata, i) => (
                        <option key={i} value={cata}>
                            {cata}
                        </option>
                    ))}
                </datalist>
                <Button
                    variant="primary"
                    size="input"
                    type="submit"
                >
                    <CiSearch />
                </Button>
            </form> 
        </div>
    )
}

export default Searchbar
