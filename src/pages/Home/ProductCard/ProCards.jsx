import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const ProCards = ({ proCards }) => {
  const { id, img, oldPrice, newPrice, name, rating, stock } = proCards;
  return (
    <div>
      <div className="card border bg-base-100 w-64  h-[400px] shadow-lg">
        <Link to={`/productsDetails/${id}`}>
          <figure>
            <img src={img} alt="img" className="lg:h-40 " />
          </figure>
        </Link>

        <hr className="my-2" />
        <div className="card-body mt-0 pt-0">
          <h2 className="text-lg font-medium">{name}</h2>
          <div className="flex items-center gap-3">
            <span className="relative font-medium ">
              ${oldPrice}
              <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
            </span>
            <spam className="text-[#019267] font-medium">${newPrice}</spam>
          </div>
          <div className="flex items-center gap-3">
            <spam className="text-[#019267] font-medium">{stock}</spam>
            <Rating
              initialRating={rating}
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#019267" // Change fill color to green
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              readonly
            />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link to="">
                <MdOutlineFavoriteBorder className="text-xl "></MdOutlineFavoriteBorder>
              </Link>
              <Link to={`/productsDetails/${id}`}>
                <FaRegEye className="text-xl"></FaRegEye>
              </Link>
            </div>
            <div className="">
              <button className="btn bg-[#019267] rounded-3xl">
                <FaBasketShopping className="text-xl text-white " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProCards;
