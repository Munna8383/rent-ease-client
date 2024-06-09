import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";


const ManageAgreement = () => {

    const axiosSecure = useAxiosSecure()
    const  validDate = moment(new Date()).format("MMM Do YY");

    const acceptDate = {validDate:validDate}


    const {data:pendingApartment=[],refetch}=useQuery({
        queryKey:["PendingAgreement"],
        queryFn:async()=>{
          const res = await axiosSecure.get("/pendingApartment")

          return res.data
        }
    })

    const handleAccept=(email)=>{

        axiosSecure.put(`/acceptAgreement/${email}`,acceptDate)
        .then(res=>{

          console.log(res.data)

            if(res.data.acceptedResult.modifiedCount===1&&res.data.updateUserRole.modifiedCount===1){
                toast.success("accepted")
                refetch()
            }
        })



    }

    const handleReject=(email)=>{

        axiosSecure.put(`/rejectAgreement/${email}`)
        .then(res=>{

            if(res.data.modifiedCount===1){
                toast.success("rejected")
                refetch()
            }
        })



    }



    return (
        <div>
             <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#062760]'>Manage Agreements</h1>
            </div>

            <Toaster></Toaster>

            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
<div className="overflow-auto rounded-lg shadow-xl">
  <table className="w-full">
    <thead className="bg-gray-50 border-2 border-gray-200">
      <tr>
        <th className="p-3 text-sm font-semibold tracking-wide text-left"></th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Floor</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Block</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Rent</th> 
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Request Date</th>
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
      </tr>
    </thead> 
    <tbody className="divide-y divide-gray-100">

        {
            pendingApartment?.map((item,index)=>   <tr key={index}>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index+1}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.name}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.email}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.floor}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.block}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">${item.rent}</td> 
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.requestDate}</td>
            <td className="flex gap-2 p-3 text-sm text-gray-700 whitespace-nowrap "><button onClick={()=>handleAccept(item.email)} className="btn btn-xs text-white btn-success">Accept</button><button onClick={()=>handleReject(item.email)} className="btn btn-xs text-white btn-error">Reject</button></td>
          </tr>)
        }
    </tbody> 
  </table>
</div>
</div>


            
        </div>
    );
};

export default ManageAgreement;