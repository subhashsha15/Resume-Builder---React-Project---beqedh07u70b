// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCn-B_gE0pdUYv0oLCQgqC7KDqlP1ZirBA",
  authDomain: "portfolio-builder-6d9d5.firebaseapp.com",
  projectId: "portfolio-builder-6d9d5",
  storageBucket: "portfolio-builder-6d9d5.appspot.com",
  messagingSenderId: "42445420147",
  appId: "1:42445420147:web:b5122977c47ac0acfa9c06",
  measurementId: "G-430MM5844T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export {auth,provider};