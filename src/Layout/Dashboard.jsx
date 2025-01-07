import { FaHome, FaMailBulk, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaProductHunt } from "react-icons/lia";
import { FaBook } from "react-icons/fa6";
import UseAdmin from "../Hooks/UseAdmin";
import { CiDeliveryTruck } from "react-icons/ci";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const adminNav = (
    <>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/adminHome"}>
          <FaHome className="text-xl"></FaHome>Admin Home
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/allOrders"}>
          <CiDeliveryTruck className="text-xl"></CiDeliveryTruck>All Order
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/addProducts"}>
          <LiaProductHunt className="text-xl"></LiaProductHunt>Add Products
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/manageProducts"}>
          <FaBook className="text-xl"></FaBook>Manage Products
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/allUsers"}>
          <FaUsers className="text-xl"></FaUsers>All Users
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/coupon"}>
          <FaUsers className="text-xl"></FaUsers>Add Coupon
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/manageCoupon"}>
          <FaUsers className="text-xl"></FaUsers>Manage Coupon
        </NavLink>
      </li>
    </>
  );
  const navOption = (
    <>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/home"}>
          <FaHome className="text-xl"></FaHome> Home
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/yourOrder"}>
          <MdOutlineLocalGroceryStore className="text-xl"></MdOutlineLocalGroceryStore>{" "}
          Your Order
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/reviews"}>
          <GoCodeReview className="text-xl"></GoCodeReview> Your Review
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/favorite"}>
          <MdFavoriteBorder className="text-xl"></MdFavoriteBorder> Your
          Favorites
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/notification"}>
          <IoIosNotificationsOutline className="text-2xl"></IoIosNotificationsOutline>{" "}
          Your Notification
        </NavLink>
      </li>
      <li className="bg-[#019267] rounded-lg my-2">
        <NavLink to={"/dashboard/paymentHistory"}>
          <MdOutlineHistory className="text-xl"></MdOutlineHistory>Payment History
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-64 bg-[#F0592A] text-white md:sticky top-0 md:h-screen">
        <ul className="menu">
          {isAdmin ? adminNav : navOption}

          <div className="divider divider-accent">OR</div>
          {/* shared navOption  */}
          <li className="bg-[#019267] rounded-lg my-2">
            <NavLink to={"/"}>
              <FaHome className="text-xl"></FaHome>Main Home
            </NavLink>
          </li>
          <li className="bg-[#019267] rounded-lg my-2">
            <NavLink to={"/shop"}>
              <LiaShoppingBagSolid className="text-xl"></LiaShoppingBagSolid>
              Shop
            </NavLink>
          </li>
          <li className="bg-[#019267] rounded-lg my-2">
            <NavLink to={"/contact"}>
              <FaMailBulk className="text-xl"></FaMailBulk>Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
