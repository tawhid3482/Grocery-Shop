import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import UseProducts from "../../Hooks/UseProducts";
import ShopProductsCard from "./ShopProductsCard";

const ShopProducts = ({ items, discountItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const [isColor, setIsColor] = useState(false);
  const [isBrand, setIsBrand] = useState(false);
  const [isKg, setIsKg] = useState(false);

  const [product] = UseProducts();

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleDropdown2 = () => {
    setIsStart((prev) => !prev);
  };

  const filteredItems =
    selectedCategories.length > 0
      ? items.filter((item) => selectedCategories.includes(item.category)) // Assuming 'category' property in items
      : items;

  const discountedItems = filteredItems.filter(
    (item) => discountItems.find((discount) => discount.id === item.id) // Assuming 'id' property for matching discount
  );

  const navOption = (
    <>
      <li>
        <a>Blue</a>
      </li>
      <li>
        <a>Black</a>
      </li>
      <li>
        <a>Red</a>
      </li>
      <li>
        <a>Green</a>
      </li>
      <li>
        <a>Orange</a>
      </li>
    </>
  );
  const navOption2 = (
    <>
      <li>
        <a>Freshy</a>
      </li>
      <li>
        <a>Mango</a>
      </li>
      <li>
        <a>Pennyw</a>
      </li>
      <li>
        <a>Savor</a>
      </li>
      <li>
        <a>TIS</a>
      </li>
    </>
  );
  const navOption3 = (
    <>
      <li>
        <a>0.25KG</a>
      </li>
      <li>
        <a>0.50KG</a>
      </li>
      <li>
        <a>1.00KG</a>
      </li>
      <li>
        <a>2.00KG</a>
      </li>
      <li>
        <a>5.00KG</a>
      </li>
    </>
  );

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
            {isOpen && ( // Conditionally render category list
              <ul className="space-y-2">
                {items.map((category) => (
                  <li key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={handleCategoryChange}
                    />
                    <label className="ml-2">{category}</label>
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
            {isStart && ( // Conditionally render category list
              <ul className="space-y-2">
                {discountItems.map((category) => (
                  <li key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={handleCategoryChange}
                    />
                    <label className="ml-2">{category}</label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="md:w-9/12">
          <div className="flex justify-between items-center  border p-2 rounded-xl  h-16">
            <div className=" relative">
              {" "}
              {/* Add relative here */}
              <button
                className="btn ml-2 btn-ghost border"
                onClick={() => setIsColor(!isColor)}
              >
                Select Color
                <FaArrowDown />
              </button>
              {/* Dropdown Menu */}
              {isColor && (
                <ul className="absolute top-full mt-2 w-full dropdown-content menu bg-base-100 rounded-box shadow p-2 z-10">
                  {navOption}
                </ul>
              )}
            </div>
            <div className=" relative">
              {" "}
              {/* Add relative here */}
              <button
                className="btn ml-2 btn-ghost"
                onClick={() => setIsBrand(!isBrand)}
              >
                Select Brands
                <FaArrowDown />
              </button>
              {/* Dropdown Menu */}
              {isBrand && (
                <ul className="absolute top-full mt-2 w-full dropdown-content menu bg-base-100 rounded-box shadow p-2 z-10">
                  {navOption2}
                </ul>
              )}
            </div>
            <div className=" relative">
              {" "}
              {/* Add relative here */}
              <button
                className="btn ml-2 btn-ghost"
                onClick={() => setIsKg(!isKg)}
              >
                Select KG
                <FaArrowDown />
              </button>
              {/* Dropdown Menu */}
              {isKg && (
                <ul className="absolute top-full mt-2 w-full dropdown-content menu bg-base-100 rounded-box shadow p-2 z-10">
                  {navOption3}
                </ul>
              )}
            </div>
            <div className="">
              <button className="btn bg-[#019267] text-white uppercase">
                Filter
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center 2xl:grid-cols-4 lg:gap-4">
            {product?.map((data) => (
              <ShopProductsCard key={data.id} data={data}></ShopProductsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
