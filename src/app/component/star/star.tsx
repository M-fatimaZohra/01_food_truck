"use client"
import { useState } from 'react';
import { IoStar } from "react-icons/io5";
function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex space-x-1 ">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => setRating(index + 1)}
          className={`w-6 h-6 ${
            index < rating ? 'text-[#FF9F0D]' : 'text-[#E0E0E0]'
          }`}
        >
          <IoStar className="sm:w-5 sm:h-5 w-[15px] h-[15px] "/>
        </button>
      ))}
    </div>
  );
}

export default StarRating;
