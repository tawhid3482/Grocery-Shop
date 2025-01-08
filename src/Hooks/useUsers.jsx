import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const AxiosSecure = useAxiosSecure();

  const { data:users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/users");
      return res.data;
    },
  });
  return [users, refetch];
};

export default useUsers;
