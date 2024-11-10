import { useEffect, useState } from "react";

const UseBrands = () => {
  const [brand, setBrands] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);
  return [brand,loading];
};

export default UseBrands;
