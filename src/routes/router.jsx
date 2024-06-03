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
import AdminProfile from "../Dashboard/Admin/AdminProfile/AdminProfile";
import ManageUsers from "../Dashboard/Admin/ManageUsers/ManageUsers";
import AddAnnouncement from "../Dashboard/Admin/AddAnnoncement/AddAnnouncement";
import ManageCoupons from "../Dashboard/Admin/ManageCoupons/ManageCoupons";
import ManageAgreement from "../Dashboard/Admin/ManageAgreement/ManageAgreement";
import UserProfile from "../Dashboard/User/UserProfile/UserProfile";
import Announcement from "../Dashboard/Shared/Announcement";
import MemberProfile from "../Dashboard/Member/MemberProfile/MemberProfile";
import MakePayment from "../Dashboard/Member/MakePayment/MakePayment";
import PaymentHistory from "../Dashboard/Member/PaymenHistory/PaymentHistory";



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

    // Dashboard Routes

    {
      path:"dashboard",
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:"welcome",
          element:<Welcome></Welcome>
        },
        // Admin Routes
        {
          path:"adminProfile",
          element:<AdminProfile></AdminProfile>
        },
        {
          path:"manageUsers",
          element:<ManageUsers></ManageUsers>
        },
        {
          path:"addAnnouncement",
          element:<AddAnnouncement></AddAnnouncement>
        },
        {
          path:"manageCoupons",
          element:<ManageCoupons></ManageCoupons>
        },
        {
          path:"manageAgreement",
          element:<ManageAgreement></ManageAgreement>
        },
        // user routes
        {
          path:"userProfile",
          element:<UserProfile></UserProfile>
        },
        {
          path:"userAnnouncements",
          element:<Announcement></Announcement>
        },
        // member routes
        {
          path:"memberProfile",
          element:<MemberProfile></MemberProfile>
        },
        {
          path:"makePayment",
          element:<MakePayment></MakePayment>
        },
        {
          path:"memberAnnouncements",
          element:<Announcement></Announcement>
        },
        {
          path:"paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);

  export default router;