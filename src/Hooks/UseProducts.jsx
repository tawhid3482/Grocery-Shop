import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseProducts = () => {
  const AxiosSecure = useAxiosSecure();
  const {isLoading, refetch, data: product = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/products");
      return res.data;
    },
  });
  return [product,isLoading,refetch];
};

export default UseProducts;
