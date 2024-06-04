import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useMyApartment = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading}= useAuth()


    const {data:MyApartment,refetch}=useQuery({

        queryKey:["apartment"],
        enabled:!loading,
        queryFn:async()=>{

            const res = await axiosSecure.get(`/myApartment/${user?.email}`)
            return res.data
        }

    })

    return [MyApartment,refetch]
};

export default useMyApartment;