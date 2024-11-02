import { useEffect, useState } from "react";

const UseFavourite = () => {
  const [favoutire, setFavoutires] = useState();
  useEffect(() => {
    fetch("favorites.json")
      .then((res) => res.json())
      .then((data) => setFavoutires(data));
  }, []);
  return [favoutire];
};

export default UseFavourite;
