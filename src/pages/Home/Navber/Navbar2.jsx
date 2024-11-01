import { FaArrowDownAZ } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import { GrHome } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiPagerduty } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";

const Navbar2 = () => {
  const navOption = (
    <>
      <li>
        <a>All Products</a>
      </li>
      <li>
        <a>Prepared & Deli</a>
      </li>
      <li>
        <a>Fruits</a>
      </li>
      <li>
        <a>Vegetable</a>
      </li>
      <li>
        <a>Seafoods & Meat</a>
      </li>
      <li>
        <a>Grocery </a>
      </li>
      <li>
        <a>Dairy</a>
      </li>
      <li>
        <a>Bakery</a>
      </li>
    </>
  );
  return (
    <div>
      <div className=" hidden lg:flex items-center justify-between bg-base-100 mb-1">
        <div className="">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 flex items-center bg-[#019267] text-white">
              <IoMdMenu className="text-xl"></IoMdMenu> ALL CATEGORIES{" "}
              <MdKeyboardArrowDown className="text-2xl"></MdKeyboardArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 flex items-center">
             <GrHome className="text-xl"></GrHome>Home Page
              <MdKeyboardArrowDown className="text-2xl"></MdKeyboardArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 flex items-center">
             <MdOutlineShoppingBag className="text-xl"></MdOutlineShoppingBag>Shop
              <MdKeyboardArrowDown className="text-2xl"></MdKeyboardArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 flex items-center">
             <SiPagerduty className="text-xl"></SiPagerduty>Pages
              <MdKeyboardArrowDown className="text-2xl"></MdKeyboardArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 flex items-center">
             <GrAnnounce className="text-xl"></GrAnnounce>Features
              <MdKeyboardArrowDown className="text-2xl"></MdKeyboardArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
        
         
        </div>

        <div className="">
            <div className="flex items-center gap-3">
                <div className="">
                    <PiPhoneCallLight className="text-4xl text-[#019267]"></PiPhoneCallLight>
                </div>
                <div className="">
                    <h2 className="text-lg font-medium">CALL ANYTIME</h2>
                    <p className="text-lg font-medium text-[#019267]">01826853371</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
