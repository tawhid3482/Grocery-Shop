import React from "react";
import { Helmet } from "react-helmet-async";
import ShopCaro from "./ShopCaro";
import UseBrands from "../../Hooks/UseBrands";
import { useLoaderData } from "react-router-dom";
import ShopProducts from "./ShopProducts";

const Shop = () => {
    const brand = useLoaderData()
    const menuItems = ["All Products", "Bakery", "Fruits","Grocery", "Prepared & Deli","Seafood & Meat", "Vegetables"];
    const discountMenus = ["10% Off Or More", "20% Off Or More", "30% Off Or More","40% Off Or More", " 50% Off Or More"];
  return (
    <div>
      <Helmet>
        {" "}
        <title>Grocery-Shop | Blog</title>{" "}
      </Helmet>
      <div className="">
        <div className="h-48  w-full flex flex-col justify-center items-center text-center">
          <p className="text-5xl font-semibold  uppercase">All Products</p>
          <p className="text-xs my-2  uppercase">HOME {">"} Shop</p>
        </div>
        <div className="">
            <ShopCaro brand={brand}></ShopCaro>
        </div>
        <div className="my-10">
            <ShopProducts items={menuItems} discountItems={discountMenus}></ShopProducts>
        </div>
      </div>
    </div>
  );
};

export default Shop;
