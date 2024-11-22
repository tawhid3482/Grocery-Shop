import { FaHome, FaMailBulk } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";


const Dashboard = () => {
  const navOption = (
    <>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/home"}>
          <FaHome className="text-xl"></FaHome> Home
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/order"}>
          <MdOutlineLocalGroceryStore className="text-xl"></MdOutlineLocalGroceryStore>{" "}
          Your Order
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/review"}>
          <GoCodeReview className="text-xl"></GoCodeReview> Your Review
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/favorite"}>
          <MdFavoriteBorder className="text-xl"></MdFavoriteBorder> Your Favorites
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/notification"}>
          <IoIosNotificationsOutline className="text-2xl"></IoIosNotificationsOutline> Your Notification
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/history"}>
          <MdOutlineHistory className="text-xl"></MdOutlineHistory> History
        </NavLink>
      </li>
      <div className="divider divider-accent">OR</div>

      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/"}>
          <FaHome className="text-xl"></FaHome>Main Home
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/shop"}>
          <LiaShoppingBagSolid className="text-xl"></LiaShoppingBagSolid>Shop
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/contact"}>
          <FaMailBulk className="text-xl"></FaMailBulk>Contact
        </NavLink>
      </li>

    </>
  );
  return (
    <div className="flex p-">
      <div className="w-64 min-h-screen bg-[#F0592A] text-white">
        <ul className="menu">{navOption}</ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
