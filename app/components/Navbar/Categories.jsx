import React from "react";
import { LuTent } from "react-icons/lu";

export default function Categories() {
  return (
    <div className="border-b border-gray-200 flex flex-row justify-center gap-5 px-5 mt-3 sm:mt-4 ">
      <div
        className="border-b-2 border-black 
        flex flex-col items-center pb-1 sm:pb-2"
      >
        <LuTent className="h-7 w-7 mx-auto opacity-60" />

        <p className="text-sm sm:text-base text-gray-600">Explore</p>
      </div>
    </div>
  );
}
