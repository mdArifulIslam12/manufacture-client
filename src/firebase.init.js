// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUB81PT1io2fCt409q3V_NYSwV88kGjE",
  authDomain: "manufacture-computer-b8534.firebaseapp.com",
  projectId: "manufacture-computer-b8534",
  storageBucket: "manufacture-computer-b8534.appspot.com",
  messagingSenderId: "53554666551",
  appId: "1:53554666551:web:5cd47235d4d4c15771f3b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)

export default auth