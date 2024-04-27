import FeaturesIconAndText from "../FeaturesIconAndText";

export default function ListingsAmenities({ features, addedamenities }) {
  return (
    <div>
      <p className=" text-2xl text-black font-semibold">
        What this place offers
      </p>
      <div className="mt-5 flex flex-col gap-3 opacity-60">
        <FeaturesIconAndText features={features} />
      </div>
      <button className="w-full mt-5 rounded-xl py-4 font-medium flex items-center justify-center border-solid border-[1px] border-gray-300">
        +{addedamenities} more amenities
      </button>
    </div>
  );
}
