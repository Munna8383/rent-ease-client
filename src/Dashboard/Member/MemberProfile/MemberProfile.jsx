import useAuth from "../../../hooks/useAuth";
import useMyApartment from "../../../hooks/useMyApartment";


const MemberProfile = () => {
    const {user}=useAuth()
    const [MyApartment]= useMyApartment()

    console.log(MyApartment)
    return (
        <div>

       <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-blue-500'>Member Profile</h1>
            </div>


            <div className="mt-16 flex justify-center gap-5">

                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <h1 className="text-center font-bold text-2xl text-blue-500 mb-5">My Profile</h1>
                        <div className="avatar w-full ">
                            <div className="w-40 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user?.displayName}</h2>
                            <p className="text-lg">Email: {user?.email}</p>

                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                <h1 className="text-center font-bold text-2xl text-blue-500 mb-5">My Apartment</h1>
                <div className="card-body">
                              
                <p className="text-base">Agreement Accept Date: <span className="font-bold">{MyApartment?.acceptedDate}</span></p>
                            <p className="text-base">Apartment No: <span className="font-bold">{MyApartment?.apartment}</span></p>
                            <p className="text-base">Apartment Floor: <span className="font-bold">{MyApartment?.floor}</span></p>
                            <p className="text-base">Apartment Block: <span className="font-bold">{MyApartment?.block}</span></p>
                            <p className="text-base">Apartment Room Number: <span className="font-bold">{MyApartment?.room}</span></p>
                            <p className="text-base">Apartment Rent: <span className="font-bold">{MyApartment?.rent}</span></p>

                        </div>



                </div>



            </div>
            
        </div>
    );
};

export default MemberProfile;