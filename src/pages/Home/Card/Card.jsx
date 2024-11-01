import UseCard from "../../../Hooks/UseCard";
import CardShow from "./CardShow";

const Card = () => {
  const [cards] = UseCard();

  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center ">
      {cards?.map((card) => (
        <CardShow key={card.id} card={card}></CardShow>
      ))}
    </div>
  );
};

export default Card;
