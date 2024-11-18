import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { TbTruckDelivery } from "react-icons/tb";
import UseCart from "../../Hooks/UseCart";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Carts from "./Carts";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [cart] = UseCart();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(""); // State to store the selected division
  const [searchDistrict, setSearchDistrict] = useState(""); // State to store the district search query
  const [districts, setDistricts] = useState([]); // State to store filtered districts

  // Districts data organized by division
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

  // Handle division change
  const handleDivisionChange = (event) => {
    const division = event.target.value;
    setSelectedDivision(division);
    setSearchDistrict(""); // Reset search when division changes
    setDistricts(districtData[division] || []);
  };

  // Toggle dropdown for shipping options
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Calculate the subtotal by summing up the newPrice values
  const subtotal = cart
    ?.reduce((acc, item) => acc + parseFloat(item.newPrice || 0), 0)
    .toFixed(2);

  // Define the free shipping threshold
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

      <div className="flex gap-4 items-start justify-between  flex-col lg:flex-row my-5  p-8 lg:p-0 ">
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
                  <TbTruckDelivery className="text-2xl absolute right-1 top-[-5px]  " />
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 ">
            {cart?.map((items) => {
              return <Carts key={items?.id} items={items}></Carts>;
            })}
          </div>

          <div className="text-right mr-5">
            <button className="btn bg-green-700 text-white">Update</button>
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

        <div className="w-full lg:w-4/12 border border-[#F0592A]  p-5 rounded-lg">
          <p className="text-xl font-bold">Cart totals</p>
          <div className="flex justify-between items-center text-sm font-medium uppercase my-5">
            <span>Subtotal </span>
            <span> ${subtotal}</span>
          </div>
          <div className="bg-[#ecc8bd] p-3">
            <p className="text-lg font-bold mb-3 text-[#F0592A]">SHIPPING</p>
            <p className="text-sm font-bold mb-3 text-[#F0592A]">
              Enter your address to view shipping options
            </p>
            <div>
              <div className="rounded">
                <h2
                  onClick={toggleDropdown}
                  className="flex items-center text-center gap-2 font-bold mb-4"
                >
                  Product Categories
                  {isOpen ? (
                    <FaArrowUp className="text-sm" />
                  ) : (
                    <FaArrowDown className="text-sm" />
                  )}
                </h2>
                {isOpen && (
                  <div className="flex flex-col gap-3">
                    {/* Division Dropdown */}
                    <select
                      className="select select-error w-full max-w-xs"
                      value={selectedDivision}
                      onChange={handleDivisionChange}
                    >
                      <option disabled selected>
                        Select Your Division
                      </option>
                      <option>Dhaka</option>
                      <option>Chattogram</option>
                      <option>Khulna</option>
                      <option>Rajshahi</option>
                      <option>Barisal</option>
                      <option>Sylhet</option>
                      <option>Rangpur</option>
                      <option>Mymensingh</option>
                    </select>

                    {/* District Search and Dropdown */}

                    <select className="select select-error w-full max-w-xs">
                      <option disabled selected>
                        Select Your District
                      </option>
                      {districts.map((district, index) => (
                        <option key={index}>{district}</option>
                      ))}
                    </select>

                    {/* Additional input fields */}
                    <input
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg border border-[#F0592A]"
                      placeholder="Town / City"
                    />
                    <input
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg"
                      placeholder="Zip Code"
                    />
                    <input
                      type="text"
                      className="w-full max-w-xs p-2 rounded-lg"
                      placeholder="Phone Number"
                    />
                    <button className="text-white btn bg-[#F0592A]">
                      Update
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm font-medium uppercase my-5">
            <span>TOTAL </span>
            <span> ${subtotal}</span>
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
