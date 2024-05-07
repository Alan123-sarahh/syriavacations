import ListingCard from "./components/Listings/ListingCard";
import { list } from "@/list.js";
import Link from "next/link";

const Listings = () => {
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
        {list.map((listing) => (
          <Link href={`listings/${listing.id}`} key={listing.id}>
            <ListingCard key={listing.id} listing={listing} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listings;
