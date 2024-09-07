import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader, ClockLoader } from "react-spinners";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const MainLayout = () => {

    const [loading,setLoading]=useState(true)

    const override = {
        display: "block",
        height:"30px",
        width:"30px",
        margin: "250px auto",
        borderColor: "blue",
      };


    useEffect(()=>{

        setTimeout(() => {

            setLoading(false)
            
        }, 2000);

    },[])

  



    return (
        <div className="max-w-7xl mx-auto">
      <ScrollToTop smooth={true} top={100}  width="40" color="blue"/>
            

            <Helmet>
                <title>Rent Ease</title>
            </Helmet>

            {
                loading?   <ClimbingBoxLoader
                color={"#0000FF"}
                cssOverride={override}
                loading={loading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> :  <>

                <Navbar></Navbar>
                   <div data-aos="fade-up" data-aos-duration="500" className="">
                   <Outlet></Outlet>
                   </div>
                   <Footer></Footer> 
                </>
            }
            
        </div>
    );
};

export default MainLayout;