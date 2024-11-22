import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import UseFavourite from "../../Hooks/UseFavourite";

const Favoutire = () => {
  const [favorite] = UseFavourite()
  return (
    <div className="">
      {favorite && favorite?.length > 0 ? (
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {favorite?.map((data) => (
            <Favorites key={data.id} data={data}></Favorites>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-1 rounded-md h-screen">
          <img
            src="https://i.postimg.cc/HWXPq5Wh/271-2717799-green-heart-clipart-png-for-web-transparent-green-removebg-preview.png"
            alt=""
            className="w-72 "
          />
          <p className="text-xl md:text-4xl font-bold">
            There are no products on the wishlist!
          </p>
          <button className="text-lg bg-[#019267] text-white p-2 hover:bg-slate-400 rounded-lg my-4">
            <Link to={"/shop"}>Start Shopping</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Favoutire;
