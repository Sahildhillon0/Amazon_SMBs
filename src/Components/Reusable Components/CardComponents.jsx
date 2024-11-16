import React from 'react'
import { Button } from "@/components/ui/button";

export default function CardComponents({image, title, description}) {
  return (
    <div>
      <div
          className="w-[300px] h-[250px] bg-cover relative shadow-lg"
          style={{ backgroundImage: `url(${image})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">{title}</p>
             {description && <p className="text-xs mt-2">
               {description}
              </p>}
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>
    </div>
  )
}
