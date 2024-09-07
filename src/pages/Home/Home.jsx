import { Helmet } from "react-helmet-async";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Coupons from "../../components/Coupons/Coupons";
import OurLocation from "../../components/OurLocation/OurLocation";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home || Rent Ease</title>
            </Helmet>

            <Banner></Banner>
            <About></About>
            <Gallery></Gallery>
            <Coupons></Coupons>
            <OurLocation></OurLocation>
            
        </div>
    );
};

export default Home;