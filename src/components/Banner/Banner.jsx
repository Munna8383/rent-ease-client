
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"
import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';


const Banner = () => {

    return (
        <div className="w-full">
                              
<Swiper 
             modules={[Navigation,Autoplay,Pagination]}
               pagination={{clickable:true}}
               loop={true}
               autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                
              }}
              className="mySwiper"  >
           
              
              <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/jy84tHF/wall-416060-1920.jpg)] h-[600px] w-full bg-cover bg-no-repeat object-cover'>


          </div>
        </SwiperSlide>
              <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/LNt2KBh/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg)] h-[600px] w-full bg-cover bg-no-repeat object-cover'>


          </div>
        </SwiperSlide>
              <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/HGXJ3MK/pexels-framedbydavinci-3946659.jpg)] h-[600px] w-full bg-cover bg-no-repeat object-cover'>


          </div>
        </SwiperSlide>
              <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/0nPP1QV/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg)] h-[600px] w-full bg-cover bg-no-repeat object-cover'>


          </div>
        </SwiperSlide>
              
            
             
              
        
              </Swiper>
                


            
        </div>
    );
};

export default Banner;