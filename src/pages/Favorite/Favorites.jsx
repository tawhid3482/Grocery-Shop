import { RiDeleteBin6Line } from "react-icons/ri";

const Favorites = ({ data }) => {
  console.log(data);
  const { img, name, oldPrice, newPrice, stock } = data;
  return (
    <div>
      <div className="flex justify-between  border p-3 rounded-lg w-full md:w-80 lg:w-[480px]">
        <div className="flex items-center gap-4">
          <img src={img} alt="" className="w-40 lg:w-52 md:h-44" />
          <div className="">
            <p>{name}</p>
            <div className="flex gap-2 items-center">
              <span className="relative font-medium ">
                ${oldPrice}
                <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
              </span>
              <span>{newPrice}</span>
            </div>
            <button className="btn btn-ghost btn-sm">Add To Cart</button>
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

export default Favorites;
