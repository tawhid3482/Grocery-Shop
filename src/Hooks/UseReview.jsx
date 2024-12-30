import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const UseReview = () => {
  const AxiosPublic = useAxiosPublic();
  const {
    data: review = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/reviews");
      return res.data;
    },
  });
  return [review, loading, refetch];
};

export default UseReview;
