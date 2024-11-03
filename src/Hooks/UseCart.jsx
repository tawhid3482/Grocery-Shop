import { useEffect, useState } from "react";

const UseCart = () => {
    const [cart,setCart]=useState()
   useEffect(()=>{
    fetch('cart.jso')
    .then(res=>res.json())
    .then(data=>setCart(data))
   },[])
   return[cart]
};

export default UseCart;