import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const DashboardLayout = () => {

    const {logout}=useAuth()
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

    <div className="py-4 w-60 min-h-full bg-blue-500 text-base-content flex flex-col justify-between">

    <ul className="menu">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
    <div className="space-y-4 text-center text-white font-semibold">
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