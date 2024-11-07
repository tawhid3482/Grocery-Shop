import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navber from "../pages/Home/Navber/navber";
import Navbar2 from "../pages/Home/Navber/Navbar2";

const Main = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 w-full ">
        <Navber />
        <Navbar2 />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
