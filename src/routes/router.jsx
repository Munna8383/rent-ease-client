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
import ChangeValidity from "../Dashboard/Admin/ManageCoupons/ChangeValidity";
import PaymentPage from "../Dashboard/Member/PaymentPage/PaymentPage";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";



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
          element:<Apartment></Apartment>,
          loader: ()=> fetch("https://rent-ease-server.vercel.app/apartmentCount")
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
          element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
        {
          path:"manageUsers",
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:"addAnnouncement",
          element:<AdminRoute><AddAnnouncement></AddAnnouncement></AdminRoute>
        },
        {
          path:"manageCoupons",
          element:<AdminRoute><ManageCoupons></ManageCoupons></AdminRoute>
        },
        {
          path:"changeCoupon/:id",
          element:<AdminRoute><ChangeValidity></ChangeValidity></AdminRoute>

        },
        {
          path:"manageAgreement",
          element:<AdminRoute><ManageAgreement></ManageAgreement></AdminRoute>
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
          element:<MemberRoute><MemberProfile></MemberProfile></MemberRoute>
        },
        {
          path:"makePayment",
          element:<MemberRoute><MakePayment></MakePayment></MemberRoute>
        },
        {
          path:"memberAnnouncements",
          element:<MemberRoute><Announcement></Announcement></MemberRoute>
        },
        {
          path:"paymentHistory",
          element:<MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
        },
        {
          path:"paymentPage",
          element:<MemberRoute><PaymentPage></PaymentPage></MemberRoute>
        }
      ]
    }
  ]);

  export default router;