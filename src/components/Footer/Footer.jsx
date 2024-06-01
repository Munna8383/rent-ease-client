import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-24">
         <footer className="footer footer-center p-10 bg-slate-200 text-base-content rounded mt-25">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
     <span className="text-2xl text-[#78d8d9]"><FaTwitter /></span>
     <span className="text-2xl text-red-600"><FaYoutube></FaYoutube></span>
     <span className="text-2xl text-sky-700"><FaFacebook /></span>
    </div>
  </nav> 
  <aside>
    <h1 className="text-lg">Copyright © 2024 - All right reserved by  Rent<span className="text-blue-500">Ease</span></h1>
  </aside>
</footer>
        </div>
    );
};

export default Footer;