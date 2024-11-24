import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home/Home";
import Favoutire from "../pages/Favorite/Favoutire";
import ProductDetails from "../pages/Home/Products/ProductDetails";
import ErrorPage from "../pages/Shared/ErrorPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import FAQ from "../pages/FAQ/FAQ";
import Return from "../pages/Return/Return";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import SearchProduct from "../pages/Search/SearchProduct";
import CheckOut from "../pages/CheckOut/CheckOut";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Wishlist from "../pages/Dashboard/Favorite/Favorite";
import Favorite from "../pages/Dashboard/Favorite/Favorite";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/return",
        element: <Return></Return>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("/caro.json"),
      },
      {
        path: "/favorite",
        element: <Favoutire></Favoutire>,
      },
      {
        path: "/productsDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/search",
        element: <SearchProduct></SearchProduct>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: <UserHome></UserHome>,
      },
      {
        path: "favorite",
        element: <Favorite></Favorite>,
      },

      // admin routes
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
