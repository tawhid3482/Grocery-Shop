import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Carts = ({ items }) => {
  const { img, name, newPrice, count } = items;

  const [counts, setCount] = useState(Number(count) || 1); // Initialize count

  // Calculate the total price based on counts and newPrice
  const price = newPrice * counts;

  // Increment counter
  const increaseCount = () => setCount((prevCount) => prevCount + 1);

  // Decrement counter
  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount)); // Prevent count from going below 1
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 md:w-24 md:h-24 object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg">{name}</p>
          <div className="flex gap-2 items-center text-gray-600">
            <span className="text-green-600 font-bold">${newPrice}</span>
            <span className="text-gray-500">×</span>
            <span className="text-gray-700">{counts}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="counter flex items-center gap-3 p-2 rounded-md border border-gray-300">
          <button
            className="text-xl text-gray-600 hover:text-gray-800"
            onClick={decreaseCount}
            style={{ cursor: "pointer" }}
          >
            -
          </button>
          <p className="text-xl font-semibold">{counts}</p>
          <button
            className="text-xl text-gray-600 hover:text-gray-800"
            onClick={increaseCount}
            style={{ cursor: "pointer" }}
          >
            +
          </button>
        </div>

        <div className="text-xl font-semibold text-green-600">
          ${price.toFixed(2)}
        </div>

        <button className="text-xl text-red-600 hover:text-red-800">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Carts;
