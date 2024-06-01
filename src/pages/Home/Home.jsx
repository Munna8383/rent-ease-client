import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Coupons from "../../components/Coupons/Coupons";
import OurLocation from "../../components/OurLocation/OurLocation";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <About></About>
            <Coupons></Coupons>
            <OurLocation></OurLocation>
            
        </div>
    );
};

export default Home;