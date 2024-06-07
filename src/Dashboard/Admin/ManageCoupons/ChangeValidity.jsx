import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";


const ChangeValidity = () => {
    const {id}=useParams()
  const  axiosSecure = useAxiosSecure()
  const [data,setData]= useState(null)
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate()

    useEffect(()=>{

        axiosSecure.get(`/singleCoupon/${id}`)
        .then(res=>{

            setData(res.data)

        })


    },[axiosSecure,id])

    console.log(data)

    const handleUpdateValidity=e=>{
        e.preventDefault()


        const  validDate = moment(startDate).format("MMM Do YY");
        const newDate = {validDate:validDate}

        axiosSecure.patch(`/coupon/${id}`,newDate)
        .then(res=>{
            if(res.data.modifiedCount===1){

                toast.success("change Successfully")

                setTimeout(()=>{
                    navigate("/dashboard/manageCoupons")
                },2000)



            }
        })

        
    }
    return (
        <div>
            <Toaster></Toaster>

            
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-[#062760]'>Change Validity</h1>
            </div>

            <div>
            <form onSubmit={handleUpdateValidity} className="w-full">

        <div className="form-control">
            <label className="label">
                <span className="label-text">Code</span>
            </label>
            <input type="text" readOnly defaultValue={data?.code} className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Percentage</span>
            </label>
            <input type="text" readOnly defaultValue={data?.percentage} className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Description</span>
            </label>
            <input type="text" readOnly defaultValue={data?.description} className="input input-bordered" required />
        </div>

        <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Change Date Date</span>
                                    </label>
                                    <ReactDatePicker className="w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>


        <div className="form-control mt-6">
        <button type="submit" className="text-white w-full mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change</button>
        </div>



    

</form>
            </div>
            
        </div>
    );
};

export default ChangeValidity;