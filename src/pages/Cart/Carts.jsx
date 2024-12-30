import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UseCart from "../../Hooks/UseCart";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Carts = ({ items, onUpdateCount }) => {
  const { _id, img, name, newPrice, count, weight } = items;
  const [, refetch] = UseCart();
  const AxiosPublic = useAxiosPublic();

  const [counts, setCount] = useState(Number(count) || 1); // Initialize count with existing value or 1
  const price = (newPrice * counts).toFixed(2); // Calculate the total price

  const updateCountOnServer = async (updatedCount) => {
    try {
      const price = (newPrice * updatedCount).toFixed(2); // Recalculate total price
      console.log(price);

      const response = await AxiosPublic.patch(`/carts/${_id}`, {
        count: updatedCount,
        price: price, // Send the updated price
      });

      if (response.data.modifiedCount > 0) {
        toast.success(`${name} count updated successfully`);
        refetch(); // Refetch cart data
      } else {
        toast.error(`Failed to update count for ${name}`);
      }
    } catch (error) {
      console.error("Error updating count:", error);
      toast.error("An error occurred while updating the count");
    }
  };

  // Increment counter
  const increaseCount = () => {
    const updatedCount = counts + 1;
    setCount(updatedCount);
    if (onUpdateCount) onUpdateCount(items.id, updatedCount);
    updateCountOnServer(updatedCount);
  };

  // Decrement counter
  const decreaseCount = () => {
    if (counts > 1) {
      const updatedCount = counts - 1;
      setCount(updatedCount);
      if (onUpdateCount) onUpdateCount(items.id, updatedCount);
      updateCountOnServer(updatedCount);
    }
  };

  // Handle item deletion
  const handleDelete = async (itemId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await AxiosPublic.delete(`/carts/${itemId}`);
        if (response.data.deletedCount > 0) {
          toast.success(`${name} removed from cart`);
          refetch(); // Refetch cart data
        }
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("An error occurred while deleting the item");
    }
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
            className={`text-3xl text-gray-600 hover:text-gray-800 ${
              counts === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={decreaseCount}
            disabled={counts === 1}
          >
            -
          </button>

          <p className="text-xl font-semibold">{counts}</p>
          <button
            className="text-2xl text-gray-600 hover:text-gray-800"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
        <span>{weight ? `${weight} ` : ""}</span>
      </div>

      <div className="text-xl font-semibold text-green-600">${price}</div>
      <div>
        <button
          onClick={() => handleDelete(_id)}
          className="text-xl text-red-600 hover:text-red-800"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Carts;
