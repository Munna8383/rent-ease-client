import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddAnnouncement = () => {

    const axiosSecure = useAxiosSecure()

    const handleAnnouncement=e=>{

        e.preventDefault()

        const title = e.target.title.value;
        const description = e.target.description.value

        const announcement = {title,description}

        axiosSecure.post("/addAnnouncement",announcement)
        .then(res=>{
            if(res.data.insertedId){

                toast.success("announcement added successfully")
                e.target.reset()

            }
        })
    }




    return (
        <div className="space-y-5">
            <Toaster></Toaster>
<div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-500 '>Add Announcement</h1>
            </div>

            <div className="md:flex justify-center items-center gap-10">

                <div className="hidden md:block">

                    <img className="w-60" src="https://i.imghippo.com/files/X2QeT1725256334.png"/>

                </div>


                <div className="flex-1">

                    <form onSubmit={handleAnnouncement} className="w-full">

                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                            </div>
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name="description" placeholder="Add Description" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                            <button type="submit" className="text-white w-full mt-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                            </div>



                        

                    </form>


                </div>




            </div>
            
        </div>
    );
};

export default AddAnnouncement;