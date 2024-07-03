import BottomNav from "@/app/components/BottomNav";
import ListingHead from "@/app/components/Listings/ListingHead";
import ListingInfo from "@/app/components/Listings/ListingInfo";
import ListingReservation from "@/app/components/Listings/ListingReservation";
import { list } from "@/list.js";

const page = ({ params: { listingId } }) => {
  return (
    <div
      className=" max-w-screen-xl mx-auto
  "
    >
      <div className="flex flex-col gap-6">
        <ListingHead
          title={list[listingId - 1]?.title}
          imageSrc={list[listingId - 1]?.image}
          locationValue={list[listingId - 1]?.location}
          id={list[listingId - 1]?.id}
          cardDescription={list[listingId - 1]?.cardDescription}
        />
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
          <ListingInfo
            description={list[listingId - 1]?.description}
            arabicDescription={list[listingId - 1]?.arabicDescription}
            hostedBy={list[listingId - 1]?.hostedBy}
            guests={list[listingId - 1]?.guests}
            rooms={list[listingId - 1]?.rooms}
            bathrooms={list[listingId - 1]?.bathrooms}
            features={list[listingId - 1]?.Features}
            addedamenities={list[listingId - 1]?.addedamenities}
            mapId={list[listingId - 1]?.mapId}
            rules={list[listingId - 1]?.rules}
            reviews={list[listingId - 1]?.reviews}
          />
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
            <ListingReservation
              title={list[listingId - 1]?.title}
              cardDescription={list[listingId - 1]?.cardDescription}
              price={list[listingId - 1]?.price}
              id={list[listingId - 1]?.id}
            />
          </div>
        </div>
      </div>
      <BottomNav
        price={list[listingId - 1]?.price}
        title={list[listingId - 1]?.title}
        id={list[listingId - 1]?.id}
      />
    </div>
  );
};

export default page;
