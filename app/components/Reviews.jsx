import React from "react";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Reviews({ review }) {
  const stars = [1, 2, 3, 4, 5];
  const isArabic = (text) => {
    const arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text);
  };

  return (
    <article className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-full bg-light-blue-300">
          <FaUser className="w-5 h-5 fill-blue-600" />
        </div>
        <div className="font-medium ">
          {review.name}
          <p className=" text-sm text-gray-500">{review.date}</p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 ">
        {stars.map((star) => (
          <FaStar
            key={star}
            className={` ${
              star <= review.rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p
        className={`mb-2 text-gray-500 ${
          isArabic(review.text) ? "text-right" : "text-left"
        }`}
      >
        {review.text}
      </p>
    </article>
  );
}
