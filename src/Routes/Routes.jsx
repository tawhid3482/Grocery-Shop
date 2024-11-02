import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home/Home";
import Favoutire from "../pages/Favorite/Favoutire";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/favorite',
          element:<Favoutire></Favoutire>
        }
      ]
    },
  ]);
