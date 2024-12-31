import React, { useState, useEffect } from "react";
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
import { useQuery } from "@tanstack/react-query";
import UseAddress from "../../Hooks/UseAddress";

const Cart = () => {
  const AxiosPublic = useAxiosPublic();
  const [cart, setCart] = UseCart();
  const [isOpen, setIsOpen] = useState(true);
  const { user } = UseAuth();
  const [districts, setDistricts] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const { register, handleSubmit, watch, reset } = useForm();
  const { data: couponData = [], refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/coupon");
      return res.data;
    },
  });
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
  useEffect(() => {
    setDistricts(districtData[selectedDivision] || []);
  }, [selectedDivision]);

  const onSubmit = async (data) => {
    try {
      const addressInfo = {
        name: user.displayName,
        email: user.email,
        data,
      };
      const response = await AxiosPublic.post("/address", addressInfo);
      if (response.data.insertedId) {
        reset();
        toast.success("Address updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update address:", error);
      toast.error("Failed to update address. Please try again.");
    }
  };

  const subtotal = cart
    ?.reduce((acc, item) => acc + parseFloat(item.price || 0), 0)
    .toFixed(2);

  const freeShippingThreshold = 100;
  const remainingAmount = (freeShippingThreshold - subtotal).toFixed(2);

  const handleApplyCoupon = () => {
    const validCoupon = couponData.find((c) => c.code === coupon); // Validate coupon exists
    if (validCoupon) {
      // Extract last two digits as discount
      const lastTwoDigits = parseInt(validCoupon.code.slice(-2), 10);
      if (!isNaN(lastTwoDigits)) {
        setDiscount(lastTwoDigits);
        toast.success(`Coupon applied! ${lastTwoDigits}% discount.`);
      } else {
        toast.error(
          "Invalid coupon code format. Discount could not be applied."
        );
      }
    } else {
      toast.error("Invalid coupon code. Please try again.");
    }
  };

  const discountedTotal = (subtotal * (1 - discount / 100)).toFixed(2);

  // save for to the checkout

  const handleCheckOut = () => {
    const checkoutData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      cart: cart,
      subtotal: subtotal,
      discount: discount,
      discountPrice:(subtotal * (discount / 100)).toFixed(2),
      total: discountedTotal,
    };
    const response = AxiosPublic.post("/checkout", checkoutData).then((res) => {
      if (response.data) {
        toast.success("Thank You For Coming Checkout !");
      }
    });
  };

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
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              className="btn bg-[#F0592A] text-white"
              onClick={handleApplyCoupon}
            >
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
            {" "}
            <p className="text-lg font-bold mb-3 text-[#F0592A]">
              SHIPPING
            </p>{" "}
            <p className="text-sm font-bold mb-3 text-[#F0592A]">
              {" "}
              Enter your address to view shipping options{" "}
            </p>{" "}
            <div>
              {" "}
              <div className="rounded">
                {" "}
                <h2
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center text-center gap-2 font-bold mb-4 text-green-500 cursor-pointer"
                >
                  {" "}
                  Enter Your Address{" "}
                  {isOpen ? (
                    <FaArrowUp className="text-sm" />
                  ) : (
                    <FaArrowDown className="text-sm" />
                  )}{" "}
                </h2>{" "}
                {isOpen && (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                  >
                    {" "}
                    <select
                      {...register("division")}
                      className="select select-error w-full max-w-xs"
                    >
                      {" "}
                      <option disabled selected>
                        {" "}
                        Select Your Division{" "}
                      </option>{" "}
                      {Object.keys(districtData).map((division) => (
                        <option key={division}>{division}</option>
                      ))}{" "}
                    </select>{" "}
                    <select
                      {...register("district")}
                      className="select select-error w-full max-w-xs"
                      disabled={!districts.length}
                    >
                      {" "}
                      <option disabled selected>
                        {" "}
                        Select Your District{" "}
                      </option>{" "}
                      {districts.map((district, index) => (
                        <option key={index}>{district}</option>
                      ))}{" "}
                    </select>{" "}
                    <input
                      {...register("town")}
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg border border-[#F0592A]"
                      placeholder="Town / City"
                    />{" "}
                    <input
                      {...register("zipCode")}
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg"
                      placeholder="Zip Code"
                    />{" "}
                    <input
                      {...register("phone")}
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg"
                      placeholder="Phone Number"
                    />{" "}
                    <button
                      type="submit"
                      className="text-white btn bg-[#F0592A]"
                    >
                      {" "}
                      Update{" "}
                    </button>{" "}
                  </form>
                )}{" "}
              </div>{" "}
            </div>{" "}
          </div>

          {discount > 0 && (
            <div className="flex justify-between items-center text-sm font-medium uppercase my-5">
              <span>Discount ({discount}%)</span>
              <span>-${(subtotal * (discount / 100)).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between items-center text-sm font-medium uppercase my-5">
            <span>Total </span>
            <span>${discountedTotal}</span>
          </div>
          <NavLink to={cart.length > 0 ? "/checkout" : "#"}>
            <button
              onClick={handleCheckOut}
              className={`btn text-lg text-white w-full ${
                cart.length > 0
                  ? "bg-[#F0592A] hover:bg-[#019267]" // Active state
                  : "bg-gray-300 cursor-not-allowed" // Disabled state
              }`}
              disabled={cart.length === 0} // Disable button if cart is empty
            >
              Proceed to checkout
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
