import React from "react";
import SignupForm from "../Reusable Components/SignUpForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "../Reusable Components/Footer";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-400">
      <div className="w-[70vw] m-auto ">
        <Breadcrumb >
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Contact Us</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-12">
        <SignupForm />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
