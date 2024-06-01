import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import MainLayout from "../layout/MainLayot/MainLayout";
import Apartment from "../pages/Apartment/Apartment";



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
        }
      ]
    },
  ]);

  export default router;