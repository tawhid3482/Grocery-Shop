import { useEffect, useState } from "react";

const UseProducts = () => {
    const [product, setProducts]=useState()
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return[product]
};

export default UseProducts;