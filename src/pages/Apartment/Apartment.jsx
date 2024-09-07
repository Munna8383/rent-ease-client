import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import useMyApartment from "../../hooks/useMyApartment";
import useRole from "../../hooks/useRole";
import { Helmet } from "react-helmet-async";



const Apartment = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const {count} = useLoaderData()
    const [currentPage,setCurrentPage]=useState(0)
    const itemPerPage = 9
    const numberOfPage = Math.ceil(count/itemPerPage)

    const pages = [...Array(numberOfPage).keys()]

    const [MyApartment,refetch] = useMyApartment()
    const {person}=useRole()




   



    const {data:apartment=[],isLoading}=useQuery({
        queryKey:["allApartment",currentPage,itemPerPage],
        queryFn:async()=>{

            const res = await axiosSecure.get(`/apartments?page=${currentPage}&size=${itemPerPage}`)

            return res.data
        }
    })

    const handlePrevious =()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }

    const handleNext=()=>{

        if(currentPage<pages.length-1){
            setCurrentPage(currentPage+1)
        }



    }


    const handleAgreement =(item)=>{

        const name = user?.displayName
        const email = user?.email
        const floor = item.floor_no
        const block = item.block_name
        const apartment = item.apartment_no
        const rent = parseInt(item.rent)
        const requestDate = moment(new Date()).format("MMM Do YY")
        const room = item.room
        const status = "pending" 


        const agreementData = {name,email,floor,block,apartment,rent,requestDate,status,room}

        axiosSecure.post("/addAgreement",agreementData)
        .then(res=>{
            if(res.data.insertedId){
                toast.success("request for agreement")
                refetch()
            }
        })


    }
        

   

    return (
        <div className="w-11/12 mx-auto pt-20">
            {
                isLoading&&<div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
            }
            <Toaster></Toaster>
            <Helmet>
                <title>Apartments || Rent Ease</title>
            </Helmet>
             {!isLoading&&
<div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-500 mt-5'>Explore Our Apartments</h1>
            </div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    apartment.map((item,index)=><div  data-aos="zoom-in" key={index} className="w-full relative  border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                    
                            <img className="p-8 h-[280px] w-full rounded-t-lg opacity-90" src={item.apartment_image} alt="product image" />
                            <h1 className="text-center absolute top-10 left-10">{item?.status==="available"?<span className="bg-green-200 px-2 py-1 rounded-md">{item?.status}</span>:<span className="bg-red-300 px-2 py-1 rounded-md">{item?.status}</span>}</h1>
                        
                        <div className="px-5 pb-5 space-y-2">
                        
                           <div className="text-left text-base font-semibold space-y-2 ">
                           
                            <h1  className="text-center">Apartment Number:<span className="text-blue-500">{item.apartment_no}</span></h1>
                            <div className="flex justify-around sm:justify-between mt-5">
                            <h1>Block Name:<span className="text-blue-500">{item.block_name}</span></h1>
                            <h1>Floor Number:<span className="text-blue-500">{item.floor_no}</span></h1>
                            </div>
                           </div>
                            
                            
                            <div className="flex items-center justify-end">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white absolute right-10 top-9">${item.rent}</span>
                                <button disabled={MyApartment || person?.role=="admin" || item?.status==="unavailable" || !user} onClick={()=>handleAgreement(item)} className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out">Agreement</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

            <div className="flex justify-center space-x-5 mt-10">
                <button onClick={handlePrevious} className="px-5 py-1 rounded-md bg-blue-500 text-white">Previous</button>
                {
                    pages.map(page=><button onClick={()=>setCurrentPage(page)} className={currentPage===page?" btn-primary btn":"btn btn-accent"} key={page}>{page}</button>)
                }
                <button onClick={handleNext} className="px-5 py-1 rounded-md bg-blue-500 text-white">Next</button>
            </div>
            
        </div>
    );
};

export default Apartment;