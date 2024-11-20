import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navber from "../pages/Home/Navber/navber";
import Navbar2 from "../pages/Home/Navber/Navbar2";

const Main = () => {
  const location = useLocation();
  const lookPath = location.pathname
  const noHeaderFooter = lookPath.includes("/login") || lookPath.includes("/signup");

  return (
    <div>
      {noHeaderFooter || (
        <div className="sticky top-0 z-20 w-full ">
          <Navber />
          <Navbar2 />
        </div>
      )}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
