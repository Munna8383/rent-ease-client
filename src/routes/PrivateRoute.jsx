import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading}=(useAuth)
    const location = useLocation()
   

    if(loading){
        return <div className="flex min-h-screen items-center justify-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;