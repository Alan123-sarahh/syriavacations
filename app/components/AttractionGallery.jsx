import React from "react";
import Image from "next/image";

export default function AttractionGallery({ images }) {
  return (
    <div className="hidden w-full  md:flex flex-wrap px-5">
      {images && (
        <>
          <div className="flex w-[60%] flex-wrap pr-[3px]">
            <div className="h-[400px] w-full relative ">
              <Image
                src={images[0]}
                alt="image for attraction in syria"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=" rounded-l-xl object-cover object-center"
              />
            </div>
          </div>
          <div className="flex w-[40%] flex-wrap pl-[3px]">
            <div className=" relative w-full h-[200px] md:w-full ">
              <Image
                src={images[1]}
                alt="image for attraction in syria"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="pr-[3px] pb-[3px] object-cover object-center rounded-tr-xl"
              />
            </div>
            <div className="relative w-full h-[200px] md:w-full  ">
              <Image
                src={images[2]}
                alt="image for attraction in syria"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="pt-[3px] pr-[3px] object-cover object-center rounded-br-xl"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
