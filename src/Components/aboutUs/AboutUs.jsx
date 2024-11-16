import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import map from "./assets/map_top_section.svg";
import CardBg1 from "./assets/CardBg1.png";
import CardBg2 from "./assets/CardBg2.png";
import CardBg3 from "./assets/CardBg3.png";
import CardBg4 from "./assets/CardBg4.jpg";
import CardBg5 from "./assets/CardBg5.jpg";
import CardBg6 from "./assets/CardBg6.jpg";
import CardBg7 from "./assets/CardBg7.png";
import CardBg8 from "./assets/CardBg8.png";
import CardBg9 from "./assets/CardBg9.png";

import { Button } from "@/components/ui/button";
import LongCardBg from "./assets/LongCardBg.jpg";

export default function AboutUs() {
  return (
    <div>
      {/* //About Us and At a Glance */}
      <div className="w-[70vw] m-auto mt-14">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>About Us</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="text-5xl text-yellow-500 font-semibold mt-8">About Us</p>
        <p className="text-3xl text-yellow-500 font-semibold mt-20">At A Glance</p>
        <p className="w-[70%] mt-5">
          Founded in 1955, Yusen Logistics is a global supply chain logistics company that provides
          ocean and air freight forwarding, warehousing, distribution services, and supply chain
          management – a seamlessly connected suite of supply chain solutions that delivers superior
          value, reliability, and expertise.{" "}
        </p>
      </div>
      {/* //Map and Details */}
      <div className="mt-32 bg-gray-300 w-[85vw] m-auto p-2 flex ">
        <div>
          <img src={map} alt="" className="h-full w-full " />
        </div>
        <div className="w-[60%] flex flex-col justify-around text-2xl ml-5">
          <div className="flex justify-center h-fit  gap-4">
            <p className="w-fit border-2 p-2">
              <strong className="text-3xl">650</strong> distribution centers/offices in
            </p>
            <p className="w-fit border-2 p-2">
              <strong className="text-3xl">375 </strong>cities in
            </p>
            <p className="w-fit border-2 p-2">
              <strong className="text-3xl">46 </strong>countries and regions
            </p>
          </div>
          <div className="flex justify-center h-fit  gap-4">
            <p className="w-fit border-2 p-2">
              <strong className="text-3xl">25,358 </strong>employees dedicated to our customers’
              success
            </p>
            <p className="w-fit border-2 p-2">
              Founded in <strong className="text-3xl">1955</strong>
            </p>
            <p className="w-fit border-2 p-2">
              Nearly <strong className="text-3xl">3.4 million</strong> sqm of strategically
              positioned warehouse space
            </p>
          </div>
        </div>
      </div>
      {/* Card Line 1 */}
      <div className="w-[70vw] m-auto mt-20 flex  justify-between">
        <div
          className="w-[300px] h-[250px] bg-cover relative shadow-lg"
          style={{ backgroundImage: `url(${CardBg1})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Our Vision, Mission and Values</p>
              <p className="text-xs mt-2">
                Learn what guides our behavior, informs our management philosophy,...
              </p>
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>
        <div
          className="w-[300px] h-[250px] bg-cover relative shadow-lg"
          style={{ backgroundImage: `url(${CardBg2})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Long-Term Vision</p>
              <p className="text-xs mt-2">
                Find out more about our goals for the future and the direction we’re heading
              </p>
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>
        <div
          className="w-[300px] h-[250px] bg-cover relative shadow-lg"
          style={{ backgroundImage: `url(${CardBg3})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Company Data</p>
              <p className="text-xs mt-2">Have a look at our company facts and stats</p>
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>
      </div>
      {/* Div with cards */}
      <div className=" w-[70vw] mt-24 m-auto bg-gray-300 p-10">
        <div
          className="relative h-[300px] w-auto shadow-lg"
          style={{ backgroundImage: `url(${LongCardBg})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Sustainability</p>
              <p className="text-xs mt-2">
                Learn more about our commitment to becoming a sustainable...
              </p>
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>

        {/* Card Line inside div with cards */}
        <div className="w-[65vw] m-auto mt-20 flex  justify-between">
          <div
            className="w-[300px] h-[250px] bg-cover relative shadow-lg"
            style={{ backgroundImage: `url(${CardBg4})` }}>
            <div className="bottom-0 absolute flex w-full h-[30%]">
              <div className=" bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2 w-[65%] h-full">
                <p className="font-semibold h-[45%] ">Enviorment</p>
              </div>
              <Button
                variant="outline"
                className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
                →
              </Button>
            </div>
          </div>
          <div
            className="w-[300px] h-[250px] bg-cover relative shadow-lg"
            style={{ backgroundImage: `url(${CardBg5})` }}>
            <div className="bottom-0 absolute flex  w-full h-[30%]">
              <div className="w-[65%] h-full bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
                <p className="font-semibold">Social</p>
              </div>
              <Button
                variant="outline"
                className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
                →
              </Button>
            </div>
          </div>
          <div
            className="w-[300px] h-[250px] bg-cover relative shadow-lg"
            style={{ backgroundImage: `url(${CardBg6})` }}>
            <div className="bottom-0 absolute flex  w-full h-[30%]">
              <div className="w-[65%] h-full bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
                <p className="font-semibold">Governance</p>
              </div>
              <Button
                variant="outline"
                className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
                →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Line 2 */}
      <div className="w-[70vw] m-auto mt-20 flex  justify-between">
        {/*         Card 7
         */}{" "}
        <div
          className="w-[300px] h-[250px] bg-cover relative shadow-lg"
          style={{ backgroundImage: `url(${CardBg7})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Our Quality</p>
              <p className="text-xs mt-2">
                Find out how we consistently deliver service of such high quality
              </p>
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>
        {/*         Card 8
         */}
        <div
          className="w-[300px] h-[250px] bg-cover relative shadow-lg"
          style={{ backgroundImage: `url(${CardBg8})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Video Library</p>
              <p className="text-xs mt-2">Browse through our collection of videos </p>
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>
        {/*         Card 9
         */}
        <div
          className="w-[300px] h-[250px] bg-cover relative shadow-lg"
          style={{ backgroundImage: `url(${CardBg9})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300  bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Find an Office</p>
              <p className="text-xs mt-2">
                Figure out which Yusen Logistics location is closest to you
              </p>
            </div>
            <Button
              variant="outline"
              className="border border-black bg-yellow-500 text-black w-fit p-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
