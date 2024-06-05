import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import useMyApartment from "../../hooks/useMyApartment";



const Apartment = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const {count} = useLoaderData()
    const [currentPage,setCurrentPage]=useState(0)
    const itemPerPage = 6
    const numberOfPage = Math.ceil(count/itemPerPage)

    const pages = [...Array(numberOfPage).keys()]

    const [MyApartment,refetch] = useMyApartment()



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

<div className='text-center'>
                <h1 className='text-4xl font-bold text-blue-500'>Explore Our Apartments</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    apartment.map((item,index)=><div key={index} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                            <img className="p-8 h-[300px] w-full rounded-t-lg" src={item.apartment_image} alt="product image" />
                        
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
                                <button disabled={MyApartment} onClick={()=>handleAgreement(item)} className="text-white  mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 font-bold text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agreement</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

            <div className="flex justify-center space-x-5 mt-5">
                <button onClick={handlePrevious} className="btn btn-warning">Previous</button>
                {
                    pages.map(page=><button onClick={()=>setCurrentPage(page)} className={currentPage===page?" btn-primary btn":"btn btn-accent"} key={page}>{page}</button>)
                }
                <button onClick={handleNext} className="btn btn-warning">Next</button>
            </div>
            
        </div>
    );
};

export default Apartment;