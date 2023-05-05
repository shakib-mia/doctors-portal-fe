// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtHiHl2jOG7pUvI-TYNz-XGXMzsFZot00",
    authDomain: "doctors-portal-32b75.firebaseapp.com",
    projectId: "doctors-portal-32b75",
    storageBucket: "doctors-portal-32b75.appspot.com",
    messagingSenderId: "674189276714",
    appId: "1:674189276714:web:8973f51b719a0e91bfb553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app