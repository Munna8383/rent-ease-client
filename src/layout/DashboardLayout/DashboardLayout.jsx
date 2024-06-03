import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";


const DashboardLayout = () => {

    
    const {logout}=useAuth()

    const {person}=useRole()

    return (
        <div className="flex gap-5">

<div className="w-60 drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button mt-5 lg:hidden">Open Dashboart</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 

    <div className="py-4 w-60 min-h-full bg-slate-700 text-base-content flex flex-col justify-between">

   {
    person?.role==="user"&& <ul className="menu">
    {/* Sidebar content here */}
    <li><NavLink to={"/dashboard/userProfile"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>User Profile</NavLink></li>
    <li><NavLink to={"/dashboard/userAnnouncements"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Announcements</NavLink></li>    

  </ul>
   }
   {
    person?.role==="member"&& <ul className="menu">
    {/* Sidebar content here */}

    <li><NavLink to={"/dashboard/memberProfile"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Member Profile</NavLink></li>
    <li><NavLink to={"/dashboard/makePayment"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Make Payment</NavLink></li>
    <li><NavLink to={"/dashboard/paymentHistory"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Payment History</NavLink></li>


    <li><NavLink to={"/dashboard/memberAnnouncements"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Announcements</NavLink></li>   
  </ul>
   }
   {
    person?.role==="admin"&& <ul className="menu">

<li><NavLink to={"/dashboard/adminProfile"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Admin Profile</NavLink></li>
   
   <li><NavLink to={"/dashboard/manageUsers"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>ManageUsers</NavLink></li>
   <li><NavLink to={"/dashboard/manageAgreement"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Manage Agreement</NavLink></li>
   <li><NavLink to={"/dashboard/manageCoupons"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Manage Coupons</NavLink></li>
   <li><NavLink to={"/dashboard/addAnnouncement"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}>Add Announcement</NavLink></li>

  </ul>
   }
    <div className="space-y-4 text-center text-white font-light">
        <div className="border-2 border-white py-1 rounded-sm">
       <h1 className="w-full" > <Link className="w-full" to={"/"}>Home</Link></h1>

        </div>
       
      <div className="border-2 border-white py-1 rounded-sm">
     <h1 className="w-full" > <button className="w-full" onClick={()=>logout()} >Logout</button></h1>
      </div>
    </div>

    </div>

  
    
  
  </div>
</div>
     
     <div className="flex-1 p-5">
        <Outlet></Outlet>
     </div>
            
        </div>
    );
};

export default DashboardLayout;