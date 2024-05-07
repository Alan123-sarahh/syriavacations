"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { IoBedOutline } from "react-icons/io5";
import { MdHiking } from "react-icons/md";
import Link from "next/link";
import { GrMapLocation } from "react-icons/gr";

export default function Categories() {
  const pathname = usePathname();

  return (
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
            <MdHiking className="h-6 w-6 sm:h-6 sm:w-6 mx-auto " />

            <p className="text-lg  font-medium">Things to do</p>
          </div>
        </Link>
        <Link href="/attractions">
          <div
            className={`${
              pathname === "/attractions"
                ? "border-black"
                : "border-transparent"
            }  hover:border-black cursor-pointer border-b-2 flex flex-row gap-1 sm:gap-2 items-center pb-1 sm:pb-2 mr-10 sm:mr-0`}
          >
            <GrMapLocation className="h-5 w-5 sm:h-6 sm:w-6 mx-auto " />

            <p className="text-lg  font-medium">Where to go</p>
          </div>
        </Link>
      </div>

      <div className=" absolute top-0 right-0 bg-gradient-to-l from-white h-8 w-12" />
    </nav>
  );
}
