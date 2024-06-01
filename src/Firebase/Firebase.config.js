// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket:  import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId:  import.meta.env.APP_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBee2grz09NOcHenLLX5O9C6ue_iBQXglk",
//   authDomain: "rent-ease-2de9a.firebaseapp.com",
//   projectId: "rent-ease-2de9a",
//   storageBucket: "rent-ease-2de9a.appspot.com",
//   messagingSenderId: "258566728572",
//   appId: "1:258566728572:web:133e5f940442230e12d2f9"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app