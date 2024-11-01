import React, { useState } from "react";
import CountDown from "../../../Hooks/CountDown";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

const Banner2 = () => {
  const [timeLeft] = CountDown();

  return (
    <div>
      <div className="bg-[#019267] w-full md:h-56 rounded-lg">
        <span className="relative text-black font-medium uppercase bg-yellow-300 p-2 rounded-2xl ml-2 lg:ml-4 ">
          promotion prices
        </span>
        <div className="flex items-center justify-between mt-3 md:mt-5 lg:mt-10">
          <div className="ml-2 md:ml-5">
            <span className=" text-white font-medium text-lg md:text-xl lg:text-2xl mt-9 md:mt-16 lg:mt-28">
              New generation products are at Agricoma with limited stocks!
            </span>
            <br />
            <span className=" text-white ">
              New generation T-Shirts are at agricoma with limited stocks!
            </span>
          </div>
          <div className="mr-2 md:mr-5">
            <button className="btn rounded-xl border-none  bg-yellow-300 text-black">
              Check Products{" "}
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="md:flex lg:items-center md:flex-col md:mt-5 lg:mt-0 gap-3 lg:flex-row ">
            <div className="flex items-center gap-2 lg:gap-4   ml-5 mt-3 md:mt-0 ">
              <h2 className="text-white font-medium text-xl">Campaigns</h2>
              <button className="btn btn-sm hover:bg-black hover:text-white">
                Check All
                <MdKeyboardArrowRight className="text-xl"></MdKeyboardArrowRight>
              </button>
            </div>
            <div className="md:flex md:items-center gap-2 lg:gap-4 ml-5 mt-5 md:mt-0 ">
              <h2 className="text-white font-medium md:text-lg lg:text-xl">
                Deals of The Day
              </h2>
              |
              <span className="text-white text-sm">
                Sale up to 30% off on selected items
              </span>
            </div>
          </div>

          <div className="flex  justify-between  items-center my-5">
            <div className="md:flex md:items-center  sm:flex-col lg:gap-4 mr-5 mt-10 md:mt-8 lg:mt-0 md:flex-row">
              <p className="font-medium text-white">
                Hurry to take advantage of the offer
              </p>
              <div className="grid grid-cols-2 md:grid-flow-col gap-5 text-center auto-cols-max mt-3 md:mt-0">
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": timeLeft.days }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": timeLeft.hours }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": timeLeft.seconds }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
