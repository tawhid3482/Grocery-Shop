import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Rating from "react-rating";
import UseFavourite from "../../../Hooks/UseFavourite";
import UseCart from "../../../Hooks/UseCart";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ProductShow = ({ cards }) => {
  const {
    id,
    img,
    oldPrice,
    newPrice,
    name,
    rating,
    stock,
    unit_of_measure,
    supplier,
  } = cards;

  const [, refetch] = UseCart();
  const [, reloadData] = UseFavourite();
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const AxiosSecure = useAxiosSecure();

  const handleAddToFavorite = () => {
    if (user && user.email) {
      const favoriteItem = {
        productId: id,
        email: user?.email,
        name,
        img,
        newPrice,
        oldPrice,
        unit_of_measure,
        supplier,
        count: 1,
      };
      AxiosSecure.post("/favorites", favoriteItem).then((res) => {
        if (res.data.insertedId) {
          toast.success(`${name} add to the favorites successfully`);
          reloadData();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the favorite!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        productId: id,
        email: user.email,
        name,
        img,
        newPrice,
        price: newPrice,
        unit_of_measure,
        supplier,
        count: 1,
      };

      AxiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          toast.success(`${name} add to the cart successfully`);
          // refetch cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card border bg-base-100 w-72 h-96 shadow-lg">
        <figure>
          <Link to={`/productsDetails/${id}`}>
            <img src={img} alt="img" className="lg:h-52 " />
          </Link>
        </figure>
        <hr className="my-2" />
        <div className="card-body mt-0 pt-0">
          <h2 className="text-lg font-medium">{name}</h2>
          <div className="flex items-center gap-3">
            <span className="relative font-medium ">
              ${oldPrice}
              <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
            </span>
            <spam className="text-[#019267] font-medium">${newPrice}</spam>
          </div>
          <div className="flex items-center gap-3">
            <spam className="text-[#019267] font-medium">{stock}</spam>
            <Rating
              initialRating={rating}
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#019267" // Change fill color to green
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              readonly
            />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <button onClick={handleAddToFavorite}>
                <MdOutlineFavoriteBorder className="text-xl" />
              </button>
              <Link to={`/productsDetails/${id}`}>
                <FaRegEye className="text-xl"></FaRegEye>
              </Link>
            </div>
            <div className="">
              <button
                onClick={handleAddToCart}
                className="btn bg-[#019267] rounded-3xl"
              >
                <FaBasketShopping className="text-xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
