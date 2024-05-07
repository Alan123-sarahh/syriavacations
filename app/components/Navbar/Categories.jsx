"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { LuTent } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { MdHiking } from "react-icons/md";
import { GiArabicDoor } from "react-icons/gi";
import Link from "next/link";
import { GrMapLocation } from "react-icons/gr";

export default function Categories() {
  const pathname = usePathname();

  return (
    // <div className="border-b border-gray-200 flex flex-row justify-center gap-5 px-5 mt-3 sm:mt-4 ">
    //   <div
    //     className="border-b-2 border-black
    //     flex flex-col items-center pb-1 sm:pb-2"
    //   >
    //     <LuTent className="h-7 w-7 mx-auto opacity-60" />

    //     <p className="text-sm sm:text-base text-gray-600">Explore</p>
    //   </div>
    // </div>
    <nav className=" relative sm:flex sm:justify-center">
      <div className="flex flex-row whitespace-nowrap gap-7 mt-3 sm:mt-4 overflow-x-scroll scrollbar-hide">
        <Link href="/">
          <div
            className={`${
              pathname === "/" ? "border-black" : "border-transparent"
            }  hover:border-black cursor-pointer border-b-2  
        flex flex-row gap-1 sm:gap-2 items-center pb-1 sm:pb-2`}
          >
            <IoBedOutline className="h-5 w-5 sm:h-6 sm:w-6 mx-auto" />

            <p className="text-lg  font-medium">Stays</p>
          </div>
        </Link>
        <Link href="/thingstodo">
          <div
            className={`${
              pathname === "/thingstodo" ? "border-black" : "border-transparent"
            }  hover:border-black cursor-pointer border-b-2  
          flex flex-row gap-1 sm:gap-2 items-center pb-1 sm:pb-2`}
          >
            <MdHiking className="h-5 w-5 sm:h-6 sm:w-6 mx-auto " />

            <p className="text-lg  font-medium">Things to do</p>
          </div>
        </Link>
        <Link href="/attractions">
          <div
            className={`${
              pathname === "/attractions"
                ? "border-black"
                : "border-transparent"
            }  hover:border-black cursor-pointer border-b-2  
          flex flex-row gap-1 sm:gap-2 items-center pb-1 sm:pb-2 mr-10`}
          >
            <GrMapLocation className="h-5 w-5 sm:h-6 sm:w-6 mx-auto " />

            <p className="text-lg sm:text-base font-semibold">Where to go</p>
          </div>
        </Link>
      </div>

      <div className=" absolute top-0 right-0 bg-gradient-to-l from-white h-8 w-12" />
    </nav>
  );
}
