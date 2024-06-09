import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const PaymentHistory = () => {

    const [data,setData]=useState([])
    const axiosSecure = useAxiosSecure()
    const {user}=useAuth()
    const [searchText,setSearchText]=useState("")


    const handleSearch=e=>{
        e.preventDefault()

        const input = e.target.search.value
  
        setSearchText(input)



    }


    useEffect(()=>{


        axiosSecure.get(`/paymentHistory?email=${user?.email}&search=${searchText}`)
        .then(res=>{

            setData(res.data)
        })


    },[axiosSecure,user?.email,searchText])



    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#062760]'>Payment History</h1>
            </div>

            <div className="flex justify-center mt-10">
                <form onSubmit={handleSearch}>
                <input type="text" name="search" placeholder="Search By Month Eg:Feb" className="input input-bordered input-info " />
                <button type="submit" className="btn btn-md ml-2 btn-primary">Search</button>
                </form>
            </div>


            <div className="mt-10">


            <div className="overflow-auto rounded-lg shadow-xl">
  <table className="w-full">
    {/* head */}
    <thead className="bg-gray-50 border-2 border-gray-200">
      <tr>
        <th  className="p-3 text-sm font-semibold tracking-wide text-left"></th>
        <th  className="p-3 text-sm font-semibold tracking-wide text-left">Rent</th>
        <th  className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
        <th  className="p-3 text-sm font-semibold tracking-wide text-left">Transaction ID</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">

        {

            data?.map((item,index)=> <tr key={index}>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index+1}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.rent}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.paymentMonth}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item?.transactionId}</td>
          </tr>)
        }
      {/* row 1 */}
     
    </tbody>
  </table>
</div>



            </div>
        </div>
    );
};

export default PaymentHistory;