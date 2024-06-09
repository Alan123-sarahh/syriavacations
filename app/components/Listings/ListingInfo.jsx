import React from "react";
import ListingsAmenities from "./ListingsAmenities";

export default function ListingInfo({
  hostedBy,
  guests,
  rooms,
  bathrooms,
  description,
  arabicDescription,
  features,
  addedamenities,
  mapId,
  rules,
}) {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <hr className="md:hidden" />
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
          <div>Hosted by {hostedBy}</div>
        </div>
        <div
          className="
    flex 
    flex-row 
    items-center 
    gap-4 
    font-light
    text-neutral-500
  "
        >
          <div>{guests} guests</div>
          <div>{rooms} rooms</div>
          <div>{bathrooms} bathrooms</div>
        </div>
      </div>
      <hr />
      <p className=" text-2xl text-black font-semibold">Overview</p>
      <div
        dir="rtl"
        className="
text-lg font-light text-neutral-500"
      >
        {arabicDescription}
      </div>
      <div
        className="
text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
      <ListingsAmenities features={features} addedamenities={addedamenities} />
      <hr />
      <div>
        <p className=" text-2xl text-black font-semibold">
          Where you&#39;ll be
        </p>

        <iframe
          src={mapId}
          className="mt-5 rounded-md h-80 w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="mt-4 font-light text-neutral-500">
          Exact location provided after booking.
        </p>
      </div>
      <hr />
      <div className="mb-">
        <p className=" text-2xl text-black font-semibold">House Rules</p>
        <p
          className="
 font-light text-neutral-500 mt-5"
        >
          Check-in {rules?.checkIn}
        </p>
        <p
          className="
 font-light text-neutral-500 mt-2"
        >
          Checkout before {rules?.checkOut}
        </p>
      </div>
      <hr />
      <p className="text-2xl text-black font-semibold mb-20">
        No reviews (yet)
      </p>
    </div>
  );
}
