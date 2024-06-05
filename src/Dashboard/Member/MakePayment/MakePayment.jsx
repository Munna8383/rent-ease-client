import ReactDatePicker from "react-datepicker";
import useMyApartment from "../../../hooks/useMyApartment";
import { useState } from "react";
import moment from "moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const MakePayment = () => {
    const [MyApartment]=useMyApartment()
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useAuth()
    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()


    const handlePaymentDate = e=>{

        e.preventDefault()

        const  foundDate = moment(startDate).format("MMM Do YY");
        const paidMonth = {paymentMonth:foundDate}

        axiosSecure.put(`/paymentMonth/${user?.email}`,paidMonth)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount===1 ||res.data.matchedCount===1){
                navigate("/dashboard/paymentPage")
            }
        })
    }

    return (
            <div>

                <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#062760]'>Make Payment</h1>
            </div>

            <div className="card w-full lg:w-2/4 mx-auto bg-base-300 shadow-xl mt- 5 flex justify-center p-5 mt-5">

                <form className="grid lg:grid-cols-2 gap-2" onSubmit={handlePaymentDate}>

                    <div  className="form-control lg:col-span-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={MyApartment?.email} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Floor</span>
                        </label>
                        <input type="text" defaultValue={MyApartment?.floor} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Block</span>
                        </label>
                        <input type="text" defaultValue={MyApartment?.block} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Apartment</span>
                        </label>
                        <input type="text" defaultValue={MyApartment?.apartment} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Room Number</span>
                        </label>
                        <input type="text" defaultValue={MyApartment?.room} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rent</span>
                        </label>
                        <input type="text" defaultValue={MyApartment?.rent} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Change Date Date</span>
                                    </label>
                                    <ReactDatePicker className="w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>


        <div className="form-control mt-6 lg:col-span-2">
        <button type="submit" className="text-white w-full mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Make Payment</button>
        </div>
                   

                

                </form>

            </div>


            
        </div>
    );
};

export default MakePayment;