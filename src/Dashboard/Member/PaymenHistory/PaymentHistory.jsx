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
                <input type="text" name="search" placeholder="Search By Month eg:Feb" className="input input-bordered input-info " />
                <button type="submit" className="btn btn-md ml-2 btn-primary">Search</button>
                </form>
            </div>


            <div className="mt-10">


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Rent</th>
        <th>Date</th>
        <th>Transaction ID</th>
      </tr>
    </thead>
    <tbody>

        {

            data?.map((item,index)=> <tr key={index}>
            <th>{index+1}</th>
            <td>{item?.rent}</td>
            <td>{item?.paymentMonth}</td>
            <td>{item?.transactionId}</td>
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