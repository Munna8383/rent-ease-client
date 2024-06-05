import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";




const stripePromise = loadStripe("pk_test_51PKz8fRrZdR2VRZ9WACG9hiVa4UQG0cIBtlzNWc553yYEUMeOtAcBk5gzqXqYPMqhqjH5On5cjqW1UwlTYyRCUhL00uBB3V12m")

const PaymentPage = () => {
    return (
       <div className="space-y-10">

<div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#062760]'>Checkout</h1>
            </div>

<div className="flex justify-center items-center">






<div className="w-[450px]">
    <Elements stripe={stripePromise}>

        <CheckOutForm></CheckOutForm>



    </Elements>
</div>

</div>
       </div>
    );
};

export default PaymentPage;

