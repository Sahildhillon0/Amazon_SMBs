import React from "react";

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

import LongCardBg from "./assets/LongCardBg.jpg";
import Card from "../Reusable Components/CardComponents";
import Footer from "../Reusable Components/Footer";

const InfoCard = ({ image, title, description }) => (
  <Card image={image} title={title} description={description} />
);

const SmallCard = ({ image, title }) => (
  <div className="sm:w-[300px] sm:h-[250px] w-[250px] h-[250px]  bg-cover relative shadow-lg" style={{ backgroundImage: `url(${image})` }}>
    <div className="bottom-0 absolute flex w-full h-[30%]">
      <div className="w-[65%] h-full bg-yellow-300 bg-opacity-50 backdrop-blur-md p-2 sm:block flex justify-center items-center">
        <p className="font-semibold">{title}</p>
      </div>
      <button variant="outline" className="border border-black bg-yellow-500 text-black w-fit px-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold flex items-center">
       <p> →</p>
      </button>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <div>
      <div className="w-[70vw] m-auto mt-14">
       {/*  <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>About Us</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
        <p className="text-5xl text-black font-semibold mt-8">About Us</p>
        <p className="text-3xl text-yellow-500 font-semibold mt-20">At A Glance</p>
        <p className="sm:w-[70%] w-full mt-5">
          Founded in 1955, Yusen Logistics is a global supply chain logistics company that provides
          ocean and air freight forwarding, warehousing, distribution services, and supply chain
          management – a seamlessly connected suite of supply chain solutions that delivers superior
          value, reliability, and expertise.
        </p>
      </div>
      <div className="mt-32 bg-gray-300 w-[85vw] m-auto p-2 flex flex-col gap-5 sm:flex-row">
        <div>
          <img src={map} alt="Map" className="h-full w-full resize"  />
        </div>
        <div className="sm:w-[60%] w-full flex flex-col justify-around sm:text-2xl text-sm sm:ml-5 gap-5">
          <div className="flex sm:justify-center sm:h-fit gap-4  w-full">
            <p className="w-fit border-2 p-2">
              <strong className="sm:text-3xl text-lg">650</strong> distribution centers/offices in
            </p>
            <p className="w-fit border-2 p-2">
              <strong className="sm:text-3xl text-lg">375 </strong>cities in
            </p>
            <p className="w-fit border-2 p-2">
              <strong className="sm:text-3xl text-lg">46 </strong>countries and regions
            </p>
          </div>
          <div className="flex sm:justify-center sm:h-fit gap-4  w-full">            <p className="w-fit border-2 p-2">
              <strong className="sm:text-3xl text-lg">25,358 </strong>employees dedicated to our customers’ success
            </p>
            <p className="w-fit border-2 p-2">
              Founded in <strong className="sm:text-3xl text-lg">1955</strong>
            </p>
            <p className="w-fit border-2 p-2">
              Nearly <strong className="sm:text-3xl text-lg">3.4 million</strong> sqm of strategically positioned warehouse space
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70vw] m-auto mt-20 sm:flex-row flex flex-col sm:justify-between gap-10 items-center">
        <InfoCard image={CardBg1} title="Our Vision, Mission and Values" description="Learn what guides our behavior, informs our management philosophy..." />
        <InfoCard image={CardBg2} title="Long-Term Vision" description="Find out more about our goals for the future and the direction we’re heading" />
        <InfoCard image={CardBg3} title="Our History" description="Discover how we’ve grown and evolved over the years" />
      </div>
      <div className="sm:w-[70vw] w-[90vw] mt-24 m-auto bg-gray-300 p-10">
        <div className="relative h-[300px] w-auto shadow-lg" style={{ backgroundImage: `url(${LongCardBg})` }}>
          <div className="bottom-0 absolute flex">
            <div className="h-[45%] w-[65%] bg-yellow-300 bg-opacity-50 backdrop-blur-md p-2">
              <p className="font-semibold">Sustainability</p>
              <p className="text-xs mt-2">Learn more about our commitment to becoming a sustainable...</p>
            </div>
            <button variant="outline" className="border border-black bg-yellow-500 text-black w-fit px-3 text-2xl self-end bg-opacity-50 backdrop-blur-md rounded-none font-bold">
              →
            </button>
          </div>
        </div>
        <div className="sm:w-[65vw] w-full m-auto mt-20 flex flex-col items-center gap-5 sm:justify-between sm:flex-row">
          <SmallCard image={CardBg4} title="Environment" />
          <SmallCard image={CardBg5} title="Social" />
          <SmallCard image={CardBg6} title="Governance" />
        </div>
      </div>
      <div className="w-[70vw] m-auto mt-20 sm:flex-row flex flex-col sm:justify-between gap-10 items-center">
        <InfoCard image={CardBg7} title="Our Quality" description="Find out how we consistently deliver service of such high quality" />
        <InfoCard image={CardBg8} title="Video Library" description="Browse through our collection of videos" />
        <InfoCard image={CardBg9} title="Find an Office" description="Figure out which Yusen Logistics location is closest to you" />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
