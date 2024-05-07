import React from "react";
import Image from "next/image";
import { activities } from "@/outdoors";
import Link from "next/link";

export default function page() {
  return (
    <div className=" mx-auto  w-[87%] sm:w-[90%]  xl:max-w-[1300px]">
      <div
        className="
            pt-7
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
        {activities.map((activity) => (
          <Link href={`thingstodo/${activity.id}`} key={activity.id}>
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
                  <Image
                    src={activity.image}
                    alt="outdoor activity in syria"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-row justify-between items-start">
                  <div>
                    <div className="font-medium text-lg">{activity.title}</div>
                    <div className="font-light text-neutral-500">
                      {activity.location}
                    </div>
                    <div className="flex flex-row items-center gap-1">
                      <div className="font-semibold">{activity.date}</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="px-1 text-sm">{activity.level}</div>
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
