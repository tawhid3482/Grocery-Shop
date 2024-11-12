import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import UseProducts from "../../Hooks/UseProducts";
import ShopProductsCard from "./ShopProductsCard";

const ShopProducts = () => {
  const [product] = UseProducts();

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

  const [isOpen, setIsOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedDiscount, setSelectedDiscount] = useState("");

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    // Toggle the selection for the category
    setSelectedCategory((prev) => (prev === value ? "" : value));
  };

  const handleDiscountChange = (event) => {
    const { value } = event.target;
    // Toggle the selection for the discount
    setSelectedDiscount((prev) => (prev === value ? "" : value));
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdown2 = () => {
    setIsStart((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col md:w-3/12">
          <div className="p-4 rounded shadow">
            <h2
              onClick={toggleDropdown}
              className="flex items-center text-center gap-4 text-xl font-bold mb-4"
            >
              Product Categories {isOpen ? <FiMinus /> : <FiPlus />}
            </h2>
            {isOpen && (
              <ul className="space-y-2">
                {items.map((category) => (
                  <li key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={handleCategoryChange}
                      className="mr-2"
                    />
                    <label htmlFor={`category-${category}`} className="cursor-pointer">
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-4 rounded shadow">
            <h2
              onClick={toggleDropdown2}
              className="flex items-center text-center gap-4 text-xl font-bold mb-4"
            >
              Discount Filter
              {isStart ? <FiMinus /> : <FiPlus />}
            </h2>
            {isStart && (
              <ul className="space-y-2">
                {discountItems.map((discount) => (
                  <li key={discount} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`discount-${discount}`}
                      name="discount"
                      value={discount}
                      checked={selectedDiscount === discount}
                      onChange={handleDiscountChange}
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
            {product
              .filter((data) =>
                selectedCategory === "All Products" || !selectedCategory
                  ? true
                  : data.category === selectedCategory
              )
              .filter((data) =>
                selectedDiscount
                  ? data.discount >= parseInt(selectedDiscount)
                  : true
              )
              .map((data) => (
                <ShopProductsCard key={data.id} data={data}></ShopProductsCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
