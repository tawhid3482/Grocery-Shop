import Rating from "react-rating";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { VscCalendar } from "react-icons/vsc";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useLocation } from "react-router-dom";

const SearchProductDetails = ({ pro }) => {
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <div className=" flex justify-between items-center flex-col lg:flex-row my-8">
        <div className="lg:w-1/3  lg:h-[450px] p-3">
          <img src={pro?.img} className="lg:w-[680px] lg:h-[450px]" alt="" />
        </div>
        <div className="lg:w-1/3  lg:h-[450px] p-3">
          <PageTitle
            tName={"Home"}
            tName2={"Products"}
            tName3={pro?.name}
          ></PageTitle>
          <h3 className="text-3xl font-medium my-2">{pro?.name}</h3>
          <p className="text-sm">{pro?.description}</p>
          <Rating
            initialRating={pro?.rating}
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
              ${pro?.oldPrice}
              <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
            </span>
            <spam className="text-[#019267] font-medium text-xl">
              ${pro?.newPrice}
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
            </div>
            <div className="">
              <button className="btn w-28 bg-[#019267] text-white hover:bg-[#F0592A]">
                Add To cart
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <button className="w-24 ml-5">
                <MdOutlineFavoriteBorder className="text-2xl "></MdOutlineFavoriteBorder>
              </button>{" "}
            </div>
            <div className="">
              <button className="btn w-28 bg-[#019267] text-white hover:bg-[#F0592A]">
                buy now
              </button>
            </div>
          </div>
          <div className="my-3">
            <button className="btn w-full uppercase bg-[#019267] text-white hover:bg-[#F0592A]">
              <FaWhatsapp className="text-xl"></FaWhatsapp>
              <span>Request information</span>
            </button>
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
        <div className="lg:w-1/3 border lg:h-[450px] p-3 md:my-5 lg:my-0 rounded-md">
          <p className="text-xl font-medium ">Similar Products </p>
          <div className="">
            <div className="flex gap-10 items-center border p-2">
              <div className=" ">
                <img
                  src="https://i.postimg.cc/J0WR4Hnx/tomatoes-canva-removebg-preview.png"
                  alt=""
                  className="w-12"
                />
              </div>
              <div className="">
                <p className="text-lg font-medium">name Lorem ipsum</p>
                <Rating
                  initialRating={"4"}
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
                    ${"15.32"}
                    <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
                  </span>
                  <spam className="text-[#019267] font-medium ">
                    ${"19.00"}
                  </spam>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProductDetails;
