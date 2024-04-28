// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ZfkjB2VJnfGPeYguZoOi-9JibPu4zBU",
  authDomain: "r-tourist.firebaseapp.com",
  projectId: "r-tourist",
  storageBucket: "r-tourist.appspot.com",
  messagingSenderId: "206907742561",
  appId: "1:206907742561:web:10a45436c4ae76e3f0cd20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
