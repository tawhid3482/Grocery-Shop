import { useEffect, useState } from "react";

const UseProducts = () => {
    const [product, setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return[product]
};

export default UseProducts;