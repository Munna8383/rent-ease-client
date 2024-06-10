import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


// eslint-disable-next-line react/prop-types
const MemberRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useAuth()
    const {person,isLoading}=useRole()


    if(loading || isLoading){
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user && person?.role==="member") {
        return children;
    }


    return <Navigate state={location.pathname} to={"/"}></Navigate>
   
};

export default MemberRoute;