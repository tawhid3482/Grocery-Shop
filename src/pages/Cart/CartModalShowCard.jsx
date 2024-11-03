import { RiDeleteBin6Line } from "react-icons/ri";

const CartModalShowCard = ({ carts }) => {
  const { img, name, newPrice, count } = carts;
  return (
    <div>
      <div className="flex justify-between border p-2 rounded-lg w-full md:w-80 ">
        <div className="flex items-center gap-4">
          <img src={img} alt="" className="w-20 h-20" />
          <div className="">
            <p>{name}</p>
            <div className="flex gap-2 items-center">
              <span>{newPrice}</span>
              * 
              <span>{count}</span>
            </div>
          </div>
        </div>
        <div className="">
          <button>
            <RiDeleteBin6Line className="text-2xl font-medium"></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModalShowCard;
