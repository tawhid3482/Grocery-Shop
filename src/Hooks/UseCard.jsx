import { useEffect, useState } from "react";

const UseCard = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return [cards];
};

export default UseCard;
