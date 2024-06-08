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
                <h1 className='text-2xl lg:text-4xl font-bold text-[#062760]'>Manage Users</h1>
            </div>


            <div>

            <table className="table w-1/3 z-10 lg:w-9/12 mx-auto">
    {/* head */}
    <thead>
      <tr  className="border-2 border-black" >
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        users.map((item,index)=> <tr className="border-2 border-black" key={index}>
        <th>{item.name}</th>
        <td>{item.email}</td>
        <td>{item.role}</td>
        {item.role==="member"?<td><button onClick={()=>handleChangeMemberRole(item._id)} className="btn btn-xs text-white btn-error">Remove</button></td>:<td>{item.role}</td>}

      </tr>)
      }
     
    
    </tbody>
  </table>

            </div>

            
            
        </div>
    );
};

export default ManageUsers;