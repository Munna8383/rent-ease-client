import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import welcomeAni from "../../../public/welcomAni.json"


const Welcome = () => {

    const {user}=useAuth()
    return (
        <div className="mt-5 flex justify-center items-center text-center">
            <div className="space-y-5">
            <Lottie  className="h-[300px]" animationData={welcomeAni} loop={true} />
            <h1 className="text-3xl font-extrabold">Hello<span className="text-blue-700"> {user.displayName}!</span></h1>
              <h1 className="text-3xl font-bold">Welcome to the DASHBOARD</h1>
            </div>
            
        </div>
    );
};

export default Welcome;