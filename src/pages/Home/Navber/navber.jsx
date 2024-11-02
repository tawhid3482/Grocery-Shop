import React, { useState } from "react";
import logo from "../../../assets/logo/logo.png";
import { FaArrowDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navOption = (
    <>
      <li>
        <a>All Products</a>
      </li>
      <li>
        <a>Bakery</a>
      </li>
      <li>
        <a>Dairy</a>
      </li>
      <li>
        <a>Fruits</a>
      </li>
      <li>
        <a>Vegetables</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="flex justify-between items-center bg-base-100 p-3">
        <div>
          <img src={logo} alt="" className="w-14 h-10 md:w-24 md:h-14" />
        </div>

        <div className="hidden md:flex items-center w-96 md:w-auto border border-[#019267] rounded-xl relative">
          {" "}
          {/* Add relative here */}
          <input type="text" placeholder="Search" className="input w-60 h-9" />
          <button
            className="btn ml-2 btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            All
            <FaArrowDown />
          </button>
          <div className="">
            <button className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute top-full mt-2 w-full dropdown-content menu bg-base-100 rounded-box shadow p-2 z-10">
              {navOption}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div>
            <button className="btn btn-circle">
              <BsCart3 className="text-3xl" />
            </button>
          </div>
          <div>
            <button className="btn btn-circle">
              <Link to={"/favorite"}>
                <MdFavoriteBorder className="text-3xl" />
              </Link>
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
