import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMyApartment from "../../../hooks/useMyApartment";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]= useState("")
    const [transactionId,setTransactionId]=useState("")
    const [clientSecret,setClientSecret]=useState("")
    const axiosSecure = useAxiosSecure()
    const [couponCode,setCouponCode]=useState(null)
    const [discountedRent,setDiscountedRent]=useState(null)
    const navigate = useNavigate()



    const  [MyApartment]= useMyApartment()

    const rent =parseInt( MyApartment?.rent)
    const intDiscount = parseInt(discountedRent)

    console.log(couponCode)


    
    const handleDiscount=()=>{


      axiosSecure.get(`/getDiscount?code=${couponCode}&email=${MyApartment?.email}`)
      .then(res=>{
        if(res.data.discount){

          setDiscountedRent(MyApartment?.rent-res.data.discount)
        }

        if(res.data.message){
          toast.error("Enter Valid Coupon")
        }
      })
      
    }




    useEffect(()=>{
        if(MyApartment || intDiscount){
            axiosSecure.post("/create-payment-intent",intDiscount?{price:intDiscount}:{price:rent})
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        }




    },[axiosSecure,rent,MyApartment,intDiscount])


    





    const handleSubmit = async(e)=>{

        e.preventDefault()

        if(!stripe||!elements){


            return

        }

        const card = elements.getElement(CardElement)

        if(card===null){
            return
        }

        // eslint-disable-next-line no-unused-vars
        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type:"card",
            card
        })

        if(error){
           
            setError(error.message)
        }else{
            setError("")
        }

        const {paymentIntent,error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
              card:card,
              billing_details:{
                email:MyApartment?.email || "anonymous",
                name:MyApartment?.email || "anonymous"
              }
            }
          })

        if(confirmError){
            console.log("confirm error",confirmError)
        }else{
           
            if(paymentIntent.status==="succeeded"){
                setTransactionId(paymentIntent.id)

                const payment = {
                    name:MyApartment?.name,
                    email:MyApartment?.email,
                    transactionId:paymentIntent.id,
                    rent:intDiscount?intDiscount:MyApartment?.rent,
                    paymentMonth:MyApartment?.paymentMonth
                }

                const res = await axiosSecure.post("/updatePayment",payment)

                if(res.data.insertedId){
                  toast.success("payment Successful")

                  setTimeout(()=>{

                    navigate("/dashboard/paymentHistory")



                  },1000)
                }

            }
        }




    }
    return (
  <div>

    <div className="mb-10">
      <Toaster></Toaster>

     

    <div className="flex justify-center mt-10 ">
                
                <input type="text" onChange={(e)=>setCouponCode(e.target.value)}  placeholder="Enter Coupon Code" className="input input-bordered input-info " />
                <button disabled={discountedRent} onClick={handleDiscount} type="submit" className="btn btn-md ml-2 btn-primary">Apply</button>

              
           
            </div>
            <div className="text-center mt-5">

<h1 className="font-bold">Your Rent:<span className="text-green-700">{MyApartment?.rent}</span></h1>

<h1 className="font-bold"><span className="text-amber-600">Discounted Rent:</span>{discountedRent?discountedRent:"Apply Coupon to get discount"}</h1>

</div>





    </div>




<form className="space-y-6 bg-purple-300 p-10 rounded-xl" onSubmit={handleSubmit}>
            

            <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#00bfff',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                  <button  className="w-full mx-auto btn btn-success text-white" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                  </button>
            
                  <p className="text-red-700 mt-4">{error}</p>
            
                  {transactionId && <p className="text-green-700 mt-4">Payment Successful ! Transaction ID: {transactionId}</p>}
            
            
            
            
                    </form>
  </div>
    );
};

export default CheckOutForm;