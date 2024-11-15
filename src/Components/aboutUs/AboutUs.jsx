import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


export default function AboutUs() {
  return (
    <div>
      <div className="w-[80vw] m-auto mt-14">
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
        <p className="w-[70%] mt-5">Founded in 1955, Yusen Logistics is a global supply chain logistics company that provides ocean and air freight forwarding, warehousing, distribution services, and supply chain management – a seamlessly connected suite of supply chain solutions that delivers superior value, reliability, and expertise. </p>
      </div>
      <div className="mt-48">
        

      </div>
    </div>
  );
}
