import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOrder = () => {
    const AxiosSecure = useAxiosSecure();
    const { user } = UseAuth();
  
    const { refetch, data: orderData = [] } = useQuery({
      queryKey: ["order", user?.email],
      queryFn: async () => {
        const res = await AxiosSecure.get(`/order?email=${user.email}`);
        return res.data;
      },
    });
    return [orderData, refetch];
};

export default useOrder;
