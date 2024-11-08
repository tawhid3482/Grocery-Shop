import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Brands from "./Brands";
import UseBrands from "../../../Hooks/UseBrands";
import { NavLink } from "react-router-dom";

const Brand = () => {
  const [brand] = UseBrands();
  return (
    <div>
      <div className="flex justify-between items-center my-5 p-2 ">
        <div className="flex items-center gap-8 my-0">
          <div className="text-2xl font-medium">
            <h2>Show Our Brand</h2>
          </div>
        </div>
        <div className="">
          <NavLink to={'/shop'}>
          <button className="btn btn-ghost border-2 hover:border-[#019267] rounded-3xl">
            {" "}
            Check Products{" "}
            <IoIosArrowRoundForward className="text-xl"></IoIosArrowRoundForward>
          </button>
          </NavLink>
          
        </div>
      </div>
      <div className="">
      <Brands brand={brand} />
      </div>
    </div>
  );
};

export default Brand;
