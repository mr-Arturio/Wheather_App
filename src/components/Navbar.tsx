import React from "react";
import { MdSunny, MdMyLocation } from "react-icons/md";

type Props = {};

export default function Navbar({}: Props) {
  return (
    
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-screen-2xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl font-bold">Weather App</h2>
          <MdSunny className="text-3xl mt-1 text-yellow-300" />
        </p>
        <section className="flex gap-2 items-center">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
        </section>
      </div>
    </nav>
  );
}
