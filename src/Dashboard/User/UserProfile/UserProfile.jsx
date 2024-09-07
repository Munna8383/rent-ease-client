import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
    const {user}=useAuth()
    return (
       <div>

        
<div className='text-center mt-10'>
                <h1 className='text-3xl font-bold text-gray-500 '>User Profile</h1>
            </div>


<div className="flex justify-center items-center mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar w-full ">
  <div className="w-40 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL} />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.displayName}</h2>
    <p className="text-lg">Email: {user?.email}</p>
    <p className="text-lg">Agreement Accept Date: None</p>
    <p className="text-lg">Apartment Info: None</p>
    <p className="text-lg">Floor: None</p>
    <p className="text-lg">Block Number: None</p>
    <p className="text-lg">Room Number: None</p>
    
  </div>
</div>
            
        </div>



       </div>
    );
};

export default UserProfile;


