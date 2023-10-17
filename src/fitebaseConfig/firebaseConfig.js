// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChT5ITfA9u8M0FgaTYqXn9EENpluk2XBI",
  authDomain: "brand-shop-af581.firebaseapp.com",
  projectId: "brand-shop-af581",
  storageBucket: "brand-shop-af581.appspot.com",
  messagingSenderId: "374117957920",
  appId: "1:374117957920:web:a354cb7c73cd5441685745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth; 