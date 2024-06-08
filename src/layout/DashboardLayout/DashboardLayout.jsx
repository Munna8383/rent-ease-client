import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { CgProfile } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";



const DashboardLayout = () => {

    
    const {logout}=useAuth()

    const {person}=useRole()

    return (
        
      <div className="flex gap-2">
      <Helmet>
           <title>Dashboard || Rent Ease</title>
       </Helmet>

<div className="w-60 drawer md:drawer-open">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content">
{/* Page content here */}
<label htmlFor="my-drawer-2" className="btn btn-sm btn-primary drawer-button mt-2 md:hidden">Dashboard</label>

</div> 
<div className="drawer-side">
<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 

<div className="py-4 w-60 min-h-full bg-emerald-800 z-50 text-base-content flex flex-col justify-between">

{
person?.role==="user"&& <ul className="menu">
{/* Sidebar content here */}
<li><NavLink to={"/dashboard/userProfile"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><CgProfile></CgProfile></span>User Profile</NavLink></li>
<li><NavLink to={"/dashboard/userAnnouncements"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><TfiAnnouncement /></span>Announcements</NavLink></li>    

</ul>
}
{
person?.role==="member"&& <ul className="menu">
{/* Sidebar content here */}

<li><NavLink to={"/dashboard/memberProfile"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><CgProfile></CgProfile></span>Member Profile</NavLink></li>
<li><NavLink to={"/dashboard/makePayment"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><MdAttachMoney/></span>Make Payment</NavLink></li>
<li><NavLink to={"/dashboard/paymentHistory"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><FaHistory /></span>Payment History</NavLink></li>


<li><NavLink to={"/dashboard/memberAnnouncements"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><TfiAnnouncement /></span>Announcements</NavLink></li>   
</ul>
}
{
person?.role==="admin"&& <ul className="menu">

<li><NavLink to={"/dashboard/adminProfile"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><CgProfile></CgProfile>Admin Profile</NavLink></li>

<li><NavLink to={"/dashboard/manageUsers"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><IoSettingsSharp /></span>ManageUsers</NavLink></li>
<li><NavLink to={"/dashboard/manageAgreement"} className={({isActive})=>isActive?"font-bold text-white border-b-2 border-white":"font-bold text-white"}><span><FaRegHandshake /></span>Manage Agreement</NavLink></li>
<li><NavLink to={"/dashboard/manageCoupons"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><RiCoupon2Line /></span>Manage Coupons</NavLink></li>
<li><NavLink to={"/dashboard/addAnnouncement"} className={({isActive})=>isActive?"font-bold  text-white border-b-2 border-white":"font-bold text-white"}><span><TfiAnnouncement /></span>Add Announcement</NavLink></li>

</ul>
}
<div className="space-y-4 text-center text-white font-light">
   <div className="border-x border-y border-white py-1 rounded-sm">
  <Link className="text-2xl" to={"/"}><span ><IoHomeOutline className="w-full"/></span></Link>

   </div>
  
 <div className="border-x border-y border-white py-1 rounded-sm">
<button className="text-2xl" onClick={()=>logout()} ><span><IoIosLogOut />
</span></button>
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