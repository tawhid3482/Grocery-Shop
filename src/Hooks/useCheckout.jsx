import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCheckout = () => {
   const { user } = UseAuth();
   const AxiosSecure = useAxiosSecure();

   const { data: checkoutData = [], isLoading: isDataLoading, refetch: reFetch } = useQuery({
       queryKey: ["checkout", user?.email],
       queryFn: async () => {
           if (!user?.email) return []; // Prevent unnecessary calls
           const res = await AxiosSecure.get(`/checkout?email=${user.email}`);
           return res.data;
       },
       enabled: !!user?.email, 
      
   });

   return [checkoutData, isDataLoading, reFetch];
};

export default useCheckout;
