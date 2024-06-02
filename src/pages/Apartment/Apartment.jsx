import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useLoaderData } from "react-router-dom";



const Apartment = () => {
    const axiosSecure = useAxiosSecure()
    const {count} = useLoaderData()


    const {data:apartment=[],isLoading}=useQuery({
        queryKey:["allApartment"],
        queryFn:async()=>{

            const res = await axiosSecure.get("/apartments")

            return res.data
        }
    })

    console.log(apartment)
    console.log(count)
    return (
        <div className="w-11/12 mx-auto pt-20">
            {
                isLoading&&<div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
            }

<div className='text-center'>
                <h1 className='text-4xl font-bold text-blue-500'>Explore Our Apartments</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
                {
                    apartment.map((item,index)=><div key={index} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                            <img className="p-8 h-[300px] rounded-t-lg" src={item.apartment_image} alt="product image" />
                        
                        <div className="px-5 pb-5 space-y-2">
                        
                           <div className="text-left text-lg font-bold space-y-2 ">
                            <h1  className="text-center">Apartment Number:<span className="text-blue-500">{item.apartment_no}</span></h1>
                            <div className="flex justify-between">
                            <h1>Block Name:<span className="text-blue-500">{item.block_name}</span></h1>
                            <h1>Floor Number:<span className="text-blue-500">{item.floor_no}</span></h1>
                            </div>
                           </div>
                            
                            
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.rent}</span>
                                <button className="text-white  mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 font-bold text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            
        </div>
    );
};

export default Apartment;