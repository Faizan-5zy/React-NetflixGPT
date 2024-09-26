// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvjZ_kAUnjo-280E43P_xsWlvVR6gYFbE",
  authDomain: "netflixgpt-6315d.firebaseapp.com",
  projectId: "netflixgpt-6315d",
  storageBucket: "netflixgpt-6315d.appspot.com",
  messagingSenderId: "919251442255",
  appId: "1:919251442255:web:2f2265db30fa25e5a4e83a",
  measurementId: "G-P1SQCXW4PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
