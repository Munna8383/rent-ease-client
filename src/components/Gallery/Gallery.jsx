import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const axiosSecure = useAxiosSecure()

    const {data:apartment=[],isLoading}=useQuery({
        queryKey:["allApartments"],
        queryFn:async()=>{

            const res = await axiosSecure.get(`/apartments`)

            return res.data
        }
    })







    return (
        <div className="w-11/12 mx-auto mt-24">
         <div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-500 mt-5'>Apartment Gallery</h1>
            </div>


            <div className="mt-10">

            <Slider {...settings}>

                {
                    apartment?.map((item)=><div className="px-2"  key={item._id}>

                        <img className="h-[400px] border-2 border-black" src={item?.apartment_image} alt="" />

                    </div>)
                }
       
      </Slider>

            </div>
            
        </div>
    );
};

export default Gallery;