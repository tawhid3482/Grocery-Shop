import React from "react";
import Carousel from "../Carousel/Carousel";
import UseProCard from "../../../Hooks/UseProCard";
import ProCards from "./ProCards";

const ProCard = () => {
  const [proCard] = UseProCard();

  return (
    <div>
      <div className="my-2 flex  lg:flex-row justify-around items-center flex-col p-5">
        <div className="hidden lg:block md:w-72 md:h-[400px] w-8/12">
          <Carousel></Carousel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-5 ">
          {proCard?.map((proCards) => (
            <ProCards key={proCards?.id} proCards={proCards}></ProCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProCard;
