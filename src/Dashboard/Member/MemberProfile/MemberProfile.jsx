import useAuth from "../../../hooks/useAuth";
import useMyApartment from "../../../hooks/useMyApartment";


const MemberProfile = () => {
    const { user } = useAuth()
    const [MyApartment] = useMyApartment()

    console.log(MyApartment)
    return (
        <div>

            <div className='text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-blue-500'>Member Profile</h1>
            </div>


         <div className="flex justify-center mt-5">
         <div className="card w-96 card-compact bg-gray-300 shadow-2xl">
                <figure><img src={user.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold">{user?.displayName}</h2>
                    <p className=" text-center text-lg font-semi-bold">{user?.email}</p>

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