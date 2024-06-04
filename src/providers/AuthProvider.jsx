import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";






export const AuthContext =createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const axiosPublic = useAxiosPublic()

    const [loading , setLoading] = useState(true)


    const [user,setUser]=useState(null)

   const createUser = (email,password)=>{

    setLoading(true)

    return createUserWithEmailAndPassword(auth,email,password)
   }

   const updatePhotoAndName = (name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
   }

   const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

    const googleLogin = ()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
    }


    const logout = ()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser =>{

            setUser(currentUser)

            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPublic.post("/jwt",userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem("access-token",res.data.token)
                    }
                })

            }else{
                localStorage.removeItem("access-token")

            }
            setLoading(false)

        });

        return ()=>{
            unsubscribe()
        }


    },[axiosPublic])



    const authInfo={loading,user,createUser,updatePhotoAndName,login,googleLogin,logout}
    return (
        <div>

<AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;