import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
    return (
        <div>

            <Helmet>
                <title>Rent Ease</title>
            </Helmet>

            <Navbar></Navbar>
            <div className="">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;