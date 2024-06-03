import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {

    const {user,loading}=useAuth()
    const axiosSecure=useAxiosSecure()

    const {data:person,isLoading}=useQuery({
        queryKey:["role",user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/user/${user.email}`)

            return res.data
        }
    })
    
    return {person,isLoading}
};

export default useRole;