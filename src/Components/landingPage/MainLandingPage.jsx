import React from "react";
import Bgtext from "./assets/TextBg.jpeg";
import TruckBg from "./assets/TruckBg.jpeg";
import Logo from "../navBar/assets/Logo.jpeg";
/* import { ScrollArea } from "shadcn-ui"; */

export default function MainLandingPage() {
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
            <button className="bg-yellow-300 font-bold mt-3 px-2 rounded w-fit text-black border-black border">
              Explore more
            </button>
          </div>
        </div>
        <div className="flex justify-around mt-10 ">
          <div className="text-left mt-3">
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
          </div>
          <p className="font-bold text-9xl">& Logistics</p>
        </div>
      </div>
      <div
        className="h-[70vh] bg-cover bg-center p-5 bg-fixed"
        style={{ backgroundImage: `url(${TruckBg})` }}></div>
      <div className=" bg-slate-800 text-center">
        <div className="flex p-4">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
           {/*  <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
              Jokester began sneaking into the castle in the middle of the night and leaving jokes
              all over the place: under the king's pillow, in his soup, even in the royal toilet.
              The king was furious, but he couldn't seem to stop Jokester. And then, one day, the
              people of the kingdom discovered that the jokes left by Jokester were so funny that
              they couldn't help but laugh. And once they started laughing, they couldn't stop.
            </ScrollArea> */}
          </div>
        </div>
      </div>
    </div>
  );
}
