import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const UseFavourite = () => {
  const { user } = UseAuth();
  const AxiosSecure = useAxiosSecure();
  const { refetch: reloadData, data: favorite = [] } = useQuery({
    queryKey: ["favorites", user?.email],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/favorites?email=${user.email}`);
      return res.data;
    },
  });
  return [favorite, reloadData];
};

export default UseFavourite;
