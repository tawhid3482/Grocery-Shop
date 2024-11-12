import { FaArrowDownAZ } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import { GrHome } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiPagerduty } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonColor from "../../../Components/Button/ButtonColor";
import UseProducts from "../../../Hooks/UseProducts";

const Navbar2 = () => {
  const [currentColor] = ButtonColor();

  const [product]=UseProducts()

  // filtering
  const navigate = useNavigate();

  const handleNavOptionClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  const navOption = (
    <>
      <li>
        <a onClick={() => handleNavOptionClick("All Products")}>All Products</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Prepared & Deli")}>
          Prepared & Deli
        </a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Fruits")}>Fruits</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Vegetable")}>Vegetable</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Seafoods & Meat")}>
          Seafoods & Meat
        </a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Grocery")}>Grocery</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Dairy")}>Dairy</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Bakery")}>Bakery</a>
      </li>
    </>
  );

  const pageOption = (
    <>
      <li>
        <NavLink to={"/about"} activeClassName="active-link">
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
