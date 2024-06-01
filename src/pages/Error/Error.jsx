import Lottie from "lottie-react";
import erroranimation from "../../../public/error.json"

const Error = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">

<Lottie  className="" animationData={erroranimation} loop={true} />
            
        </div>
    );
};

export default Error;