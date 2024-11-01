import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navber from "../pages/Home/Navber/navber";
import Navbar2 from "../pages/Home/Navber/Navbar2";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;