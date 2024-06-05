import React from "react";
import { attractions } from "@/attractions";
import Image from "next/image";
import Link from "next/link";
import AttractionGallery from "@/app/components/AttractionGallery";
import { Swiper } from "@/app/components/Swiper";
export default function page({ params: { attractionId } }) {
  return (
    <div
      className=" max-w-screen-xl mx-auto
    "
    >
      <div className="flex flex-col gap-6">
        {attractions[attractionId - 1].image?.length > 1 ? (
          <>
            <div className="h-[340px] sm:h-[450px] md:hidden">
              <Swiper images={attractions[attractionId - 1].image} />
            </div>
            <AttractionGallery images={attractions[attractionId - 1].image} />
          </>
        ) : (
          <div className="h-[370px] w-full relative sm:h-[450px] md:h-[500px]">
            <Image
              src={attractions[attractionId - 1].image[0]}
              fill={true}
              alt="attraction in syria"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-cover md:rounded-xl"
            />
          </div>
        )}

        <div className="text-start px-5 sm:mt-5 ">
          <div className="text-3xl font-bold">
            {attractions[attractionId - 1].name}
          </div>
          <div className="font-light text-xl text-neutral-500 mt-2">
            {attractions[attractionId - 1].location}
          </div>
        </div>
        <div className=" px-5 text-lg font-light text-neutral-500">
          {attractions[attractionId - 1]?.shortDescription}
        </div>
        <div
          className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              md:mt-6
              px-5
            "
        >
          <div className="col-span-4 flex flex-col gap-8">
            <hr />
            <p className=" truncate text-2xl text-black font-semibold">
              Overview
            </p>
            <div
              dir="rtl"
              className="
  text-lg font-light text-neutral-500"
            >
              {attractions[attractionId - 1].arabicDescription}
            </div>

            <div
              className="
  text-lg font-light text-neutral-500"
            >
              {attractions[attractionId - 1].description}
            </div>

            <hr />
            <div>
              <p className=" text-2xl text-black font-semibold">Location</p>
              <iframe
                src={attractions[attractionId - 1].mapId}
                className="mt-5 rounded-md h-80 w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <hr />
            {attractions[attractionId - 1].openHour && (
              <>
                <div className="mt-5 flex ">
                  Open Hours: {attractions[attractionId - 1].openHour}
                </div>
                <hr />
              </>
            )}
            <div className="flex flex-wrap gap-3">
              {attractions[attractionId - 1].tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border rounded-md font-light"
                >
                  {tag}
                </div>
              ))}
            </div>
            <hr />
          </div>
        </div>
      </div>

      {attractions[attractionId - 1].phone && (
        <div className="fixed md:hidden right-0 bottom-0  h-[70px] sm:h-20 w-full px-5 bg-white border-t flex flex-col justify-center z-10">
          <Link href={`tel:+963${attractions[attractionId - 1].phone}`}>
            <button
              className="w-full flex justify-center items-center gap-1  rounded-lg bg-gradient-to-r from-[#ff0055] to-pink-600 py-4  px-6 sm:px-8 text-center align-middle  text-sm font-medium uppercase text-white shadow-md  transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85]"
              type="button"
            >
              call
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
