import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = UseAuth();
  AxiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  /// catch all error
  AxiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // for 401 or 403 logout the user and move the user to login page
      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return AxiosSecure;
};

export default useAxiosSecure;
