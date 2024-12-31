import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useCheckout = () => {
   const { user } = UseAuth();
   const AxiosSecure = useAxiosSecure();
   const AxiosPublic = useAxiosPublic()

   const { data: checkoutData=[] , isLoading: isDataLoading, refetch } = useQuery({
       queryKey: ["checkout", user?.email],
       queryFn: async () => {
           const res = await AxiosPublic.get(`/checkout?email=${user.email}`);
           return res.data;
       },
       enabled: !!user?.email, // Delay query until user email exists
   });

   return [checkoutData, isDataLoading, refetch];
};

export default useCheckout;
