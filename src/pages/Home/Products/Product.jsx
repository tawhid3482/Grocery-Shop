import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import ProductShow from "./ProductShow";
import UseProducts from "../../../Hooks/UseProducts";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [product] = UseProducts();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterFeatured, setFilterFeatured] = useState("all"); // Track selected Featured

  // Filtering products based on the selected Featured
  const filterProducts = (Featured) => {
    setFilterFeatured(Featured);
  };

  const filteredProducts =
    filterFeatured === "all"
      ? product
      : product.filter((products) => products?.featured === filterFeatured);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filterProduct = filteredProducts?.slice(0, 8);

  return (
    <div>
      <div className="flex justify-between items-center my-3 gap-9 md:gap-0 mx-2 border p-2 rounded-md">
        <div className="">
          <h2 className="md:text-xl font-medium">Popular Products</h2>
        </div>

        <div className="hidden lg:flex justify-between items-center gap-2 w-full lg:w-auto">
          {/* All Products Button */}
          <button
            onClick={() => filterProducts("all")}
            className={`btn rounded-3xl hover:bg-[#019267] hover:text-white ${
              filterFeatured === "all" ? "bg-[#019267] text-white" : ""
            }`}
          >
            ALL PRODUCTS
          </button>

          {/* best sellers Button */}
          <button
            onClick={() => filterProducts("best sellers")}
            className={`btn uppercase rounded-3xl hover:bg-[#019267] hover:text-white ${
              filterFeatured === "best sellers" ? "bg-[#019267] text-white" : ""
            }`}
          >
            best sellers
          </button>

          {/* Top Rated Button */}
          <button
            onClick={() => filterProducts("top rated")}
            className={`btn rounded-3xl hover:bg-[#019267] hover:text-white ${
              filterFeatured === "top rated" ? "bg-[#019267] text-white" : ""
            }`}
          >
            TOP RATED
          </button>

          {/* On Sale Button */}
          <button
            onClick={() => filterProducts("on sale")}
            className={`btn rounded-3xl hover:bg-[#019267] hover:text-white ${
              filterFeatured === "on sale" ? "bg-[#019267] text-white" : ""
            }`}
          >
            ON SALE
          </button>

          {/* In Stock Button */}
          <button
            onClick={() => filterProducts("in stock")}
            className={`btn w-full md:w-auto rounded-3xl hover:bg-[#019267] hover:text-white ${
              filterFeatured === "in stock" ? "bg-[#019267] text-white" : ""
            }`}
          >
            IN STOCK
          </button>
        </div>

        {/* Menu Icon - visible only on small and medium screens */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 rounded-3xl p-2 hover:bg-[#019267] hover:text-white"
          >
            <IoIosMenu className="text-2xl" />
            Filter
          </button>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0 relative">
          <NavLink to={"/shop"}>
            <button className="flex items-center gap-1 rounded-3xl hover:bg-[#019267] hover:text-white p-2">
              All Categories
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </NavLink>
        </div>
      </div>

      {/* Dropdown Menu - visible only when the menu icon is clicked */}
      {isDropdownOpen && (
        <div className="lg:hidden grid grid-cols-3 md:grid-cols-5 gap-2 my-5">
          <button
            onClick={() => filterProducts("all")}
            className="btn rounded-3xl px-4 py-2 hover:bg-gray-100"
          >
            ALL PRODUCTS
          </button>
          <button
            onClick={() => filterProducts("best sellers")}
            className="btn rounded-3xl uppercase px-4 py-2 hover:bg-gray-100"
          >
            best sellers
          </button>
          <button
            onClick={() => filterProducts("top rated")}
            className="btn rounded-3xl px-4 py-2 hover:bg-gray-100"
          >
            TOP RATED
          </button>
          <button
            onClick={() => filterProducts("on sale")}
            className="btn rounded-3xl px-4 py-2 hover:bg-gray-100"
          >
            ON SALE
          </button>
          <button
            onClick={() => filterProducts("in stock")}
            className="btn rounded-3xl px-4 py-2 hover:bg-gray-100"
          >
            IN STOCK
          </button>
        </div>
      )}

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Render filtered products */}
        {filterProduct?.map((cards) => (
          <ProductShow key={cards.id} cards={cards} />
        ))}
      </div>
    </div>
  );
};

export default Product;
