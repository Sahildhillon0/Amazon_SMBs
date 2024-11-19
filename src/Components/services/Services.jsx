import React, { useState, useEffect } from "react";

import bg from "./assets/Bg.jpeg";

import Card1 from "./assets/Card1.jpeg";
import Card2 from "./assets/Card2.jpeg";
import Card3 from "./assets/Card3.jpeg";

import Footer from "../Reusable Components/Footer";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "Freight Forwarding",
      description:
        "Reliable, end-to-end solutions for shipping goods across air, land, and sea, ensuring timely and secure delivery every time.",
    },
    {
      title: "Customs Clearance",
      description:
        "Simplify customs with our expert team, handling all necessary paperwork and compliance to get your cargo through smoothly.",
    },
    {
      title: "Warehousing & Storage",
      description:
        "Secure, scalable warehousing solutions tailored to your inventory needs with real-time tracking and efficient distribution.",
    },
    {
      title: "Supply Chain Management",
      description:
        "Comprehensive supply chain solutions to streamline operations, optimize costs, and improve productivity from start to finish.",
    },
    {
      title: "Last-Mile Delivery",
      description:
        "Fast, flexible last-mile delivery services that bring your products directly to your customers’ doors with care and precision.",
    },
    {
      title: "Cold Chain Logistics",
      description:
        "Temperature-controlled transport solutions for perishable goods, ensuring optimal conditions and quality at every stage.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <div
        className="h-[50vh] relative pt-10 bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      
        {/*         Carousel  */}
        <div className="relative w-full h-full p-5">
          <div className="absolute inset-0 flex items-center justify-between">
            {/* Buttons are optional */}
            {/* 
        <button className="text-black" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>
          Previous
        </button>
        <button className="text-black" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}>
          Next
        </button> 
        */}
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  <strong className="text-5xl text-white">{slide.title} :</strong>
                  <p className="mt-5 text-gray-300 text-xl max-w-[45vw]">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-xl text-yellow-500  ">Areas where we serve...</p>
      <p className="text-black text-center mt-5 text-5xl font-bold">Our Services</p>
      <div className=" justify-center mt-12 flex flex-col sm:flex-row items-center gap-10 ">
        <div className="sm:w-[25vw] w-[80vw] border border-black rounded bg-gray-300 h-[42vh] p-2">
          <img src={Card1} alt="" className="h-[50%] w-auto m-auto" />
          <p className="mt-4 text-center text-xl">Express Shipping</p>
          <p className="mt-2 text-center text-base">
            {" "}
            Fast and reliable delivery for urgent shipments, ensuring your packages reach their
            destination on time.
          </p>
        </div>
        <div className="sm:w-[25vw] w-[80vw] border border-black rounded bg-gray-300 h-[42vh] p-2 mx-16">
          <img src={Card2} alt="" className="h-[50%] w-auto m-auto" />
          <p className="mt-4 text-center text-xl">Inventory Management</p>
          <p className="mt-2 text-center text-base">
            Keep track of stock with seamless inventory solutions designed to optimize storage and
            minimize losses.
          </p>
        </div>
        <div className="sm:w-[25vw] w-[80vw] border-black rounded bg-gray-300 h-[42vh] p-3">
          <img src={Card3} alt="" className="h-[50%] w-auto m-auto" />
          <p className="mt-4 text-center text-xl">Supply Chain Optimization</p>
          <p className="mt-2 text-center text-base">
            Streamlined processes and tailored solutions to enhance efficiency across your entire
            supply chain, reducing costs and delays.
          </p>
        </div>
      </div>
      <div className="mt-14 flex justify-center">
        <button className="border border-black bg-yellow-200 text-black w-fit px-3 hover:bg-slate-200 text-base ">
          See all services..
        </button>
      </div>
      <div className="bg-gray-200 p-5 mt-10">
        <p className="text-center mt-10 text-base text-yellow-500  ">SOME REASONS</p>
        <p className="text-black text-center mt-5 text-5xl font-bold">Why Chose Us</p>
        <div className="flex flex-col sm:flex-row gap-10 justify-around items-center mt-20 ">
          <div className="w-[80vw] flex justify-between">
            <div className="font-bold text-yellow-500 text-lg">01</div>
            <div className="w-fit">----</div>
            <div className="w-[70%] h-[25vh]">
              <p className="text-2xl font-bold">Reliable On-Time Delivery</p>
              <p className="mt-5 text-base">
                Count on us for punctual deliveries every time, ensuring your business runs smoothly
                without delays.
              </p>
            </div>
          </div>
          <div className="w-[80vw] flex justify-between">
            <div className="font-bold text-yellow-500 text-lg">02</div>
            <div className="w-fit">----</div>
            <div className="w-[70%] h-[25vh]">
              <p className="text-2xl font-bold">Global Network</p>
              <p className="mt-5 text-base">
                With a vast network of partners and routes, we connect you to destinations
                worldwide, expanding your reach effortlessly.
              </p>
            </div>
          </div>
          <div className="w-[80vw] flex justify-between">
            <div className="font-bold text-yellow-500 text-lg">03</div>
            <div className="w-fit">----</div>
            <div className="w-[70%] h-[25vh]">
              <p className="text-2xl font-bold">Customized Solutions</p>
              <p className="mt-5 text-base">
                Tailored logistics solutions designed to meet your unique business needs, from small
                packages to large freight.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 justify-around items-center mt-20">
          <div className="w-[80vw] flex justify-between">
            <div className="font-bold text-yellow-500 text-lg">04</div>
            <div className="w-fit">----</div>
            <div className="w-[70%] h-[25vh]">
              <p className="text-2xl font-bold"> Real-Time Tracking</p>
              <p className="mt-5 text-base">
                Stay updated with live tracking for full visibility and peace of mind, from dispatch
                to final delivery.
              </p>
            </div>
          </div>
          <div className="w-[80vw] flex justify-between">
            <div className="font-bold text-yellow-500 text-lg">05</div>
            <div className="w-fit">----</div>
            <div className="w-[70%] h-[25vh]">
              <p className="text-2xl font-bold">Experienced Team</p>
              <p className="mt-5 text-base">
                Our team of logistics professionals brings expertise and dedication to handle
                complex challenges with ease.
              </p>
            </div>
          </div>
          <div className="w-[80vw] flex justify-between mb-10">
            <div className="font-bold text-yellow-500 text-lg">06</div>
            <div className="w-fit">----</div>
            <div className="w-[70%] h-[25vh]">
              <p className="text-2xl font-bold">Sustainability Commitment</p>
              <p className="mt-5 text-base">
                We prioritize eco-friendly practices, reducing carbon footprint and supporting
                sustainable logistics for a better future.
              </p>
            </div>
          </div>
        </div>
      </div>
      

      <Footer />
     
    </div>
  );
}
