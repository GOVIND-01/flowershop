import React, { Component } from 'react'
import './Sinup.css'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
  
  




  const provider = new GoogleAuthProvider();
const DisplayUser = () =>{
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(errorMessage)
    // ...
  });
console.log("clicked")
}





export const Googleauth=()=> {
 
    return (
      <div style={{display:"flex",columnGap:"20px"}}>
          <div>
          <button onClick={DisplayUser} type="button" class="login-with-google-btn" >
   Google Sign-In
</button>
          </div>
          <div>
          <button type="button" class="login-with-facebook-btn" >
 Facebook Sign-In
</button>
          </div>
        
      </div>
    )
  
}
