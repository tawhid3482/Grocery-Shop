import { FaArrowDownAZ } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import { GrHome } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiPagerduty } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar2 = () => {
  const colors = [ "#F0592A","#019267", "#e86b50", "#d8ab49", "#0aaec8", "#b759f1"]; 
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(colorInterval); // Cleanup on component unmount
  }, [colors]);

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
        <a>Grocery</a>
      </li>
      <li>
        <a>Dairy</a>
      </li>
      <li>
        <a>Bakery</a>
      </li>
    </>
  );

  const pageOption = (
    <>
      <li>
        <NavLink to={"/about"}  activeClassName="active-link">
          About us
        </NavLink>
        <NavLink to={"/blog"} activeClassName="active-link">
          Blog
        </NavLink>
        <NavLink to={"/contact"} activeClassName="active-link">
          Contact
        </NavLink>
        <NavLink to={"/faq"} activeClassName="active-link">
          FAQ
        </NavLink>
        <NavLink to={"/return"} activeClassName="active-link">
         Returns Policy
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="hidden lg:flex items-center justify-between bg-base-100 mb-1">
        <div className="">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              style={{ backgroundColor: currentColor }}
              className="btn m-1 flex items-center text-white transition-all duration-300 scale-105"
            >
              <IoMdMenu className="text-xl" />
              ALL CATEGORIES
              <MdKeyboardArrowDown className="text-2xl" />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "btn m-1 flex items-center bg-[#019267] text-white"
                  : "btn m-1 flex items-center"
              }
            >
              <GrHome className="text-xl"></GrHome>Home Page
            </NavLink>
          </div>

          <div className="dropdown dropdown-hover">
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive
                  ? "btn m-1 flex items-center bg-[#019267] text-white"
                  : "btn m-1 flex items-center"
              }
            >
              <MdOutlineShoppingBag className="text-xl"></MdOutlineShoppingBag>
              Shop
            </NavLink>
          </div>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 flex items-center"
            >
              <SiPagerduty className="text-xl"></SiPagerduty>Pages
              <MdKeyboardArrowDown className="text-2xl"></MdKeyboardArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
              {pageOption}
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
