import Lottie from "lottie-react";
import erroranimation from "../../../public/error.json"
import { Helmet } from "react-helmet-async";

const Error = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
             <Helmet>
                <title>Error || Rent Ease</title>
            </Helmet>

<Lottie  className="" animationData={erroranimation} loop={true} />
            
        </div>
    );
};

export default Error;