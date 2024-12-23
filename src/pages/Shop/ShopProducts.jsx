import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShopProductsCard from "./ShopProductsCard";
import { FiPlus, FiMinus } from "react-icons/fi";
import UseProducts from "../../Hooks/UseProducts";

const ShopProducts = () => {
  const [product] = UseProducts();
  console.log(product);

  const [isOpen, setIsOpen] = useState(true);
  const [isStart, setIsStart] = useState(true);

  // Get category from URL query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = decodeURIComponent(
    queryParams.get("category") || "All Products"
  );
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Discount filter state
  const [selectedDiscount, setSelectedDiscount] = useState([]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const items = [
    "All Products",
    "Bakery",
    "Fruits",
    "Grocery",
    "Prepared and Deli",
    "Seafood and Meat",
    "Vegetables",
    "Dried Food",
    "Breakfast",
  ];

  const discountItems = [
    "10% Off Or More",
    "20% Off Or More",
    "30% Off Or More",
    "40% Off Or More",
    "50% Off Or More",
  ];

  const handleFilteredProducts = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDiscountChange = (event) => {
    const value = event.target.value;
    setSelectedDiscount((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((discount) => discount !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown2 = () => {
    setIsStart((prev) => !prev);
  };

  // Filter products based on selected category and selected discounts
  const filteredProducts = product
    .filter((data) =>
      selectedCategory === "All Products" || !selectedCategory
        ? true
        : data.category.trim().toLowerCase() ===
          selectedCategory.trim().toLowerCase()
    )
    .filter((data) => {
      if (selectedDiscount.length === 0) {
        return true;
      }
      return selectedDiscount.some((discount) => {
        const discountPercentage = parseInt(discount.split(" ")[0]);
        return parseInt(data.offer) >= discountPercentage;
      });
    });

  // front-end pagination
  // Pagination states
  const productsPerPage = 12; // Adjust this value to set how many products per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get the products for the current page
  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="flex flex-col md:w-3/12 sticky md:top-16 lg:top-36 h-full">
        <div className="p-4 rounded shadow">
          <h2
            onClick={toggleDropdown}
            className="flex items-center gap-4 text-xl font-bold mb-4"
          >
            Product Categories {isOpen ? <FiMinus /> : <FiPlus />}
          </h2>
          {isOpen && (
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center">
                  <input
                    type="radio"
                    id={`category-${item}`}
                    name="category"
                    value={item}
                    checked={selectedCategory === item}
                    onChange={handleFilteredProducts}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`category-${item}`}
                    className="cursor-pointer"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 rounded shadow">
          <h2
            onClick={toggleDropdown2}
            className="flex items-center gap-4 text-xl font-bold mb-4"
          >
            Discount Filter {isStart ? <FiMinus /> : <FiPlus />}
          </h2>
          {isStart && (
            <ul className="space-y-2">
              {discountItems.map((discount) => (
                <li key={discount} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`discount-${discount}`}
                    value={discount}
                    checked={selectedDiscount.includes(discount)}
                    onChange={handleDiscountChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`discount-${discount}`}
                    className="cursor-pointer"
                  >
                    {discount}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="md:w-9/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center 2xl:grid-cols-4 lg:gap-4">
          {currentProducts.map((data) => (
            <ShopProductsCard key={data.id} data={data} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-l hover:bg-[#F0592A] hover:text-white cursor-pointer"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`
 px-4 py-2 ${
   currentPage === index + 1 ? "bg-[#019267] text-white" : "bg-gray-200"
 } mx-1 rounded`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-r hover:bg-[#F0592A] hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
