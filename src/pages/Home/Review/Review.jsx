import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import UseReview from "../../../Hooks/UseReview";
import Reviews from "./Reviews";
import { NavLink } from "react-router-dom";

const Review = () => {
  const [review] = UseReview();
  return (
    <div>
      <div className="flex justify-between items-center my-5 p-2 ">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-medium">
            <h2>Product Reviews</h2>
          </div>
          <div className="text-sm hidden md:block ">
            <p>
              Our references are very valuable, the result of a great effort...
            </p>
          </div>
        </div>
        <div className="">
          <NavLink to={'/shop'}> 
          <button className="btn btn-ghost border-2 hover:border-[#019267] rounded-3xl">
            {" "}
            Check Products{" "}
            <IoIosArrowRoundForward className="text-xl"></IoIosArrowRoundForward>
          </button>
          </NavLink>
        </div>
      </div>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
        {review?.map((reviews) => (
          <Reviews key={reviews.id} reviews={reviews}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Review;
