import axios from "axios";

const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  return AxiosSecure;
};

export default useAxiosSecure;
