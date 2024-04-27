"use client";

import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
export function Swiper({ images }) {
  return (
    <Carousel
      className=""
      loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
          className=" !absolute bg-[#f9fafb] opacity-80 hover:bg-white hover:opacity-100 w-9 h-9 rounded-full top-2/4 left-4 -translate-y-2/4 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            className="w-3 h-3"
            viewBox="0 0 320 512"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className=" !absolute bg-[#f9fafb] opacity-90 hover:bg-white hover:opacity-100 w-9 h-9 rounded-full top-2/4 !right-4 -translate-y-2/4 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            className="w-3 h-3"
            viewBox="0 0 320 512"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-[6px] ">
          {new Array(5).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-[6px] cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex > 4 || activeIndex === i
                  ? "w-[6px]  bg-white"
                  : "w-[6px] bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images?.map((image, index) => (
        <div key={index} className="w-full h-full relative">
          <Image
            src={image}
            alt="image for property in syria"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}
