import { Swiper } from "../Swiper";

const ListingCard = ({ listing }) => {
  const { title, location, price, image } = listing;

  return (
    <div className="col-span-1 cursor-pointer ">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
          aspect-square
          w-full
          rounded-xl
          overflow-hidden
          z-0
          
        "
        >
          <Swiper images={image} />
        </div>
        <div className="flex flex-row justify-between items-start">
          <div>
            <div className="font-medium text-lg">{title && title}</div>
            <div className="font-light text-neutral-500">{location}</div>
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold"> {price} sp</div>
              <div className="font-light text-neutral-500">night</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-4 w-4 text-black"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="px-1 text-sm">New</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
