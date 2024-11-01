import { useEffect, useState } from "react";

const UseBrands = () => {
    const [brand,setBrands]=useState()
   useEffect(()=>{
    fetch('brands.json')
    .then(res=>res.json())
    .then(data=>setBrands(data))
   },[])
   return[brand]
};

export default UseBrands;