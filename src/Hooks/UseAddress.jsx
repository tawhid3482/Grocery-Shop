import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";


const UseAddress = () => {
  const { user } = UseAuth();
  const AxiosSecure = useAxiosSecure();

  const { refetch, data: addressData = [] } = useQuery({
    queryKey: ["address", user?.email],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/address?email=${user.email}`);
      return res.data;
    },
  });
  return [addressData, refetch];
};

export default UseAddress;
