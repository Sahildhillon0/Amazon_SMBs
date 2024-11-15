import React from "react";
import bg from "./assets/Bg.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card1 from "./assets/Card1.jpeg";
import Card2 from "./assets/Card2.jpeg";
import Card3 from "./assets/Card3.jpeg";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div>
      <div
        className="h-[50vh] relative"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <Carousel className=" bg-white/40 backdrop-blur-md p-5 rounded-lg flex items-center justify-center w-[30%] absolute translate-x-32 translate-y-16">
          <CarouselContent>
            <CarouselItem>
              <strong className="text-5xl text-gray-700">Freight Forwarding : </strong>
              <p className="mt-5 text-black text-xl">
                {" "}
                Reliable, end-to-end solutions for shipping goods across air, land, and sea,
                ensuring timely and secure delivery every time.
              </p>
            </CarouselItem>
            <CarouselItem>
              <strong className="text-5xl text-gray-700">Customs Clearance : </strong>
              <p className="mt-5 text-black text-xl">
                Simplify customs with our expert team, handling all necessary paperwork and
                compliance to get your cargo through smoothly.
              </p>
            </CarouselItem>
            <CarouselItem>
              <strong className="text-5xl text-gray-700">Warehousing & Storage : </strong>
              <p className="mt-5 text-black text-xl">
                Secure, scalable warehousing solutions tailored to your inventory needs with
                real-time tracking and efficient distribution.
              </p>
            </CarouselItem>
            <CarouselItem>
              <strong className="text-5xl text-gray-700">Supply Chain Management : </strong>
              <p className="mt-5 text-black text-xl">
                Comprehensive supply chain solutions to streamline operations, optimize costs, and
                improve productivity from start to finish.
              </p>
            </CarouselItem>
            <CarouselItem>
              <strong className="text-5xl text-gray-700">Last-Mile Delivery :</strong>
              <p className="mt-5 text-black text-xl">
                Fast, flexible last-mile delivery services that bring your products directly to your
                customers’ doors with care and precision.
              </p>
            </CarouselItem>
            <CarouselItem>
              <strong className="text-5xl text-gray-700">Cold Chain Logistics : </strong>
              <p className="mt-5 text-black text-xl">
                {" "}
                Temperature-controlled transport solutions for perishable goods, ensuring optimal
                conditions and quality at every stage.
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
      <p className="text-center mt-10 text-xl text-yellow-500  ">Areas where we serve...</p>
      <p className="text-black text-center mt-5 text-5xl font-bold">Our Services</p>
      <div className="flex justify-around mt-12">
        <div className="w-[20vw] border border-black rounded bg-gray-300 h-[40vh] p-2">
          <img src={Card1} alt="" className="h-[50%] w-auto m-auto" />
          <p className="mt-4 text-center text-xl">Express Shipping</p>
          <p className="mt-2 text-center text-base">
            {" "}
            Fast and reliable delivery for urgent shipments, ensuring your packages reach their
            destination on time.
          </p>
        </div>
        <div className="w-[20vw] border border-black rounded bg-gray-300 h-[40vh] p-2">
          <img src={Card2} alt="" className="h-[50%] w-auto m-auto" />
          <p className="mt-4 text-center text-xl">Inventory Management</p>
          <p className="mt-2 text-center text-base">
            Keep track of stock with seamless inventory solutions designed to optimize storage and
            minimize losses.
          </p>
        </div>
        <div className="w-[20vw] border border-black rounded bg-gray-300 h-[40vh] p-2">
          <img src={Card3} alt="" className="h-[50%] w-auto m-auto" />
          <p className="mt-4 text-center text-xl">Supply Chain Optimization</p>
          <p className="mt-2 text-center text-base">
            Streamlined processes and tailored solutions to enhance efficiency across your entire
            supply chain, reducing costs and delays.
          </p>
        </div>
      </div>
      <div className="mt-14 flex justify-center">
        <Button
          variant="outline"
          className="border border-black bg-yellow-200 text-black w-fit p-3 text-base">
          See all services..
        </Button>
      </div>
      <div className="bg-gray-200 p-5 mt-10">
        <p className="text-center mt-10 text-base text-yellow-500  ">SOME REASONS</p>
        <p className="text-black text-center mt-5 text-5xl font-bold">Why Chose Us</p>
        <div className="flex justify-around mt-20">
            <div className="w-[30vw] flex justify-between">
                <div className="font-bold text-yellow-500 text-lg">01</div>
                <div className="w-fit">----</div>
                <div className="w-[70%] h-[25vh]">
                    <p className="text-2xl font-bold">Reliable On-Time Delivery</p>
                    <p className="mt-5 text-base">Count on us for punctual deliveries every time, ensuring your business runs smoothly without delays.</p>
                </div>
            </div>
            <div className="w-[30vw] flex justify-between">
                <div className="font-bold text-yellow-500 text-lg">02</div>
                <div className="w-fit">----</div>
                <div className="w-[70%] h-[25vh]">
                    <p className="text-2xl font-bold">Global Network</p>
                    <p className="mt-5 text-base">With a vast network of partners and routes, we connect you to destinations worldwide, expanding your reach effortlessly.</p>
                </div>
            </div>
            <div className="w-[30vw] flex justify-between">
                <div className="font-bold text-yellow-500 text-lg">03</div>
                <div className="w-fit">----</div>
                <div className="w-[70%] h-[25vh]">
                    <p className="text-2xl font-bold">Customized Solutions</p>
                    <p className="mt-5 text-base">Tailored logistics solutions designed to meet your unique business needs, from small packages to large freight.</p>
                </div>
            </div>
           
        </div>
        <div className="flex justify-around mt-20">
            <div className="w-[30vw] flex justify-between">
                <div className="font-bold text-yellow-500 text-lg">04</div>
                <div className="w-fit">----</div>
                <div className="w-[70%] h-[25vh]">
                    <p className="text-2xl font-bold"> Real-Time Tracking</p>
                    <p className="mt-5 text-base">Stay updated with live tracking for full visibility and peace of mind, from dispatch to final delivery.</p>
                </div>
            </div>
            <div className="w-[30vw] flex justify-between">
                <div className="font-bold text-yellow-500 text-lg">05</div>
                <div className="w-fit">----</div>
                <div className="w-[70%] h-[25vh]">
                    <p className="text-2xl font-bold">Experienced Team</p>
                    <p className="mt-5 text-base">Our team of logistics professionals brings expertise and dedication to handle complex challenges with ease.</p>
                </div>
            </div>
            <div className="w-[30vw] flex justify-between">
                <div className="font-bold text-yellow-500 text-lg">06</div>
                <div className="w-fit">----</div>
                <div className="w-[70%] h-[25vh]">
                    <p className="text-2xl font-bold">Sustainability Commitment</p>
                    <p className="mt-5 text-base">We prioritize eco-friendly practices, reducing carbon footprint and supporting sustainable logistics for a better future.</p>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  );
}
