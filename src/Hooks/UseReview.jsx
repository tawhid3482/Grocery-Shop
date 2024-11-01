import { useEffect, useState } from "react";

const UseReview = () => {
    const [review, setReviews]=useState()
   useEffect(()=>{
    fetch('review.json')
    .then(res=>res.json())
    .then(data => setReviews(data))
   },[])
   return[review]
};

export default UseReview;