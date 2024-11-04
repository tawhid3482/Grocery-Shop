import { RiDeleteBin6Line } from "react-icons/ri";

const CartModalShowCard = ({ carts }) => {
  const { img, name, newPrice, count } = carts;
  return (
    <div>
      <div className="flex justify-between gap-10 md:gap-0 border p-2 rounded-lg w-full md:w-80 ">
        <div className="flex items-center gap-4">
          <img src={img} alt="" className="w-12 h-12 md:w-20 md:h-20" />
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
            <RiDeleteBin6Line className="text-xl md:text-2xl font-medium"></RiDeleteBin6Line>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CartModalShowCard;
