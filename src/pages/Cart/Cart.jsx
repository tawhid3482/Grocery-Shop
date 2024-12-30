import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { TbTruckDelivery } from "react-icons/tb";
import UseCart from "../../Hooks/UseCart";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Carts from "./Carts";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";

const Cart = () => {
  const AxiosPublic = useAxiosPublic();
  const [cart, setCart] = UseCart();
  const [isOpen, setIsOpen] = useState(false);
  const {user}=UseAuth()
  const [districts, setDistricts] = useState([]); // Filtered districts
  const { register, handleSubmit, watch, reset } = useForm();

  // Watch the selected division to dynamically filter districts
  const selectedDivision = watch("division");

  const districtData = {
    Dhaka: [
      "Faridpur",
      "Gazipur",
      "Gopalganj",
      "Kishoreganj",
      "Madaripur",
      "Manikganj",
      "Munshiganj",
      "Mymensingh",
      "Narsingdi",
      "Narayanganj",
      "Netrokona",
      "Rajbari",
      "Shariatpur",
      "Tangail",
      "Jamalpur",
    ],
    Chattogram: [
      "Bandarban",
      "Brahmanbaria",
      "Chandpur",
      "Chattogram",
      "Cox's Bazar",
      "Cumilla",
      "Feni",
      "Khagrachari",
      "Lakshmipur",
      "Noakhali",
      "Rangamati",
    ],
    Khulna: [
      "Bagerhat",
      "Chuadanga",
      "Jessore",
      "Jhenaidah",
      "Khulna",
      "Koira",
      "Meherpur",
      "Munshiganj",
      "Satkhira",
      "Shatkhira",
    ],
    Rajshahi: [
      "Bogura",
      "Chapainawabganj",
      "Naogaon",
      "Rajshahi",
      "Pabna",
      "Sirajganj",
      "Natore",
      "Joypurhat",
    ],
    Barisal: [
      "Barisal",
      "Bhola",
      "Jhalokathi",
      "Patuakhali",
      "Pirojpur",
      "Shariatpur",
    ],
    Sylhet: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
    Rangpur: [
      "Dinajpur",
      "Gaibandha",
      "Kurigram",
      "Lalmonirhat",
      "Nilphamari",
      "Panchagarh",
      "Rangpur",
      "Thakurgaon",
    ],
    Mymensingh: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],
  };

  // Update districts when division changes
  React.useEffect(() => {
    setDistricts(districtData[selectedDivision] || []);
  }, [selectedDivision]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {

      const addressInfo = {
        name:user.displayName,
        email:user.email,
        data:data
      }

      const response = await AxiosPublic.post("/address", addressInfo); // Await the Axios call
      if (response.data.insertedId) {
        reset();
        toast.success("Address updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update address:", error);
      toast.error("Failed to update address. Please try again.");
    }
  };
  

  // Calculate the subtotal
  const subtotal = cart
    ?.reduce((acc, item) => acc + parseFloat(item.price || 0), 0)
    .toFixed(2);

  const freeShippingThreshold = 100;
  const remainingAmount = (freeShippingThreshold - subtotal).toFixed(2);

  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Cart</title>
      </Helmet>
      <div className="h-48 bg-[#F1FFE1] w-full flex flex-col justify-center items-center text-center gap-3">
        <p className="text-5xl font-semibold text-[#019267]">Shopping Cart</p>
        <p className="text-xs my-2 text-[#019267] uppercase">
          HOME {">"} <span className="text-red-600">Cart</span>
        </p>
      </div>

      <div className="flex gap-4 items-start justify-between flex-col lg:flex-row my-5 p-8 lg:p-0">
        <div className="border border-gray-300 w-full lg:w-8/12 rounded-lg">
          <div className="my-5 mx-4">
            <p className="text-sm font-medium uppercase">
              {subtotal >= freeShippingThreshold
                ? "You qualify for FREE Shipping!"
                : `Buy $${remainingAmount} more to enjoy FREE Shipping`}
            </p>
            <div className="relative pt-1">
              <div className="overflow-hidden text-xs flex rounded bg-pink-200">
                <div
                  style={{
                    width: `${(subtotal / freeShippingThreshold) * 100}%`,
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 relative p-2"
                >
                  <TbTruckDelivery className="text-2xl absolute right-1 top-[-5px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1">
            {cart?.map((items) => (
              <Carts key={items?.id} items={items} setCart={setCart}></Carts>
            ))}
          </div>

          <div className="flex gap-3 items-center my-5 mx-4">
            <input
              type="text"
              className="border-2 p-2"
              placeholder="Coupon Code"
            />
            <button className="btn bg-[#F0592A] text-white">
              Apply coupon
            </button>
          </div>
        </div>

        <div className="w-full lg:w-4/12 border border-[#F0592A] p-5 rounded-lg">
          <p className="text-xl font-bold">Cart totals</p>
          <div className="flex justify-between items-center text-sm font-medium uppercase my-5">
            <span>Subtotal </span>
            <span>${subtotal}</span>
          </div>
          <div className="bg-[#ecc8bd] p-3">
            <p className="text-lg font-bold mb-3 text-[#F0592A]">SHIPPING</p>
            <p className="text-sm font-bold mb-3 text-[#F0592A]">
              Enter your address to view shipping options
            </p>
            <div>
              <div className="rounded">
                <h2
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center text-center gap-2 font-bold mb-4 text-green-500"
                >
                  Click Here
                  {isOpen ? (
                    <FaArrowUp className="text-sm" />
                  ) : (
                    <FaArrowDown className="text-sm" />
                  )}
                </h2>
                {isOpen && (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                  >
                    <select
                      {...register("division")}
                      className="select select-error w-full max-w-xs"
                    >
                      <option disabled selected>
                        Select Your Division
                      </option>
                      {Object.keys(districtData).map((division) => (
                        <option key={division}>{division}</option>
                      ))}
                    </select>

                    <select
                      {...register("district")}
                      className="select select-error w-full max-w-xs"
                      disabled={!districts.length}
                    >
                      <option disabled selected>
                        Select Your District
                      </option>
                      {districts.map((district, index) => (
                        <option key={index}>{district}</option>
                      ))}
                    </select>

                    <input
                      {...register("town")}
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg border border-[#F0592A]"
                      placeholder="Town / City"
                    />
                    <input
                      {...register("zipCode")}
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg"
                      placeholder="Zip Code"
                    />
                    <input
                      {...register("phone")}
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg"
                      placeholder="Phone Number"
                    />
                    <button
                      type="submit"
                      className="text-white btn bg-[#F0592A]"
                    >
                      Update
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm font-medium uppercase my-5">
            <span>TOTAL </span>
            <span>${subtotal}</span>
          </div>
          <NavLink to={"/checkout"}>
            <button className="btn bg-[#F0592A] text-lg text-white hover:bg-[#019267] w-full">
              Proceed to checkout
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
