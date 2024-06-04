import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCoupon from "../../../hooks/useCoupon";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import moment from "moment";


const ManageCoupons = () => {
    const [startDate, setStartDate] = useState(new Date());

    const axiosSecure = useAxiosSecure()
    const [coupons,refetch,isLoading]= useCoupon()


  
      

    const handleSubmit=e=>{

        e.preventDefault()

        const code = e.target.code.value
        const percentage= parseInt(e.target.percentage.value)
        const description= e.target.description.value
        const  validDate = moment(startDate).format("MMM Do YY");


        const coupon = {code,percentage,description,validDate}

        axiosSecure.post("/addCoupons",coupon)
        .then(res=>{
            if(res.data.insertedId){

                toast.success("coupon added")
                e.target.reset()
                refetch()

            }
        })

        console.log(validDate)



    }
    return (
        <div className="space-y-5">
            <Toaster></Toaster>

            <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-blue-500'>Manage Coupons</h1>
            </div>

            <div className="flex justify-center">
                <div>
                    <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Add Coupons</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <div className="text-center text-xl font-bold my-3">
                                <h1>Add Coupons</h1>
                            </div>
                            <form onSubmit={handleSubmit}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Coupon Code</span>
                                    </label>
                                    <input type="text" name="code"  placeholder="Enter Code" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Percentage</span>
                                    </label>
                                    <input type="number" name="percentage"  placeholder=" Enter Percentage" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name="description"  placeholder=" Enter Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select Date</span>
                                    </label>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>

                                <div className="form-control mt-6">
                            <button type="submit" className="text-white w-full mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                            </div>
                           



                            </form>

                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>


            <div className="space-y-3">

                <div className="text-center">
                    <h2 className="text-lg font-bold">All Coupons</h2>
                </div>

                <div>

                    <div className="flex justify-center">

                        {isLoading&&<span className="loading loading-bars loading-lg"></span>}

                    </div>


                    <div className="overflow-x-auto ">
  <table className="table w-auto mx-auto">
    {/* head */}
    <thead>
      <tr  className="border-2 border-black" >
        
      <th>Code</th>
        <th>Percentage</th>
        
        <th>Description</th>
        <th>Validity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        coupons?.map((item,index)=> <tr className="border-2 border-black" key={index}>
        
        <td>{item.code}</td>
        <td>{item.percentage}%</td>
        <td>{item.description}</td>
        <td>{item?.validDate}</td>
        <td><Link to={`/dashboard/changeCoupon/${item._id}`}>Change Validity</Link></td>
        
      </tr>)
      }
     
    
    </tbody>
  </table>
</div>







                </div>




            </div>

        </div>
    );
};

export default ManageCoupons;