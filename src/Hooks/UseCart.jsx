import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const UseCart = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default UseCart;
