import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="mt-24 border-2 ">
      <footer className="footer footer-center border-t-2 border-black p-5 text-base-content rounded">
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="mt-4 sm:mt-0">
          <div className="flex justify-center gap-5">
            <span className="text-xl text-[#78d8d9]"><FaTwitter /></span>
            <span className="text-xl text-red-600"><FaYoutube /></span>
            <span className="text-xl text-sky-700"><FaFacebook /></span>
          </div>
        </nav>
        <aside className="mt-4 sm:mt-0 text-center">
          <h1 className="text-base">Copyright © 2024 - All right reserved by Rent<span className="text-blue-500">Ease</span></h1>
        </aside>
      </footer>
    </div>
    
    
    
    );
};

export default Footer;