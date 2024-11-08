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
        loader:()=>fetch('/caro.json')
      },
      {
        path: "/favorite",
        element: <Favoutire></Favoutire>,
      },
      {
        path: "/productsDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader:()=>fetch('/products.json')
      },
    ],
  },
]);
