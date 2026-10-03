// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQSpAmFNLA3wk9UGO6OOPseK1YH3KY7is",
  authDomain: "summarist-advinternship.firebaseapp.com",
  projectId: "summarist-advinternship",
  storageBucket: "summarist-advinternship.firebasestorage.app",
  messagingSenderId: "319248425174",
  appId: "1:319248425174:web:81270c5425532389d12977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
