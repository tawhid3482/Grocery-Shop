import { Helmet } from "react-helmet-async";
import ShopCaro from "./ShopCaro";
import { useLoaderData, useLocation } from "react-router-dom";
import ShopProducts from "./ShopProducts";
import UseProducts from "../../Hooks/UseProducts";
import { useEffect, useState } from "react";

const Shop = () => {
  const brand = useLoaderData();

  return (
    <div>
      <Helmet>
        {" "}
        <title>Grocery-Shop | Shop</title>{" "}
      </Helmet>
      <div className="">
        <div className="h-48  w-full flex flex-col justify-center items-center text-center">
          <p className="text-5xl font-semibold  uppercase">All Products</p>
          <p className="text-xs my-2  uppercase">HOME {">"} Shop</p>
        </div>
        <div className="">
          <ShopCaro brand={brand}></ShopCaro>
        </div>
        <hr className="my-10" />
        <div className="my-10">
          <ShopProducts></ShopProducts>
        </div>
      </div>
    </div>
  );
};

export default Shop;
