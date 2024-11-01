import { useEffect, useState } from "react";

const UseProCard = () => {
  const [proCard, setProCard] = useState();
  useEffect(() => {
    fetch("proCard.json")
      .then((res) => res.json())
      .then((data) => setProCard(data));
  }, []);
  return [proCard];
};

export default UseProCard;
