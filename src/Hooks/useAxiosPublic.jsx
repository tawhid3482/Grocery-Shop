import axios from "axios";

const AxiosPublic = axios.create({
    baseURL:'https://grocery-shop-server-phi.vercel.app'
})
const useAxiosPublic = () => {
    return AxiosPublic
};

export default useAxiosPublic;