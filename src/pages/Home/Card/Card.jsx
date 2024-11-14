import { NavLink } from "react-router-dom";
import UseCard from "../../../Hooks/UseCard";

const Card = () => {
  const [cards] = UseCard();

  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center ">
      {cards?.map((card) => (
        <div key={card.id}>
          <NavLink to={`/shop/${card.name}`} className="block">
            <div
              style={{ backgroundColor: card.cardColor }}
              className="card w-72 h-96 shadow-xl my-5 hover:"
            >
              <div className="card-body">
                <h2 className="text-sm font-medium uppercase text-orange-700">
                  {card.name}
                </h2>
                <p className="text-xl font-medium">{card.description}</p>
              </div>
              <figure>
                <img
                  src={card.img}
                  alt="img"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110 -rotate-45"
                />
              </figure>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Card;
