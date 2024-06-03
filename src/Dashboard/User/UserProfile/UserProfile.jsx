import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
    const {user}=useAuth()
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
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
    );
};

export default UserProfile;