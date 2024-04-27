"use client";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useContext } from "react";
import { OriginContext } from "../OriginTracker";

import Image from "next/image";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();
  const isWithinPage = useContext(OriginContext);

  const pathname = usePathname();

  const onClick = useCallback(() => {
    if (isWithinPage) {
      router.back();
    } else {
      router.push("/");
    }
  }, [isWithinPage, router]);

  return (
    <>
      <header className="bg-white  z-10 shadow-sm">
        <div className=" mx-auto w-[90%]  xl:max-w-[1300px]">
          <nav className="flex items-center justify-between ">
            {pathname === "/" ? (
              <div className="py-4">
                <div className="relative w-44 h-10 md:min-w-48 lg:w-52">
                  <Image
                    src="/images/logo.svg"
                    alt="syria vacations"
                    fill={true}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={onClick}
                className="flex justify-center items-center gap-1 py-5"
              >
                <FaChevronLeft className="w-3.5 md:w-4 h-3.5 md:h-4 text-black " />
                <p className="text-black md:text-lg hover:underline">Homes</p>
              </button>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
