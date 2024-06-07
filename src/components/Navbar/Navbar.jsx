import Lottie from "lottie-react";
import animationData from "../../../public/icon.json"
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user,logout}= useAuth()

  const handleLogout=()=>{

    logout()
  }

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        setTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light'));
      };
      
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
    return (
        <div className="">

<div className="navbar bg-base-100 fixed top-0 z-50 px-10 bg-opacity-80">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={"/"} className={({isActive})=>isActive?"font-bold  text-blue-500 border-b-2 border-blue-500":"font-bold text-black"}>Home</NavLink></li>
      <li><NavLink to={"/apartment"} className={({isActive})=>isActive?"font-bold  text-blue-500 border-b-2 border-blue-500":"font-bold text-black"}>Apartment</NavLink></li>
      </ul>
    </div>
   <div className="flex items-center">
   <h1> <Lottie  className="h-[70px] w-[100px]" animationData={animationData} loop={true} /></h1>
    <h1 className="text-3xl font-bold hidden sm:block">Rent<span className="text-blue-500">Ease</span></h1>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-3">
    <li><NavLink to={"/"} className={({isActive})=>isActive?"font-bold  text-blue-500 border-b-2 border-blue-500":"font-bold text-black"}>Home</NavLink></li>
      <li><NavLink to={"/apartment"} className={({isActive})=>isActive?"font-bold  text-blue-500 border-b-2 border-blue-500":"font-bold text-black"}>Apartment</NavLink></li>
    
    </ul>
  </div>
  <div className="navbar-end space-x-5">
{/* 
  <button className="btn  border-2 border-[#78d8d9] hover:bg-[#78d8d9] text-black font-bold">Login</button> */}
   <button onClick={toggleTheme}>{theme==="light"?<span className='text-3xl'><MdOutlineDarkMode /></span>:<span className="text-3xl"><CiLight /></span>}</button>

   {
    user? <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><button>{user?.displayName}</button></li>
      <li>
      <Link to={"/dashboard/welcome"}>Dashboard</Link>
      </li>
      
      <li>
      <button onClick={handleLogout}>Logout</button>
      </li>
      
    </ul>
  </div>:<Link to={"/login"}><button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Login
</span>
</button></Link>
   }
  
 
  </div>
</div>

            
        </div>
    );
};

export default Navbar;