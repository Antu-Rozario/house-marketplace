// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWUKjiV39s3yk1F3nocJc87d9ibtd7F3A",
  authDomain: "house-marketplace-609a2.firebaseapp.com",
  projectId: "house-marketplace-609a2",
  storageBucket: "house-marketplace-609a2.appspot.com",
  messagingSenderId: "498233773800",
  appId: "1:498233773800:web:f280c498971c384402435d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();