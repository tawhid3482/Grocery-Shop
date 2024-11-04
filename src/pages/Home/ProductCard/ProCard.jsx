import React from "react";
import Carousel from "../Carousel/Carousel";
import UseProCard from "../../../Hooks/UseProCard";
import ProCards from "./ProCards";

const ProCard = () => {
  const [proCard] = UseProCard();

  return (
    <div>
      <div className="my-2 flex justify-between items-center flex-col lg:flex-row">
        <div className="hidden lg:block md:w-64 md:h-[400px]">
          <Carousel></Carousel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {proCard?.map((proCards) => (
            <ProCards key={proCards?.id} proCards={proCards}></ProCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProCard;
