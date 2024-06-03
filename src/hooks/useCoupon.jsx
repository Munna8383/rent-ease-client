
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCoupon = () => {

    const axiosSecure = useAxiosSecure()


    const {data:coupons,refetch,isLoading}=useQuery({

        queryKey:["coupons"],
        queryFn:async()=>{

            const res = await axiosSecure.get("/coupons")
            return res.data
        }

    })





    return [coupons,refetch,isLoading]
};

export default useCoupon;