import { TbBackground } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import UseProducts from "../../../Hooks/UseProducts";

const CardShow = () => {
 


  


  return (
    <div>
      <button onClick={handleCardClick} className="">
        <div
          style={cardBgColor}
          className="card w-72 h-96 shadow-xl my-5 hover:"
        >
          <div className="card-body">
            <h2 className="text-sm font-medium uppercase text-orange-700">
              {name}
            </h2>
            <p className="text-xl font-medium">{description}</p>
          </div>
          <figure>
            <img
              src={img}
              alt="img"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 -rotate-45"
            />
          </figure>
        </div>
      </button>
    </div>
  );
};

export default CardShow;
