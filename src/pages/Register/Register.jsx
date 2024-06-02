
import registerImage from "../../assets/Register/AdobeStock_787093393_Preview.jpeg"
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const {createUser,updatePhotoAndName,logout}=useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        const email = data.email
        const password= data.password
        const name=data.name
        const photo = data.photo


        
        createUser(email,password)
        .then(()=>{
            updatePhotoAndName(name,photo)
            .then(()=>{
                toast.success('Registered Successfully')
                logout()


                setTimeout(()=>{
                       navigate("/login")
                       
                },2000)
            })
        })





    }
    return (
        <div className="p-20 w-11/12 mx-auto">
            <Toaster></Toaster>


        <div className=" lg:flex items-center mt-10 bg-gray-200 shadow-2xl">

            <div className="hidden lg:block lg:w-1/2">

                <img className=" h-full" src={registerImage} />

            </div>


            <div className="w-full lg:w-1/2 px-5">
                <div className='text-center mt-2'>
                    <h1 className='text-3xl font-bold text-black'>Sign Up</h1>
                </div>
                <div>
                    <form className=" w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" className="input input-bordered" placeholder="Your Name" {...register("name", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })} />

                            {errors.name && <span className="text-red-900 ml-2">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" className="input input-bordered" placeholder="Your Name" {...register("photo", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })} />

                            {errors.photo && <span className="text-red-900 ml-2">{errors.photo.message}</span>}
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered" placeholder="Email" {...register("password", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                minLength:{
                                    value:8,
                                    message:"The minimum input is 8"
                                },
                                pattern:{
                                    value:/^(?=.*[A-Z])(?=.*\d).+$/,
                                    message:"Minimum one capital letter and a number"
                                }
                            })} />

                            {errors.password && <span className="text-red-900 ml-2">{errors.password.message}</span>}
                        </div>


                        <button type="submit" className="text-white w-full mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>


            </div>





        </div>

    </div>
    );
};

export default Register;