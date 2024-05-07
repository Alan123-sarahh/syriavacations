import React from "react";
import { activities } from "@/outdoors";
import Image from "next/image";
import BottomNav from "@/app/components/BottomNav";
import { GrLocation } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";

export default function page({ params: { activityId } }) {
  return (
    <div
      className=" max-w-screen-xl mx-auto
    "
    >
      <div className="flex flex-col gap-6">
        <div className="h-[370px] w-full relative sm:h-[450px] ">
          <Image
            src={activities[activityId - 1].image}
            fill={true}
            alt="outdoor activity in syria"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className=" object-cover md:rounded-xl"
          />
        </div>
        <div className="text-start px-5 sm:mt-5 ">
          <div className="text-3xl font-bold">
            {activities[activityId - 1].title}
          </div>
          <div className="font-light text-neutral-500 mt-2">
            {activities[activityId - 1].location}
          </div>
        </div>
        <div className=" px-5 text-lg font-light text-neutral-500">
          {activities[activityId - 1]?.headline}
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
            <div className="flex flex-col gap-2 ">
              <div
                className="
      text-xl 
      font-semibold 
      flex 
      flex-row 
      items-center
      gap-2
    "
              >
                <div>Organized by {activities[activityId - 1].host}</div>
              </div>
            </div>
            <hr />
            <p className=" text-2xl text-black font-semibold">Description</p>
            <div
              dir="rtl"
              className="
  text-lg font-light text-neutral-500"
            >
              {activities[activityId - 1].arabicDescription}
            </div>
            <div
              className="
  text-lg font-light text-neutral-500"
            >
              {activities[activityId - 1].description}
            </div>

            <hr />
            <div className="flex flex-wrap gap-3">
              {activities[activityId - 1].features.map((feature, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border rounded-md font-light"
                >
                  {feature}
                </div>
              ))}
            </div>
            <hr />
            <div className="mt-5 mb-10 flex flex-col gap-3 opacity-80">
              <div className="flex flex-row items-center gap-2">
                <GrLocation className="w-5 h-5" />

                <p className="text-base font-light">
                  starting points: {activities[activityId - 1].startingPoint}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <IoTimeOutline className="w-5 h-5" />

                <p className="text-base font-light">
                  starting time: {activities[activityId - 1].startingTime}
                </p>
              </div>
            </div>
          </div>
          <div
            className="
                hidden
                md:block
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
          >
            <div className="sticky top-16  flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ml-auto">
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {activities[activityId - 1].title}
                  </h5>
                </div>
                <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                  {activities[activityId - 1].headline}
                </p>
                <div className="group mt-5 inline-flex flex-wrap items-center gap-3"></div>
                <div className="mt-4 text-lg font-semibold text-black flex gap-2">
                  {activities[activityId - 1].price} sp
                </div>
              </div>

              <div className="p-6 pt-3">
                <Link
                  href={`https://wa.me/963935173587?text=Hi!%20I'm%20interested%20in%20${
                    activities[activityId - 1].title
                  }%20(ID%20${activities[activityId - 1].id})`}
                >
                  <button
                    className=" flex justify-center items-center gap-1 w-full select-none rounded-lg bg-gradient-to-r from-[#ff0055] to-pink-600 py-3.5 px-7 text-center align-middle  text-md font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Reserve
                    <svg
                      className="w-5 h-5"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed md:hidden right-0 bottom-0  h-[70px] sm:h-20 w-full px-5 bg-white border-t flex flex-col justify-center z-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold text-sm relative">
              {activities[activityId - 1].price} sp
            </div>
          </div>
          <Link
            href={`https://wa.me/963935173587?text=Hi!%20I'm%20interested%20in%20${
              activities[activityId - 1].title
            }%20(ID%20${activities[activityId - 1].id})`}
          >
            <button
              className="flex justify-center items-center gap-1  rounded-lg bg-gradient-to-r from-[#ff0055] to-pink-600 py-4  px-6 sm:px-8 text-center align-middle  text-sm font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85]"
              type="button"
            >
              Reserve
              <svg
                className="w-5 h-5"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
