import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import { GrHome } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiPagerduty } from "react-icons/si";
import ButtonColor from "../../../Components/Button/ButtonColor";

const Navbar2 = () => {
  const navigate = useNavigate();
  const [currentColor] = ButtonColor();

  // Function to handle category click
  const handleNavOptionClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  const navOption = (
    <>
      <li>
        <a onClick={() => handleNavOptionClick("All Products")}>All Products</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Prepared and Deli")}>
          Prepared & Deli
        </a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Fruits")}>Fruits</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Vegetables")}>Vegetables</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Seafood and Meat")}>
        Seafood & Meat
        </a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Grocery")}>Grocery</a>
      </li>
      <li>
        <a onClick={() => handleNavOptionClick("Bakery")}>Bakery</a>
      </li>
    </>
  );

  const pageOption = (
    <>
      <li>
        <a href="/about">About us</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
        <a href="/return">Returns Policy</a>
      </li>
    </>
  );


  return (
    <div className="hidden lg:flex items-center justify-between bg-base-100 mb-1">
      <div className="flex">
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
          <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
            {navOption}
          </ul>
        </div>
        <a href="/"  className={`btn m-1 flex items-center}`}>
          <GrHome className="text-xl" />
          Home Page
        </a>
        <a href="/shop"  className={`btn m-1 flex items-center`}>
          <MdOutlineShoppingBag className="text-xl" />
          Shop
        </a>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 flex items-center">
            <SiPagerduty className="text-xl" />
            Pages
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
            {pageOption}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <PiPhoneCallLight className="text-4xl text-[#019267]" />
        <div>
          <h2 className="text-lg font-medium">CALL ANYTIME</h2>
          <p className="text-lg font-medium text-[#019267]">01826853371</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
