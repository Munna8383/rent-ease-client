import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import MainLayout from "../layout/MainLayot/MainLayout";
import Apartment from "../pages/Apartment/Apartment";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
        path:"/",
        element:<Home></Home>
        },
        {
          path:"/apartment",
          element: <Apartment></Apartment>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;