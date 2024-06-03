import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Announcement = () => {

    const axiosSecure = useAxiosSecure()
    const [data,setData]= useState([])

    useEffect(()=>{

        axiosSecure.get("/announcements")
        .then(res=>{
            setData(res.data)
        })





    },[axiosSecure])




    return (
        <div className="space-y-5">
            <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-blue-500'>Announcement</h1>
            </div>

            <div className="sm:flex justify-center items-center gap-5 mt-10">

<div className="hidden sm:block">

    <img className="w-64" src="https://i.ibb.co/2Zkhp8Y/loudspeaker-1459128-640.png"/>

</div>


<div className="flex-1 space-y-2">

    {
        data.map((item,index)=><div key={item._id} className="bg-red-200 container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                
                <div>
                    <h4 className="text-base font-bold"><span>{index+1}.</span>{item.title}</h4>
                    
                </div>
            </div>
        
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>{item.description}</p>
        </div>
    </div>)
    }



    


</div>




</div>
            
        </div>
    );
};

export default Announcement;