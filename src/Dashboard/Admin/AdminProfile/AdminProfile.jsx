/* eslint-disable no-unused-vars */
import { MdHouse } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { PieChart, Pie, Cell, Legend } from 'recharts';



 



const AdminProfile = () => {



    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
   


    const {data}=useQuery({
        queryKey:["adminProfile"],
        queryFn:async()=>{
            const res = await axiosSecure.get("/adminProfile")

            return res.data
        }
    })

      
   
   

    const data1 = [{name:"Total Room",value:data?.totalRoom},{name:"Available Room",value:data?.availableRoom}]
    const data2 = [{name:"Total Room",value:data?.totalRoom},{name:"Unavailable Room",value:data?.unavailableRoom}]


    const COLORS = ['#0088FE', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        // eslint-disable-next-line no-unused-vars
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

    }

 






    return (
        <div>


            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
             <div className="flex items-center space-x-2 shadow-2xl bg-slate-300  rounded-xl w-64 lg:w-72 h-32">

                <div>
               <img className="h-32" src={user?.photoURL} alt="" />
                </div>
                <div className=" text-base space-y-7">

                    <h1>{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                
                </div>

             </div>
             <div className="flex gap-3 items-center justify-center bg-red-300 p-5 rounded-xl w-64 lg:w-72 h-32">

                <div className=" text-center  text-7xl">
                <MdHouse />
                </div>
                <div className=" text-2xl text-center">

                    <h1>{data?.totalRoom}</h1>
                    <h1>Total Room</h1>
                
                </div>

             </div>
             <div className="flex gap-3 items-center justify-center bg-orange-200 p-5 rounded-xl w-64 lg:w-72 h-32">

                <div className=" text-center  text-7xl">
                <MdEventAvailable />
                </div>
                <div className=" text-2xl text-center">

                    <h1>{data?.availableRoom}</h1>
                    <h1>Available Room</h1>
                
                </div>

             </div>
             <div className="flex gap-3 items-center justify-center bg-lime-300 p-5 rounded-xl w-64 lg:w-72 h-32">

                <div className=" text-center  text-7xl">
                <CgUnavailable />
                </div>
                <div className=" text-2xl text-center">

                    <h1>{data?.unavailableRoom}</h1>
                    <h1>Unavailable Room</h1>
                
                </div>

             </div>
             <div className="flex gap-3 items-center justify-center bg-indigo-300 p-5 rounded-xl w-64 lg:w-72 h-32">

                <div className=" text-center  text-7xl">
                <FaUser />
                </div>
                <div className=" text-2xl text-center">

                    <h1>{data?.user}</h1>
                    <h1>user</h1>
                
                </div>

             </div>
             <div className="flex gap-3 items-center justify-center bg-fuchsia-300 p-5 rounded-xl w-64 lg:w-72 h-32">

                <div className="h-50 text-center  text-7xl">
                <FaUserCheck />
                </div>
                <div className="h-50 text-2xl text-center">

                    <h1>{data?.member}</h1>
                    <h1>Member</h1>
                
                </div>

             </div>
            </div>



          <div className=" md:hidden lg:flex justify-between">
          <div>
            <PieChart width={400} height={270}>
                        <Pie
                            data={data1}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data1?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
            </div>
            <div>
            <PieChart width={400} height={270}>
                        <Pie
                            data={data2}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data2?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
            </div>
          </div>







        </div>
           
          
    );
};

export default AdminProfile;