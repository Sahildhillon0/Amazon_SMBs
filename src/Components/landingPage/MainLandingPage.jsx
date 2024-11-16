import React, { useState, useEffect } from "react";
import Bgtext from "./assets/TextBg.jpeg";
import TruckBg from "./assets/TruckBg.jpeg";


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "../Reusable Components/Footer";

export default function MainLandingPage() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  return (
    <div>
      <div
        className="h-[50vh] bg-cover bg-center p-5"
        style={{ backgroundImage: `url(${Bgtext})` }}>
        <div className="flex justify-around">
          <p className="font-bold text-9xl">Transport</p>
          <div className="text-right mt-3">
            <p>They play crucial role in ensuring efficiency,</p>
            <p>reliabilty and sustainabilty of supply chains</p>
            <p>across various industries.</p>

          
          <Link to="/services">
            <Button
              variant="outline"
              className="bg-yellow-300 font-bold mt-3 px-2 rounded w-fit text-black border-black border">
              Explore more
            </Button>
          </Link>
          </div>
        </div>
        <div className="flex justify-around mt-10 ">
          {/*   <div className="text-left mt-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur </p>
            <p>Lorem ipsum dolor sit, </p>
            <div className="flex gap-3 mt-3">
              <button className="bg-white border-black text-black border px-2 py-1 font-bold rounded">
                ←
              </button>
              <button className="bg-black text-white px-2 py-1 font-bold rounded">→</button>
            </div>
          </div> */}
        <Carousel className="  p-5 rounded-lg flex items-center justify-center w-[30%] ">
        
            <CarouselContent>
              <CarouselItem>"Delivering Excellence, Anywhere, Anytime"
              Reliable, fast, and efficient logistics solutions tailored for your business needs.</CarouselItem>
              <CarouselItem>"Connecting Your Business to the World"
              Global reach with local expertise – move your goods with confidence.</CarouselItem>
              <CarouselItem>"Logistics Simplified for Modern Businesses"
              From storage to delivery, we handle it all so you can focus on growth.</CarouselItem>
              <CarouselItem>"On-Time, Every Time – Your Trusted Logistics Partner"
              Count on us for seamless, stress-free shipping solutions across the globe.</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-black text-white"/>
            <CarouselNext className="bg-black text-white"/>
          </Carousel>

          <p className="font-bold text-9xl">& Logistics</p>
        </div>
      </div>
      <div
        className="h-[70vh] bg-cover bg-center p-5 bg-fixed"
        style={{ backgroundImage: `url(${TruckBg})` }}></div>
        <Footer />
      
    </div>
  );
}
