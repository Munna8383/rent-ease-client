import toast, { Toaster } from "react-hot-toast";
import useAllUsers from "../../../hooks/useAllUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {

    const [users,refetch]= useAllUsers()

    const axiosSecure = useAxiosSecure()


    const handleChangeMemberRole=(id)=>{

        axiosSecure.patch(`/changeRole/${id}`)
        .then(res=>{

            if(res.data.modifiedCount===1){

                toast.success("role Changed")
                refetch()

            }
        })


        console.log(id)
    }

   
    return (
        <div className="space-y-5">
        <Toaster></Toaster>

<div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-500 '>Manage Users</h1>
            </div>


            <div className="overflow-auto rounded-lg shadow-lg">

            <table className="w-full">
    {/* head */}
    <thead className="bg-gray-50 border-2 border-gray-200">
      <tr>
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
        <th  className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
        <th  className="p-3 text-sm font-semibold tracking-wide text-left">Role</th>
        <th  className="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      {/* row 1 */}

      {
        users.map((item,index)=> <tr className="" key={index}>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.name}</td>
        <td  className="p-3 text-sm text-gray-700 whitespace-normal">{item.email}</td>
        <td  className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.role}</td>
        {item.role==="member"?<td  className="p-3 text-sm text-gray-700 whitespace-nowrap"><button onClick={()=>handleChangeMemberRole(item._id)} className="btn btn-xs text-white btn-error">Remove</button></td>:<td  className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.role}</td>}

      </tr>)
      }
     
    
    </tbody>
  </table>

            </div>

            
            
        </div>
    );
};

export default ManageUsers;