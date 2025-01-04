import React from "react";
import Carousel from "../Carousel/Carousel";
import UseProducts from "../../../Hooks/UseProducts";
import CardSwiper from "./CardSwiper";

const ProCard = () => {
  const [product] = UseProducts();
  return (
    <div>
      <div className="my-2 flex  lg:flex-row justify-around items-center flex-col p-5 gap-8">
        <div className="hidden lg:block md:w-72 md:h-[400px] w-8/12">
          <Carousel></Carousel>
        </div>
        <div className="w-full lg:w-9/12   ">
          <CardSwiper product={product}></CardSwiper>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
