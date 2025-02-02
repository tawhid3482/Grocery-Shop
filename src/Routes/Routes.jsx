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
import Favorite from "../pages/Dashboard/Favorite/Favorite";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddProducts from "../pages/Dashboard/AddProduct/AddProducts";
import ManageProducts from "../pages/Dashboard/AddProduct/ManageProducts";
import UpdateProducts from "../pages/Dashboard/AddProduct/UpdateProducts";
import YourReviews from "../pages/Dashboard/YourReview/YourReviews";
import Payment from "../pages/Dashboard/Payment/Payment";
import Coupon from "../pages/Dashboard/Coupon/Coupon";
import ManageCoupon from "../pages/Dashboard/Coupon/ManageCoupon";
import AllOrders from "../pages/Dashboard/AllOrder/AllOrders";
import YourOrder from "../pages/Dashboard/AllOrder/YourOrder";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import Notification from "../pages/Dashboard/YourNotification/Notification";

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
        loader: () => fetch("https://grocery-shop-server-phi.vercel.app/products"),
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
        element: <PrivateRoute><CheckOut></CheckOut> </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "payment",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
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
      {
        path: "reviews",
        element: <YourReviews></YourReviews>,
      },
      {
        path:'coupon',
        element:<Coupon></Coupon>
      },
      {
        path:'manageCoupon',
        element:<ManageCoupon></ManageCoupon>
      },
      {
        path:'yourOrder',
        element:<YourOrder></YourOrder>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'notification',
        element:<Notification></Notification>
      },
      
    

      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addProducts",
        element: (
          <AdminRoute>
            <AddProducts></AddProducts>
          </AdminRoute>
        ),
      },
      {
        path: "manageProducts",
        element: (
          <AdminRoute>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        ),
      },
      {
        path: "updateProducts/:id",
        element: (
          <AdminRoute>
            <UpdateProducts></UpdateProducts>
          </AdminRoute>
        ),
        loader: ({ params }) => fetch(`https://grocery-shop-server-phi.vercel.app/products/${params.id}`),
      },
      {
        path:'allOrders',
        element:<AdminRoute><AllOrders></AllOrders></AdminRoute>
      },
    ],
  },
]);
