import React from "react";
import { Swiper } from "../Swiper";
import Gallery from "../Gallery";
export default function ListingHead({
  imageSrc,
  locationValue,
  title,
  cardDescription,
}) {
  return (
    <>
      <div className="h-[320px] sm:h-[450px] md:hidden">
        <Swiper images={imageSrc} />
      </div>
      <div className="text-start px-5 sm:mt-5 ">
        <div className="text-3xl font-bold">{title}</div>
        <div className="font-light text-neutral-500 mt-2">{locationValue}</div>
      </div>
      <div className="md:hidden px-5 text-lg font-light text-neutral-500">
        {cardDescription}
      </div>
      <Gallery images={imageSrc} />
    </>
  );
}
