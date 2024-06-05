import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMyApartment from "../../../hooks/useMyApartment";



const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]= useState("")
    const [transactionId,setTransactionId]=useState("")
    const [clientSecret,setClientSecret]=useState("")
    const axiosSecure = useAxiosSecure()

    const  [MyApartment]= useMyApartment()

    const rent =parseInt( MyApartment?.rent)




    useEffect(()=>{
        if(MyApartment){
            axiosSecure.post("/create-payment-intent",{price:rent})
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        }




    },[axiosSecure,rent,MyApartment])
    





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
                    rent:MyApartment?.rent,
                    paymentMonth:MyApartment?.paymentMonth
                }

                const res = await axiosSecure.post("/updatePayment",payment)

                console.log(res.data)

            }
        }




    }
    return (
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
    );
};

export default CheckOutForm;