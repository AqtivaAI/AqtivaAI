import app from "./firebase.js";

import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

// Register
export async function register(email,password){

 try{
  const user = await createUserWithEmailAndPassword(auth,email,password)
  alert("Account created")
  window.location="login.html"
 }
 catch(err){
  alert(err.message)
 }

}

// Login
export async function login(email,password){

 try{
  await signInWithEmailAndPassword(auth,email,password)
  window.location="../index.html"
 }
 catch(err){
  alert(err.message)
 }

}

// Logout
export function logout(){
 signOut(auth)
}
