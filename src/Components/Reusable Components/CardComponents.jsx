import React from 'react'
/* import { Button } from "@/components/ui/button"; */

export default function CardComponents({image, title, description}) {
  return (
    <div className="w-[300px] h-[250px] relative shadow-lg" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      <div className="absolute bottom-0 flex w-full">
        <div className="h-[45%] w-[65%] bg-yellow-300 bg-opacity-50 backdrop-blur-md p-2">
          <p className="font-semibold">{title}</p>
          {description && <p className="text-xs mt-2">{description}</p>}
        </div>
        <button
          variant="outline"
          className="border border-black bg-yellow-500 text-black w-fit px-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold flex justify-center items-center">
          <p>→</p>
        </button>
      </div>
    </div>
  )
}
