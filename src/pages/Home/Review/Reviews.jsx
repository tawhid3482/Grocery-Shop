import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Rating from "react-rating";

const Reviews = ({ reviews }) => {
  const { name, img, productImg, productName, rating, speech, date } =
    reviews;
  return (
    <div>
      <div className="p-2 border border-gray-200 rounded-md h-80 w-60">
        <div className="flex items-center gap-3">
          <div className="relative inline-flex items-end">
            <img
              src={img}
              alt="Reviewer img"
              className="rounded-3xl w-14 border"
            />
            <span className="absolute bottom-0 right-1 mb-1">
              <BsPatchCheckFill className="text-lg text-blue-700" />
            </span>
          </div>

          <p className="text-lg font-medium">{name}</p>
          <span className="p-1 border border-[#019267] rounded-lg text-[11px]">
            reviewer
          </span>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="">
            <Rating
              initialRating={rating}
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#019267" // Change fill color to green
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              readonly
            />
          </div>
          <p className="bg-[#019267] text-white rounded-lg text-[14px] p-1 py-0">
            {rating}/5
          </p>
        </div>
        <div className="my-2">
          <p>{speech}</p>
          <p className="uppercase font-medium text-xs mt-5">{date}</p>
          <hr className="my-3" />
        </div>
        <div className="flex items-center gap-5 ml-8">
          <img src={productImg} alt="" className="w-10" />
          <p className="font-bold text-xs">{productName}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
