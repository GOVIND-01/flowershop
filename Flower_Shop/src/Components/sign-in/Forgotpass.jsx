import React from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {useNavigate} from "react-router-dom"

const firebaseConfig = {
  apiKey: "AIzaSyBfqqmZv7MBkJETNQfri9U8lv2wxl05H7U",
  authDomain: "flowerstore-492cd.firebaseapp.com",
  projectId: "flowerstore-492cd",
  storageBucket: "flowerstore-492cd.appspot.com",
  messagingSenderId: "70805200129",
  appId: "1:70805200129:web:53def067e0873a5e068f00",
  measurementId: "G-L3NR19PTBL"
};
const app = initializeApp(firebaseConfig);


function Forgotpass() {
  const navigate = useNavigate()
    const auth = getAuth();
    let textInput = React.createRef()
    const Handleuserpass=(e)=>{
        const  email = textInput.current.value;
        console.log(email)
        sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent!") 
    navigate("/signin")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
        }
  return (
   
    <div>
        <h2>
Enter Your Email Address !
        </h2>
        <input  type="text" ref={textInput} />
        <button onClick={Handleuserpass}>Reset Password</button>
    </div>
  )
 
}

export default Forgotpass