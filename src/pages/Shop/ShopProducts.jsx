import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import ShopProductsCard from "./ShopProductsCard";
import { FiPlus, FiMinus } from "react-icons/fi";

const ShopProducts = () => {
  const [product] = UseProducts();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "All Products";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDiscount, setSelectedDiscount] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const items = [
    "All Products",
    "Bakery",
    "Fruits",
    "Grocery",
    "Prepared & Deli",
    "Seafood & Meat",
    "Vegetables",
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
        // If the discount is already selected, unselect it (remove from the array)
        return prevSelected.filter((discount) => discount !== value);
      } else {
        // If the discount is not selected, select it (add to the array)
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
        : data.category.toLowerCase() === selectedCategory.toLowerCase()
    )
    .filter((data) => {
      // If no discounts are selected, do not apply the discount filter
      if (selectedDiscount.length === 0) {
        return true;
      }
      // If discounts are selected, check if the product meets the discount criteria
      return selectedDiscount.some((discount) => {
        const discountPercentage = parseInt(discount.split(" ")[0]); // Extract the percentage (e.g., "10%" => 10)
        return parseInt(data.offer) >= discountPercentage;
      });
    });

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="flex flex-col md:w-3/12">
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
                  <label htmlFor={`category-${item}`} className="cursor-pointer">
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
                    checked={selectedDiscount.includes(discount)} // Check if it's selected
                    onChange={handleDiscountChange} // Toggle discount filter
                    className="mr-2"
                  />
                  <label htmlFor={`discount-${discount}`} className="cursor-pointer">
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
          {filteredProducts.map((data) => (
            <ShopProductsCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
