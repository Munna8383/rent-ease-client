
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/bundle"
// import { Navigation } from 'swiper/modules';
// import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';


const Banner = () => {

    return (
        <div className="w-11/12 mx-auto pt-20 md:pt-10">


          <div className='md:flex md:justify-between md:items-center'>

            <div className='hidden md:block md:flex-1 space-y-4'>
              <h1 className='text-3xl font-semibold'>Looking for Apartments?</h1>
              <p className='text-base'>Discover the Best Apartments in Town. Find a wide range of affordable, comfortable, and modern apartments that fit your lifestyle. Whether you're looking for a cozy studio or a spacious family home, we have the perfect rental for you. Discover the Best Apartments in .</p>
            <Link to={"/apartment"}><button className='mt-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-bold py-2 px-5 rounded shadow-lg hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out'>Discover</button></Link>
            </div>


            <div className='md:flex-1'>
            <img className='w-full' src="https://i.imghippo.com/files/oMZ4c1725118682.png" alt="" />
            </div>

          </div>

         
                              

                


            
        </div>
    );
};

export default Banner;