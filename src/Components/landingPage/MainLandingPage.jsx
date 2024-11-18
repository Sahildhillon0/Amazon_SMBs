import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import Footer from "../Reusable Components/Footer";
import Bgtext from "./assets/TextBg.jpeg";
import TruckBg from "./assets/TruckBg.jpeg";

export default function MainLandingPage() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      
      description:
     ` "Delivering Excellence, Anywhere, Anytime" Reliable, fast, and efficient logistics solutions tailored for your business needs.`
    },
    {
      
      description:
       ` "Connecting Your Business to the World" Global reach with local expertise – move your goods with confidence.`
    },
    {
      
      description:
        `"Logistics Simplified for Modern Businesses" From storage to delivery, we handle it all so you can focus on growth.`
    },
    {
      
      description:
        ` "On-Time, Every Time – Your Trusted Logistics Partner" Count on us for seamless, stress-free shipping solutions across the globe.`
    },
   
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div
        className="h-[50vh] bg-cover bg-center p-5 relative"
        style={{ backgroundImage: `url(${Bgtext})` }}>
        <div className="flex justify-around">
          <p className="font-bold text-9xl">Transport</p>
          <div className="text-right mt-3">
            <p>They play crucial role in ensuring efficiency,</p>
            <p>reliability and sustainability of supply chains</p>
            <p>across various industries.</p>
            <Link to="/services">
              <button
                variant="outline"
                className="bg-yellow-300 font-bold mt-3 px-2 rounded w-fit text-black border-black border">
                Explore more
              </button>
            </Link>
          </div>
        </div>
      <div className="flex justify-around mt-10 ">
        {/*         carousal
         */}
        <div className="relative w-[40vw] h-[20vh] p-5 ">
          <div className="absolute inset-0 flex items-center justify-between">
            {/* Buttons are optional */}
            
       {/*  <button className="text-black ml-2" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>
          Previous
        </button>
        <button className="text-black mr-2" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}>
          &rarr;
        </button>  */}
       
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  
                  <p className="mt-5 text-gray-700 text-xl max-w-[60vw]">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      <p className="font-bold text-9xl">& Logistics</p>
      </div>
      </div>

      <div
        className="h-[70vh] bg-cover bg-center p-5 bg-fixed"
        style={{ backgroundImage: `url(${TruckBg})` }}></div>
      <Footer />
    </>
  );
}
