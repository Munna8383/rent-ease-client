import loginImage from "../../assets/Login/12953573_Data_security_05.jpg"
import { useForm } from "react-hook-form"
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import {FaEye,FaEyeSlash} from "react-icons/fa"
import { Helmet } from "react-helmet-async";






const Login = () => {
    const {login}= useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword,setShowPassword]=useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const email = data.email
        const password = data.password

        login(email,password)
        .then(() => {

            toast.success('Logged In Successfully')
        
            setTimeout(()=>{
                navigate(location?.state || "/")
            },2000)
        
          })
          .catch(()=>{
            toast.error("Incorrect username or password")
          })

    }
    return (
        <div className="p-20 w-11/12 mx-auto">
             <Toaster></Toaster>
             <Helmet>
                <title>Login || Rent Ease</title>
            </Helmet>


            <div className=" lg:flex mt-10 bg-gray-200 shadow-2xl">

                <div className="hidden lg:block lg:w-1/2 h-full">

                    <img src={loginImage} />

                </div>


                <div className="w-full lg:w-1/2 p-5">
                    <div className='text-center mt-5'>
                        <h1 className='text-3xl font-bold text-black'>Sign In</h1>
                    </div>
                    <div>
                        <form className="space-y-2 lg:space-y-5 w-full mt-10" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" className="input input-bordered" placeholder="Email" {...register("email", {
                                    required: {
                                        value: true,
                                        message: "This field is required"
                                    }
                                })} />

                                {errors.email && <span className="text-red-900 ml-2">{errors.email.message}</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword? "text":"password"} className="input input-bordered" placeholder="Email" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "This field is required"
                                    }
                                })} />
                                 <span className="absolute bottom-4  right-10" onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                            }
                        </span>

                                {errors.password && <span className="text-red-900 ml-2">{errors.password.message}</span>}
                            </div>


                            <button type="submit" className="text-white w-full mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        </form>
                        <SocialLogin></SocialLogin>
                        <div className="text-center mt-3">
                            
                        <span className="text-lg">Do Not Have Any Account? <Link to={"/register"} className="text-blue-500">Register</Link></span>
                        </div>
                    </div>


                </div>





            </div>

        </div>
    );
};

export default Login;