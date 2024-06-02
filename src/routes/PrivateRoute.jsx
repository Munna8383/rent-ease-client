
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation()
   
    const {user,loading}=useAuth()
    if(loading){
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user){
        return children
    }else{
       return <Navigate state={location.pathname} to={"/login"}></Navigate>

    }
   
};

export default PrivateRoute;