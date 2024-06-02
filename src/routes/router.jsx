import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import MainLayout from "../layout/MainLayot/MainLayout";
import Apartment from "../pages/Apartment/Apartment";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Welcome from "../Dashboard/Welcome/Welcome";



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
          element:<PrivateRoute><Apartment></Apartment></PrivateRoute>,
          loader: ()=> fetch("http://localhost:5000/apartmentCount")
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

    {
      path:"dashboard",
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:"welcome",
          element:<Welcome></Welcome>
        }
      ]
    }
  ]);

  export default router;