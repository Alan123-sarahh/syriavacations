"use client";
import React from "react";
import Link from "next/link";
import { attractions } from "@/attractions";
import Image from "next/image";
import { Swiper } from "../components/Swiper";
import { GrCafeteria } from "react-icons/gr";
import { IoTrailSignOutline } from "react-icons/io5";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdNightlife } from "react-icons/md";

import { useState, useEffect } from "react";
export default function Page() {
  const [filteredAttractions, setFilteredAttractions] = useState(attractions);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterAttractions = (category) => {
    const filtered = attractions.filter(
      (attraction) => attraction.category === category
    );
    setFilteredAttractions(filtered);
    setSelectedCategory(category);
    sessionStorage.setItem("selectedCategory", category);
  };

  const resetFilter = () => {
    setFilteredAttractions(attractions);
    setSelectedCategory("");
    sessionStorage.removeItem("selectedCategory");
  };
  useEffect(() => {
    const storedCategory = sessionStorage.getItem("selectedCategory");
    if (storedCategory) {
      filterAttractions(storedCategory);
    } else {
      setFilteredAttractions(attractions);
    }
  }, []);
  return (
    <div className="mt-5 mx-auto  w-[87%] sm:w-[90%]  xl:max-w-[1300px]">
      <div className="flex items-center justify-start gap-2 whitespace-nowrap  overflow-x-scroll scrollbar-hide">
        <button
          onClick={resetFilter}
          className={`px-4 py-3 border rounded-full flex items-center justify-center gap-2 ${
            selectedCategory === "" ? "bg-[#FF395C] text-white" : ""
          }`}
        >
          <IoTrailSignOutline />
          <p>All</p>
        </button>
        <button
          onClick={() => filterAttractions("foodanddrink")}
          className={`px-4 py-3 border rounded-full flex items-center justify-center gap-2 ${
            selectedCategory === "foodanddrink" ? "bg-[#FF395C] text-white" : ""
          }`}
        >
          <GrCafeteria />
          <p>Eat & Drink</p>
        </button>
        <button
          onClick={() => filterAttractions("sight")}
          className={`px-4 py-3 border rounded-full flex items-center justify-center gap-2 ${
            selectedCategory === "sight" ? "bg-[#FF395C] text-white" : ""
          }`}
        >
          <HiOutlineBuildingLibrary className="w-5 h-5" />
          <p>Sites</p>
        </button>
        <button
          onClick={() => filterAttractions("nightlife")}
          className={`px-4 py-3 border rounded-full flex items-center justify-center gap-2 ${
            selectedCategory === "nightlife" ? "bg-[#FF395C] text-white" : ""
          }`}
        >
          <MdNightlife className="w-5 h-5" />
          <p>nighlife</p>
        </button>
      </div>
      <div
        className="
            pt-10
            sm:pt-10
            md:pt-20
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            gap-6
          "
      >
        {filteredAttractions.map((attraction) => (
          <Link href={`attractions/${attraction.id}`} key={attraction.id}>
            <div className="col-span-1 cursor-pointer ">
              <div className="flex flex-col gap-2 w-full">
                <div
                  className="
          relative
        aspect-square
        w-full
        rounded-xl
        overflow-hidden
        z-0"
                >
                  {attraction.image?.length > 1 ? (
                    <Swiper images={attraction.image} />
                  ) : (
                    <Image
                      src={attraction.image[0]}
                      alt="attraction in syria"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div>
                    <div className=" font-semibold text-xl">
                      {attraction.name}
                    </div>
                    <div className=" font-normal text-base text-neutral-500">
                      {attraction.type}
                    </div>
                    <div className="font-light text-neutral-500 ">
                      {attraction.shortDescription}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
