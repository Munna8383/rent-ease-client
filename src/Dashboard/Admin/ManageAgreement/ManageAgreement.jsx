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
<div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Email</th> 
        <th>Floor</th> 
        <th>Block</th> 
        <th>Rent</th> 
        <th>Request Date</th>
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>

        {
            pendingApartment?.map((item,index)=>   <tr key={index}>
            <th>{index+1}</th> 
            <td>{item.name}</td> 
            <td>{item.email}</td> 
            <td>{item.floor}</td> 
            <td>{item.block}</td> 
            <td>${item.rent}</td> 
            <td>{item.requestDate}</td>
            <td className="flex gap-2"><button onClick={()=>handleAccept(item.email)} className="btn btn-xs text-white btn-success">Accept</button><button onClick={()=>handleReject(item.email)} className="btn btn-xs text-white btn-error">Reject</button></td>
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