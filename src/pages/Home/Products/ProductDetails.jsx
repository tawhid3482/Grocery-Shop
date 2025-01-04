import Rating from "react-rating";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { VscCalendar } from "react-icons/vsc";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import UseCart from "../../../Hooks/UseCart";
import UseFavourite from "../../../Hooks/UseFavourite";

const ProductDetails = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const [proDetails, setProDetails] = useState(null);
  const [, refetch] = UseCart();
  const [, reloadData] = UseFavourite();
  const { id } = useParams();
  const AxiosSecure = useAxiosSecure();
  const data = useLoaderData();

  useEffect(() => {
    const findData = data?.find((product) => product?.id === id);
    setProDetails(findData);
  }, [id, data]);

  const similarProductFilter =
    proDetails &&
    data.filter((similar) => similar.category === proDetails?.category);

  const [count, setCount] = useState(1);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (user && user.email) {
      const {
        id: productId,
        name,
        img,
        newPrice,
        unit_of_measure,
        supplier,
      } = proDetails;
      
      const Price = (newPrice * count).toFixed(2);

      const cartItem = {
        productId,
        email: user.email,
        name,
        img,
        newPrice,
        price:Price,
        unit_of_measure,
        supplier,
        count,
      };

      AxiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          refetch();
          toast.success(`${name} added to the cart successfully`);
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleAddToFavorite = () => {
    if (user && user.email) {
      const { id, name, img, newPrice, oldPrice, unit_of_measure, supplier } =
        proDetails;

      const favoriteItem = {
        productId: id,
        email: user.email,
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
          reloadData();
          toast.success(`${name} added to favorites successfully`);
        } else {
          toast.error("Failed to add to favorites");
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to favorites!",
        icon: "warning",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="my-8">
      <div className=" flex justify-between items-center flex-col lg:flex-row my-8">
        <div className="lg:w-1/3  lg:h-[450px] p-3">
          <img
            src={proDetails?.img}
            className="lg:w-[680px] lg:h-[450px]"
            alt=""
          />
        </div>

        <div className="lg:w-1/3  lg:h-[450px] p-3">
          <PageTitle
            tName={"Home"}
            tName2={"Products"}
            tName3={proDetails?.name}
          ></PageTitle>
          <h3 className="text-3xl font-medium my-2">{proDetails?.name}</h3>
          <p className="text-sm">{proDetails?.description}</p>
          <Rating
            initialRating={proDetails?.rating}
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

          <div className="flex items-center gap-3">
            <span className="relative font-medium text-xl ">
              ${proDetails?.oldPrice}
              <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
            </span>
            <spam className="text-[#019267] font-medium text-xl">
              ${proDetails?.newPrice}
            </spam>
          </div>
          <div className="flex gap-5 items-center my-2">
            <div className="counter flex gap-5 items-center border p-2 rounded-sm w-24">
              <span
                className="text-2xl"
                onClick={decreaseCount}
                style={{ cursor: "pointer" }}
              >
                -
              </span>
              <p className="text-xl">{count}</p>
              <span
                className="text-2xl"
                onClick={increaseCount}
                style={{ cursor: "pointer" }}
              >
                +
              </span>
              <span className="text-2xl font-medium uppercase ">
                {proDetails?.unit_of_measure}
              </span>
            </div>
            <div className=" ml-8">
              <button
                onClick={handleAddToCart}
                className="btn w-28 bg-[#019267] text-white hover:bg-[#F0592A]"
              >
                Add To cart
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <button className="w-24 ml-5"></button>
            </div>
            <div className="ml-8">
              <button
                onClick={handleAddToFavorite}
                className="btn w-28 bg-[#019267] text-white hover:bg-[#F0592A]"
              >
                Add To{" "}
                <MdOutlineFavoriteBorder className="text-2xl "></MdOutlineFavoriteBorder>
              </button>
            </div>
          </div>
          <div className="my-3">
            <button className=""></button>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn w-full uppercase bg-[#019267] text-white hover:bg-[#F0592A]"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <FaWhatsapp className="text-xl"></FaWhatsapp>

              <span>Request information</span>
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                
                <div className="">
                <div className="max-w-sm mx-auto bg-gradient-to-r from-[#019267] to-[#bc4825] text-white p-6 rounded-lg shadow-lg"> <div className="flex justify-center mb-4"> <img src={user.photoURL} alt="Your Logo" className="w-16 h-16 rounded-full" /> </div> <div className="text-center"> <div className="text-2xl font-bold mb-2">{user.displayName}</div> <div className="text-lg mb-4">Our Contact Info</div> <div className="space-y-2"> <p><span className="mr-2">📱</span> WhatsApp: +880 1826853371</p> <p><span className="mr-2">📞</span> Phone: +880 1826853371</p> <p><span className="mr-2">📧</span> Email: tawhidulislam3482@gmail.com</p> </div> </div> </div>
                </div>
              </div>
            </dialog>
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <TbTruckDelivery className="text-2xl text-black " />
              <p className="uppercase">Delivery & Return</p>
            </div>
            <div className="flex gap-2 items-center my-1">
              <VscCalendar className="text-2xl text-black " />
              <p className="uppercase">2 - DAY DELIVERY </p>
            </div>
          </div>
        </div>

        <div className="md:w-[680px] lg:w-1/3 border lg:h-[450px] p-3 md:my-5 lg:my-0 rounded-md">
          <p className="text-xl font-medium ">Similar Products </p>
          <div
            className={`${
              similarProductFilter?.length > 4
                ? "border-r-2 border-gray-300 pr-5"
                : ""
            } flex flex-col space-y-4 max-h-96 overflow-y-auto`}
          >
            {similarProductFilter?.map((similarProduct) => (
              <Link to={`/productsDetails/${similarProduct?.id}`}>
                <div className="flex gap-10 items-center border rounded-xl p-2">
                  <div className=" ">
                    <img src={similarProduct?.img} alt="" className="w-12" />
                  </div>
                  <div className="">
                    <p className="text-lg font-medium">{similarProduct.name}</p>
                    <Rating
                      initialRating={similarProduct.rating}
                      emptySymbol={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 "
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
                    <div className="flex items-center gap-3">
                      <span className="relative font-medium  ">
                        ${similarProduct.oldPrice}
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
                      </span>
                      <spam className="text-[#019267] font-medium ">
                        ${similarProduct.newPrice}
                      </spam>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
