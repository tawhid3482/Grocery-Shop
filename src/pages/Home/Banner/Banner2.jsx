import CountDown from "../../../Hooks/CountDown";
import {
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

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
              New generation products are at Grocery-Shop with limited stocks!
            </span>
            <br />
            <span className=" text-white ">
              New generation T-Shirts are at Grocery-Shop with limited stocks!
            </span>
          </div>
          <div className="mr-2 md:mr-5">
           <Link to={'/shop'}>
           <button className="btn rounded-xl border-none  bg-yellow-300 text-black">
              Check Products{" "}
            </button>
           </Link>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="md:flex lg:items-center md:flex-col md:mt-5 lg:mt-0 gap-3 lg:flex-row ">
            <div className="flex items-center gap-2 lg:gap-4   ml-5 mt-3 md:mt-0 ">
              <h2 className="text-white font-medium text-xl">Campaigns</h2>
             <NavLink to={'/shop'}>
             <button className="btn btn-sm hover:bg-black hover:text-white">
                Check All
                <MdKeyboardArrowRight className="text-xl"></MdKeyboardArrowRight>
              </button>
             </NavLink>
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

          <div className="my-5">
            <div className="flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-4 md:mr-2 lg:mr-5 mt-10 md:mt-8 lg:mt-0">
              <p className="md:text-sm lg:text-base font-medium text-white mb-4 md:mb-0">
                Hurry to take advantage of the offer
              </p>
              <div className="grid grid-cols-2 md:flex gap-2 md:gap-4 mt-3 md:mt-0">
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content text-center">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": timeLeft.days }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content text-center">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": timeLeft.hours }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content text-center">
                  <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 border border-yellow-300 rounded-lg text-neutral-content text-center">
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
