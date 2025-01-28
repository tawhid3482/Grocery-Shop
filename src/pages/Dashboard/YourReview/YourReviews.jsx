import React, { useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const YourReviews = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  //   const {selectedRating,setSelectedRating}=useState()

  const onSubmit = async (data) => {
    if (!user) {
      toast.error("User is not logged in!");
      return;
    }

    const reviewsItem = {
      id: Date.now().toString(),
      name: user.displayName || "Anonymous",
      img: user.photoURL || "",
      rating: parseFloat(data.rating),
      productName: data.product,
      suggestion: data.suggestion,
      speech: data.description,
      date: new Date().toISOString()
    };

    try {
      const response = await axiosPublic.post("/reviews", reviewsItem);
      if (response.data.insertedId) {
        reset();
        toast.success(`${data.product} added to the review list!`);
      } else {
        toast.error("Failed to add the review. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An error occurred while submitting your review.");
    }
  };

  return (
    <div className="dark:bg-slate-700 dark:text-white p-5">
      <Helmet>
        <title>Grocery-Shop | Add Review</title>
      </Helmet>
      <div>
        <p className="text-3xl font-bold text-center">Add Your Review</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Rating Section */}
          <div className="text-center my-8">
            <div className="rating rating-lg space-x-2">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  value={index + 1}
                  defaultChecked={index + 1 === 5} // Set default checked for the 4th star
                  className="mask mask-star-2 bg-green-500"
                  {...register("rating", { required: true })}
                />
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Which product you liked most?</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("product", { required: true })}
              className="input input-bordered w-full dark:bg-white dark:text-black"
            />
          </div>

          {/* Suggestion */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">
                Do you have any suggestions for us?
              </span>
            </label>
            <input
              type="text"
              placeholder="Suggestion"
              {...register("suggestion")}
              className="input input-bordered w-full dark:bg-white dark:text-black"
            />
          </div>

          {/* Description */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">
                Kindly express your care in a short way.
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 dark:bg-white dark:text-black"
              {...register("description", { required: true })}
              placeholder="Description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control w-full my-6">
            <button
              type="submit"
              className="btn bg-[#019267] text-white hover:bg-[#F0592A]"
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourReviews;
